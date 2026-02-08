import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import blogs from '../../api/blogsjohar'
import arrow from '/public/images/shapes/shape_arrow_right.svg'
import arrow2 from '/public/images/shapes/shape_arrow_left.svg'
import icon1 from '/public/images/icons/icon_calendar.svg'
import BlogSidebar from '../BlogSidebar';
import Image from 'next/image';

const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Truncate text to specified length
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }

    return (
        <section className="blog_section section_space bg-light">
            <div className="container">
                {/* Featured Carousel Section */}
                <div className="blog_onecol_carousel overflow-hidden mb-0">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {blogs.slice(0, 3).map((blog, Bitem) => (
                                <SwiperSlide key={Bitem}>
                                    <div className="blog_post_block content_over_layout featured-post">
                                        <div className="blog_post_image featured-image">
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="image_wrap">
                                                <Image 
                                                    src={blog.images.screens} 
                                                    alt={blog.title} 
                                                    width={1200} 
                                                    height={600}
                                                    style={{
                                                        width: '100%',
                                                        height: '600px',
                                                        objectFit: 'contain',
                                                        borderRadius: '12px',
                                                        backgroundColor: '#f8f9fa'
                                                    }}
                                                />
                                            </Link>
                                            <div className="content-overlay">
                                                <div className="blog_post_content featured-content">
                                                    <div className="post_meta_wrap mb-3">
                                                        <ul className="category_btns_group unordered_list">
                                                            <li>
                                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="category-tag">
                                                                    {blog.thumb}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                        <ul className="post_meta unordered_list">
                                                            <li>
                                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="meta-link">
                                                                    <i className="fa-regular fa-calendar-days me-2"></i> {blog.date}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="meta-link">
                                                                    <i className="fa-regular fa-comment-lines me-2"></i> {blog.comment}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <h2 className="blog_post_title featured-title">
                                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h2>
                                                    <p className="featured-excerpt">
                                                        {blog.content && blog.content.length > 0 && blog.content[0].type === 'paragraph' 
                                                            ? truncateText(blog.content[0].text, 150) 
                                                            : 'Discover more insights and expert analysis in this comprehensive blog post.'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button ref={prevRef} className="b1cc-swiper-button-prev carousel-nav" type="button">
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button ref={nextRef} className="b1cc-swiper-button-next carousel-nav" type="button">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                {/* Blog Grid Section */}
                <div className="section_spaceblog pb-0">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row g-4">
                                {blogs.slice(0, 11).map((blog, Bitem) => (
                                    <div className="col-md-6" key={Bitem}>
                                        <article className="blog_post_card uniform-card">
                                            <div className="blog_post_image uniform-image">
                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="image_wrap">
                                                    <Image 
                                                        src={blog.images.screens} 
                                                        alt={blog.title} 
                                                        width={400} 
                                                        height={250}
                                                        style={{
                                                            width: '100%',
                                                            height: '250px',
                                                            objectFit: 'contain',
                                                            borderRadius: '8px 8px 0 0',
                                                            backgroundColor: '#f8f9fa'
                                                        }}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="blog_post_content uniform-content">
                                                <div className="post_meta_wrap mb-3">
                                                    <ul className="category_btns_group unordered_list mb-2">
                                                        <li>
                                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="category-tag-small">
                                                                {blog.thumb}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul className="post_meta unordered_list">
                                                        <li>
                                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="meta-link-small">
                                                                <Image src={icon1} alt="Icon Calendar" width={16} height={16} className="me-1"/> 
                                                                {blog.date}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="meta-link-small">
                                                                <i className="fa-regular fa-comment-lines me-1"></i> 
                                                                {blog.comment}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4 className="blog_post_title card-title">
                                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>
                                                        {truncateText(blog.title, 60)}
                                                    </Link>
                                                </h4>
                                                <p className="card-excerpt">
                                                    {blog.content && blog.content.length > 0 && blog.content[0].type === 'paragraph' 
                                                        ? truncateText(blog.content[0].text, 120) 
                                                        : 'Click to read more about this interesting topic.'}
                                                </p>
                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="btn btn-dark btn-sm">
                                                    <span className="btn_label" data-text="Read More">Read More</span>
                                                    <span className="btn_icon ms-1">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                </Link>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Pagination */}
                            {/* <div className="pagination_wrap pt-5">
                                <nav aria-label="Blog pagination">
                                    <ul className="pagination_nav unordered_list justify-content-center">
                                        <li><Link onClick={ClickHandler} href={'/blog'} className="page-link"><i className="fa-solid fa-angles-left"></i></Link></li>
                                        <li className="active"><Link onClick={ClickHandler} href={'/blog'} className="page-link">1</Link></li>
                                        <li><Link onClick={ClickHandler} href={'/blog'} className="page-link">2</Link></li>
                                        <li><Link onClick={ClickHandler} href={'/blog'} className="page-link">3</Link></li>
                                        <li><span className="page-link">...</span></li>
                                        <li><Link onClick={ClickHandler} href={'/blog'} className="page-link">10</Link></li>
                                        <li><Link onClick={ClickHandler} href={'/blog'} className="page-link"><i className="fa-solid fa-angles-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div> */}
                        </div>
                        <BlogSidebar/>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Featured Carousel Styles */
                .featured-post {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .featured-image {
                    position: relative;
                }

                .content-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(transparent, rgba(0,0,0,0.8));
                    padding: 3rem 2rem 2rem;
                    color: white;
                }

                .featured-content .category-tag {
                    background: #007bff;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    text-decoration: none;
                    font-size: 0.875rem;
                    font-weight: 500;
                }

                .featured-content .meta-link {
                    color: rgba(255,255,255,0.8);
                    text-decoration: none;
                    font-size: 0.875rem;
                }

                .featured-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin: 1rem 0;
                    line-height: 1.3;
                }

                .featured-title a {
                    color: white;
                    text-decoration: none;
                }

                .featured-excerpt {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    margin: 0;
                    opacity: 0.9;
                }

                /* Carousel Navigation */
                .carousel-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255,255,255,0.9);
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    color: #333;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 10;
                }

                .carousel-nav:hover {
                    background: white;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }

                .b1cc-swiper-button-prev {
                    left: 20px;
                }

                .b1cc-swiper-button-next {
                    right: 20px;
                }

                /* Blog Card Styles */
                .uniform-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    transition: all 0.3s ease;
                    height: 500px;
                    display: flex;
                    flex-direction: column;
                }

                .uniform-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                }

                .uniform-image {
                    height: 250px;
                    overflow: hidden;
                }

                .uniform-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .category-tag-small {
                    background: #f8f9fa;
                    color: #007bff;
                    padding: 0.25rem 0.75rem;
                    border-radius: 15px;
                    text-decoration: none;
                    font-size: 0.75rem;
                    font-weight: 500;
                }

                .meta-link-small {
                    color: #6c757d;
                    text-decoration: none;
                    font-size: 0.75rem;
                }

                .card-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin: 0.75rem 0;
                }

                .card-title a {
                    color: #333;
                    text-decoration: none;
                }

                .card-title a:hover {
                    color: #007bff;
                }

                .card-excerpt {
                    color: #6c757d;
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    flex: 1;
                }

                .read-more-btn {
                    align-self: flex-start;
                    border-radius: 20px;
                    padding: 0.5rem 1rem;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                }

                .read-more-btn:hover {
                    color: #000000;
                }

                /* Pagination Styles */
                .pagination_wrap {
                    margin-top: 3rem;
                }

                .pagination_nav {
                    display: flex;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    gap: 0.5rem;
                }

                .pagination_nav li {
                    list-style: none;
                }

                .page-link {
                    display: block;
                    padding: 0.75rem 1rem;
                    color: #6c757d;
                    text-decoration: none;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .page-link:hover {
                    background: #007bff;
                    color: white;
                }

                .pagination_nav .active .page-link {
                    background: #007bff;
                    color: white;
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .featured-title {
                        font-size: 1.5rem;
                    }

                    .content-overlay {
                        padding: 2rem 1.5rem 1.5rem;
                    }

                    .uniform-card {
                        height: auto;
                    }

                    .uniform-content {
                        padding: 1rem;
                    }

                    .carousel-nav {
                        width: 40px;
                        height: 40px;
                        font-size: 1rem;
                    }
                }

                /* Utility Classes */
                .unordered_list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .unordered_list li {
                    list-style: none;
                }

                .me-1 { margin-right: 0.25rem; }
                .me-2 { margin-right: 0.5rem; }
                .ms-1 { margin-left: 0.25rem; }
                .mb-2 { margin-bottom: 0.5rem; }
                .mb-3 { margin-bottom: 1rem; }
                .mb-5 { margin-bottom: 3rem; }
                .pt-5 { padding-top: 3rem; }
                .g-4 > * { padding: 1rem; }
            `}</style>
        </section>
    )
}

export default BlogList;