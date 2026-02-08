import { queryDB } from "../../lib/db";

export default async function handler(req, res) {
  const tenentId = 1; // Fixed TenantID

  if (req.method === "GET") {
    // Fetch all images
    const query = `
      SELECT ImageID as id, ImageName as name, ImagePath as path, 
             ImageDescription as description, ImageCategory as category
      FROM [dbo].[TABLEIMAGE] 
      WHERE TenantID = ${tenentId}
    `;

    try {
      console.log("Executing query:", query); // Debugging line

      const result = await queryDB(query);
      console.log("Query result:", result); // Debugging line

      return res.status(200).json(result.recordset);
    } catch (error) {
      console.error("Database error:", error); // Debugging line
      return res.status(500).json({ error: "Failed to fetch images", details: error.message });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    console.log("Received ID:", id); // Debugging step
  
    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }
  
    const query = `
      DELETE FROM [dbo].[TABLEIMAGE] 
      WHERE MyImagesAutoGenID = ${id}
    `;
  
    try {
      console.log("Executing Query:", query); // Debugging step
      await queryDB(query);
      return res.status(200).json({ message: "Image deleted" });
    } catch (error) {
      console.error("Delete error:", error);
      return res.status(500).json({ error: "Failed to delete Image", details: error.message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" }); // Handle other HTTP methods
}
