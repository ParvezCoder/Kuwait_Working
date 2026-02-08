import { getDb } from '../../lib/dbsql';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message, conversationId, source } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ error: 'Email or phone number is required' });
    }

    const db = getDb();
    
    // Create CHATBOT_CONTACTS table if it doesn't exist
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
