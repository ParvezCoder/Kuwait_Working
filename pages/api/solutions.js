import { queryDB } from "../../lib/db";

export default async function handler(req, res) {
  const tenentId = 1; // Fixed TenantID
  const websiteId = 2; // Solutions

  if (req.method === "GET") {
    // Fetch all solutions
    const query = `
      SELECT MyWebSiteAutoGenID as id, WebSiteShortName as title, 
             ArabicHTML
 as description, EnglishHTML as filePath, 
             IMAGEID, ELECTRONICFORM1URL as formUrl
      FROM [dbo].[WEBSITECONTENT] 
      WHERE TenentID = ${tenentId} AND WebSiteID = ${websiteId} AND WebSitePageSerNo=1400
    `;

    try {
      const result = await queryDB(query);
      return res.status(200).json(result.recordset);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch solutions" });
    }
  }

  if (req.method === "POST") {
    const { title, description, filePath, imageId, formUrl } = req.body;

    // Required fields check
    if (!title || !description || !filePath || !imageId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Insert into WEBSITECONTENT
    const query = `
      INSERT INTO [dbo].[WEBSITECONTENT] 
        (TenentID, WebSiteID, WebSiteShortName, ArabicHTML
, 
         EnglishHTML, IMAGEID, ELECTRONICFORM1URL, SortBy, WebSitePageSerNo)
      VALUES (
        ${tenentId}, 
        ${websiteId}, 
        '${title.replace(/'/g, "''")}', 
        '${description.replace(/'/g, "''")}', 
        '${filePath.replace(/'/g, "''")}', 
        ${imageId}, 
        ${formUrl ? `'${formUrl.replace(/'/g, "''")}'` : "NULL"}, 
        1, 
        1
      )
    `;

    try {
      await queryDB(query);
      return res.status(201).json({ message: "Solution added" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to add solution" });
    }
  }

  if (req.method === "PUT") {
    const { id, title, description, filePath, imageId, formUrl } = req.body;

    // Update solution
    const query = `
      UPDATE [dbo].[WEBSITECONTENT] 
      SET 
        WebSiteShortName = '${title.replace(/'/g, "''")}', 
        ArabicHTML
 = '${description.replace(/'/g, "''")}', 
        EnglishHTML = '${filePath.replace(/'/g, "''")}', 
        IMAGEID = ${imageId}, 
        ELECTRONICFORM1URL = ${formUrl ? `'${formUrl.replace(/'/g, "''")}'` : "NULL"}
      WHERE MyWebSiteAutoGenID = ${id} AND TenentID = ${tenentId} AND WebSitePageSerNo=1400
    `;

    try {
      await queryDB(query);
      return res.status(200).json({ message: "Solution updated" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to update solution" });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const query = `
      DELETE FROM [dbo].[WEBSITECONTENT] 
      WHERE MyWebSiteAutoGenID = ${id} AND TenentID = ${tenentId} AND WebSitePageSerNo=1400
    `;

    try {
      await queryDB(query);
      return res.status(200).json({ message: "Solution deleted" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete solution" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}