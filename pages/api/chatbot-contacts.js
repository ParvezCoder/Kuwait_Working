import { getDb } from '../../lib/dbsql';

export default async function handler(req, res) {
  const db = getDb();

  if (req.method === "GET") {
    try {
      // Create table if it doesn't exist
      db.prepare(`
        CREATE TABLE IF NOT EXISTS CHATBOT_CONTACTS (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          phone TEXT,
          message TEXT,
          conversationId TEXT,
          source TEXT DEFAULT 'chatbot',
          status TEXT DEFAULT 'new',
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // Fetch all contacts
      const contacts = db.prepare(`
        SELECT * FROM CHATBOT_CONTACTS 
        ORDER BY createdAt DESC
      `).all();
      
      return res.status(200).json(contacts);
    } catch (error) {
      return res.status(500).json({ error: "Failed to fetch contacts" });
    }
  }

  if (req.method === "POST") {
    const { name, email, phone, message, conversationId, source } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ error: 'Email or phone number is required' });
    }

    try {
      // Create table if it doesn't exist
      db.prepare(`
        CREATE TABLE IF NOT EXISTS CHATBOT_CONTACTS (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          phone TEXT,
          message TEXT,
          conversationId TEXT,
          source TEXT DEFAULT 'chatbot',
          status TEXT DEFAULT 'new',
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `).run();

      // Insert contact information
      const result = db.prepare(`
        INSERT INTO CHATBOT_CONTACTS (name, email, phone, message, conversationId, source)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(name || '', email || '', phone || '', message || '', conversationId || '', source || 'chatbot');

      return res.status(201).json({
        message: 'Contact information saved successfully',
        id: result.lastInsertRowid
      });
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).json({ error: 'Failed to save contact information' });
    }
  }

  if (req.method === "PUT") {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ error: 'ID and status are required' });
    }

    try {
      db.prepare(`
        UPDATE CHATBOT_CONTACTS 
        SET status = ?, updatedAt = CURRENT_TIMESTAMP
        WHERE id = ?
      `).run(status, id);

      return res.status(200).json({ message: 'Contact status updated successfully' });
    } catch (error) {
      console.error('Error updating contact status:', error);
      return res.status(500).json({ error: 'Failed to update contact status' });
    }
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'Contact ID is required' });
    }

    try {
      db.prepare(`
        DELETE FROM CHATBOT_CONTACTS 
        WHERE id = ?
      `).run(id);

      return res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
      console.error('Error deleting contact:', error);
      return res.status(500).json({ error: 'Failed to delete contact' });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
