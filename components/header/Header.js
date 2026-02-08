import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu/MobileMenu";

// Icons and Images
import icon1 from "/public/images/icons/icon_wifi.svg";
import icon2 from "/public/images/icons/icon_dollar_2.svg";
import icon3 from "/public/images/icons/icon_chart.svg";
import icon4 from "/public/images/icons/icon_tag_2.svg";
import icon5 from "/public/images/icons/icon_user_2.svg";
import icon6 from "/public/images/icons/icon_users.svg";
import icon7 from "/public/images/icons/icon_pen.svg";
import icon10 from "/public/images/avatar/CEO.png";
import icon11 from "/public/images/icons/icon_quote.svg";
import logo from "/public/images/site_logo/kuwait_digital.jpeg";
import logo2 from "/public/images/site_logo/kuwait_digital2.png";
import cases from "/public/images/case/case_image_4.webp";

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site_header site_header_1">
      {/* Header Top */}
      <div className="header_top text-center"></div>

      {/* Header Bottom */}
      <div
        className={`header_bottom stricky ${
          isSticky ? "stricked-menu stricky-fixed !z-50" : "!z-50"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="col-xl-3 col-lg-2 col-5">
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" href="/">
                  <Image
                    src={logo}
                    alt="Site Logo – Corp-Digital – IT Solutions & Technology"
                    className="w-[180px] h-auto relative z-50"
                  />
                </Link>
                <div className="badge bg-danger-subtle text-danger"></div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul className="main_menu_list unordered_list justify-content-center">
                    <li>
                      <Link onClick={ClickHandler} href="/">
                        Home
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Company
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-9">
                              <div className="megamenu_pages_wrapper mb-5">
                                <div className="row">
                                  {/* Company Links */}
                                  {[
                                    {
                                      href: "/about",
                                      icon: icon1,
                                      title: "About Us",
                                      description:
                                        "Learn more about Corp-Digital",
                                    },
                                    {
                                      href: "/Who_we_are",
                                      icon: icon1,
                                      title: "Who we Are",
                                      description: "Learn Who We Are",
                                    },
                                    {
                                      href: "/goal",
                                      icon: icon1,
                                      title: "Goal And Mission",
                                      description: "Why We Do This",
                                    },
                                    {
                                      href: "/pricing",
                                      icon: icon2,
                                      title: "Our Pricing",
                                      description: "Streamlined Pricing",
                                    },
                                    {
                                      href: "/Profile",
                                      icon: icon3,
                                      title: "Portfolio",
                                      description: "Explore our all overview",
                                    },
                                    {
                                      href: "/team",
                                      icon: icon5,
                                      title: "Team",
                                      description:
                                        "We are friendly Join our team",
                                    },
                                    {
                                      href: "/service",
                                      icon: icon6,
                                      title: "Profile Download",
                                      description: "Download our profile",
                                    },
                                    {
                                      href: "/contact",
                                      icon: icon7,
                                      title: "Contact Us",
                                      description: "Get in touch with us",
                                    },
                                  ].map((item, index) => (
                                    <div
                                      className="col-lg-3 col-md-6"
                                      key={index}
                                    >
                                      <Link
                                        onClick={ClickHandler}
                                        className="iconbox_block_2"
                                        href={item.href}
                                      >
                                        <span className="icon_title_wrap">
                                          <small className="iconbox_icon">
                                            <Image
                                              src={item.icon}
                                              alt={`${item.title} Icon`}
                                            />
                                          </small>
                                          <small className="iconbox_title">
                                            {item.title}
                                          </small>
                                        </span>
                                        <span className="description mb-0">
                                          {item.description}
                                        </span>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {/* Buttons */}
                              <ul className="btns_group p-0 unordered_list justify-content-start">
                                {[
                                  "Free Consultation",
                                  "IT Consultation",
                                  "Mobile App",
                                  "Upgrading SOP",
                                ].map((text, index) => (
                                  <li key={index}>
                                    <Link
                                      onClick={ClickHandler}
                                      className="btn btn-primary"
                                      href="/service"
                                    >
                                      <span
                                        className="btn_label"
                                        data-text={text}
                                      >
                                        {text}
                                      </span>
                                      <span className="btn_icon">
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* CEO Section */}
                            <div className="col-lg-3">
                              <div className="site_author bg-primary">
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
                                  Quality is the first priority at Digital Edge
                                  (DE) Solutions Inc. We are powered with
                                  Quality product and strive for Quality
                                  Service. We engaged with the best breed
                                  product in the world. We are working toward
                                  providing the Best solutions around the
                                  globe..
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
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Software Services
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={"/services/[id]"}
                                          as={`/services/BusinessApplicationDevLifeCycle`}
                                        >
                                          <span className="icon_list_text">
                                            Business Application Development
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/MobileAPPDevelopment`}
                                        >
                                          <span className="icon_list_text">
                                            Mobile APP Development
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/IntegratingwithyourMainSystem`}
                                        >
                                          <span className="icon_list_text">
                                            Integrating with your Main System
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/Website`}
                                        >
                                          <span className="icon_list_text">
                                            Website Development
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/SEOSERVICES`}
                                        >
                                          <span className="icon_list_text">
                                            SEO
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Management Services
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/SOP_StandardOperationProcedure_Services`}
                                        >
                                          <span className="icon_list_text">
                                            SOP (Standard Operation Procedure)
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/DisasterRecoveryPlanning`}
                                        >
                                          <span className="icon_list_text">
                                            Disaster Recovery Planning
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/ITManagementServices`}
                                        >
                                          <span className="icon_list_text">
                                            IT Management Services
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/ConsultingServices`}
                                        >
                                          <span className="icon_list_text">
                                            Consulting Services
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/BusinessAnalysis`}
                                        >
                                          <span className="icon_list_text">
                                            Business Analysis
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/ResilienceServices`}
                                        >
                                          <span className="icon_list_text">
                                            Resilience Services
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Data Services
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      {/* <li>
                                                                                <Link onClick={ClickHandler} href="https://corp.digital53.com/DataManagement.aspx">
                                                                                    <span className="icon_list_text">Data Management</span>
                                                                                </Link>
                                                                            </li> */}
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/DataWarehousing`}
                                        >
                                          <span className="icon_list_text">
                                            Data Warehousing
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/DataMigration`}
                                        >
                                          <span className="icon_list_text">
                                            Data Migration
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/DataTrackingSecurity`}
                                        >
                                          <span className="icon_list_text">
                                            Data Tracking Security
                                          </span>
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
                                    <h3 className="megamenu_info_title">
                                      IT services
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      {/* <li>
                                                                                <Link onClick={ClickHandler} href={`/services/${2}`}>
                                                                                    <span className="icon_list_text">IT Services</span>
                                                                                </Link>
                                                                            </li> */}
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/ITServicesManagement`}
                                        >
                                          <span className="icon_list_text">
                                            IT Services Management
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/InformationSystemsSecurityServices`}
                                        >
                                          <span className="icon_list_text">
                                            Information Systems Security
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/ITSupport`}
                                        >
                                          <span className="icon_list_text">
                                            IT Support
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/ITSolutions`}
                                        >
                                          <span className="icon_list_text">
                                            IT Solutions
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="megamenu_widget">
                                    <h3 className="megamenu_info_title">
                                      Design & CRM
                                    </h3>
                                    <ul className="icon_list unordered_list_block">
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/CRMSolutionsAndDesign`}
                                        >
                                          <span className="icon_list_text">
                                            CRM Solutions and Design
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/UI_UXDesignServices`}
                                        >
                                          <span className="icon_list_text">
                                            UI/UX Design Services
                                          </span>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          onClick={ClickHandler}
                                          href={`/services/HOSTING_SOLUTIONS`}
                                        >
                                          <span className="icon_list_text">
                                            Hosting Solutions
                                          </span>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div
                                    className="social_area"
                                    style={{
                                      padding: "20px",
                                      textAlign: "center",
                                    }}
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
                                      {/* <li>
                                                                                <Link onClick={ClickHandler} href="/">
                                                                                    <i className="fa-brands fa-twitter"></i>
                                                                                </Link>
                                                                            </li> */}
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
                                            "https://www.instagram.com/digitaledge.q8/"
                                          }
                                          target="_blank"
                                        >
                                          <i className="fa-brands fa-instagram"></i>
                                        </Link>
                                      </li>
                                      {/* <li>
                                                                                <Link onClick={ClickHandler} href="/">
                                                                                    <i className="fa-brands fa-dribbble"></i>
                                                                                </Link>
                                                                            </li> */}
                                    </ul>
                                    <p className="career_link m-0">
                                      Looking for new career?{" "}
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
                                style={{ marginTop: "50px" }}
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
                                  Quality is the first priority at Digital Edge
                                  (DE) Solutions Inc. We are powered with
                                  Quality product and strive for Quality
                                  Service. We engaged with the best breed
                                  product in the world. We are working toward
                                  providing the Best solutions around the globe.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <Link href="/POSTMBill">POS</Link>
                    </li>
                    {/* <li><Link onClick={ClickHandler} href="/solutions">Solutions</Link></li> */}
                    <li>
                      <Link onClick={ClickHandler} href="/blog">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/FaqErp">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="col-xl-3 col-lg-3 col-5">
              <div
                className="mobile-only"
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "10px",
                  background: "#0b1735",
                  color: "white",
                  padding: "8px",
                  zIndex: 9999,
                }}
              >
                <li
                  style={{
                    listStyle: "none",
                    position: "relative",
                    zIndex: 9999,
                  }}
                >
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    style={{
                      background: "#0b1735",
                      border: "none",
                      fontSize: "24px",
                      padding: "12px 14px",
                      cursor: "pointer",
                      color: "white",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                      transition: "background 0.3s ease, transform 0.2s ease",
                      position: "fixed",
                      top: "20px",
                      right: "20px",
                      zIndex: 9999,
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#0d1a40")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#0b1735")
                    }
                  >
                    {mobailActive ? "✕" : "☰"}
                  </button>
                </li>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                <MobileMenu />
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
