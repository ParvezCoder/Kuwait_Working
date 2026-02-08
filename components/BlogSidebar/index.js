import React from 'react';
import Link from 'next/link'
import blogs from '../../api/blogsjohar'
import Services from '../../api/service';
import icon from '/public/images/icons/icon_search.svg';
import icon1 from '/public/images/icons/icon_calendar.svg'
import Image from 'next/image';

const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4">
            <aside className="sidebar ps-lg-5">
                <div className="post_list_block">
                    <h3 className="sidebar_widget_title">Recent Posts</h3>
                    <ul className="unordered_list_block">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <li key={Bitem}>
                                <h3 className="post_title">
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h3>
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
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_widget">
                <h3 className="widget_title">Categories</h3>
                <ul className="category_list">
                    <li>
                        <Link onClick={ClickHandler} href="/blog">
                            Technology <span className="count">(5)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} href="/blog">
                            Business <span className="count">(3)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} href="/blog">
                            Development <span className="count">(4)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} href="/blog">
                            IT Solutions <span className="count">(6)</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Tags */}
            <div className="sidebar_widget">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tag_cloud">
                    <Link onClick={ClickHandler} href="/blog" className="tag_item">Technology</Link>
                    <Link onClick={ClickHandler} href="/blog" className="tag_item">Digital</Link>
                    <Link onClick={ClickHandler} href="/blog" className="tag_item">IT</Link>
                    <Link onClick={ClickHandler} href="/blog" className="tag_item">Solutions</Link>
                    <Link onClick={ClickHandler} href="/blog" className="tag_item">Business</Link>
                    <Link onClick={ClickHandler} href="/blog" className="tag_item">Development</Link>
                </div>
            </div>
                
            </aside>
        </div>
    )

}

export default BlogSidebar;