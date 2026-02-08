import { getDb } from '../../lib/dbsql';

export default async function handler(req, res) {
  const db = getDb();
  const tenentId = 1;
  const websiteId = 1;
  const websitePageSerNo = 1500; // Blog page number

  if (req.method === "GET") {
    try {
      const blogs = db.prepare(`
        SELECT * FROM WEBSITECONTENT 
        WHERE TenentID = ? AND WebSiteID = ? AND WebSitePageSerNo = ?
        ORDER BY SortBy ASC
      `).all(tenentId, websiteId, websitePageSerNo);
      
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch blogs" });
    }
  }

  if (req.method === "POST") {
    const { title, slug, author, content, imageId, sortBy } = req.body;

    if (!title || !slug || !author || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const result = db.prepare(`
        INSERT INTO WEBSITECONTENT (
          TenentID, WebSiteID, WebSitePageSerNo, WebSitePageSubSerial,
          WebSiteShortName, WebEnglish, EnglishHTML, IMAGEID, SortBy,
          DefaultLanguage, active, SWITCH1, SWITCH2
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, 'Blog', '1')
      `).run(tenentId, websiteId, websitePageSerNo, slug, title, author, content, imageId || 0, sortBy || 1);

      return res.status(201).json({ 
        message: "Blog added successfully", 
        id: result.lastInsertRowid 
      });
    } catch (error) {
      return res.status(500).json({ error: "Failed to add blog" });
    }
  }

  if (req.method === "PUT") {
    const { id, title, slug, author, content, imageId, sortBy, active } = req.body;

    if (!id || !title || !slug || !author || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      db.prepare(`
        UPDATE WEBSITECONTENT 
        SET WebSiteShortName = ?, WebSitePageSubSerial = ?, WebEnglish = ?, 
            EnglishHTML = ?, IMAGEID = ?, SortBy = ?, active = ?
        WHERE MyWebSiteAutoGenID = ? AND TenentID = ? AND WebSitePageSerNo = ?
      `).run(title, slug, author, content, imageId || 0, sortBy || 1, active ? 1 : 0, 
             id, tenentId, websitePageSerNo);

      return res.status(200).json({ message: "Blog updated successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to update blog" });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }

    try {
      db.prepare(`
        DELETE FROM WEBSITECONTENT 
        WHERE MyWebSiteAutoGenID = ? AND TenentID = ? AND WebSitePageSerNo = ?
      `).run(id, tenentId, websitePageSerNo);

      return res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete blog" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
