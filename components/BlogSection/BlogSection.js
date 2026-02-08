import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Bg from '/public/images/shapes/bg_pattern_1.svg'
import icon1 from '/public/images/icons/icon_calendar.svg'
import Image from 'next/image'
import { useDataRefresh } from '../../lib/useDataRefresh';

const BlogSection = (props) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Use the data refresh hook to automatically refresh when data is synced
    useDataRefresh(fetchBlogs);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    if (loading) {
        return (
            <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
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
            <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
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
            <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    <div className="text-center">
                        <p>No blogs available at the moment.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Blog</span>
                        Updates
                    </div>
                    <h2 className="heading_text mb-0">
                        Latest Articles Posts
                    </h2>
                </div>

                <div className="row">
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <div className="col-lg-4" key={Bitem}>
                            <div className="blog_post_block">
                                <div className="blog_post_image">
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="image_wrap">
                                        <Image src={blog.screens} alt={blog.title} width={400} height={250} />
                                    </Link>
                                </div>
                                <div className="blog_post_content">
                                    <div className="post_meta_wrap">
                                        <ul className="category_btns_group unordered_list">
                                            <li><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.thumb}</Link></li>
                                        </ul>
                                        <ul className="post_meta unordered_list">
                                            <li>
                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                    <Image src={icon1} alt="Icon Calendar" /> {blog.create_at}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><i className="fa-regular fa-comment-lines"></i> {blog.comment}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="blog_post_title">
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="btn_unfill">
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                        <span className="btn_label">Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogSection;