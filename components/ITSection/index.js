import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "/public/images/services/odoo.jpg";

const ITSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const services = [
    {
      id: 1,
      title: "IT Solutions",
      subtitle: "Best IT Solutions kuwait",
      image: "/images/services/odoo.jpg",
      slug: "services/ITSolutions",
    },
    {
      id: 2,
      title: "IT Services Management",
      subtitle: "IT Services Kuwait",
      image: "/images/services/tally.jpg", // Monochrome image
      slug: "services/ITServicesManagement",
    },
    {
      id: 3,
      title: "Turnkey Solutions",
      subtitle: "Turnkey Solutions Kuwait",
      image: "/images/services/core-crm.jpg", // Monochrome image
      slug: "services/TurnkeySolutions",
    },
    {
      id: 4,
      title: "Information System Security Services",
      subtitle: "Best Information SystemsSecurity Services",
      image: "/images/services/pos53-2.jpg", // Monochrome image
      slug: "services/InformationSystemsSecurityServices",
    },
    {
      id: 5,
      title: "IT Solutions",
      subtitle: "Professional IT Solutions Kuwait",
      image: "/images/services/hms.jpg", // Monochrome image
      slug: "services/ITSolutions",
    },
    {
      id: 6,
      title: "Hosting Solutions",
      subtitle: "Best Hosting Solutions",
      image: "/images/services/hospital.jpg", // Monochrome image
      slug: "services/HOSTING_SOLUTIONS",
    },
    
  ];

  const containerStyle = {
    padding: "80px 0",
    backgroundColor: "#f8fafc",
  };

  const headingBlockStyle = {
    textAlign: "center",
    marginBottom: "60px",
  };

  const headingTextStyle = {
    fontSize: "48px",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const serviceBlockStyle = {
    height: "300px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "20px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
    backgroundColor: "transparent",
  };

  const serviceImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  };

  const serviceContentStyle = {
    position: "absolute",
    zIndex: 2,
    color: "white",
    textAlign: "center",
  };

  const serviceTitleStyle = {
    fontSize: "30px",
    fontWeight: "900",
    marginBottom: "8px",
  };

  const serviceSubtitleStyle = {
    fontSize: "14px",
    marginBottom: "20px",
  };

  return (
    <section style={containerStyle}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={headingBlockStyle}>
          <h2 style={headingTextStyle}>Featured Services</h2>
        </div>

        <div style={gridStyle}>
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/${service.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={serviceBlockStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={serviceImageStyle}
                />
                <div style={serviceContentStyle}>
                  <h2 style={serviceTitleStyle}>{service.title}</h2>
                  <p style={serviceSubtitleStyle}>{service.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSection;
