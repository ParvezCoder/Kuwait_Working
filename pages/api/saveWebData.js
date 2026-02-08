// pages/api/saveWebData.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const TenantID = 1;
  const WebSiteID = 1;
  const filePath = path.join(process.cwd(), 'data', 'webData.json');

  if (req.method === 'GET') {
    const apiUrl = `https://newsysapi.crm53.com/api/Common/GetWebData?TenantID=${TenantID}&WebSiteID=${WebSiteID}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      return res.status(200).json({ success: true, message: 'Data saved locally' });
    } catch (err) {
      console.error('Save Error:', err.message);
      return res.status(500).json({ success: false, message: 'Failed to save data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
