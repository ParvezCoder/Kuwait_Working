import { getDb } from '../../lib/dbsql';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const db = getDb();

    // If no ID provided, return all services
    if (!id) {
      console.log(`🔍 Fetching all services with SWITCH1 categorization`);

      const allServices = db
        .prepare(`
          SELECT WebSitePageSerNo, WebSitePageSubSerial, WebSiteShortName, SortBy, SWITCH1, SWITCH2,
                 EnglishHTML, active, WebEnglish
          FROM WEBSITECONTENT 
          WHERE WebSitePageSerNo NOT IN (1200, 1201, 1300) AND active = 1
          ORDER BY SWITCH1, SortBy
        `)
        .all();

      // console.log(`✅ Found ${allServices.length} services`);

      // // Debug: Log the SWITCH1 values to understand categorization
      // console.log(`🔍 Service categorization debug:`, allServices.map(service => ({
      //   id: service.WebSitePageSerNo,
      //   name: service.WebSiteShortName,
      //   switch1: service.SWITCH1,
      //   switch2: service.SWITCH2,
      //   active: service.active
      // })));

      return res.status(200).json(allServices);
    }

    // If ID provided, fetch specific service
    console.log(`🔍 Looking for service with ID: ${id}`);

    let ress = db
      .prepare(`
        SELECT *
        FROM WEBSITECONTENT 
        WHERE WebSitePageSubSerial = ?
        `).get(id)

    // Try to find the service by WebSitePageSubSerial first
    let result = db
      .prepare(`
        SELECT EnglishHTML, WebEnglish, OtherLanguageHTML, WebSitePageSubSerial, WebSiteShortName
        FROM WEBSITECONTENT 
        WHERE WebSitePageSubSerial = ?
      `)
      .get(id);


    // If not found, try to find by WebSitePageSerNo
    if (!result) {
      // console.log(`❌ Service not found by WebSitePageSubSerial: ${id}`);
      // console.log(`🔍 Trying to find by WebSitePageSerNo...`);

      result = db
        .prepare(`
          SELECT EnglishHTML, WebEnglish, OtherLanguageHTML, WebSitePageSubSerial, WebSiteShortName
          FROM WEBSITECONTENT 
          WHERE WebSitePageSerNo = ?
        `)
        .get(id);
    }

    // If still not found, let's see what's actually in the database
    if (!result) {
      console.log(`❌ Service not found by WebSitePageSerNo: ${id}`);

      // Let's check what services are available
      const allServices = db
        .prepare(`
          SELECT WebSitePageSubSerial, WebSitePageSerNo, WebSiteShortName, OtherLanguageHTML, WebEnglish
          FROM WEBSITECONTENT 
          WHERE WebSitePageSerNo IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
          ORDER BY WebSitePageSerNo
        `)
        .all();

      // console.log(`📋 Available services:`, allServices);

      return res.status(404).json({
        error: "Service not found",
        availableServices: allServices,
        searchedId: id
      });
    }

    // console.log(`✅ Service found:`, {
    //   WebSitePageSubSerial: result.WebSitePageSubSerial,
    //   WebSiteShortName: result.WebSiteShortName,
    //   hasEnglishHTML: !!result.EnglishHTML,
    //   hasWebEnglish: !!result.WebEnglish
    // });

    // Check if we have the required data
    if (!result.EnglishHTML) {
      console.log(`⚠️ Service found but no EnglishHTML content`);
      return res.status(404).json({
        error: "Service content not available",
        service: {
          WebSitePageSubSerial: result.WebSitePageSubSerial,
          WebSiteShortName: result.WebSiteShortName,
          WebEnglish: result.WebEnglish
        }
      });
    }

    return res.status(200).json({
      ress
    })

    // return res.status(200).json({
    //   EnglishHTML: result.EnglishHTML,
    //   WebEnglish: result.WebEnglish || result.WebSiteShortName || 'Service Details',
    //   WebSitePageSubSerial: result.WebSitePageSubSerial,
    //   WebSiteShortName: result.WebSiteShortName,
    //   OtherLanguageHTML: result.OtherLanguageHTML || ""
    // });
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Failed to fetch service" });
  }
}








