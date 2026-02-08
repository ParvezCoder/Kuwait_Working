"use client"

import { useState } from "react"
import { color, motion } from "framer-motion"
import { FaWhatsapp, FaChevronRight, FaPlay } from "react-icons/fa"
import { Fragment } from "react"
import Head from "next/head"
import Image from "next/image"
import LogoCarousel from "../../components/logo-carousel"

import Header from '../../components/Header2/Header2';
import Footer from '../../components/software-company-components/Footer/Footer';

export default function POSTMBill() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  // Client logos data
  const clientLogos = [
    { name: "OneBite", src: "https://www.onebite.co.in/logo.png" },
    { name: "Arsalan", src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/VXEQnDzQrqcR9XGv830y_white-logo.png" },
    { name: "Pramod", src: "https://pramodshop.com/images/logo.png" },
    {
      name: "Alkauser",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvHBIKrhMb9yC-Xq4dVX4-yhX-NgnSArGFQ&s",
    },
    {
      name: "Chanderlok",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN9m769CuD6UQQqdFBNJUeQ_In0e0SqMrSg&s",
    },
    { name: "Bombay Kulfi", src: "https://www.smergers.com/media/franchiselogos/logo.jfif" },
    {
      name: "Cheesy Chunks",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDh9NOLJf-YKDn7GgfoPo4KiutBVfky5Df0Q&s",
    },
    {
      name: "Lazzetti",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJax8iy0GyxYeaovpFv3IL29CEQ60rc5pUxg&s",
    },
    {
      name: "Burger Lounge",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2K9ge5ysvX1Mu1XXIh8gGjq9icAKZcGzuw&s",
    },
    {
      name: "South Indian",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTWUWDsZSpSzgsCKXHEoF1fMBYLXpNvOv3w&s",
    },
    { name: "Balandosa", src: "https://media-cdn.tripadvisor.com/media/photo-s/09/4e/17/ad/balan-dosa.jpg" },
  ]

  const platforms = [
    {
      name: "Android",
      logo: "https://images.vexels.com/media/users/3/139556/isolated/svg/1718a076e29822051df8bcf8b5ce1124.svg",
    },
    {
      name: "iOS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_ps_PWPSsQ0ZeX7Zsqvtu_30qFYpdmW-0g&s",
    },
    {
      name: "Windows",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg/2321px-Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg.png",
    },
  ]

  // Partner logos data
  const partnerLogos = [
    { name: "Just Eat", src: "https://images.seeklogo.com/logo-png/40/1/just-eat-logo-png_seeklogo-408326.png" },
    {
      name: "Radyes",
      src: "https://cdn.prod.website-files.com/6527c8f52546312f94ae6d0c/6674bf75001d114a740cc0ba_elements_logos_updated-16.png",
    },
    { name: "Dunzo", src: "https://i.pinimg.com/736x/a9/f5/dc/a9f5dcbdf4c13010bae0aef643de2c06.jpg" },
    {
      name: "Magicpin",
      src: "https://play-lh.googleusercontent.com/EUiBXsdRNoyJekWgG_mNsqdcVa6V6KVQOqCpL7DIuFKW93paqzKZizEezRLjzbMkpA",
    },
    {
      name: "Thrive",
      src: "https://www.shutterstock.com/image-vector/human-thrive-logo-design-vektor-260nw-1706957020.jpg",
    },
    {
      name: "Tpsale",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR37lbMT9POkBcqtamSgfcqJh5D4tkSN-eIHA&s",
    },
    {
      name: "UPI",
      src: "https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png?f=webp",
    },
    {
      name: "PhonePe",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCMMm1o1RmcTLaofZAWNdEEGhSccXNuvMDw&s",
    },
    { name: "Swiggy", src: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg" },
    {
      name: "Zomato",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLa2X3zXtN8OjQ5uWn7XVJpAj3ZazuOsa4A&s",
    },
    {
      name: "Tally",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0T9yBBwHIRj3TAAWtzF2CnCyitaTMtRkK8A&s",
    },
    {
      name: "ONDC",
      src: "https://media.licdn.com/dms/image/v2/D560BAQFKjLHS3s4E6Q/company-logo_200_200/company-logo_200_200/0/1724214913401/open_network_for_digital_commerce_logo?e=2147483647&v=beta&t=auQOFK9RjoFwcdeBQzP64zTdMU7TOqUhKxmwmFXOTdo",
    },
  ]

  const integrations = [
    {
      name: "Swiggy",
      logoUrl:
        "https://w7.pngwing.com/pngs/1012/115/png-transparent-swiggy-office-online-food-ordering-coupon-bangalore-business-business-text-service-orange-thumbnail.png",
    },
    {
      name: "Zomato",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLa2X3zXtN8OjQ5uWn7XVJpAj3ZazuOsa4A&s",
    },
    {
      name: "Dunzo",
      logoUrl: "https://static.thearcweb.com/images/PROD/PROD-2756afa5-910a-4aa8-a657-8d3db61e0a83.jpg",
    },
    {
      name: "Google Pay",
      logoUrl: "https://images.seeklogo.com/logo-png/33/3/google-pay-logo-png_seeklogo-334912.png",
    },
    {
      name: "Paytm",
      logoUrl:
        "https://play-lh.googleusercontent.com/IWU8HM1uQuW8wVrp6XpyOOJXvb_1tDPUDAOfkrl83RZPG9Ww3dCY9X1AV6T1atSvgXc",
    },
  ]

  const styles = {
    // Base styles
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 16px",
    },
    section: {
      padding: "64px 0",
    },
    grid: {
      display: "grid",
      gap: "48px",
      alignItems: "center",
    },
    gridLg2: {
      gridTemplateColumns: "repeat(1, 1fr)",
      "@media (min-width: 1024px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
    },
    button: {
      padding: "12px 24px",
      borderRadius: "8px",
      border: "none",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s",
      textDecoration: "none",
      display: "inline-block",
      textAlign: "center",
    },
    buttonPrimary: {
      backgroundColor: "#059669",
      color: "white",
    },
    buttonSecondary: {
      backgroundColor: "white",
      color: "#059669",
      border: "1px solid #059669",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      border: "1px solid #d1d5db",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
      transition: "border-color 0.2s",
    },
    card: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
  }

  return (
    <Fragment>
      <style jsx>{`
        /* Hero Section Layout */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 400px;
          }
        }

        .hero-content {
          order: 1;
        }

        .hero-form {
          order: 2;
          background-color: white;
          border-radius: 8px;
          padding: 32px;
          color: #374151;
        }

        /* Flip Tables Faster Section */
        .flip-tables-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
        }

        @media (min-width: 768px) {
          .flip-tables-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .flip-tables-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Restaurant Operating System Layout */
        .restaurant-system-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .restaurant-system-grid {
            grid-template-columns: 500px 1fr;
          }
        }

        .restaurant-system-image {
          position: relative;
          order: 1;
        }

        .restaurant-system-content {
          order: 2;
        }

        /* Company Highlights Layout */
        .company-highlights-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .company-highlights-container {
            grid-template-columns: 2fr 3fr;
          }
        }

        .company-highlights-stats {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .company-highlights-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .company-highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 200px;
          justify-content: center;
        }

        /* Just What You Need Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
        }

        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Additional utility classes */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .section-padding {
          padding: 64px 0;
        }

        .card-style {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .input-style {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.2s;
        }

        .input-style:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
        }

        .button-primary {
          background-color: #059669;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .button-primary:hover {
          background-color: #047857;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .platform-integration-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 24px;
        }

        @media (min-width: 768px) {
          .platform-integration-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .integration-box {
          background-color: #f9fafb;
          padding: 16px;
          border-radius: 8px;
        }

        .logo-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .logo-flex-with-text {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
      <Head>
        <title>Service | Corp-Digital</title>
        <meta
          name="description"
          content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow."
        />
        <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
        <meta property="og:title" content="POS Service by Digital Edge Solutions Made in Kuwait,Bilingual POS System Made in Kuwait, Local POS software Kuwait,Arabic English POS Kuwait, Kuwait-made POS system, Dual language POS Kuwait,POS system for Kuwaiti businesses,POS system Arabic/English Kuwait,نظام نقاط البيع ثنائي اللغة الكويت, برنامج نقاط البيع محلي الصنع الكويت, برمجيات نقاط البيع كويتية, نظام نقاط البيع عربي انجليزي الكويت,برنامج نقاط البيع للشركات الكويتية,جهاز نقاط بيع ثنائي اللغة الكويت,Restaurant POS Kuwait,Cloud POS Kuwait,Best POS Kuwait,Retail POS Kuwait,POS Software Kuwait,Kuwait POS provider,Multi-store POS Kuwait,Bilingual POS Kuwait,Inventory management POS Kuwait,POS system for restaurants Kuwait,Kuwait POS integration (Tally, Xero, QuickBooks, Microsoft Dynamics),نظام نقاط البيع الكويت,أفضل نظام نقاط البيع الكويت,برنامج نقاط البيع الكويت,نقاط البيع للمطاعم الكويت, نقاط البيع السحابية الكويت,مزود نظام نقاط البيع الكويت,برمجيات نقاط البيع الكويت, نظام نقاط البيع متعدد اللغات الكويت,نظام نقاط البيع متعدد الفروع الكويت, إدارة المخزون عبر نقاط البيع الكويت,نقاط بيع التجزئة الكويت,نظام نقاط البيع للفنادق والمطاعم الكويت" />
        <meta
          property="og:description"
          content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://corp.digital53.com/service" />
        <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with
        actual image URL
        <link rel="canonical" href="https://corp.digital53.com/service" />
      </Head>
      <Header />

      <div style={{ backgroundColor: "white", minHeight: "100vh", marginTop: "60px" }}>
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            background: "linear-gradient(to right, #111827, #374151)",
            color: "white",
            padding: "80px 0",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/b9d212f92b2d308b19b9c6b8af5047ad.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div style={{ position: "relative", ...styles.container }}>
            <div className="hero-grid">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="hero-content"
              >
                <h1
                  style={{
                    fontSize: "2.5rem",
                    "@media (min-width: 1024px)": { fontSize: "3rem" },
                    fontWeight: "bold",
                    marginBottom: "16px",
                    lineHeight: "1.2",
                  }}
                >
                  Restaurant Management Software in <span style={{ color: "#10b981" }}>Kuwait</span>
                </h1>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "24px" }}>"Technology for Restaurants"</h3>

                <div style={{ marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p>
                    From Billing to Stock Management. Captain Ordering App to Kitchen Display Systems. Customer Loyalty
                    Programs to Integrated Feedback App. Third Party-Online ordering Integration to Online Ordering
                    Website All on a Single Platform.
                  </p>
                  <p>
                    Built specially for{" "}
                    <span style={{ color: "#10b981" }}>Restaurants, Pubs, Bars, Cafes, QSRs, Cake,</span> Bakery and{" "}
                    <span style={{ color: "#10b981" }}>Ice-Cream Shops.</span>
                  </p>
                  <p>Automate your restaurant operations & manage your business efficiently!</p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
  {[
    {
      text: "Watch Pacific POS Demo",
      link: "https://www.youtube.com/playlist?list=PLOsLk94aH-q4iMHq00XHv3Fv2ck4WR3Fz",
    },
    {
      text: "Watch Mobile POS Demo",
      link: "https://www.youtube.com/watch?v=1lV_foI2QYw&list=PLOsLk94aH-q7lhMh7GB8gXP6XeJw6nIZJ&index=9&t=1s",
    },
    {
      text: "Watch Atlantic POS with Online Integration Demo",
      link: "https://www.youtube.com/watch?v=aeLn9tUwA5Q&feature=youtu.be",
    },
  ].map(({ text, link }, index) => (
    <motion.a
      key={index}
      href={link}
      target="_blank" // optional: opens in new tab
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: "#059669",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        fontWeight: 500,
        textDecoration: "none",
        display: "inline-block",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#047857")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#059669")}
    >
      {text}
    </motion.a>
  ))}
</div>

              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hero-form"
                style={{ backgroundColor: "white", borderRadius: "8px", padding: "32px", color: "#374151" }}
                
              >
                <h5
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    textAlign: "center",
                    marginBottom: "24px",
                  }}
                >
                  Join 10000+ Restaurants Who are using TMBill's Tools to Grow their Business.
                </h5>

                <form onSubmit={handleSubmit} className="form-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-style"
                    required
                  />
                  <input
                    type="text"
                    name="restaurantName"
                    placeholder="Restaurant Name"
                    value={formData.restaurantName}
                    onChange={handleInputChange}
                    className="input-style"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-style"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile / Whatsapp number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-style"
                    required
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button-primary"
                     style={{
  backgroundColor: "#059669",
  color: "white",
  padding: "12px 24px",
  borderRadius: "8px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.2s"
}}

                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#047857")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#059669")}
                  >
                    Request for Demo
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <LogoCarousel
          logos={clientLogos}
          title="Our Clients"
          autoPlayInterval={3000}
          itemsToShow={{ base: 2, sm: 3, md: 4, lg: 6 }}
        />

        {/* Video Demo Section */}
        <section className="section-padding" style={{ backgroundColor: "#f9fafb" }}>
          <div className="section-container">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "48px" }}
            >
              <h3 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "32px" }}>
                Flip Tables Faster. Impress With An Outstanding Experience.
              </h3>
<div style={{ position: "relative", display: "inline-block", marginBottom: "32px" }}>
  <motion.a
    href="https://youtu.be/dPCewBN7ZPg?si=BgBFAnz_AatLy3f5" // replace with your actual link
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{
      backgroundColor: "#059669",
      color: "white",
      borderRadius: "50%",
      padding: "24px",
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#047857")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#059669")}
  >
    <FaPlay style={{ width: "32px", height: "32px", marginLeft: "4px" }} />
  </motion.a>
</div>


              <h6 style={{ fontSize: "1.125rem", color: "#374151" }}>Watch Complete Demo Video (TMBill Pacific POS)</h6>
            </motion.div>

            <div className="flip-tables-grid">
              {[
                {
                  icon: "https://www.tmbill.com/pakistan/img/features/tmbill_Quick_billing.svg",
                  title: "Seriously Fast And Powerful",
                  description:
                    "Punch Orders In Less Than 10 Seconds. Store Customer History, Reward Loyalty Points, Integrate With CRM, Manage Third-Party Orders.",
                },
                {
                  icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRayjUfwo1hqaFvElB5oF-_MaWPponfbVO7clIsnfWwrTS8feYF",
                  title: "Tableside Cloud POS",
                  description:
                    "Capture Orders And Release KOTs Directly To The Kitchen. With A Mobile POS That Moves As Your Tables Fill Up.",
                },
                {
                  icon: "https://images.squarespace-cdn.com/content/v1/672e70dc6216a50f10f90d0b/1731096810568-LLPW5CIEDS1Z3NLDJ4QK/Computer+Icon.png",
                  title: "Kitchen Display System",
                  description:
                    "Cut The Table-Kitchen-Table Chaos With A Robust Kitchen Display System And Reduce Your Order Processing Time.",
                },
                {
                  icon: "https://www.tmbill.com/uae/img/features/tmbill_Inventory_management.svg",
                  title: "Inventory Management",
                  description:
                    "Manage Recipes, Stock, Consumption And Purchasing. Reduce Waste By Knowing What's Likely To Go Waste, Especially Your High Value Ingredients.",
                },
                {
                  icon: "https://investfarm.rs/files/2021/08/icon-03.svg",
                  title: "Table Reservations",
                  description:
                    "Get Reservations Directly On Your Restaurant's Website. Get Real-Time Alerts, Collect Customer Information And Re-Engage Later.",
                },
                {
                  icon: "https://www.tmbill.com/uae/img/features/tmbill_Quick_Support_Restaurant.svg",
                  title: "Support",
                  description:
                    "A 24x7 support & real-time live-chat support makes sure your business is always up & running.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-style"
                >
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    width={60}
                    height={60}
                    style={{ margin: "0 auto 16px" }}
                  />
                  <h6 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "12px" }}>{feature.title}</h6>
                  <p style={{ color: "#6b7280" }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Operating System Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="restaurant-system-grid">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="restaurant-system-image"
              >
                <Image
                  src="/iconbanners/tmbill_restaurant_operating_system.png" // Replace with actual image path
                  alt="Restaurant Operating System"
                  width={600}
                  height={400}
                  style={{ borderRadius: "8px" }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#059669",
                      color: "white",
                      borderRadius: "50%",
                      padding: "16px",
                    }}
                  >
                    <FaPlay style={{ width: "24px", height: "24px", marginLeft: "4px" }} />
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="restaurant-system-content"
              >
                <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "24px" }}>
                  Restaurant Operating System
                </h2>

                <div style={{ marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p>
                    TMBill is a leading cloud-based end to end technology solutions for the Restaurants, Bar, Cafe, QSR,
                    Ice-cream Shop, Bakery, and Cake Shop.
                  </p>
                  <p>
                    TMBill helps all types of food businesses, from a standalone food outlet to a large food chain,
                    manage functions like Billing, QR Code Ordering Platform, CRM, Customer Loyalty, Aggregators
                    integrations, Analytics, Inventory, Recipe, and Wastage Management, Centralized Menu Management,
                    Vendor Management and more.
                  </p>
                  <p>
                    We have successfully registered a global presence, with more than 8000+ customers in over 350+
                    cities and 21+ countries.
                  </p>
                </div>

                <div className="platform-integration-grid">
                  <div className="integration-box">
                    <h6 style={{ fontWeight: "600", marginBottom: "12px" }}>Integration</h6>
                    <div className="logo-flex"
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {integrations.map((integration) => (
                        <Image
                          key={integration.name}
                          src={integration.logoUrl || "/placeholder.svg"}
                          alt={integration.name}
                          width={50}
                          height={30}
                          style={{ objectFit: "contain" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="integration-box">
                    <h6 style={{ fontWeight: "600", marginBottom: "12px" }}>Works on</h6>
                    <div className="logo-flex">
                      {platforms.map((platform) => (
                        <div key={platform.name} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <Image
                            src={platform.logo || "/placeholder.svg"}
                            alt={platform.name}
                            width={50}
                            height={30}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Highlights Section */}
        <section
          className="section-padding"
          style={{
            backgroundColor: "#111827",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)", // darker overlay for better contrast
              zIndex: 1,
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/TmBillBanners/restaurant_management_platform_software.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.5)", // darkens the background image
              zIndex: 0,
            }}
          ></div>

          <div style={{ position: "relative", ...styles.container, zIndex: 2 }}>
            <div className="company-highlights-container">
              <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
                <h2 style={{ fontSize: "1.875rem", fontWeight: "bold", marginBottom: "16px", color: "white" }}>
                  Company highlights
                </h2>
                <p style={{ fontSize: "1.25rem" }}>Powering 10000+ Restaurants</p>
              </motion.div>

              <div className="company-highlights-stats">
                {[
                  {
                    icon: "https://cdn0.iconfinder.com/data/icons/happiness/64/25_Happy_Dinner_plate_knife_fork-512.png",
                    value: "10000+",
                    label: "Happy Restaurants",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/4830/4830731.png",
                    value: "21+",
                    label: "Countries",
                  },
                  {
                    icon: "https://cdn-icons-png.flaticon.com/512/1124/1124199.png",
                    value: "4,50,000",
                    label: "Daily Orders World wide",
                  },
                  {
                    icon: "https://img.icons8.com/ios7/600w/diamond.png",
                    value: "32",
                    label: "Brands",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="company-highlight-item"
                  >
                    <Image
                      src={stat.icon || "/placeholder.svg"}
                      alt={stat.label}
                      width={40}
                      height={40}
                      style={{
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)", // make icon white
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "1.875rem",
                          fontWeight: "bold",
                          color: "white",
                          margin: 0,
                        }}
                      >
                        {stat.value}
                      </p>
                      <p style={{ margin: 0 }}>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <LogoCarousel
          logos={partnerLogos}
          title="Our Partners"
          autoPlayInterval={4000}
          itemsToShow={{ base: 2, sm: 3, md: 4, lg: 6 }}
        />

        {/* Features Grid Section */}
        <section className="section-padding" style={{ backgroundColor: "#f9fafb" }}>
          <div className="section-container">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "48px" }}
            >
              <h3 style={{ fontSize: "1.875rem", fontWeight: "bold" }}>Just What You Need.</h3>
            </motion.div>

            <div className="features-grid">
              {[
                {
                  icon: "https://cdn-icons-png.freepik.com/256/7491/7491592.png",
                  title: "Cloud Based Intelligence",
                  description:
                    "Works both Offline & Online Lightning fast order taking with a cloud POS that backs up your data, let's you operate remotely and keeps your data secure.",
                },
                {
                  icon: "https://www.svgrepo.com/show/397210/man-lifting-weights-light-skin-tone.svg",
                  title: "Lightweight",
                  description:
                    "No space for bulky hardware. No more multiple trips back and forth. Take orders as they come and keep up the energy of a busy service.",
                },
                {
                  icon: "https://images.vexels.com/media/users/3/136252/isolated/svg/9ba1b6a847b1d5c7f006d872b0916101.svg",
                  title: "Runs On Unlimited Devices",
                  description: "Atlantic POS is available for Android(Mobiles/Tabs) and Windows(Desktop/Laptop)",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/256/8662/8662591.png",
                  title: "Support",
                  description:
                    "A 24x7 support & real-time live-chat support makes sure your business is always up & running.",
                },
                {
                  icon: "https://www.svgrepo.com/show/93612/plate.svg",
                  title: "Back-Of-House That Keeps Up With Front-Of-House",
                  description: "Fire tickets directly to the Kitchen, in real time.Stand back and watch orders fly.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/599/599695.png",
                  title: "Done In A Few Clicks",
                  description:
                    "Clean design and less windows make navigation easy. So that using the tools are easy. And embedded video guides means staff train themselves, fast.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/8161/8161829.png",
                  title: "All Operations Under One System",
                  description:
                    "Order taking, Order management, Billing and Kitchen management - your restaurant management system will do it all.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/14252/14252249.png",
                  title: "Anti Theft",
                  description:
                    "3-4% of your annual turnover can be saved by having a proper anti theft enabled POS. Build with top of the line features and robust access management.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-style"
                >
                  <Image
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    width={60}
                    height={60}
                    style={{ margin: "0 auto 16px" }}
                  />
                  <h6 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "12px" }}>{feature.title}</h6>
                  <p style={{ color: "#6b7280" }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
       {/* Testimonial Section */}
<section
  className="section-padding"
  style={{
    backgroundColor: "#111827",
    color: "white",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  ></div>
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/TmBillBanners/restaurant_management_platform_software.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  <div style={{ position: "relative", ...styles.container, textAlign: "center" }}>
    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
      <h4
        style={{
          fontSize: "1.5rem",
          color: "white",
          "@media (min-width: 1024px)": { fontSize: "1.875rem" },
          fontWeight: "bold",
          marginBottom: "32px",
        }}
      >
        "Scaling up from 2 outlets to 100+ outlets within 7 years, TMBill has played major role in technology
        support It is a perfect solution to help us scale our franchise operations."
      </h4>

   <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <p style={{ color: "#10b981", fontWeight: "600", fontSize: "1.125rem" }}>Contact Us</p>
  <p style={{ color: "#d1d5db" }}>Email: tmbill@digital53.com</p>
  
  {/* <a
    href="https://wa.me/96599144152"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#d1d5db",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      marginTop: "4px"
    }}
  >
    <FaWhatsapp color="#25D366" size={20} />
    +96599144152
  </a> */}

  <a
    href="https://wa.me/96599144152"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#d1d5db",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
      marginTop: "4px"
    }}
  >
    <FaWhatsapp color="#25D366" size={20} />
    +96599144152
  </a>
</div>

    </motion.div>
  </div>
</section>

        {/* WhatsApp Float Button */}
        <motion.a
          href="https://api.whatsapp.com/send/?phone=96599144152&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer nofollow"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            backgroundColor: "#10b981",
            color: "white",
            padding: "12px 16px",
            borderRadius: "50px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            zIndex: 50,
            textDecoration: "none",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#10b981")}
        >
          <FaWhatsapp style={{ width: "20px", height: "20px" }} />
          <span style={{ display: "none", "@media (min-width: 640px)": { display: "inline" } }}>Talk to us</span>
        </motion.a>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            backgroundColor: "#374151",
            color: "white",
            padding: "12px",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 50,
            border: "none",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#111827")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#374151")}
        >
          <FaChevronRight style={{ width: "16px", height: "16px", transform: "rotate(-90deg)" }} />
        </motion.button>
      </div>
      <Footer/>
    </Fragment>
  )
}
