import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import icon1 from '/public/images/icons/icon_calendar.svg'
import shape1 from '/public/images/shapes/shape_line_7.svg'
import shape2 from '/public/images/shapes/shape_angle_4.webp'
import Image from 'next/image'

const BlogSection = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/blogs');
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            const data = await response.json();
            setBlogs(data);
        } catch (err) {
            console.error('Error fetching blogs:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    if (loading) {
        return (
            <section className="blog_section blog_section_space section_decoration">
                <div className="container">
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="blog_section blog_section_space section_decoration">
                <div className="container">
                    <div className="text-center text-danger">
                        <p>Error loading blogs: {error}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (!blogs || blogs.length === 0) {
        return (
            <section className="blog_section blog_section_space section_decoration">
                <div className="container">
                    <div className="text-center">
                        <p>No blogs available at the moment.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog_section blog_section_space section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                        Our Articles
                    </div>
                    <h2 className="heading_text mb-0">
                        Latest <mark>Articles</mark>
                    </h2>
                </div>

                <div className="row justify-content-center">
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <div className="col-lg-4" key={Bitem}>
                            <div className="blog_post_block layout_2">
                                <div className="blog_post_image">
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="image_wrap">
                                        <Image src={blog.screens} alt={blog.title} width={400} height={250} />
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                                <div className="blog_post_content p-0">
                                    <h3 className="blog_post_title mb-0">
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <ul className="post_meta unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                <i className="fa-regular fa-circle-user"></i> By <b>{blog.author}</b>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                <Image src={icon1} alt="Icon Calendar" /> {blog.create_at}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><i className="fa-regular fa-comment-lines"></i> 24</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <Image src={shape1} alt="Corp-Digital Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <Image src={shape2} alt="Corp-Digital Shape Angle" />
            </div>
        </section>
    )
}

export default BlogSection;