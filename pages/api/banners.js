import { getDb } from '../../lib/dbsql'; // Adjust the path as necessary

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const db = getDb();

// select EnglishHTML from GETBANNER                             // To retrieve the banner on the website 
// select SWITCH1,WebEnglish,WebArabic from GETSERVICES          // TO RETRIEVE SERVICES ON THE TOP IN eNG/aRABIC
// select SWITCH1,EnglishHTML,ArabicHTML from GETSERVICEDETAILS  // RETIEVE service details USING WebEnglish,WebArabic

  try {
    // const rows = db.prepare('SELECT * FROM WEBSITECONTENT WHERE WebSitePageSerNo = 1200').all();
   const rows = db.prepare('SELECT EnglishHTML, ArabicHTML, URLTOCLICK FROM GETBANNER').all();

    return res.status(200).json({ success: true, data: rows });
  } catch (err) {
    console.error('Error reading SQLite data:', err.message);
    return res.status(500).json({ error: 'Failed to read local data' });
  }
}



// export default async function handler(req, res) {
//   const TenantID = 1;
//   const WebSiteID = 1;

//   if (req.method === "GET") {
//     const apiUrl = `https://newsysapi.crm53.com/api/Common/GetWebData?TenantID=${TenantID}&WebSiteID=${WebSiteID}`;

//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`API Error: ${response.status}`);
//       }

//       const result = await response.json();
//       // console.log("Raw API result:", result); // 👈 check this in console

//       // If result is already an array
//       const dataArray = Array.isArray(result) ? result : [];

//       const filteredData = dataArray.filter(
//         (item) => item.WebSitePageSerNo == 1200 // allows string or number
//       );

//       // console.log("Filtered data:", filteredData);

//       return res.status(200).json({ success: true, data: filteredData });
//     } catch (error) {
//       console.error("Error fetching data from external API:", error.message);
//       return res.status(500).json({ error: "Failed to fetch data from external API" });
//     }
//   } else {
//     return res.status(405).json({ error: "Method not allowed" });
//   }
// }


// import { queryDB } from "../../lib/db";

// export default async function handler(req, res) {
//   const tenentId = 1; // Fixed TenantID
//   const websiteId = 1; // banners

//   if (req.method === "GET") {
//     // Fetch all portfolios
//     const query = `
//       SELECT EnglishHTML
//       FROM [dbo].[WEBSITECONTENT] 
//       WHERE TenentID = ${tenentId} AND WebSiteID = ${websiteId} AND WebSitePageSerNo=1200 AND WebSiteIconMob='N/A'
//     `;

//     try {
//       const result = await queryDB(query);
//       console.log("Fetched banners:", result.recordset);
//       return res.status(200).json(result.recordset);
//     } catch (error) {
//         console.log("Error fetching banners:", error);
//       return res.status(500).json({ error: "Failed to fetch banners" });
//     }
//   };
// }