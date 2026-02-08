import { queryDB } from "../../lib/db";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      // Fetch all admins (excluding passwords for security)
      const query = "SELECT LOGIN_ID, EMAILAddress, NAME1 FROM [ACM].[USER_MST] WHERE USER_TYPE = 1";
      const result = await queryDB(query);
      return res.status(200).json(result.recordset);
    }

    // if (req.method === "POST") {
    //   const { username, email, password } = req.body;

    //   if (!username || !email || !password) {
    //     return res.status(400).json({ error: "All fields are required" });
    //   }

    //   // Encode the password using Base64
    //   const encodedPassword = Buffer.from(password).toString('base64');

    //   // Insert new admin
    //   const insertQuery = `
    //     INSERT INTO [ACM].[USER_MST] 
    //     (LOGIN_ID, EMAILAddress, PASSWORD, USER_TYPE, NAME1, ACTIVE_FLAG) 
    //     VALUES ('${username}', '${email}', '${encodedPassword}', 5, '${username}', '1')
    //   `;
    //   await queryDB(insertQuery);

    //   return res.status(201).json({ message: "Admin added successfully" });
    // }

    // if (req.method === "PUT") {
    //   const { id, email, password } = req.body;

    //   if (!id || !email || !password) {
    //     return res.status(400).json({ error: "Missing required fields" });
    //   }

    //   // Encode the password using Base64
    //   const encodedPassword = Buffer.from(password).toString('base64');

    //   // Update admin details
    //   const updateQuery = `
    //     UPDATE [ACM].[USER_MST] 
    //     SET EMAILAddress = '${email}', PASSWORD = '${encodedPassword}' 
    //     WHERE LOGIN_ID = '${id}' AND USER_TYPE = 5
    //   `;
    //   await queryDB(updateQuery);

    //   return res.status(200).json({ message: "Admin updated successfully" });
    // }

    // if (req.method === "DELETE") {
    //   const { id } = req.query;

    //   if (!id) {
    //     return res.status(400).json({ error: "Admin ID is required" });
    //   }

    //   // Delete admin by LOGIN_ID
    //   const deleteQuery = `DELETE FROM [ACM].[USER_MST] WHERE LOGIN_ID = '${id}' AND USER_TYPE = 5`;
    //   await queryDB(deleteQuery);

    //   return res.status(200).json({ message: "Admin deleted successfully" });
    // }

    res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}