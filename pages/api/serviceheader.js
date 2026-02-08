import { getDb } from '../../lib/dbsql';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.body; // Get ID from request body
    
    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const db = getDb();
    const result = db
      .prepare(`
        SELECT SWITCH1, EnglishHTML, ArabicHTML 
        FROM GETSERVICEDETAILS 
        WHERE WebSitePageSubSerial = ?
      `)
      .get(id);

    if (!result) {
      return res.status(404).json({ error: "Service not found" });
    }

    return res.status(200).json({
      SWITCH1: result.SWITCH1,
      EnglishHTML: result.EnglishHTML,
      ArabicHTML: result.ArabicHTML
    });
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Failed to fetch service" });
  }
}