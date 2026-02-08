import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import MobileMenu from "../MobileMenu/MobileMenu";

// Global event system for data refresh
const createEventBus = () => {
  const listeners = {};

  return {
    on: (event, callback) => {
      if (!listeners[event]) {
        listeners[event] = [];
      }
      listeners[event].push(callback);
    },
    emit: (event, data) => {
      if (listeners[event]) {
        listeners[event].forEach((callback) => callback(data));
      }
    },
    off: (event, callback) => {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter((cb) => cb !== callback);
      }
    },
  };
};

// Global event bus instance
export const eventBus = createEventBus();

// Import your icons
import icon1 from "/public/images/icons/icon_wifi.svg";
import icon2 from "/public/images/icons/icon_dollar.svg";
import icon3 from "/public/images/icons/icon_chart.svg";
import icon4 from "/public/images/icons/icon_phone.svg";
import icon5 from "/public/images/icons/icon_user_check.svg";
import icon6 from "/public/images/icons/icon_code.svg";
import icon7 from "/public/images/icons/icon_monitor.svg";
import icon8 from "/public/images/clients/client_logo_9.webp";
import icon9 from "/public/images/clients/client_logo_10.webp";
import logo from "/public/images/site_logo/kuwait_digital.jpeg";

const Header2 = (props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [servicesData, setServicesData] = useState([]);

  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const fetchServicesData = useCallback(async () => {
    try {
      const response = await fetch("/api/services");
      if (response.ok) {
        const data = await response.json();
        setServicesData(data);
        console.log("Fetched services data:", data);
      } else {
        // Fallback to external API if local API fails
        const externalResponse = await fetch(
          "https://newsysapi.crm53.com/api/Common/GetWebData?TenantID=1&WebSiteID=1"
        );
        const externalData = await externalResponse.json();
        setServicesData(externalData);
        console.log("Fetched external services data:", externalData);
      }
    } catch (err) {
      console.error("Error fetching services:", err);
      // Try external API as fallback
      try {
        const externalResponse = await fetch(
          "https://newsysapi.crm53.com/api/Common/GetWebData?TenantID=1&WebSiteID=1"
        );
        const externalData = await externalResponse.json();
        setServicesData(externalData);
      } catch (externalErr) {
        console.error("External API also failed:", externalErr);
      }
    }
  }, []);

  const handleSync = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.get(
        "https://newsysapi.crm53.com/api/Common/GetWebData"
      );
      setMessage(res.data.message || "Sync successful!");

      // Emit global refresh event
      eventBus.emit("dataRefreshed", { timestamp: Date.now() });

      // Refresh local data after sync
      setTimeout(() => {
        fetchServicesData();
      }, 1000);
    } catch (err) {
      setMessage("Sync failed. Check logs.");
      console.error("Sync error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServicesData();

    // Listen for data refresh events
    const handleDataRefresh = () => {
      fetchServicesData();
    };

    eventBus.on("dataRefreshed", handleDataRefresh);

    // Sticky header logic
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      eventBus.off("dataRefreshed", handleDataRefresh);
    };
  }, [fetchServicesData]);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Group services by SWITCH value
  const groupServicesBySwitch = () => {
    // First, detect what SWITCH1 values actually exist
    const availableSwitchValues = [
      ...new Set(servicesData.map((service) => service.SWITCH1)),
    ];
    console.log("🔍 Available SWITCH1 values:", availableSwitchValues);
    console.log("🔍 Total services data:", servicesData);

    const groupedServices = {};

    // Initialize groups for all available switch values
    availableSwitchValues.forEach((switchValue) => {
      if (switchValue) {
        groupedServices[switchValue] = [];
      }
    });

    if (servicesData && servicesData.length > 0) {
      servicesData.forEach((service) => {
        // Check if service is active (handle both boolean true and numeric 1)
        const isActive =
          service.active === true ||
          service.active === 1 ||
          service.active === undefined;
        if (isActive) {
          const switchValue = service.SWITCH1;
          if (switchValue && groupedServices.hasOwnProperty(switchValue)) {
            groupedServices[switchValue].push(service);
            console.log(
              `✅ Added service "${service.WebSiteShortName}" to category SWITCH1=${switchValue}`
            );
          } else {
            console.log(
              `❌ Service "${service.WebSiteShortName}" has SWITCH1=${switchValue} but category not found`
            );
          }
        } else {
          console.log(
            `❌ Service "${service.WebSiteShortName}" is not active (active=${service.active})`
          );
        }
      });

      // Sort each group by SortBy
      Object.keys(groupedServices).forEach((key) => {
        groupedServices[key].sort((a, b) => {
          const sortA = Number(a.SortBy) || 0;
          const sortB = Number(b.SortBy) || 0;
          return sortA - sortB;
        });
      });
    }

    console.log("🔍 Final grouped services:", groupedServices);
    return groupedServices;
  };

  const groupedServices = groupServicesBySwitch();

  // Helper function to get category display name
  const getCategoryDisplayName = (categoryKey) => {
    const categoryNames = {
      1: "Primary Services",
      2: "Secondary Services",
      3: "Tertiary Services",
      4: "Quaternary Services",
      5: "Quinary Services",
      31: "Software Services",
      32: "IT Services",
      33: "Management Services",
      34: "Solutions & Applications",
      35: "Data Management",
      36: "Additional Services",
      Banner: "Banner Services",
      BannerInne: "Banner Inner Services",
    };
    return categoryNames[categoryKey] || `Category ${categoryKey}`;
  };

  // Helper function to get category icon
  const getCategoryIcon = (categoryKey) => {
    const iconMap = {
      1: icon1, // Wifi icon for primary
      2: icon2, // Dollar icon for secondary
      3: icon3, // Chart icon for tertiary
      4: icon4, // Phone icon for quaternary
      5: icon5, // User check icon for quinary
      31: icon6, // Code icon for software
      32: icon7, // Monitor icon for IT
      33: icon3, // Chart icon for management
      34: icon1, // Wifi icon for solutions
      35: icon5, // User check icon for design
      36: icon2, // Dollar icon for additional services
      Banner: icon2, // Dollar icon for banner
      BannerInne: icon4, // Phone icon for banner inner
    };
    return iconMap[categoryKey] || icon1; // Default to wifi icon
  };

  return (
    <header className="site_header site_header_2 !z-50">
      <div
        className={`header_bottom stricky ${
          isSticky ? "stricked-menu stricky-fixed !z-50" : "!z-50"
        }`}
        style={
          !isHomePage ? { backgroundColor: "transparent", color: "white" } : {}
        }
      >
        <div className="container !z-50">
          <div className="row align-items-center !z-50">
            <div className="col-xl-3 col-lg-2 col-5 !z-50">
              <div
                className="site_logo"
                style={{
                  backgroundColor: "#ffffff",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "150px",
                  zIndex: "50 !important",
                }}
              >
                <Link onClick={handleSync} className="site_link" href="/">
                  <Image
                    src={logo}
                    alt="Site Logo – Corp-Digital – IT Solutions & Technology"
                    className="w-[180px] h-auto relative !z-50"
                  />
                </Link>
                <div className="badge bg-danger-subtle text-danger"></div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 col-2">
              <nav className="main_menu navbar navbar-expand-lg">
                <div
                  className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                  id="main_menu_dropdown"
                >
                  <ul
                    className="main_menu_list unordered_list justify-content-center"
                    style={{
                      flexWrap: "nowrap",
                      gap: "15px",
                      display: "flex",
                      alignItems: "center",
                      margin: "0",
                      padding: "0",
                      listStyle: "none",
                    }}
                  >
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/about"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        Company
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div
                            className="row"
                            style={{ justifyContent: "center" }}
                          >
                            <div
                              className="col-lg-9"
                              style={{ margin: "0 auto" }}
                            >
                              <div className="megamenu_pages_wrapper mb-3">
                                <div
                                  className="row"
                                  style={{ justifyContent: "center" }}
                                >
                                  <div
                                    className="col-lg-4 col-md-8"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/about"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon1}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          About Us
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Learn More About Corp-Digital
                                      </span>
                                    </Link>
                                  </div>
                                  <div
                                    className="col-lg-4 col-md-8"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/team"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon5}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Our Team
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Meet Our Expert Team
                                      </span>
                                    </Link>
                                  </div>
                                  <div
                                    className="col-lg-4 col-md-8"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/Profile"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon3}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Profile
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Explore Our Profile
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={!isHomePage ? { color: "black" } : {}}
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
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/about"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon1}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          About Us
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Learn more about Corp-Digital
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/about"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon1}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Who we Are
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Learn Who We Are
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/about"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon1}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Goal And Mission
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Why We Do This
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/pricing"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon2}
                                            alt="Dollar SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Our Pricing
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Streamlined Pricing
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/portfolio"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon3}
                                            alt="Chart SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Portfolio
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Explore our all overview
                                      </span>
                                    </Link>
                                  </div>
                                  <div className="col-lg-3 col-md-6">
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/team"
                                    >
                                      <span className="iconbox_icon">
                                        <Image
                                          src={icon5}
                                          alt="User Check SVG Icon"
                                        />
                                      </span>
                                      <span className="iconbox_title">
                                        Team
                                      </span>
                                      <span className="description mb-0">
                                        Meet Our Team
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}

                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="/"
                        id="services_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        Services
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="services_submenu"
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12">
                              <div
                                className="megamenu_pages_wrapper"
                                style={{ padding: "30px 0" }}
                              >
                                {/* Services in 5 columns plus Follow Us column - exactly like the image */}
                                <div className="row" style={{ margin: "0" }}>
                                  {/* Software Services Column */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      Software Services
                                    </h6>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        borderRight: "1px solid #e0e0e0",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      {groupedServices["31"] &&
                                        groupedServices["31"].map(
                                          (service, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                marginBottom: "12px",
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                style={{
                                                  color: "#0b1735",
                                                  textDecoration: "none",
                                                  fontSize: "14px",
                                                  fontWeight: "500",
                                                  display: "block",
                                                  transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                  (e.target.style.color =
                                                    "#007bff")
                                                }
                                                onMouseLeave={(e) =>
                                                  (e.target.style.color =
                                                    "#0b1735")
                                                }
                                              >
                                                {service.WebSiteShortName}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>

                                  {/* IT Services Column */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      IT Services
                                    </h6>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        borderRight: "1px solid #e0e0e0",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      {groupedServices["32"] &&
                                        groupedServices["32"].map(
                                          (service, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                marginBottom: "12px",
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                style={{
                                                  color: "#0b1735",
                                                  textDecoration: "none",
                                                  fontSize: "14px",
                                                  fontWeight: "500",
                                                  display: "block",
                                                  transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                  (e.target.style.color =
                                                    "#007bff")
                                                }
                                                onMouseLeave={(e) =>
                                                  (e.target.style.color =
                                                    "#0b1735")
                                                }
                                              >
                                                {service.WebSiteShortName}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>

                                  {/* Management Services Column */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      Management Services
                                    </h6>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        borderRight: "1px solid #e0e0e0",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      {groupedServices["33"] &&
                                        groupedServices["33"].map(
                                          (service, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                marginBottom: "12px",
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                style={{
                                                  color: "#0b1735",
                                                  textDecoration: "none",
                                                  fontSize: "14px",
                                                  fontWeight: "500",
                                                  display: "block",
                                                  transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                  (e.target.style.color =
                                                    "#007bff")
                                                }
                                                onMouseLeave={(e) =>
                                                  (e.target.style.color =
                                                    "#0b1735")
                                                }
                                              >
                                                {service.WebSiteShortName}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>

                                  {/* Solutions & Applications Column */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      Solutions & Applications
                                    </h6>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        borderRight: "1px solid #e0e0e0",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      {groupedServices["34"] &&
                                        groupedServices["34"].map(
                                          (service, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                marginBottom: "12px",
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                style={{
                                                  color: "#0b1735",
                                                  textDecoration: "none",
                                                  fontSize: "14px",
                                                  fontWeight: "500",
                                                  display: "block",
                                                  transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                  (e.target.style.color =
                                                    "#007bff")
                                                }
                                                onMouseLeave={(e) =>
                                                  (e.target.style.color =
                                                    "#0b1735")
                                                }
                                              >
                                                {service.WebSiteShortName}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>

                                  {/* Data Management Column */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      Data Management
                                    </h6>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        borderRight: "1px solid #e0e0e0",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      {groupedServices["35"] &&
                                        groupedServices["35"].map(
                                          (service, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                marginBottom: "12px",
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                style={{
                                                  color: "#0b1735",
                                                  textDecoration: "none",
                                                  fontSize: "14px",
                                                  fontWeight: "500",
                                                  display: "block",
                                                  transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                  (e.target.style.color =
                                                    "#007bff")
                                                }
                                                onMouseLeave={(e) =>
                                                  (e.target.style.color =
                                                    "#0b1735")
                                                }
                                              >
                                                {service.WebSiteShortName}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>

                                  {/* Additional Services Column (SWITCH1 = 36) */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      Additional Services
                                    </h6>
                                    <ul
                                      style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        borderRight: "1px solid #e0e0e0",
                                        paddingRight: "15px",
                                      }}
                                    >
                                      {groupedServices["36"] &&
                                        groupedServices["36"].map(
                                          (service, index) => (
                                            <li
                                              key={index}
                                              style={{
                                                marginBottom: "12px",
                                                lineHeight: "1.4",
                                              }}
                                            >
                                              <Link
                                                onClick={ClickHandler}
                                                href={`/services/${service.WebSitePageSubSerial}`}
                                                style={{
                                                  color: "#0b1735",
                                                  textDecoration: "none",
                                                  fontSize: "14px",
                                                  fontWeight: "500",
                                                  display: "block",
                                                  transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) =>
                                                  (e.target.style.color =
                                                    "#007bff")
                                                }
                                                onMouseLeave={(e) =>
                                                  (e.target.style.color =
                                                    "#0b1735")
                                                }
                                              >
                                                {service.WebSiteShortName}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>

                                  {/* Follow Us & Career Column */}
                                  <div
                                    className="col-lg-2 col-md-4 col-sm-6"
                                    style={{ padding: "0 15px" }}
                                  >
                                    <h6
                                      style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "#0b1735",
                                        marginBottom: "20px",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      Follow Us:
                                    </h6>
                                    <div>
                                      {/* Social Media Icons */}
                                      <div
                                        style={{
                                          display: "flex",
                                          gap: "15px",
                                          marginBottom: "20px",
                                          alignItems: "center",
                                        }}
                                      >
                                        <a
                                          href="#"
                                          style={{
                                            color: "#1877f2",
                                            fontSize: "24px",
                                            fontWeight: "bold",
                                            textDecoration: "none",
                                            width: "32px",
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#f8f9fa",
                                            borderRadius: "4px",
                                          }}
                                        >
                                          f
                                        </a>
                                        <a
                                          href="#"
                                          style={{
                                            color: "#0077b5",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            textDecoration: "none",
                                            width: "32px",
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#f8f9fa",
                                            borderRadius: "4px",
                                          }}
                                        >
                                          in
                                        </a>
                                        <a
                                          href="#"
                                          style={{
                                            color: "#000",
                                            fontSize: "20px",
                                            textDecoration: "none",
                                            width: "32px",
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: "#f8f9fa",
                                            borderRadius: "4px",
                                          }}
                                        >
                                          📷
                                        </a>
                                      </div>
                                      <p
                                        style={{
                                          color: "#0b1735",
                                          fontSize: "14px",
                                          margin: "0 0 12px 0",
                                          fontWeight: "500",
                                          lineHeight: "1.4",
                                        }}
                                      >
                                        Looking for new career?
                                      </p>
                                      <Link
                                        href="/careers"
                                        style={{
                                          color: "#007bff",
                                          textDecoration: "underline",
                                          fontSize: "14px",
                                          fontWeight: "600",
                                          transition: "color 0.2s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                          (e.target.style.color = "#0056b3")
                                        }
                                        onMouseLeave={(e) =>
                                          (e.target.style.color = "#007bff")
                                        }
                                      >
                                        We're Hiring
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                {/* View All Services Link */}
                                <div
                                  className="row"
                                  style={{ marginTop: "30px" }}
                                >
                                  <div className="col-12 text-center">
                                    <Link
                                      onClick={ClickHandler}
                                      href="/services"
                                      className="btn btn-primary"
                                      style={{
                                        padding: "12px 24px",
                                        borderRadius: "6px",
                                        textDecoration: "none",
                                        display: "inline-block",
                                        backgroundColor: "#007bff",
                                        border: "1px solid #007bff",
                                        color: "white",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        transition: "all 0.3s ease",
                                      }}
                                      onMouseEnter={(e) => {
                                        e.target.style.backgroundColor =
                                          "#0056b3";
                                        e.target.style.borderColor = "#0056b3";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.target.style.backgroundColor =
                                          "#007bff";
                                        e.target.style.borderColor = "#007bff";
                                      }}
                                    >
                                      View All Services
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* <li>
                                <Link
                                onClick={ClickHandler}
                                href="/services"
                                style={!isHomePage ? { color: "black" } : {}}
                                >
                                Solutions
                                </Link>
                              </li> */}
                    <li className="dropdown">
                      <Link
                        onClick={ClickHandler}
                        className="nav-link"
                        href="#"
                        id="company_submenu"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        Solutions
                      </Link>
                      <div
                        className="dropdown-menu mega_menu_wrapper"
                        aria-labelledby="company_submenu"
                      >
                        <div className="container">
                          <div
                            className="row"
                            style={{ justifyContent: "center" }}
                          >
                            <div
                              className="col-lg-9"
                              style={{ margin: "0 auto" }}
                            >
                              <div className="megamenu_pages_wrapper mb-2">
                                <div
                                  className="row"
                                  style={{ justifyContent: "center" }}
                                >
                                  <div
                                    className="col-lg-3 col-md-4"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/DigitalEdgeKuwaitServicesDetails"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon1}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          ERP Solutions
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Streamline Your Business Processes
                                      </span>
                                    </Link>
                                  </div>
                                  <div
                                    className="col-lg-3 col-md-4"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/ecommerce"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon2}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          eCommerce Solutions
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Boost Your Online Sales
                                      </span>
                                    </Link>
                                  </div>
                                  <div
                                    className="col-lg-3 col-md-4"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/POSTMBill"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon6}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          POS Tmbill
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Efficient Point of Sale Solutions
                                      </span>
                                    </Link>
                                  </div>
                                  <div
                                    className="col-lg-3 col-md-4"
                                    style={{
                                      display: "inline-block",
                                      float: "none",
                                    }}
                                  >
                                    <Link
                                      onClick={ClickHandler}
                                      className="iconbox_block_2"
                                      href="/services"
                                    >
                                      <span className="icon_title_wrap">
                                        <small className="iconbox_icon">
                                          <Image
                                            src={icon3}
                                            alt="Wifi SVG Icon"
                                          />
                                        </small>
                                        <small className="iconbox_title">
                                          Solutions Overview
                                        </small>
                                      </span>
                                      <span className="description mb-0">
                                        Discover Our Comprehensive Solutions
                                      </span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                                <Link
                                onClick={ClickHandler}
                                href="/DigitalEdgeKuwaitServicesDetails"
                                style={!isHomePage ? { color: "black" } : {}}
                                >
                                ERP
                                </Link>
                              </li>
                              <li>
                                <Link
                                onClick={ClickHandler}
                                href="/DigitalEdgeKuwaitServicesDetails"
                                style={!isHomePage ? { color: "black" } : {}}
                                >
                                eCommerce
                                </Link>
                              </li> */}
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/FaqErp"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/contact"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/blog"
                        style={!isHomePage ? { color: "white" } : {}}
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="col-xl-3 col-lg-3 col-5">
              <div className="header_action_btns d-flex justify-content-end">
                <button
                  className="mobile_menu_btn d-lg-none"
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
                    zIndex: 9999,
                    marginLeft: "auto",
                  }}
                  onMouseEnter={(e) => (e.target.style.background = "#0d1a40")}
                  onMouseLeave={(e) => (e.target.style.background = "#0b1735")}
                >
                  {mobailActive ? "✕" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mobail-wrap d-lg-none">
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

      {/* Loading and message indicators */}
      {loading && (
        <div
          className="sync-loading"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            background: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          Syncing data...
        </div>
      )}

      {message && (
        <div
          className="sync-message"
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 9999,
            background: message.includes("successful") ? "#28a745" : "#dc3545",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {message}
        </div>
      )}
    </header>
  );
};

export default Header2;
