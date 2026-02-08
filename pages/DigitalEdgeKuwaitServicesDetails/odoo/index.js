import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../../components/Header2/Header2";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/software-company-components/Footer/Footer";
import CtaSection from "../../../components/CtaSection/CtaSection";
import Image from "next/image";
import CountUp from "react-countup";
import Head from "next/head";

// Import images (using same as sample for now)
const discoveryImg = "/images/lifecycle/technical2.jpg";
const designDevImg = "/images/lifecycle/customization.jpg";
const testingQaImg = "/images/lifecycle/value.jpg";
const deploymentImg = "/images/lifecycle/partnership.jpg";
const discoverIcon = "/images/icons/icon_enterprise.svg";
const designIcon = "/images/icons/icon_design.svg";
const developIcon = "/images/icons/icon_development.svg";
const testIcon = "/images/icons/icon_test.svg";
const deployIcon = "/images/icons/icon_deploy.svg";
const maintainIcon = "/images/icons/icon_maintain.svg";

// Helper function to get responsive styles
const getResponsiveStyle = (baseStyle, responsiveStyles) => {
  if (typeof window === "undefined") {
    return baseStyle;
  }
  const width = window.innerWidth;
  let finalStyle = { ...baseStyle };

  if (width < 576 && responsiveStyles.xs) {
    finalStyle = { ...finalStyle, ...responsiveStyles.xs };
  } else if (width >= 576 && width < 768 && responsiveStyles.sm) {
    finalStyle = { ...finalStyle, ...responsiveStyles.sm };
  } else if (width >= 768 && width < 992 && responsiveStyles.md) {
    finalStyle = { ...finalStyle, ...responsiveStyles.md };
  } else if (width >= 992 && width < 1200 && responsiveStyles.lg) {
    finalStyle = { ...finalStyle, ...responsiveStyles.lg };
  } else if (width >= 1200 && responsiveStyles.xl) {
    finalStyle = { ...finalStyle, ...responsiveStyles.xl };
  }
  return finalStyle;
};

const OdooSolutionsPage = () => {
  const clickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Inline styles to prevent CSS conflicts
  const sectionStyle = {
    padding: "100px 0",
    backgroundColor: "#f8f9fa",
    marginBottom: "30px",
    borderRadius: "10px",
  };

  const darkSectionStyle = {
    padding: "100px 0",
    backgroundColor: "var(--bs-light)",
    color: "#ffffff",
    marginBottom: "30px",
    borderRadius: "10px",
  };

  const headingBlockStyle = {
    textAlign: "center",
    marginBottom: "60px",
  };

  const headingFocusTextStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#020842",
    display: "inline-block",
    marginRight: "10px",
  };

  const badgeStyle = {
    backgroundColor: "#0044EB",
    color: "white",
    padding: "8px 15px",
    borderRadius: "20px",
    fontSize: "1.8rem",
    verticalAlign: "middle",
  };

  const headingTextStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#020842",
    marginTop: "15px",
    marginBottom: "20px",
  };

  const headingDescriptionStyle = {
    fontSize: "1.1rem",
    color: "#6c757d",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  const contentBlockStyle = {
    padding: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const contentBlockDarkStyle = {
    padding: "30px",
    backgroundColor: "#020842",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    height: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const listItemStyle = {
    listStyleType: "none",
    marginBottom: "10px",
    display: "flex",
    alignItems: "flex-start",
  };

  const listIconStyle = {
    marginRight: "15px",
    color: "#0044EB",
    fontSize: "1.2rem",
    minWidth: "20px",
    textAlign: "center",
  };

  const listTextStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#495057",
  };

  const listTextDarkStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#e9ecef",
  };

  const cardStyle = {
    backgroundColor: "var(--bs-light)",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(212,34,34,0.08)",
    padding: "30px",
    marginBottom: "30px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "100%",
  };

  const cardIconWrapperStyle = {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#020842",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    flexShrink: 0,
  };

  const cardTitleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "var(--bs-secondary)",
  };

  const cardDescriptionStyle = {
    fontSize: "1rem",
    color: "#6c757d",
    lineHeight: "1.6",
  };

  const imageWrapperStyle = {
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
  };

  const thStyle = {
    backgroundColor: "var(--bs-primary)",
    color: "white",
    padding: "15px",
    textAlign: "left",
    fontSize: "1.1rem",
  };

  const tdStyle = {
    padding: "15px",
    borderBottom: "1px solid #dee2e6",
    color: "#495057",
    fontSize: "0.95rem",
  };

  const highlightedTdStyle = {
    backgroundColor: "#f0f8ff",
    fontWeight: "bold",
  };

  const bestPracticeStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "15px",
    fontSize: "1.05rem",
    color: "#343a40",
  };

  const checkIconStyle = {
    color: "var(--bs-success)",
    fontSize: "1.5rem",
    marginRight: "15px",
    flexShrink: 0,
  };

  const statsCounterStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "30px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    marginBottom: "20px",
  };

  const processStepStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const processNumberStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#020842",
    marginRight: "20px",
    minWidth: "50px",
    textAlign: "center",
  };

  const processTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#020842",
    marginBottom: "5px",
  };

  const processDescriptionStyle = {
    fontSize: "0.95rem",
    color: "#6c757d",
    lineHeight: "1.5",
  };

  // Responsive styles
  const responsiveHeadingFocusTextStyle = getResponsiveStyle(
    headingFocusTextStyle,
    {
      xs: { fontSize: "1.8rem" },
      sm: { fontSize: "2rem" },
    }
  );

  const responsiveBadgeStyle = getResponsiveStyle(badgeStyle, {
    xs: { fontSize: "1.2rem", padding: "6px 10px" },
    sm: { fontSize: "1.5rem" },
  });

  const responsiveHeadingTextStyle = getResponsiveStyle(headingTextStyle, {
    xs: { fontSize: "2rem" },
    sm: { fontSize: "2.5rem" },
  });

  const responsiveCardTitleStyle = getResponsiveStyle(cardTitleStyle, {
    xs: { fontSize: "1.4rem" },
    sm: { fontSize: "1.6rem" },
  });

  const responsiveContentBlockHeadingStyle = getResponsiveStyle(
    { ...headingTextStyle, color: "var(--bs-primary)" },
    {
      xs: { fontSize: "1.8rem" },
      sm: { fontSize: "2rem" },
    }
  );

  const responsiveListTextStyle = getResponsiveStyle(listTextStyle, {
    xs: { fontSize: "0.9rem" },
  });

  const responsiveTableThStyle = getResponsiveStyle(thStyle, {
    xs: { padding: "10px", fontSize: "0.9rem" },
  });

  const responsiveTableTdStyle = getResponsiveStyle(tdStyle, {
    xs: { padding: "10px", fontSize: "0.8rem" },
  });

  const responsiveProcessStepStyle = getResponsiveStyle(processStepStyle, {
    xs: { flexDirection: "column", textAlign: "center", padding: "15px" },
    sm: { flexDirection: "row", textAlign: "left" },
  });

  return (
    <Fragment>
      <Head>
        <title>Odoo Partnership Solutions | Corp-Digital</title>
        {/* Partnership Overview Section */}
        <meta
          name="description"
          content="ODOO Business in Kuwait, ODOO Business Kuwait, ODOO Implementor in Kuwait,ODOO Custom Implementation in Kuwait, ODOO ERP Kuwait, Best ODOO Programmers in Kuwait, ODOO Consulting Kuwait, شريك أودو في الكويت,  أودو الكويت, ودو الكويت,أفضل شركاء أودو في الكويت, حلول أودو للشركات الكويتية, تطبيق أودو الكويت, استشارات أودو الكويت, Be Partner with Corp-Digital for comprehensive Odoo ERP solutions with technical expertise, customization services, and long-term support."
        />
        <meta
          name="keywords"
          content="odoo Expertise , erp solutions, odoo customization, odoo implementation, business process optimization, odoo support"
        />
        <meta
          property="og:title"
          content="Odoo Customer Solutions | Corp-Digital"
        />
        <meta
          property="og:description"
          content="Leverage our Odoo expertise for customized ERP solutions that drive business growth and operational efficiency."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://corp.digital53.com/odoo"
        />
        <meta
          property="og:image"
          content="https://corp.digital53.com/images/odoo-partnership.png"
        />
        <link
          rel="canonical"
          href="https://corp.digital53.com/odoo"
        />
      </Head>
      <Header />
      <main style={{ backgroundColor: "#ffffff", overflowX: "hidden" }}>
        <PageTitle
          pageTitle={"ODOO Customization /  Maintenance"}
          pagesub={"ERP Solutions🚀"}
          pageTop={"Customized Odoo"}
        />
        {/* Solutions Overview Section */}
        <section style={{ ...sectionStyle, paddingBottom: "0" }}>
          <div className="container">
            <div style={headingBlockStyle}>
              <h1 style={responsiveHeadingFocusTextStyle}>
                Odoo <span style={responsiveBadgeStyle}>Customized Odoo</span>
              </h1>
              <h2
                style={{
                  ...responsiveHeadingTextStyle,
                  color: "var(--bs-dark)",
                }}
              >
                Comprehensive ERP Solutions for Business Growth
              </h2>
            </div>
            <div className="row justify-content-center">
              {[
                {
                  icon: maintainIcon,
                  title: "Technical Expertise",
                  description:
                    "Multi-module integration with custom development capabilities.",
                },
                {
                  icon: designIcon,
                  title: "Custom Solutions",
                  description:
                    "Tailored implementations for your specific business needs.",
                },
                {
                  icon: developIcon,
                  title: "Implement",
                  description:
                    "Seamless deployment with minimal business disruption.",
                },
                {
                  icon: testIcon,
                  title: "Quality Assurance",
                  description:
                    "Comprehensive testing and optimization processes.",
                },
                {
                  icon: deployIcon,
                  title: "Support & Training",
                  description:
                    "24/7 technical support with continuous education programs.",
                },
                {
                  icon: discoverIcon,
                  title: "Long-term Collaboration",
                  description:
                    "Ongoing maintenance and strategic growth planning.",
                },
              ].map((benefit, index) => (
                <div
                  className="col-lg-2 col-md-4 col-sm-6"
                  key={index}
                  style={{ marginBottom: "30px" }}
                >
                  <div
                    style={{
                      ...cardStyle,
                      minHeight: "260px",
                      transform: "scale(1)",
                      transition: "transform 0.3s ease,box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(0,0,0,0.18)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(0,0,0,0.08)";
                    }}
                  >
                    <div style={cardIconWrapperStyle}>
                      <Image
                        src={benefit.icon}
                        alt={`${benefit.title} Icon`}
                        width={40}
                        height={40}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h3 style={responsiveCardTitleStyle}>{benefit.title}</h3>
                    <p style={cardDescriptionStyle}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section style={sectionStyle}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div style={imageWrapperStyle}>
                  <Image
                    src={discoveryImg}
                    alt="Technical Expertise"
                    layout="responsive"
                    width={0}
                    height={450}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    ...contentBlockStyle,
                    marginTop: viewportWidth < 992 ? "30px" : "0",
                  }}
                >
                  <h2 style={responsiveContentBlockHeadingStyle}>
                    <span style={{ color: "var(--bs-primary)" }}>
                      Technical
                    </span>{" "}
                    Expertise & Capabilities
                  </h2>
                  <p style={cardDescriptionStyle}>
                    Our comprehensive technical expertise ensures seamless Odoo
                    implementation with advanced customizations tailored to your
                    business requirements.
                  </p>
                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "20px",
                    }}
                  >
                    Implementation Expertise:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-puzzle-piece"></i>
                      </span>
                      <span style={responsiveListTextStyle}>
                        <strong>Multi-module Integration:</strong> Seamless
                        integration of Sales, CRM, Inventory, Accounting, HR,
                        and Manufacturing modules
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-code"></i>
                      </span>
                      <span style={responsiveListTextStyle}>
                        <strong>Custom Development:</strong> Python-based
                        customizations, custom modules, and workflow automation
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-database"></i>
                      </span>
                      <span style={responsiveListTextStyle}>
                        <strong>Database Migration:</strong> Safe data migration
                        from legacy systems with minimal downtime
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-plug"></i>
                      </span>
                      <span style={responsiveListTextStyle}>
                        <strong>API Integration:</strong> Connect Odoo with
                        third-party applications and existing business tools
                      </span>
                    </li>
                  </ul>
                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "20px",
                    }}
                  >
                    Technical Specializations:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Industry-Specific Customizations for manufacturing,
                      retail, e-commerce, healthcare
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Advanced Reporting with custom dashboards and business
                      intelligence
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Mobile Solutions and Cloud & On-Premise Deployment options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Services Section */}
        <section style={darkSectionStyle}>
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div style={imageWrapperStyle}>
                  <Image
                    src={designDevImg}
                    alt="Customization Services"
                    layout="responsive"
                    width={700}
                    height={450}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    ...contentBlockDarkStyle,
                    marginTop: viewportWidth < 992 ? "30px" : "0",
                  }}
                >
                  <h2
                    style={{
                      ...responsiveContentBlockHeadingStyle,
                      color: "var(--bs-primary)",
                    }}
                  >
                    <span style={{ color: "var(--bs-secondary)" }}>
                      Customization
                    </span>{" "}
                    Services
                  </h2>
                  <p style={listTextDarkStyle}>
                    Transform your business processes with our comprehensive
                    customization services designed to optimize workflows and
                    enhance operational efficiency.
                  </p>
                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Business Process Optimization:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-search-plus"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Workflow Analysis:</strong> Comprehensive review
                        of existing business processes
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-cogs"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Custom Modules:</strong> Development of
                        specialized modules for unique business requirements
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-desktop"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>UI Customization:</strong> Tailored dashboards
                        and user experiences
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-robot"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Automation Solutions:</strong> Streamlined
                        processes through intelligent automation
                      </span>
                    </li>
                  </ul>
                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Configuration Services:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={{ ...bestPracticeStyle, color: "#e9ecef" }}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Multi-company Setup and Inter-company Transactions
                    </li>
                    <li style={{ ...bestPracticeStyle, color: "#e9ecef" }}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Country-specific Localization and Compliance
                    </li>
                    <li style={{ ...bestPracticeStyle, color: "#e9ecef" }}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Role-based Access Control and Security Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tiers Section */}
        <section style={sectionStyle}>
          <div className="container">
            <div style={headingBlockStyle}>
              <div style={responsiveHeadingFocusTextStyle}>
                Customization{" "}
                <span style={responsiveBadgeStyle}>Service Tiers</span>
              </div>
              <h2
                style={{
                  ...responsiveHeadingTextStyle,
                  color: "var(--bs-dark)",
                }}
              >
                Choose the Right Partnership Level
              </h2>
              <p style={headingDescriptionStyle}>
                Select from our flexible service tiers designed to meet
                businesses of all sizes and complexity levels.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={responsiveTableThStyle}>Service Level</th>
                      <th style={responsiveTableThStyle}>Features</th>
                      <th style={responsiveTableThStyle}>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          ...responsiveTableTdStyle,
                          ...highlightedTdStyle,
                        }}
                      >
                        Essential
                      </td>
                      <td style={responsiveTableTdStyle}>
                        Basic implementation, standard modules, email support
                      </td>
                      <td style={responsiveTableTdStyle}>
                        Small businesses, startups
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          ...responsiveTableTdStyle,
                          ...highlightedTdStyle,
                        }}
                      >
                        Professional
                      </td>
                      <td style={responsiveTableTdStyle}>
                        Custom modules, advanced integration, phone support
                      </td>
                      <td style={responsiveTableTdStyle}>
                        Growing companies, mid-market
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          ...responsiveTableTdStyle,
                          ...highlightedTdStyle,
                        }}
                      >
                        Enterprise
                      </td>
                      <td style={responsiveTableTdStyle}>
                        Full customization, dedicated support, strategic
                        consulting
                      </td>
                      <td style={responsiveTableTdStyle}>
                        Large enterprises, complex operations
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Methodology Section */}
        <section style={darkSectionStyle}>
          <div className="container">
            <div style={headingBlockStyle}>
              <div style={responsiveHeadingFocusTextStyle}>
                Implementation{" "}
                <span style={responsiveBadgeStyle}>Methodology</span>
              </div>
              <h2
                style={{
                  ...responsiveHeadingTextStyle,
                  color: "var(--bs-primary)",
                }}
              >
                Our Proven 4-Phase Approach
              </h2>
              <p style={headingDescriptionStyle}>
                We follow a structured methodology to ensure successful Odoo
                implementation with minimal business disruption and maximum
                value delivery.
              </p>
            </div>
            <div className="row">
              {[
                {
                  phase: "01",
                  title: "Discovery and Planning",
                  description:
                    "Business Requirements Analysis, Gap Analysis, and Project Timeline development with detailed implementation roadmap.",
                },
                {
                  phase: "02",
                  title: "Configuration and Development",
                  description:
                    "System Setup, Custom Development of specialized features, and secure Data Migration from existing systems.",
                },
                {
                  phase: "03",
                  title: "Testing and Training",
                  description:
                    "User Acceptance Testing, comprehensive Staff Training, and dedicated Go-Live Support during transition.",
                },
                {
                  phase: "04",
                  title: "Ongoing Collaboration",
                  description:
                    "Performance Monitoring, Feature Enhancement based on feedback, and Strategic Planning for long-term growth.",
                },
              ].map((phase, index) => (
                <div
                  className="col-lg-6 col-md-6"
                  key={index}
                  style={{ marginBottom: "30px" }}
                >
                  <div
                    style={{
                      ...responsiveProcessStepStyle,
                      backgroundColor: "#fff",
                      color: "#343a40",
                      minHeight: "160px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 10px rgba(0,0,0,0.05)";
                    }}
                  >
                    <div
                      style={{
                        ...processNumberStyle,
                        fontSize: viewportWidth < 576 ? "2rem" : "2.5rem",
                      }}
                    >
                      {phase.phase}
                    </div>
                    <div>
                      <h3
                        style={{
                          ...processTitleStyle,
                          fontSize: viewportWidth < 576 ? "1.3rem" : "1.5rem",
                        }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        style={{
                          ...processDescriptionStyle,
                          fontSize: viewportWidth < 576 ? "0.85rem" : "0.95rem",
                        }}
                      >
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section style={sectionStyle}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div style={imageWrapperStyle}>
                  <Image
                    src={testingQaImg}
                    alt="Value Proposition"
                    layout="responsive"
                    width={700}
                    height={450}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    ...contentBlockStyle,
                    marginTop: viewportWidth < 992 ? "30px" : "0",
                  }}
                >
                  <h2 style={responsiveContentBlockHeadingStyle}>
                    <span style={{ color: "var(--bs-primary)" }}>Value</span>{" "}
                    Proposition
                  </h2>
                  <p style={cardDescriptionStyle}>
                    Experience the Corp-Digital difference with our commitment
                    to technical excellence, business impact, and long-term
                    success.
                  </p>

                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "25px",
                    }}
                  >
                    Technical Excellence:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Certified Odoo developers with deep platform expertise
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Proven track record across multiple industries and
                      business sizes
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Commitment to best practices and code quality standards
                    </li>
                  </ul>

                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "25px",
                    }}
                  >
                    Business Impact:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Improved operational efficiency through process automation
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Enhanced visibility into business performance with
                      real-time reporting
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Reduced total cost of ownership through optimized
                      configurations
                    </li>
                  </ul>

                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "25px",
                    }}
                  >
                    Service Commitment:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Long-term relationship focus beyond initial implementation
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Proactive support and continuous improvement initiatives
                    </li>
                    <li style={bestPracticeStyle}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Strategic guidance for business growth and digital
                      transformation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Service Framework Section */}
        <section style={darkSectionStyle}>
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div style={imageWrapperStyle}>
                  <Image
                    src={deploymentImg}
                    alt="Long-term Service"
                    layout="responsive"
                    width={700}
                    height={450}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  style={{
                    ...contentBlockDarkStyle,
                    marginTop: viewportWidth < 992 ? "30px" : "0",
                  }}
                >
                  <h2
                    style={{
                      ...responsiveContentBlockHeadingStyle,
                      color: "var(--bs-primary)",
                    }}
                  >
                    <span style={{ color: "var(--bs-secondary)" }}>
                      Long-term
                    </span>{" "}
                    Partnership Framework
                  </h2>
                  <p style={listTextDarkStyle}>
                    Our partnership with the client extends far beyond
                    implementation, providing ongoing support and strategic
                    guidance to ensure your Odoo system continues to drive
                    business value.
                  </p>
                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Ongoing Support Structure:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-clock"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Immense Technical Support:</strong>{" "}
                        Round-the-clock assistance for critical business
                        operations
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-tools"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Regular System Maintenance:</strong> Proactive
                        monitoring, updates, and performance optimization
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-graduation-cap"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Training Programs:</strong> Continuous user
                        education and certification programs
                      </span>
                    </li>
                    <li style={listItemStyle}>
                      <span style={listIconStyle}>
                        <i className="fa-solid fa-chart-line"></i>
                      </span>
                      <span style={listTextDarkStyle}>
                        <strong>Quarterly Business Reviews:</strong> Strategic
                        planning sessions to align system growth with business
                        objectives
                      </span>
                    </li>
                  </ul>

                  <h4
                    style={{
                      ...responsiveCardTitleStyle,
                      fontSize: "1.5rem",
                      marginTop: "20px",
                      color: "white",
                    }}
                  >
                    Service Evolution:
                  </h4>
                  <ul style={{ paddingLeft: "0" }}>
                    <li style={{ ...bestPracticeStyle, color: "#e9ecef" }}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Scalability Planning for future growth and expansion
                    </li>
                    <li style={{ ...bestPracticeStyle, color: "#e9ecef" }}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Technology Roadmap aligned with Odoo's latest features
                    </li>
                    <li style={{ ...bestPracticeStyle, color: "#e9ecef" }}>
                      <span style={checkIconStyle}>
                        <i className="fa-solid fa-check-circle"></i>
                      </span>
                      Performance Monitoring and continuous optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section style={sectionStyle}>
          <div className="container">
            <div style={headingBlockStyle}>
              <div style={responsiveHeadingFocusTextStyle}>
                Solution <span style={responsiveBadgeStyle}>Success</span>
              </div>
              <h2
                style={{
                  ...responsiveHeadingTextStyle,
                  color: "var(--bs-dark)",
                }}
              >
                Measurable Results & Impact
              </h2>
              <p style={headingDescriptionStyle}>
                Our partnerships with client deliver tangible business outcomes
                and measurable improvements across key performance indicators.
              </p>
            </div>
            <div className="row">
              {[
                {
                  number: 150,
                  suffix: "+",
                  title: "Successful Implementations",
                  description: "Completed projects across various industries",
                },
                {
                  number: 98,
                  suffix: "%",
                  title: "Client Satisfaction Rate",
                  description: "Based on post-implementation surveys",
                },
                {
                  number: 40,
                  suffix: "%",
                  title: "Average Efficiency Gain",
                  description: "Process automation improvements",
                },
                {
                  number: 24,
                  suffix: "/7",
                  title: "Support Availability",
                  description: "Round-the-clock technical assistance",
                },
              ].map((stat, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div style={statsCounterStyle}>
                    <div
                      style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#020842",
                        marginBottom: "10px",
                        ...(viewportWidth < 576 && { fontSize: "2.5rem" }),
                      }}
                    >
                      <CountUp end={stat.number} duration={2} />
                      {stat.suffix}
                    </div>
                    <h4
                      style={{
                        ...responsiveCardTitleStyle,
                        fontSize: "1.3rem",
                        marginBottom: "10px",
                        ...(viewportWidth < 576 && { fontSize: "1.1rem" }),
                      }}
                    >
                      {stat.title}
                    </h4>
                    <p
                      style={{
                        ...cardDescriptionStyle,
                        fontSize: "0.9rem",
                        ...(viewportWidth < 576 && { fontSize: "0.8rem" }),
                      }}
                    >
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section style={darkSectionStyle}>
          <div className="container">
            <div style={headingBlockStyle}>
              <div style={responsiveHeadingFocusTextStyle}>
                Get <span style={responsiveBadgeStyle}>Started</span>
              </div>
              <h2
                style={{
                  ...responsiveHeadingTextStyle,
                  color: "var(--bs-primary)",
                }}
              >
                Begin Your Odoo Client Partnership Journey
              </h2>
              <p style={headingDescriptionStyle}>
                Starting your Odoo partnership with Digital Edge Solution is
                straightforward and structured to ensure the best possible
                outcome for your business.
              </p>
            </div>
            <div className="row">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description:
                    "Discuss your business requirements, objectives, and current challenges in a comprehensive discovery session.",
                  icon: "fa-comments",
                },
                {
                  step: "02",
                  title: "Proposal Development",
                  description:
                    "Receive a customized solution proposal with detailed timeline, pricing, and implementation strategy.",
                  icon: "fa-file-alt",
                },
                {
                  step: "03",
                  title: "C Agreement",
                  description:
                    "Formalize the long-term partnership framework with clear deliverables and success metrics.",
                  icon: "fa-handshake",
                },
                {
                  step: "04",
                  title: "Project Initiation",
                  description:
                    "Begin the implementation process with dedicated project management and expert technical teams.",
                  icon: "fa-rocket",
                },
              ].map((step, index) => (
                <div
                  className="col-lg-6 col-md-6"
                  key={index}
                  style={{ marginBottom: "30px" }}
                >
                  <div
                    style={{
                      ...contentBlockDarkStyle,
                      backgroundColor: "#fff",
                      color: "#343a40",
                      minHeight: "200px",
                      position: "relative",
                      paddingLeft: "80px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(0,0,0,0.2)";
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "30px",
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#020842",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.5rem",
                      }}
                    >
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        left: "30px",
                        top: "90px",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#020842",
                      }}
                    >
                      {step.step}
                    </div>
                    <h3
                      style={{
                        ...processTitleStyle,
                        fontSize: viewportWidth < 576 ? "1.3rem" : "1.5rem",
                        marginBottom: "15px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        ...processDescriptionStyle,
                        fontSize: viewportWidth < 576 ? "0.85rem" : "0.95rem",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-12 text-center" style={{ marginTop: "40px" }}>
                <a
                  href="/contact"
                  style={{
                    backgroundColor: "var(--bs-primary)",
                    color: "white",
                    padding: "15px 30px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0,68,235,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "var(--bs-secondary)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(0,68,235,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--bs-primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(0,68,235,0.3)";
                  }}
                  onClick={clickHandler}
                >
                  Start Your Solution Journey
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OdooSolutionsPage;
