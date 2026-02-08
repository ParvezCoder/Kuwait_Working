import { queryDB } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { username, oldPassword, newPassword } = req.body;
  const encodedPassword = Buffer.from(newPassword).toString('base64');

  console.log("🔹 Received Request:", { username, oldPassword, newPassword });

  // Check if oldPassword or newPassword is missing
  if (!username || !oldPassword || !newPassword) {
    console.log("❌ Missing fields!");
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Fetch user from database
    const result = await queryDB(
      "SELECT * FROM [ACM].[USER_MST] WHERE LOGIN_ID = @username AND USER_TYPE = 1",
      { username }
    );

    console.log("🔹 Database Query Result:", result.recordset);

    if (result.recordset.length === 0) {
      console.log("❌ User not found in database!");
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const user = result.recordset[0]; // Extract user object

    const encodedPassword1 = Buffer.from(oldPassword).toString('base64');
    console.log("🔹 Stored Password in DB:", `"${user.PASSWORD}"`);
    console.log("🔹 Entered Old Password:", `"${oldPassword}"`);


    // Ensure passwords are strings before comparing
    if (String(encodedPassword1).trim() !== String(user.PASSWORD).trim()) {
      console.log("❌ Password does not match!");
      return res.status(401).json({ success: false, message: "Old password is incorrect" });
    }

    console.log("✅ Old password verified successfully!");

    // Update password in database
    await queryDB(
      "UPDATE [ACM].[USER_MST] SET PASSWORD = @encodedPassword WHERE LOGIN_ID = @username AND USER_TYPE = 1",
      { encodedPassword, username }
    );

    console.log("✅ Password successfully updated!");
    return res.status(200).json({ success: true, message: "Password updated successfully" });

  } catch (error) {
    console.error("❌ Database Error:", error);
    return res.status(500).json({ success: false, message: "Database error", error: error.message });
  }
}