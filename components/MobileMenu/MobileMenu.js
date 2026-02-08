import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { Grid } from "@mui/material";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Company",
    link: "/about",
    submenu: [
      { id: 21, title: "About Us", link: "/about" },
      { id: 26, title: "Team", link: "/team" },
      { id: 27, title: "Profile", link: "/Profile" },
    ],
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
    submenu: [
      {
        id: 31,
        title: "Business Application Development",
        link: "/services/BusinessApplicationDevLifeCycle",
      },
      {
        id: 32,
        title: "Mobile APP Development",
        link: "/services/MobileAPPDevelopment",
      },
      {
        id: 33,
        title: "Integrating with your Main System",
        link: "/services/IntegratingwithyourMainSystem",
      },
      { id: 34, title: "Website Development", link: "/services/Website" },
      { id: 35, title: "SEO", link: "/services/SEOSERVICES" },
      // Management Services
      {
        id: 36,
        title: "SOP (Standard Operation Procedure)",
        link: "/services/SOP_StandardOperationProcedure_Services",
      },
      {
        id: 37,
        title: "Disaster Recovery Planning",
        link: "/services/DisasterRecoveryPlanning",
      },
      {
        id: 38,
        title: "IT Management Services",
        link: "/services/ITManagementServices",
      },
      {
        id: 39,
        title: "Consulting Services",
        link: "/services/ConsultingServices",
      },
      {
        id: 310,
        title: "Business Analysis",
        link: "/services/BusinessAnalysis",
      },
      {
        id: 311,
        title: "Resilience Services",
        link: "/services/ResilienceServices",
      },
      // Data Services
      { id: 313, title: "Data Warehousing", link: "/services/DataWarehousing" },
      { id: 314, title: "Data Migration", link: "/services/DataMigration" },
      {
        id: 315,
        title: "Data Tracking Security",
        link: "/services/DataTrackingSecurity",
      },
      // IT Services
      {
        id: 318,
        title: "IT Services Management",
        link: "/services/ITServicesManagement",
      },
      {
        id: 319,
        title: "Information Systems Security",
        link: "/services/InformationSystemsSecurityServices",
      },
      { id: 320, title: "IT Support", link: "/services/ITSupport" },
      { id: 321, title: "IT Solutions", link: "/services/ITSolutions" },
      // Design & CRM
      {
        id: 322,
        title: "CRM Solutions and Design",
        link: "/services/CRMSolutionsAndDesign",
      },
      {
        id: 323,
        title: "UI/UX Design Services",
        link: "/services/UI_UXDesignServices",
      },
      {
        id: 324,
        title: "Hosting Solutions",
        link: "/services/HOSTING_SOLUTIONS",
      },
    ],
  },
  {
    id: 4,
    title: "Solutions",
    link: "/services",
    submenu: [
      { id: 101, title: "ERP Solutions", link: "/DigitalEdgeKuwaitServicesDetails" },
      { id: 126, title: "Ecommerce Solutions", link: "/ecommerce" },
      { id: 127, title: "POS Tmbill", link: "/POSTMBill" },
      { id: 127, title: "Solutions Overview", link: "/services" },
    ],
  },
  {
    id: 7,
    title: "FAQs",
    link: "/FaqErp",
  },
  {
    id: 8,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 9,
    title: "Blogs",
    link: "/blog",
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <ul className="main_menu_list clearfix" style={{ padding: 0, margin: 0 }}>
      {menus.map((item, mn) => {
        return (
          <ListItem
            className={item.id === openId ? "active" : null}
            key={mn}
            style={{
              padding: 0,
              margin: 0,
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            {item.submenu ? (
              <Fragment>
                <div
                  onClick={() => setOpenId(item.id === openId ? 0 : item.id)}
                  style={{
                    padding: "15px 20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontWeight: "500",
                    fontSize: "16px",
                    backgroundColor:
                      item.id === openId ? "#f8f9fa" : "transparent",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <span>{item.title}</span>
                  <i
                    className={
                      item.id === openId ? "fa fa-angle-up" : "fa fa-angle-down"
                    }
                    style={{ fontSize: "18px" }}
                  ></i>
                </div>
                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                  <div
                    style={{
                      maxHeight: "70vh",
                      overflowY: "auto",
                      WebkitOverflowScrolling: "touch",
                      backgroundColor: "#f8f9fa",
                      padding: "10px 20px",
                    }}
                  >
                    {item.title === "Services" ? (
                      <Grid container spacing={2}>
                        {/* Software Services */}
                        <Grid item xs={6}>
                          <div
                            style={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              fontSize: "14px",
                              color: "#2c3e50",
                              paddingBottom: "5px",
                              borderBottom: "2px solid #0044eb",
                            }}
                          >
                            Software Services
                          </div>
                          {item.submenu.slice(0, 5).map((submenu, i) => (
                            <div
                              key={i}
                              style={{
                                marginBottom: "8px",
                              }}
                            >
                              <Link
                                onClick={ClickHandler}
                                href={submenu.link}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  textDecoration: "none",
                                  color: "#333",
                                  fontSize: "14px",
                                  borderRadius: "4px",
                                  transition: "background-color 0.2s ease",
                                  backgroundColor: "rgba(0, 68, 235, 0.05)",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.05)";
                                }}
                              >
                                {submenu.title}
                              </Link>
                            </div>
                          ))}
                        </Grid>

                        {/* Management Services */}
                        <Grid item xs={6}>
                          <div
                            style={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              fontSize: "14px",
                              color: "#2c3e50",
                              paddingBottom: "5px",
                              borderBottom: "2px solid #0044eb",
                            }}
                          >
                            Management Services
                          </div>
                          {item.submenu.slice(5, 11).map((submenu, i) => (
                            <div
                              key={i}
                              style={{
                                marginBottom: "8px",
                              }}
                            >
                              <Link
                                onClick={ClickHandler}
                                href={submenu.link}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  textDecoration: "none",
                                  color: "#333",
                                  fontSize: "14px",
                                  borderRadius: "4px",
                                  transition: "background-color 0.2s ease",
                                  backgroundColor: "rgba(0, 68, 235, 0.05)",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.05)";
                                }}
                              >
                                {submenu.title}
                              </Link>
                            </div>
                          ))}
                        </Grid>

                        {/* Data Services */}
                        <Grid item xs={6}>
                          <div
                            style={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              fontSize: "14px",
                              color: "#2c3e50",
                              paddingBottom: "5px",
                              borderBottom: "2px solid #0044eb",
                            }}
                          >
                            Data Services
                          </div>
                          {item.submenu.slice(11, 15).map((submenu, i) => (
                            <div
                              key={i}
                              style={{
                                marginBottom: "8px",
                              }}
                            >
                              <Link
                                onClick={ClickHandler}
                                href={submenu.link}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  textDecoration: "none",
                                  color: "#333",
                                  fontSize: "14px",
                                  borderRadius: "4px",
                                  transition: "background-color 0.2s ease",
                                  backgroundColor: "rgba(0, 68, 235, 0.05)",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.05)";
                                }}
                              >
                                {submenu.title}
                              </Link>
                            </div>
                          ))}
                        </Grid>

                        {/* IT Services */}
                        <Grid item xs={6}>
                          <div
                            style={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              fontSize: "14px",
                              color: "#2c3e50",
                              paddingBottom: "5px",
                              borderBottom: "2px solid #0044eb",
                            }}
                          >
                            IT Services
                          </div>
                          {item.submenu.slice(15, 19).map((submenu, i) => (
                            <div
                              key={i}
                              style={{
                                marginBottom: "8px",
                              }}
                            >
                              <Link
                                onClick={ClickHandler}
                                href={submenu.link}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  textDecoration: "none",
                                  color: "#333",
                                  fontSize: "14px",
                                  borderRadius: "4px",
                                  transition: "background-color 0.2s ease",
                                  backgroundColor: "rgba(0, 68, 235, 0.05)",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.05)";
                                }}
                              >
                                {submenu.title}
                              </Link>
                            </div>
                          ))}
                        </Grid>

                        {/* Design & CRM */}
                        <Grid item xs={6}>
                          <div
                            style={{
                              fontWeight: "bold",
                              marginBottom: "10px",
                              fontSize: "14px",
                              color: "#2c3e50",
                              paddingBottom: "5px",
                              borderBottom: "2px solid #0044eb",
                            }}
                          >
                            Design & CRM
                          </div>
                          {item.submenu.slice(19).map((submenu, i) => (
                            <div
                              key={i}
                              style={{
                                marginBottom: "8px",
                              }}
                            >
                              <Link
                                onClick={ClickHandler}
                                href={submenu.link}
                                style={{
                                  display: "block",
                                  padding: "8px 12px",
                                  textDecoration: "none",
                                  color: "#333",
                                  fontSize: "14px",
                                  borderRadius: "4px",
                                  transition: "background-color 0.2s ease",
                                  backgroundColor: "rgba(0, 68, 235, 0.05)",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.backgroundColor =
                                    "rgba(0, 68, 235, 0.05)";
                                }}
                              >
                                {submenu.title}
                              </Link>
                            </div>
                          ))}
                        </Grid>
                      </Grid>
                    ) : (
                      // Regular list for other submenus
                      item.submenu.map((submenu, i) => (
                        <div
                          key={i}
                          style={{
                            marginBottom: "8px",
                          }}
                        >
                          <Link
                            onClick={ClickHandler}
                            href={submenu.link}
                            style={{
                              display: "block",
                              padding: "10px 15px",
                              textDecoration: "none",
                              color: "#333",
                              fontSize: "14px",
                              borderRadius: "4px",
                              transition: "background-color 0.2s ease",
                              backgroundColor: "rgba(0, 68, 235, 0.05)",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor =
                                "rgba(0, 68, 235, 0.1)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor =
                                "rgba(0, 68, 235, 0.05)";
                            }}
                          >
                            {submenu.title}
                          </Link>
                        </div>
                      ))
                    )}
                  </div>
                </Collapse>
              </Fragment>
            ) : (
              <Link
                className="active"
                href={item.link}
                style={{
                  display: "block",
                  padding: "15px 20px",
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "500",
                  fontSize: "16px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8f9fa";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                {item.title}
              </Link>
            )}
          </ListItem>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
