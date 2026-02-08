import { queryDB } from "../../lib/db";

export default async function handler(req, res) {
  const tenentId = 1; // Fixed TenantID
  const websiteId = 1; // Portfolios

  if (req.method === "GET") {
    // Fetch all portfolio items
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
      return res.status(500).json({ error: "Failed to fetch portfolios" });
    }
  }

  if (req.method === "POST") {
    const { title, description, redirectLink, imageId, formUrl } = req.body;

    // Required fields check
    if (!title || !description || !redirectLink || !imageId) {
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
        '${redirectLink.replace(/'/g, "''")}', 
        ${imageId}, 
        ${formUrl ? `'${formUrl.replace(/'/g, "''")}'` : "NULL"}, 
        1, 
        1
      )
    `;

    try {
      await queryDB(query);
      return res.status(201).json({ message: "Portfolio added" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to add portfolio" });
    }
  }

  if (req.method === "PUT") {
    const { id, title, description, redirectLink, imageId, formUrl } = req.body;

    // Update portfolio
    const query = `
      UPDATE [dbo].[WEBSITECONTENT] 
      SET 
        WebSiteShortName = '${title.replace(/'/g, "''")}', 
        ArabicHTML
 = '${description.replace(/'/g, "''")}', 
        EnglishHTML = '${redirectLink.replace(/'/g, "''")}', 
        IMAGEID = ${imageId}, 
        ELECTRONICFORM1URL = ${formUrl ? `'${formUrl.replace(/'/g, "''")}'` : "NULL"}
      WHERE MyWebSiteAutoGenID = ${id} AND TenentID = ${tenentId} AND WebSitePageSerNo=1300
    `;

    try {
      await queryDB(query);
      return res.status(200).json({ message: "Portfolio updated" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to update portfolio" });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const query = `
      DELETE FROM [dbo].[WEBSITECONTENT] 
      WHERE MyWebSiteAutoGenID = ${id} AND TenentID = ${tenentId} AND WebSitePageSerNo=1300
    `;

    try {
      await queryDB(query);
      return res.status(200).json({ message: "Portfolio deleted" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete portfolio" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}