import { queryDB } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  console.log("🔹 Verify Password Request:", { username, password });
  const encodedPassword = Buffer.from(password).toString('base64');

  if (!username || !password) {
    console.log("❌ Missing fields!");
    return res.status(400).json({ success: false, message: "Username and password are required." });
  }

  try {
    // Fetch admin user from database
    const result = await queryDB(
      "SELECT * FROM [ACM].[USER_MST] WHERE LOGIN_ID = @username AND USER_TYPE = 1",
      { username }
    );

    console.log("🔹 Database Query Result:", result.recordset);

    if (result.recordset.length === 0) {
      console.log("❌ Admin user not found!");
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const user = result.recordset[0];

    console.log("🔹 Stored Password:", `"${user.PASSWORD}"`);
    console.log("🔹 Entered Password:", `"${password}"`);

    // Compare passwords
    if (String(encodedPassword).trim() !== String(user.PASSWORD).trim()) {
      console.log("❌ Password verification failed!");
      return res.status(401).json({ success: false, message: "Password is incorrect" });
    }

    console.log("✅ Password verified successfully!");
    return res.status(200).json({ success: true, message: "Password verified successfully" });

  } catch (error) {
    console.error("❌ Database Error:", error);
    return res.status(500).json({ success: false, message: "Database error", error: error.message });
  }
}