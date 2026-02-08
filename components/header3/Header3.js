import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import icon1 from '/public/images/icons/icon_wifi.svg'
import icon2 from '/public/images/icons/icon_dollar_2.svg'
import icon3 from '/public/images/icons/icon_chart.svg'
import icon4 from '/public/images/icons/icon_tag_2.svg'
import icon5 from '/public/images/icons/icon_user_2.svg'
import icon6 from '/public/images/icons/icon_users.svg'
import icon7 from '/public/images/icons/icon_pen.svg'
import icon8 from '/public/images/clients/client_logo_9.webp'
import icon9 from '/public/images/clients/client_logo_10.webp'
import icon10 from '/public/images/avatar/CEO.png'
import icon11 from '/public/images/icons/icon_quote.svg'
import cases from '/public/images/case/case_image_4.webp'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';

const Header3 = (props) => {

    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className="site_header site_header_3">
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                {/* <Link onClick={ClickHandler} className="site_link" href="/">
                                    <Image 
                                        src={logo} 
                                        alt="Site Logo – Corp-Digital – IT Solutions & Technology"
                                        style={{ width: '180px', height: 'auto' }} // Adjust size here
                                    />
                                </Link> */}
                                <div className="badge bg-danger-subtle text-danger"></div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                                                            <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                                                            <li className="dropdown">
                                                                                <Link onClick={ClickHandler} className="nav-link" href="/" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                    Company
                                                                                </Link>
                                                                                <div className="dropdown-menu mega_menu_wrapper" aria-labelledby="company_submenu">
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-lg-9">
                                                                                                <div className="megamenu_pages_wrapper mb-5">
                                                                                                    <div className="row">
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/about">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon1} alt="Wifi SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">About Us</small>
                                                                                                                </span>
                                                                                                                <span className="description mb-0">
                                                                                                                    Learn more about Corp-Digital
                                                                                                                </span>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/about">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon1} alt="Wifi SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Who we Are</small>
                                                                                                                </span>
                                                                                                                <span className="description mb-0">
                                                                                                                    Learn Who We Are
                                                                                                                </span>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/about">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon1} alt="Wifi SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Goal And Mission</small>
                                                                                                                </span>
                                                                                                                <span className="description mb-0">
                                                                                                                    Why We Do This
                                                                                                                </span>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                         <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/pricing">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon2} alt="Dollar SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Our Pricing</small>
                                                                                                                </span>
                                                                                                                <span className="description mb-0">
                                                                                                                    Streamlined Pricing
                                                                                                                </span>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/portfolio">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon3} alt="Chart SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Portfolio</small>
                                                                                                                </span>
                                                                                                                <span className="description mb-0">
                                                                                                                    Explore our all overview
                                                                                                                </span>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/team">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon5} alt="User Check SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Team</small>
                                                                                                                </span>
                                                                                                                <span className="description mb-0">
                                                                                                                    We are friendly Join our team
                                                                                                                </span>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/service">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon6} alt="Pen SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Profile Download</small>
                                                                                                                </span>
                                                                                                                <small className="description mb-0">
                                                                                                                    Download our profile
                                                                                                                </small>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div className="col-lg-3 col-md-6">
                                                                                                            <Link onClick={ClickHandler} className="iconbox_block_2" href="/contact">
                                                                                                                <span className="icon_title_wrap">
                                                                                                                    <small className="iconbox_icon">
                                                                                                                        <Image src={icon7} alt="Pen SVG Icon" />
                                                                                                                    </small>
                                                                                                                    <small className="iconbox_title">Contact Us</small>
                                                                                                                </span>
                                                                                                                <small className="description mb-0">
                                                                                                                    Get in touch with us
                                                                                                                </small>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <ul className="btns_group p-0 unordered_list justify-content-start">
                                                                                                    <li>
                                                                                                        <Link onClick={ClickHandler} className="btn btn-primary" href="/contact">
                                                                                                            <span className="btn_label" data-text="Consultation">Free Consultation</span>
                                                                                                            <span className="btn_icon">
                                                                                                                <i className="fa-solid fa-arrow-up-right"></i>
                                                                                                            </span>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <Link onClick={ClickHandler} className="btn btn-primary" href="/contact">
                                                                                                            <span className="btn_label" data-text="Consultation">IT Consultation</span>
                                                                                                            <span className="btn_icon">
                                                                                                                <i className="fa-solid fa-arrow-up-right"></i>
                                                                                                            </span>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <Link onClick={ClickHandler} className="btn btn-primary" href="/contact">
                                                                                                            <span className="btn_label" data-text="Development">Mobile App</span>
                                                                                                            <span className="btn_icon">
                                                                                                                <i className="fa-solid fa-arrow-up-right"></i>
                                                                                                            </span>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <Link onClick={ClickHandler} className="btn btn-primary" href="/contact">
                                                                                                            <span className="btn_label" data-text="Innovate">Upgrading SOP</span>
                                                                                                            <span className="btn_icon">
                                                                                                                <i className="fa-solid fa-arrow-up-right"></i>
                                                                                                            </span>
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div className="col-lg-3">
                                                                                                <div className="site_author bg-primary">
                                                                                                    <div className="author_box">
                                                                                                        <div className="author_image bg-light">
                                                                                                            <Image src={icon10} alt="Site Author" />
                                                                                                        </div>
                                                                                                        <div className="author_box_content">
                                                                                                            <h3 className="author_name text-white">Johar Saifuddin</h3>
                                                                                                            <span className="author_designation text-white">CEO At Corp-Digital</span>
                                                                                                        </div>
                                                                                                        <div className="quote_icon">
                                                                                                            <Image src={icon11} alt="Quote Icon" />
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <p className="mb-0 text-white">
                                                                                                        As a CEO at Corp-Digital  I have been voice crying in the wilderness,  trying to make requirements clear, use every minute to deliver the  result, and not reinvent the wheel. Here at Corp-Digital, I made that possible  for the clients.
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>




                                                                            <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </Link>
                                            <div className="dropdown-menu mega_menu_wrapper p-0" aria-labelledby="services_submenu">
                                                <div className="container">
                                                    <div className="row justify-content-lg-between">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Software Services</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${2}`}>
                                                                                    <span className="icon_list_text">Business Application Development</span>
                                                                                </Link>
                                                                            </li>
                                                                               <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${21}`}>
                                                                                    <span className="icon_list_text">UI/UX Design Services</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${3}`}>
                                                                                    <span className="icon_list_text">Mobile APP Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${4}`}>
                                                                                    <span className="icon_list_text">Integrating with your Main System</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${5}`}>
                                                                                    <span className="icon_list_text">Website Development</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${6}`}>
                                                                                    <span className="icon_list_text">SEO</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Management Services</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${7}`}>
                                                                                    <span className="icon_list_text">SOP (Standard Operation Procedure)</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${8}`}>
                                                                                    <span className="icon_list_text">Disaster Recovery Planning</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${9}`}>
                                                                                    <span className="icon_list_text">IT Management Services</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${10}`}>
                                                                                    <span className="icon_list_text">Consulting Services</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${11}`}>
                                                                                    <span className="icon_list_text">Business Analysis</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${12}`}>
                                                                                    <span className="icon_list_text">Resilience Services</span>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Data Services</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            {/* <li>
                                                                                <Link onClick={ClickHandler} href="https://corp.digital53.com/DataManagement.aspx">
                                                                                    <span className="icon_list_text">Data Management</span>
                                                                                </Link>
                                                                            </li> */}
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${13}`}>
                                                                                    <span className="icon_list_text">Data Warehousing</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${14}`}>
                                                                                    <span className="icon_list_text">Data Migration</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${19}`}>
                                                                                    <span className="icon_list_text">Data Tracking Security</span>
                                                                                </Link>
                                                                            </li>
                                                                            {/* <li>
                                                                                <Link onClick={ClickHandler} href="/service">
                                                                                    <span className="icon_list_text">Technology Solutions</span>
                                                                                </Link>
                                                                            </li> */}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">IT services</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                        {/* <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${2}`}>
                                                                                    <span className="icon_list_text">IT Services</span>
                                                                                </Link>
                                                                            </li> */}
                                                                             <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${22}`}>
                                                                                    <span className="icon_list_text">Hosting Solutions</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${15}`}>
                                                                                    <span className="icon_list_text">IT Services Management</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${16}`}>
                                                                                    <span className="icon_list_text">Information Systems Security</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${17}`}>
                                                                                    <span className="icon_list_text">IT Support</span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${18}`}>
                                                                                    <span className="icon_list_text">IT Solutions</span>
                                                                                </Link>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">Design & CRM</h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${20}`}>
                                                                                    <span className="icon_list_text">CRM Solutions and Design</span>
                                                                                </Link>
                                                                            </li>
                                                                         
                                                                           
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4">
                                                                    <div className="social_area" style={{ padding: '20px', textAlign: 'center' }}>
                                                                        <ul className="social_icons_block unordered_list" data-text="Follow Us:">
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="https://www.facebook.com/digital53/" target='_blank'>
                                                                                    <i className="fa-brands fa-facebook-f"></i>
                                                                                </Link>
                                                                            </li>
                                                                            {/* <li>
                                                                                <Link onClick={ClickHandler} href="/">
                                                                                    <i className="fa-brands fa-twitter"></i>
                                                                                </Link>
                                                                            </li> */}
                                                                            <li>
                                                                                <Link onClick={ClickHandler} href="https://www.linkedin.com/in/joharmandav/" target='_blank'>
                                                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                                                                                            <Link onClick={ClickHandler} href={'https://www.instagram.com/digitaledge.q8/'} target='_blank'>
                                                                                                                                                                <i className="fa-brands fa-instagram"></i>
                                                                                                                                                            </Link>
                                                                                                                                                        </li>
                                                                            {/* <li>
                                                                                <Link onClick={ClickHandler} href="/">
                                                                                    <i className="fa-brands fa-dribbble"></i>
                                                                                </Link>
                                                                            </li> */}
                                                                        </ul>
                                                                        <p className="career_link m-0">Looking for new career? <Link onClick={ClickHandler} href="/">We're Hiring</Link></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div className="site_author bg-primary"style={{ marginTop: '50px' }}>
                                                                <div className="author_box">
                                                                    <div className="author_image bg-light">
                                                                        <Image src={icon10} alt="Site Author" />
                                                                    </div>
                                                                    <div className="author_box_content">
                                                                        <h3 className="author_name text-white">Johar Saifuddin</h3>
                                                                        <span className="author_designation text-white">CEO At Corp-Digital</span>
                                                                    </div>
                                                                    <div className="quote_icon">
                                                                        <Image src={icon11} alt="Quote Icon" />
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 text-white">
                                                                    Quality is the first priority at Digital Edge (DE) Solutions Inc. We are powered with Quality product and strive for Quality Service. We engaged with the best breed product in the world. We are working toward providing the Best solutions around the globe.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>





                                                                            <li><Link onClick={ClickHandler} href="/solutions">Solutions</Link></li>
                                    
                                                                            <li><Link onClick={ClickHandler} href="/blog">Blogs</Link></li>
                                                                            <li><Link onClick={ClickHandler} href="/FaqErp">FAQs</Link></li>
                                                                            
                                                                            {/* <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li> */}
                                                                        </ul>
                                                                    </div>
                                                                </nav>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-5">
                                                            <div 
                                            className="mobile-only"
                                            style={{
                                                position: 'fixed',
                                                top: '20px',
                                                right: '10px',
                                                background: '#0b1735',
                                                color: 'white',
                                                padding: '8px',
                                                zIndex: 9999
                                            }}>
                                                <li style={{ 
                                            listStyle: 'none',
                                            position: 'relative',
                                            zIndex: 9999 
                                            }}>
                                            <button 
                                            className="mobile_menu_btn"
                                            onClick={() => {
                                                console.log('Button clicked!', mobailActive);
                                                setMobailState(!mobailActive);
                                            }}
                                            style={{
                                                background: '#0b1735', 
                                                border: 'none',
                                                fontSize: '24px',
                                                padding: '12px 14px',
                                                cursor: 'pointer',
                                                color: 'white',
                                                borderRadius: '8px',
                                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', 
                                                transition: 'background 0.3s ease, transform 0.2s ease',
                                                position: 'fixed',
                                                top: '20px',
                                                right: '20px',
                                                zIndex: 9999
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#0d1a40'} 
                                            onMouseLeave={(e) => e.target.style.background = '#0b1735'} 
                                            >
                                            {mobailActive ? '✕' : '☰'}
                                            </button>
                                            </li>
                                            </div>
                                            </div>
                    </div>
                </div>
                <div className="mobail-wrap">
                    <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                            <nav className="xb-header-nav">
                                <MobileMenu />
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
                </div>
            </div>
        </header>

    )
}

export default Header3;