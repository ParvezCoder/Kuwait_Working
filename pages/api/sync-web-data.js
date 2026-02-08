// pages/api/Common/GetWebData.js
import { getDb } from '../../lib/dbsql';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const db = getDb();
  const apiUrl = 'https://newsysapi.crm53.com/api/Common/GetWebData?TenantID=1&WebSiteID=1';

  try {
    const response = await axios.get(apiUrl);
    const apiData = Array.isArray(response.data)
      ? response.data
      : Array.isArray(response.data?.data)
        ? response.data.data
        : [];



    if (!Array.isArray(apiData)) {
      console.error("Unexpected API structure:", apiData);
      return res.status(400).json({ error: 'Invalid API response format' });
    }

    const transaction = db.transaction(() => {
      // Clear existing data
      db.prepare('DELETE FROM WEBSITECONTENT').run();

      const insert = db.prepare(`
  INSERT INTO WEBSITECONTENT (
    TenentID, WebSiteID, WebSitePageSerNo,
    WebSitePageSubSerial, DefaultLanguage, IMAGEID, SortBy,
    WebSiteIconMob, WebSiteIconWeb, WebSiteShortName, WebArabic,
    WebEnglish, EnglishHTML, ArabicHTML, OtherLanguageHTML, PrimaryKeywords,
    LongTailKeywords, MetaTitle, MetaDescription, H1Title, ContentText,
    SemanticVector, WordCount, URLTOCLICK, ElectronicForm1, ElectronicForm1URL,
    ElectronicForm2, ElectronicForm2URL, CRUP_ID, USERID,
    active, SWITCH1, SWITCH2
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
  )
`);



      for (const item of apiData) {
        console.log("Inserting row:", item);

        insert.run([
          item.TenentID,                 // 1
          item.WebSiteID,                // 2
          item.WebSitePageSerNo,         // 3
          item.WebSitePageSubSerial,     // 4
          item.DefaultLanguage,          // 5
          item.IMAGEID,                  // 6
          item.SortBy,                   // 7
          item.WebSiteIconMob,           // 8
          item.WebSiteIconWeb,           // 9
          item.WebSiteShortName,         // 10
          item.WebArabic,                // 11
          item.WebEnglish,               // 12
          item.EnglishHTML,              // 13
          item.ArabicHTML,               // 14
          item.OtherLanguageHTML,        // 15
          item.PrimaryKeywords,          // 16
          item.LongTailKeywords,         // 17
          item.MetaTitle,                // 18
          item.MetaDescription,          // 19
          item.H1Title,                  // 20
          item.ContentText,              // 21
          item.SemanticVector,           // 22
          item.WordCount,                // 23
          item.URLTOCLICK,               // 24
          item.ElectronicForm1,          // 25
          item.ElectronicForm1URL,       // 26
          item.ElectronicForm2,          // 27
          item.ElectronicForm2URL,       // 28
          item.CRUP_ID,                  // 29
          item.USERID,                   // 30
          item.active ? 1 : 0,           // 31
          item.SWITCH1,                  // 32
          item.SWITCH2                   // 33 ✅
        ]);



      }
    });
    transaction();

    console.log('Data synced successfully');
    return res.status(200).json({ message: 'Data synced successfully' });

  } catch (err) {
    console.error(err.response?.data || err.message); // helpful for debugging

  }
}
