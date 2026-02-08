import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "/public/images/services/odoo.jpg";

const ErpSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const services = [
    {
      id: 1,
      title: "ERP Odoo",
      subtitle: "Enterprise Resource Planning",
      image: "/images/services/odoo.jpg",
      slug: "DigitalEdgeKuwaitServicesDetails/odoo",
    },
    {
      id: 2,
      title: "CRM Tally",
      subtitle: "Accounting & Finance",
      image: "/images/services/tally.jpg", // Monochrome image
      slug: "DigitalEdgeKuwaitServicesDetails/tally",
    },
    {
      id: 3,
      title: "Digital ERP53 Core CRM",
      subtitle: "Customer Relationship Management",
      image: "/images/services/core-crm.jpg", // Monochrome image
      slug: "services/CRMSolutionsAndDesign",
    },
    {
      id: 4,
      title: "Digital POS53",
      subtitle: "Point of Sale System",
      image: "/images/services/pos53-2.jpg", // Monochrome image
      slug: "pos-53",
    },
    {
      id: 5,
      title: "Hospital Information System(HIS)",
      subtitle: "Healthcare Management",
      image: "/images/services/hms.jpg", // Monochrome image
      slug: "digital-hms",
    },
    {
      id: 6,
      title: "Digital Help Desk for Hospitals",
      subtitle: "Hospital Support System",
      image: "/images/services/hospital.jpg", // Monochrome image
      slug: "digital-help-desk",
    },
    {
      id: 7,
      title: "Digital CRM53 Core Application",
      subtitle: "Core CRM Solution",
      image: "/images/services/core-crm-3.jpg", // Monochrome image
      slug: "digital-crm53-core",
    },
    {
      id: 8,
      title: "Digital Laundry System",
      subtitle: "Laundry Management",
      image: "/images/services/laundry.jpg", // Monochrome image
      slug: "/services/POSLaundary",
    },
    {
      id: 9,
      title: "Digital Recruitment Portal",
      subtitle: "HR & Recruitment",
      image: "/images/services/hr.jpg", // Monochrome image
      slug: "digital-recruitment-portal",
    },
    {
      id: 10,
      title: "Salon Cloud Application",
      subtitle: "One Solution for all Salon & SPA",
      image: "/images/services/hr.jpg", // Monochrome image
      slug: "/services/SalonCloudApplication",
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

export default ErpSection;
