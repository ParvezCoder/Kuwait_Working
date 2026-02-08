import { getDb } from '../../lib/dbsql';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const db = getDb();
    
    // Fetch blogs from database - using WebSitePageSerNo 1500 for blogs
    const blogs = db.prepare(`
      SELECT 
        MyWebSiteAutoGenID as id,
        WebSiteShortName as title,
        WebSitePageSubSerial as slug,
        WebEnglish as author,
        WebArabic as authorTitle,
        EnglishHTML as content,
        ArabicHTML as arabicContent,
        OtherLanguageHTML as otherContent,
        IMAGEID,
        SortBy,
        active,
        SWITCH1,
        SWITCH2,
        URLTOCLICK,
        PrimaryKeywords,
        MetaTitle,
        MetaDescription
      FROM WEBSITECONTENT 
      WHERE WebSitePageSerNo = 1500 AND active = 1
      ORDER BY SortBy ASC
    `).all();

    // Transform data to match expected blog structure
    const transformedBlogs = blogs.map(blog => ({
      id: blog.id,
      title: blog.title || 'Untitled Blog',
      slug: blog.slug || `blog-${blog.id}`,
      author: blog.author || 'Digital Edge Solutions',
      authorTitle: blog.authorTitle || 'IT Specialist',
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      create_at: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      comment: '0',
      thumb: 'Technology',
      screens: blog.IMAGEID ? `/api/images/${blog.IMAGEID}` : '/images/blog/blog_post_image_1.webp',
      images: {
        screens: blog.IMAGEID ? `/api/images/${blog.IMAGEID}` : '/images/blog/blog_post_image_1.webp',
        single: blog.IMAGEID ? `/api/images/${blog.IMAGEID}` : '/images/blog/blog_post_image_1.webp',
      },
      content: blog.content ? JSON.parse(blog.content) : [
        {
          type: 'paragraph',
          text: blog.content || 'Content coming soon...'
        }
      ],
      arabicContent: blog.arabicContent,
      otherContent: blog.otherContent,
      keywords: blog.PrimaryKeywords,
      metaTitle: blog.MetaTitle,
      metaDescription: blog.MetaDescription,
      url: blog.URLTOCLICK
    }));

    return res.status(200).json(transformedBlogs);
  } catch (error) {
    console.error("Database error:", error.message);
    return res.status(500).json({ error: "Failed to fetch blogs" });
  }
}
