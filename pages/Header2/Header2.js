import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '../../components/MobileMenu/MobileMenu';

// Import your icons
import icon1 from '/public/images/icons/icon_wifi.svg';
import icon2 from '/public/images/icons/icon_dollar_2.svg';
import icon3 from '/public/images/icons/icon_chart.svg';
import icon4 from '/public/images/icons/icon_tag_2.svg';
import icon5 from '/public/images/icons/icon_user_2.svg';
import icon6 from '/public/images/icons/icon_users.svg';
import icon7 from '/public/images/icons/icon_pen.svg';
import icon10 from '/public/images/avatar/CEO.png';
import icon11 from '/public/images/icons/icon_quote.svg';
import logo from '/public/images/site_logo/kuwait_digital.jpeg';
import { useRouter } from 'next/router'; // Add this import at the top


const Header2 = (props) => {
    const [mobailActive, setMobailState] = useState(false);
    const [isSticky, setSticky] = useState(false);
    const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(true);
      const router = useRouter(); // Get the router object
    const isHomePage = router.pathname === '/'; // Check if current page is home
useEffect(() => {
  const serviceIds = [101, 102, 103, 104, 105]; // Replace with real IDs

const fetchServicesData = async () => {
  try {
    const results = [];

    for (const id of serviceIds) {
      const response = await fetch(`/api/serviceheader?id=${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const json = await response.json();
        results.push({
          ...json,
          SWITCH1: id,
          active: true
        });
      }
    }

    setServicesData(results);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching services:', error);
    setLoading(false);
  }
};

  fetchServicesData();

  const handleScroll = () => setSticky(window.scrollY > 80);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Group services by SWITCH value
 const groupServicesBySwitch = () => {
    const groupedServices = {
        31: [], // Software Services
        32: [], // IT Services
        33: [], // Management Services
        34: [], // Solutions & Applications
        35: [], // Design & CRM
    };

    if (servicesData && servicesData.length > 0) {
        servicesData.forEach((service) => {
            if (service.active === true) {
                const switchValue = parseInt(service.SWITCH1); // Use SWITCH2 if needed
                if (!isNaN(switchValue) && groupedServices.hasOwnProperty(switchValue)) {
                    groupedServices[switchValue].push(service);
                }
            }
        });

        // 🔽 Sort each group by SortBy (1, 2, 3...)
        Object.keys(groupedServices).forEach((key) => {
            groupedServices[key].sort((a, b) => {
                const sortA = Number(a.SortBy) || 0;
                const sortB = Number(b.SortBy) || 0;
                return sortA - sortB;
            });
        });
    }

    return groupedServices;
};


    const groupedServices = groupServicesBySwitch();

    return (

        <header className="site_header site_header_2">
            <div className={`header_bottom stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}
                style={!isHomePage ? { backgroundColor: 'white',
                     color: 'black' // Add text color black
                } : {}}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* <div className="col-xl-3 col-lg-2 col-5">
                            <div className="site_logo">
                                <Link onClick={ClickHandler} className="site_link" href="/">
                                    <Image src={logo} alt="Site Logo – Corp-Digital – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                    <Image src={logo2} alt="Site Logo – Corp-Digital – IT Solutions & Technology, Business Consulting, Software Company Site Template" />
                                </Link>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-2 col-5">
   <div 
    className="site_logo" 
    style={{ 
      backgroundColor: '#ffffff', 
      padding: '10px', 
      borderRadius: '8px',
      width: '150px' // Reduced width
    }}
  >
    <Link onClick={ClickHandler} className="site_link" href="/">
      <Image 
        src={logo} 
        alt="Site Logo – Corp-Digital – IT Solutions & Technology"
        style={{ width: '180px', height: 'auto' }}
      />
    </Link>
    <div className="badge bg-danger-subtle text-danger"></div>
  </div>
</div>

                        <div className="col-xl-6 col-lg-7 col-2">
                            <nav className="main_menu navbar navbar-expand-lg">
                                <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                                    <ul className="main_menu_list unordered_list justify-content-center">
                                        <li><Link onClick={ClickHandler} href="/"
                                         style={!isHomePage ? { color: 'black' } : {}}
                                        >Home</Link></li>
                                        {/* <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Home
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="home_submenu">
                                                <li><Link onClick={ClickHandler} href="/">IT Solution</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home_software_company">Software Company</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home_business_consulting">Business Consulting</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="dropdown">
                                            <Link onClick={ClickHandler} className="nav-link" href="/" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                            style={!isHomePage ? { color: 'black' } : {}}>
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
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/Profile">
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
                                                                    {/* <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/portfolio_details/Explore-Our-IT-Solutions">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon4} alt="Event Tag SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Portfolio Details</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                Explore our work overview
                                                                            </span>
                                                                        </Link>
                                                                    </div> */}
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
                                                                    {/* <div className="col-lg-3 col-md-6">
                                                                        <Link onClick={ClickHandler} className="iconbox_block_2" href="/team-single/Atticus-Sterling">
                                                                            <span className="icon_title_wrap">
                                                                                <small className="iconbox_icon">
                                                                                    <Image src={icon6} alt="Users SVG Icon" />
                                                                                </small>
                                                                                <small className="iconbox_title">Team Details</small>
                                                                            </span>
                                                                            <span className="description mb-0">
                                                                                We are friendly Join our team
                                                                            </span>
                                                                        </Link>
                                                                    </div> */}
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
                                                                {/* <li>
                                                                    <Link onClick={ClickHandler} className="btn btn-primary" href="/contact">
                                                                        <span className="btn_label" data-text="Application">SOP</span>
                                                                        <span className="btn_icon">
                                                                            <i className="fa-solid fa-arrow-up-right"></i>
                                                                        </span>
                                                                    </Link>
                                                                </li> */}
                                                                {/* <li>
                                                                    <div className="review_short_info_2">
                                                                        <div className="review_admin_logo">
                                                                            <Image src={icon8} alt="Client Logo" />
                                                                        </div>
                                                                        <div className="review_info_content">
                                                                            <ul className="rating_block unordered_list">
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                            </ul>
                                                                            <div className="review_counter">From <b>200+</b> reviews</div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="review_short_info_2">
                                                                        <div className="review_admin_logo">
                                                                            <Image src={icon9} alt="Client Logo" />
                                                                        </div>
                                                                        <div className="review_info_content">
                                                                            <ul className="rating_block unordered_list">
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                                <li><i className="fa-solid fa-star fa-fw"></i></li>
                                                                            </ul>
                                                                            <div className="review_counter">From <b>200+</b> reviews</div>
                                                                        </div>
                                                                    </div>
                                                                </li> */}
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
                                            <Link
                                                onClick={ClickHandler}
                                                className="nav-link"
                                                href="/"
                                                id="services_submenu"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                style={!isHomePage ? { color: 'black' } : {}}
                                            >
                                                Services
                                            </Link>
                                            <div
                                                className="dropdown-menu mega_menu_wrapper p-0"
                                                aria-labelledby="services_submenu"
                                            >
                                                <div className="container">
                                                    <div className="row justify-content-lg-between">
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                {/* Software Services (SWITCH = 31) */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">
                                                                            Software Services
                                                                        </h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            {loading ? (
                                                                                <li>Loading...</li>
                                                                            ) : groupedServices[31] &&
                                                                              groupedServices[31].length > 0 ? (
                                                                                groupedServices[31].map(
                                                                                    (service) => (
                                                                                        <li key={service.ID}>
                                                                                            <Link
                                                                                                onClick={ClickHandler}
                                                                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                                                            >
                                                                                                <span className="icon_list_text">
                                                                                                    {service.WebEnglish}
                                                                                                </span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )
                                                                            ) : (
                                                                                <li>No services available</li>
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* IT Services (SWITCH = 32) */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">
                                                                            IT Services
                                                                        </h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            {loading ? (
                                                                                <li>Loading...</li>
                                                                            ) : groupedServices[32] &&
                                                                              groupedServices[32].length > 0 ? (
                                                                                groupedServices[32].map(
                                                                                    (service) => (
                                                                                        <li key={service.ID}>
                                                                                            <Link
                                                                                                onClick={ClickHandler}
                                                                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                                                            >
                                                                                                <span className="icon_list_text">
                                                                                                    {service.WebEnglish}
                                                                                                </span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )
                                                                            ) : (
                                                                                <li>No services available</li>
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* Management Services (SWITCH = 33) */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">
                                                                            Management Services
                                                                        </h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            {loading ? (
                                                                                <li>Loading...</li>
                                                                            ) : groupedServices[33] &&
                                                                              groupedServices[33].length > 0 ? (
                                                                                groupedServices[33].map(
                                                                                    (service) => (
                                                                                        <li key={service.ID}>
                                                                                            <Link
                                                                                                onClick={ClickHandler}
                                                                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                                                            >
                                                                                                <span className="icon_list_text">
                                                                                                    {service.WebEnglish}
                                                                                                </span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )
                                                                            ) : (
                                                                                <li>No services available</li>
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-3">
                                                                {/* Solutions & Application (SWITCH = 34) */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">
                                                                            Solutions & Application
                                                                        </h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            {loading ? (
                                                                                <li>Loading...</li>
                                                                            ) : groupedServices[34] &&
                                                                              groupedServices[34].length > 0 ? (
                                                                                groupedServices[34].map(
                                                                                    (service) => (
                                                                                        <li key={service.ID}>
                                                                                            <Link
                                                                                                onClick={ClickHandler}
                                                                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                                                            >
                                                                                                <span className="icon_list_text">
                                                                                                    {service.WebEnglish}
                                                                                                </span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )
                                                                            ) : (
                                                                                <li>No services available</li>
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* Solutions & Application (SWITCH = 35) */}
                                                                <div className="col-lg-4">
                                                                    <div className="megamenu_widget">
                                                                        <h3 className="megamenu_info_title">
                                                                          Data Management
                                                                        </h3>
                                                                        <ul className="icon_list unordered_list_block">
                                                                            {loading ? (
                                                                                <li>Loading...</li>
                                                                            ) : groupedServices[35] &&
                                                                              groupedServices[35].length > 0 ? (
                                                                                groupedServices[35].map(
                                                                                    (service) => (
                                                                                        <li key={service.ID}>
                                                                                            <Link
                                                                                                onClick={ClickHandler}
                                                                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                                                            >
                                                                                                <span className="icon_list_text">
                                                                                                    {service.WebEnglish}
                                                                                                </span>
                                                                                            </Link>
                                                                                        </li>
                                                                                    )
                                                                                )
                                                                            ) : (
                                                                                <li>No services available</li>
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                {/* Social Links */}
                                                                <div className="col-lg-4">
                                                                    <div
                                                                        className="social_area"
                                                                        style={{ padding: '20px', textAlign: 'center' }}
                                                                    >
                                                                        <ul
                                                                            className="social_icons_block unordered_list"
                                                                            data-text="Follow Us:"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    onClick={ClickHandler}
                                                                                    href="https://www.facebook.com/digital53/"
                                                                                    target="_blank"
                                                                                >
                                                                                    <i className="fa-brands fa-facebook-f"></i>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    onClick={ClickHandler}
                                                                                    href="https://www.linkedin.com/in/joharmandav/"
                                                                                    target="_blank"
                                                                                >
                                                                                    <i className="fa-brands fa-linkedin-in"></i>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    onClick={ClickHandler}
                                                                                    href={
                                                                                        'https://www.instagram.com/digitaledge.q8/'
                                                                                    }
                                                                                    target="_blank"
                                                                                >
                                                                                    <i className="fa-brands fa-instagram"></i>
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                        <p className="career_link m-0">
                                                                            Looking for new career?{' '}
                                                                            <Link onClick={ClickHandler} href="/">
                                                                                We're Hiring
                                                                            </Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <div
                                                                className="site_author bg-primary"
                                                                style={{ marginTop: '50px' }}
                                                            >
                                                                <div className="author_box">
                                                                    <div className="author_image bg-light">
                                                                        <Image src={icon10} alt="Site Author" />
                                                                    </div>
                                                                    <div className="author_box_content">
                                                                        <h3 className="author_name text-white">
                                                                            Johar Saifuddin
                                                                        </h3>
                                                                        <span className="author_designation text-white">
                                                                            CEO At Corp-Digital
                                                                        </span>
                                                                    </div>
                                                                    <div className="quote_icon">
                                                                        <Image src={icon11} alt="Quote Icon" />
                                                                    </div>
                                                                </div>
                                                                <p className="mb-0 text-white">
                                                                    Quality is the first priority at Digital Edge (DE)
                                                                    Solutions Inc. We are powered with Quality product
                                                                    and strive for Quality Service. We engaged with the
                                                                    best breed product in the world. We are working
                                                                    toward providing the Best solutions around the
                                                                    globe.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li><Link onClick={ClickHandler} href="/solutions">Solutions</Link></li> */}
                                      
                                        <li><Link onClick={ClickHandler} href="/blog"   style={!isHomePage ? { color: 'black' } : {}}>Blogs</Link></li>
                                       <li className="pos-menu-item" style={{ listStyle: 'none' }}>
  <Link 
    href="/POSTMBill" 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      gap: '12px', 
      textDecoration: 'none',
      width: '100%'
    }}
  >
    <span style={{ fontWeight: 500, ...(!isHomePage ? { color: 'black', hover: { color: 'green' } } : {}) }}
    >POS TMBill</span>

    <div style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    }}>
      <Image 
        src="https://tmbill.com/img/tmbill-logo.svg" 
        alt="POS System"
        width={28}
        height={28}
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  </Link>
</li>

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
    background: '#0b1735', // Dark background
    border: 'none',
    fontSize: '24px', // Slightly bigger
    padding: '12px 14px', // Bigger touch area
    cursor: 'pointer',
    color: 'white',
    borderRadius: '8px', // Soft rounded edges
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow
    transition: 'background 0.3s ease, transform 0.2s ease',
    position: 'fixed',
    top: '20px',
    right: '20px', // More space from the edge
    zIndex: 9999
  }}
  onMouseEnter={(e) => e.target.style.background = '#0d1a40'} // Hover effect
  onMouseLeave={(e) => e.target.style.background = '#0b1735'} // Reset on hover out
>
  {mobailActive ? '✕' : '☰'}
</button>
</li>
  </div>
  {/* Your existing button code */}
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

export default Header2;