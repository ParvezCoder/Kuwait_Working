import React, { useState } from 'react';
import { FaUser,FaMapMarkerAlt, FaPhone, FaEnvelope, FaCogs, FaCode, FaTasks, FaNetworkWired, FaUsers, FaCheckCircle, FaBuilding, FaGlobe, FaChartLine, FaShieldAlt, FaClock, FaStar, FaArrowRight, FaHandshake } from 'react-icons/fa';
import { FaPiggyBank, FaMoneyBillWave, FaUserShield } from 'react-icons/fa';
import Link from 'next/link';

const Profile = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const services = [
    {
      icon: <FaCogs />,
      title: "Turnkey Solutions & ERP Implementation",
      description: "Customized ERP systems for seamless operations",
      features: ["Industry-specific workflow automation", "Full-cycle implementation", "Integration with eCommerce, finance, HR", "Training and ongoing support"],
      image: '/images/profile/turnkey.png'
    },
    {
      icon: <FaCode />,
      title: "Software House & Custom Development", 
      description: "Web & mobile app development solutions",
      features: ["Cloud solutions and integration", "Legacy system modernization", "UI/UX design for business impact", "Technical support and upgrades"],
      image: '/images/profile/software.png'
    },
    {
      icon: <FaTasks />,
      title: "Project Management Office (PMO)",
      description: "End-to-end project planning and execution",
      features: ["Compliance and risk management", "Agile and Waterfall methodologies", "Resource optimization", "Transparent reporting and analytics"],
      image: '/images/profile/project.png'
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking & Infrastructure",
      description: "Network design, installation, and security",
      features: ["Wireless and wired infrastructure", "Scalable solutions for all businesses", "Industrial facility networks", "24/7 monitoring and support"],
      image: '/images/profile/networking.png'
    },
    {
      icon: <FaUsers />,
      title: "Manpower Recruitment",
      description: "Corporate & SMB talent solutions",
      features: ["Specialized technical staff placement", "Payroll and visa support", "Onboarding assistance", "Flexible staffing solutions"],
      image: '/images/profile/manpower.png'
    }
  ];

  return (
    <div className="digital53-profile">
      <style jsx>{`
        .digital53-profile {
          font-family: inherit;
          line-height: 1.6;
        }

        .hero-profile {
          background: linear-gradient(135deg, #020842 0%, #0044EB 50%, #F44380 100%);
          color: white;
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .hero-profile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://picsum.photos/1920/1080?blur=1') center/cover;
          opacity: 0.1;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.2rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-text .subtitle {
          font-size: 1.4rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .hero-highlights {
          list-style: none;
          padding: 0;
          margin: 30px 0;
        }

        .hero-highlights li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .hero-highlights li i {
          color: #F44380;
          font-size: 1.2rem;
        }

        .hero-image {
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .hero-image img {
          width: 100%;
          border-radius: 15px;
        }

        .tagline {
          background: #F44380;
          color: white;
          padding: 20px;
          border-radius: 15px;
          margin-top: 20px;
          font-style: italic;
          font-weight: 600;
        }

        .company-info {
          background: #E3F0FF;
          padding: 80px 0;
        }

        .info-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 60px;
          align-items: start;
        }

        .info-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(2, 8, 66, 0.1);
          border-left: 5px solid #0044EB;
        }

        .info-card h3 {
          color: #020842;
          font-size: 1.6rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .location-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
          padding: 15px;
          background: #f8f9ff;
          border-radius: 10px;
        }

        .location-icon {
          width: 50px;
          height: 50px;
          background: #0044EB;
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-content h2 {
          color: #020842;
          font-size: 2.8rem;
          margin-bottom: 25px;
          font-weight: bold;
        }

        .info-content p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .approach-list {
          list-style: none;
          padding: 0;
          margin: 30px 0;
        }

        .approach-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 1.1rem;
          color: #555;
        }

        .approach-list li i {
          color: #F44380;
          margin-top: 2px;
        }

        .services-section {
          padding: 100px 0;
          background: white;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
          background: #E3F0FF;
          color: #020842;
          padding: 10px 25px;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 2.8rem;
          color: #020842;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .section-title1 {
          font-size: 2.8rem;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .services-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .service-nav-btn {
          padding: 12px 25px;
          background: #f8f9ff;
          color: #666;
          border: 2px solid transparent;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .service-nav-btn.active,
        .service-nav-btn:hover {
          background: #0044EB;
          color: white;
          border-color: #0044EB;
        }

        .service-content {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 60px;
          align-items: start;
        }

        .service-details {
          background: #f8f9ff;
          padding: 50px;
          border-radius: 20px;
          border-left: 5px solid #F44380;
        }

        .services-accordion {
          display: none;
        }

        .accordion-item {
          background: white;
          border: 2px solid #f0f0f0;
          border-radius: 15px;
          margin-bottom: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .accordion-item.active {
          border-color: #0044EB;
          box-shadow: 0 10px 30px rgba(0, 68, 235, 0.1);
        }

        .accordion-header {
          padding: 25px;
          background: #f8f9ff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }

        .accordion-item.active .accordion-header {
          background: #0044EB;
          color: white;
          border-bottom-color: rgba(255, 255, 255, 0.2);
        }

        .accordion-title {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .accordion-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #0044EB, #F44380);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }

        .accordion-item.active .accordion-icon {
          background: white;
          color: #0044EB;
        }

        .accordion-toggle {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .accordion-item.active .accordion-toggle {
          transform: rotate(180deg);
        }

        .accordion-content {
          padding: 0 25px;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .accordion-item.active .accordion-content {
          max-height: 900px;
          padding: 25px;
        }

        .accordion-service-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .accordion-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
        }

        .accordion-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .accordion-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 1rem;
          color: #555;
        }

        .accordion-features li i {
          color: #0044EB;
        }

        .accordion-image {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          margin-top: 15px;
        }

        .service-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #0044EB, #F44380);
          color: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 25px;
        }

        .service-title {
          font-size: 2rem;
          color: #020842;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .service-description {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 1.1rem;
          color: #555;
        }

        .service-features li i {
          color: #0044EB;
        }

        .service-image {
          position: sticky;
          top: 20px;
        }

        .service-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .why-choose {
          background: linear-gradient(135deg, #020842 0%, #0044EB 100%);
          color: white;
          padding: 80px 0;
        }

        .why-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .why-item {
          text-align: center;
          padding: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .why-icon {
          width: 70px;
          height: 70px;
          background: #F44380;
          color: white;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin: 0 auto 20px auto;
        }

        .why-title {
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-weight: 600;
          color: white;
        }

        .location-section {
          background: #E3F0FF;
          padding: 80px 0;
        }

        .location-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 60px;
          align-items: center;
        }

        .location-content h2 {
          color: #020842;
          font-size: 2.5rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .location-content p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }

        .location-features {
          list-style: none;
          padding: 0;
        }

        .location-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          font-size: 1.1rem;
          color: #555;
        }

        .location-features li i {
          color: #0044EB;
        }

        .map-placeholder {
          background: #ddd;
          height: 350px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 1.2rem;
          position: relative;
          overflow: hidden;
        }

        .map-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .contact-section {
          background: #020842;
          color: white;
          padding: 80px 0;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          font-weight: bold;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .contact-icon {
          width: 55px;
          height: 55px;
          background: #F44380;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: white;
        }

        .form-control {
          width: 100%;
          padding: 15px;
          border: 2px solid #444;
          border-radius: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: #0044EB;
          background: rgba(255, 255, 255, 0.15);
        }

        .form-control::placeholder {
          color: #ccc;
        }

        .form-control.textarea {
          min-height: 120px;
          resize: vertical;
        }

        .btn-primary {
          background: linear-gradient(45deg, #F44380, #FF6B9D);
          color: white;
          padding: 15px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(244, 67, 128, 0.3);
        }

        .our-process {
          background: white;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .our-process::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0, 68, 235, 0.03) 0%, rgba(244, 67, 128, 0.03) 100%);
          z-index: 1;
        }

        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .process-timeline {
          position: relative;
          margin-top: 60px;
        }

        .process-timeline::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: calc(100% - 100px);
          background: linear-gradient(to bottom, #0044EB, #F44380);
          z-index: 1;
        }

        .process-step {
          display: flex;
          align-items: center;
          margin-bottom: 60px;
          position: relative;
        }

        .process-step:nth-child(even) {
          flex-direction: row-reverse;
        }

        .process-step:nth-child(even) .process-content {
          text-align: right;
        }

        .process-content {
          flex: 1;
          padding: 0 40px;
          max-width: 450px;
        }

        .process-step:nth-child(even) .process-content {
          padding-left: 40px;
          padding-right: 0;
          margin-left: auto;
        }

        .process-step:nth-child(odd) .process-content {
          padding-right: 40px;
          padding-left: 0;
          margin-right: auto;
        }

        .process-number {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0044EB 0%, #F44380 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: bold;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(0, 68, 235, 0.3);
          flex-shrink: 0;
        }

        .process-card {
          background: white;
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(2, 8, 66, 0.08);
          border: 1px solid rgba(0, 68, 235, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(2, 8, 66, 0.15);
          border-color: #0044EB;
        }

        .process-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0044EB, #F44380);
          border-radius: 20px 20px 0 0;
        }

        .process-title {
          color: #020842;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .process-step:nth-child(even) .process-title {
          justify-content: flex-end;
          flex-direction: row-reverse;
        }

        .process-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #F44380, #FF6B9D);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          flex-shrink: 0;
        }

        .process-description {
          color: #666;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .process-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .process-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          color: #555;
          font-size: 1rem;
        }

        .process-step:nth-child(even) .process-features li {
          justify-content: flex-end;
          flex-direction: row-reverse;
        }

        .process-features li i {
          color: #0044EB;
          font-size: 0.9rem;
        }

        .process-cta {
          text-align: center;
          margin-top: 80px;
          padding: 50px;
          background: linear-gradient(135deg, rgba(0, 68, 235, 0.05) 0%, rgba(244, 67, 128, 0.05) 100%);
          border-radius: 25px;
          border: 2px solid rgba(0, 68, 235, 0.1);
        }

        .process-cta h3 {
          color: #020842;
          font-size: 2rem;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .process-cta p {
          color: #666;
          font-size: 1.2rem;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-outline {
          background: transparent;
          color: #0044EB;
          padding: 15px 35px;
          font-size: 1.1rem;
          font-weight: 600;
          border: 2px solid #0044EB;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .btn-outline:hover {
          background: #0044EB;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 68, 235, 0.3);
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-text h1 {
            font-size: 2.5rem;
          }
          
          .info-container,
          .location-container,
          .contact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
            .section-title1 {
            font-size: 2.2rem;
          }
          
          .services-nav {
            display: none;
          }
          
          .service-content {
            display: none;
          }
          
          .services-accordion {
            display: block;
          }
          
          /* Improved mobile process section */
          .process-container {
            padding: 0 15px;
          }
          
          .process-timeline::before {
            display: none;
          }
          
          .process-step,
          .process-step:nth-child(even) {
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            width: 100%;
            max-width: 100%;
          }
          
          .process-step,
          .process-step:nth-child(odd) {
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            width: 100%;
            max-width: 100%;
          }
          
          .process-content,
          .process-step:nth-child(even) .process-content {
            text-align: center;
            padding: 0;
            margin: 0 auto;
            max-width: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .process-content,
          .process-step:nth-child(odd) .process-content {
            text-align: center;
            padding: 0;
            margin: 0 auto;
            max-width: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .process-number {
            width: 80px;
            height: 80px;
            font-size: 1.5rem;
            margin: 0 auto 20px auto;
            flex-shrink: 0;
          }
          
          .process-card {
            padding: 25px;
            margin: 0 auto;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
          
          .process-title,
          .process-step:nth-child(even) .process-title {
            justify-content: center;
            flex-direction: row;
            text-align: center;
            font-size: 1.3rem;
          }

          .process-title,
          .process-step:nth-child(odd) .process-title {
            justify-content: center;
            flex-direction: row;
            text-align: center;
            font-size: 1.3rem;
          }
          
          .process-icon {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
          }
          
          .process-description {
            text-align: center;
            font-size: 1rem;
            margin-bottom: 15px;
          }
          
          .process-features li,
          .process-step:nth-child(even) .process-features li {
            justify-content: center;
            flex-direction: row;
            text-align: center;
            font-size: 0.95rem;
            margin-bottom: 10px;
          }

          .process-features li,
          .process-step:nth-child(odd) .process-features li {
            justify-content: center;
            flex-direction: row;
            text-align: center;
            font-size: 0.95rem;
            margin-bottom: 10px;
          }
          
          .process-features li i {
            margin-right: 8px;
            margin-left: 0;
          }
          
          .process-cta {
            padding: 30px 20px;
            margin-top: 50px;
          }
          
          .process-cta h3 {
            font-size: 1.5rem;
          }
          
          .process-cta p {
            font-size: 1rem;
          }
        }


        .ssf-introduction {
  background: linear-gradient(135deg, #f8f9ff 0%, #E3F0FF 100%);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.ssf-introduction::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 68, 235, 0.03) 0%, rgba(244, 67, 128, 0.03) 100%);
  z-index: 1;
}

.ssf-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

.ssf-content {
  display: grid;
  grid-template-columns: 1fr 500px;
  gap: 60px;
  align-items: center;
}

.ssf-text {
  padding-right: 40px;
}

.ssf-badge {
  background: linear-gradient(45deg, #F44380, #FF6B9D);
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(244, 67, 128, 0.2);
}

.ssf-title {
  font-size: 3rem;
  color: #020842;
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.2;
}
  .ssf-title:hover {
    color: #0044EB;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

.ssf-description {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 35px;
  line-height: 1.7;
}

// .ssf-benefits {
//   margin-bottom: 0px;
// }

.ssf-benefits h4 {
  color: #020842;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px;
  background: white;
  border-radius: 12px;
  border-left: 4px solid #0044EB;
  box-shadow: 0 5px 15px rgba(0, 68, 235, 0.05);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 68, 235, 0.1);
}

.benefit-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #0044EB, #F44380);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.benefit-text {
  font-size: 1rem;
  color: #555;
  font-weight: 500;
}

.ssf-features {
  background: white;
  padding: 30px;
  border-radius: 20px;
  border: 2px solid rgba(0, 68, 235, 0.1);
  box-shadow: 0 15px 40px rgba(2, 8, 66, 0.05);
}

.ssf-features h4 {
  color: #020842;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #E3F0FF;
  padding-bottom: 15px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 1.05rem;
  color: #555;
  padding: 8px 0;
}

.features-list li i {
  color: #0044EB;
  font-size: 1rem;
}

.ssf-image {
  position: relative;
}

.ssf-image-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(2, 8, 66, 0.15);
  transform: rotate(-2deg);
}

.ssf-image-container img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.ssf-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 30px 25px 25px 25px;
  text-align: center;
}

.ssf-overlay h5 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.ssf-overlay p {
  font-size: 1rem;
  opacity: 0.9;
}

.ssf-cta {
  margin-top: 30px;
  text-align: left;
}

.ssf-link {
  background: linear-gradient(45deg, #0044EB, #0066FF);
  color: white;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0, 68, 235, 0.3);
}

.ssf-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(0, 68, 235, 0.4);
  background: linear-gradient(45deg, #0055FF, #0077FF);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .ssf-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .ssf-text {
    padding-right: 0;
  }

  .ssf-title {
    font-size: 2.2rem;
  }

  .ssf-description {
    font-size: 1.1rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .ssf-image-container {
    transform: rotate(0deg);
  }

  .ssf-image-container img {
    height: 300px;
  }
}
      `}</style>

      {/* Hero Profile Section */}
      <section className="hero-profile">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Digital Edge Solutions – Your Digital Edge in Kuwait</h1>
            <p className="subtitle">
              Transforming Businesses with Digital Excellence in Kuwait
            </p>
            <p>
              At Digital Edge Solutions, we blend technical mastery, project management expertise, 
              and manpower solutions to push your business to the digital edge.
            </p>
            
            <ul className="hero-highlights">
              <li><FaCheckCircle /> Complete turnkey solutions</li>
              <li><FaCheckCircle /> Advanced ERP implementation</li>
              <li><FaCheckCircle /> End-to-end project management</li>
              <li><FaCheckCircle /> Corporate & SMB manpower recruitment</li>
              <li><FaCheckCircle /> Top-tier software development</li>
              <li><FaCheckCircle /> Networking and infrastructure specialization</li>
            </ul>
          </div>
          
          <div className="hero-image">
            <img src="/images/profile/image1.png" alt="Digital53 Corp Office" />
            <div className="tagline">
              Power your progress with Digital Edge Solutions—where technology meets vision.
            </div>
             <a href='/showcase' className="btn-primary" style={{ marginTop: '25px', background: 'linear-gradient(45deg, #0044EB, #0066FF)'}}>
              View SlideShow
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="company-info">
        <div className="info-container">
          <div className="info-card">
            <h3>Our Kuwait Location</h3>
            {/* <div className="location-item">
              <div className="location-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong>Address</strong><br />
                Ibn-Khaldoun Street<br />
                Hawally, Kuwait
              </div>
            </div> */}
            <div className="location-item">
              <div className="location-icon">
                <FaBuilding />
              </div>
              <div>
                <strong>Strategic Location</strong><br />
                Center of Hawally's<br />
                Tech District
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <FaGlobe />
              </div>
              <div>
                <strong>Service Area</strong><br />
                Kuwait & Regional<br />
                Markets
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <FaUser />
              </div>
              <div>
                <strong>Clientele</strong><br />
                Service SMBs<br />& Corporates
              </div>
            </div> 
          </div>
          
          <div className="info-content">
            <h2>Digital Edge Profile — Who We Are</h2>
            <p>
              Digital Edge Solutions is Kuwait's premier digital solution provider, strategically located 
              on Ibn-Khaldoun Street, Hawally. As a leading software house and ERP implementor, 
              we empower organizations to unlock productivity through advanced technology, 
              project leadership, and specialized talent.
            </p>
            
            <h4 style={{color: '#020842', fontSize: '1.4rem', marginTop: '30px', marginBottom: '15px'}}>
              Our Approach:
            </h4>
            <ul className="approach-list">
              <li><FaCheckCircle /> Deep technical knowledge, from software development to networking</li>
              <li><FaCheckCircle /> Turnkey delivery from concept to completion</li>
              <li><FaCheckCircle /> Agile, certified project management (PMO) practices</li>
              <li><FaCheckCircle /> Client-focused solutions for SMBs and large enterprises</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <div className="section-header">
            <div className="section-badge">Our Expertise</div>
            <h2 className="section-title">Comprehensive Digital Services</h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="services-nav">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-btn ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                {service.title.split(' &')[0]}
              </button>
            ))}
          </div>
          
          {/* Desktop Content */}
          <div className="service-content">
            <div className="service-details">
              <div className="service-icon">
                {services[activeService].icon}
              </div>
              <h3 className="service-title">{services[activeService].title}</h3>
              <p className="service-description">{services[activeService].description}</p>
              
              <ul className="service-features">
                {services[activeService].features.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="service-image">
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title}
              />
            </div>
          </div>

          {/* Mobile Accordion */}
          <div className="services-accordion">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
              >
                <div 
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-title">
                    <div className="accordion-icon">
                      {service.icon}
                    </div>
                    <span>{service.title}</span>
                  </div>
                  <span className="accordion-toggle">
                    {activeAccordion === index ? '−' : '+'}
                  </span>
                </div>
                
                <div className="accordion-content">
                  <div className="accordion-service-content">
                    <p className="accordion-description">
                      {service.description}
                    </p>
                    
                    <ul className="accordion-features">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <FaCheckCircle />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="accordion-image"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Security Fund Introduction */}
<section className="ssf-introduction">
  <div className="ssf-container">
    <div className="ssf-content">
      <div className="ssf-text">
        <div className="ssf-badge">Featured Solution</div>
        <a href='https://pf.digital53.com' target='_blank'><h2 className="ssf-title">Social Security Fund</h2></a>
        <p className="ssf-description">
          The <span><a href='https://pf.digital53.com' target='_blank'>Social Security Fund</a></span> aims to provide a safe and stable umbrella for employees 
          to have the best retirement fund; while offering multiple benefits that enhance 
          their quality of life and best future of social security.
        </p>

        <div className="ssf-features">
          <h4>Key Features</h4>
          <ul className="features-list">
            <li><FaCheckCircle /> Diverse Fund Activities</li>
            <li><FaCheckCircle /> Fully Customizable Application</li>
            <li><FaCheckCircle /> Integrated with Financial Unit</li>
            <li><FaCheckCircle /> Comprehensive Reports & Analytics</li>
            <li><FaCheckCircle /> Detailed Inquiries System</li>
            <li><FaCheckCircle /> Unique Dashboard Interface</li>
          </ul>
        </div>
      </div>
      
      <div className="ssf-image">
        <div className="ssf-image-container">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="Social Security Fund - Financial Security" 
          />
          <div className="ssf-overlay">
            <h5>Secure Your Future</h5>
            <p>Comprehensive retirement planning with advanced digital tools</p>
          </div>
        </div>

                
        <div className="ssf-benefits" style={{ marginTop: '60px' }}>
          <h4>
            <FaPiggyBank />
            Membership Benefits
          </h4>
          <div className="benefits-grid">
            <Link href='https://pf.digital53.com' target='_blank'>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaMoneyBillWave />
              </div>
              <span className="benefit-text">Loans & Financial Support</span>
            </div>
            </Link>
            <Link href='https://pf.digital53.com' target='_blank'>
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaStar />
              </div>
              <span className="benefit-text">Exclusive Offers & Packages</span>
            </div>
            </Link>
            
            <a href='https://pf.digital53.com' target='_blank' >
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaBuilding />
              </div>
              <span className="benefit-text">Institutional Diversity</span>
            </div>
            </a>

            <a href='https://pf.digital53.com' target='_blank' >
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaCogs />
              </div>
              <span className="benefit-text">Flexible Subscription</span>
            </div>
            </a>

            {/* <a href='https://pf.digital53.com' target='_blank' >
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaCogs />
              </div>
              <span className="benefit-text"></span>
            </div>
            </a>

            <a href='https://pf.digital53.com' target='_blank' >
            <div className="benefit-item">
              <div className="benefit-icon">
                <FaCogs />
              </div>
              <span className="benefit-text"></span>
            </div>
            </a> */}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Why Choose Digital53 */}
      <section className="why-choose">
        <div className="why-container">
          <div className="section-header">
            <h2 className="section-title1">Why Choose Digital Edge Solutions?</h2>
          </div>
          
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="why-title">Kuwait's Local Digital Partner</h3>
              <p>With global standards and local expertise</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">
                <FaStar />
              </div>
              <h3 className="why-title">Expert Certified Team</h3>
              <p>Certified in project management and enterprise IT</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">
                <FaClock />
              </div>
              <h3 className="why-title">Responsive Service</h3>
              <p>Personalized service from the heart of Hawally</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">
                <FaChartLine />
              </div>
              <h3 className="why-title">Proven Track Record</h3>
              <p>Success with SMBs and corporates alike</p>
            </div>
            
            <div className="why-item">
              <div className="why-icon">
                <FaHandshake />
              </div>
              <h3 className="why-title">Strong Relationships</h3>
              <p>Connected with vendors, suppliers, and tech community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="our-process">
        <div className="process-container">
          <div className="section-header">
            <div className="section-badge">Our Methodology</div>
            <h2 className="section-title">How We Deliver Excellence</h2>
            <p style={{fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto'}}>
              Our proven 5-step process ensures successful project delivery, from initial consultation to ongoing support
            </p>
          </div>
          
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">01</div>
              <div className="process-content">
                <div className="process-card">
                  <h3 className="process-title">
                    <div className="process-icon">
                      <FaUsers />
                    </div>
                    Discovery & Consultation
                  </h3>
                  <p className="process-description">
                    We begin with comprehensive business analysis to understand your unique requirements, 
                    challenges, and objectives.
                  </p>
                  <ul className="process-features">
                    <li><FaCheckCircle /> Business process mapping</li>
                    <li><FaCheckCircle /> Stakeholder interviews</li>
                    <li><FaCheckCircle /> Technical assessment</li>
                    <li><FaCheckCircle /> Goal alignment workshop</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">02</div>
              <div className="process-content">
                <div className="process-card">
                  <h3 className="process-title">
                    <div className="process-icon">
                      <FaCogs />
                    </div>
                    Strategic Planning & Design
                  </h3>
                  <p className="process-description">
                    Our experts craft a detailed roadmap with custom solutions tailored to your business needs 
                    and future growth plans.
                  </p>
                  <ul className="process-features">
                    <li><FaCheckCircle /> Solution architecture design</li>
                    <li><FaCheckCircle /> Timeline & milestone planning</li>
                    <li><FaCheckCircle /> Resource allocation strategy</li>
                    <li><FaCheckCircle /> Risk assessment & mitigation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">03</div>
              <div className="process-content">
                <div className="process-card">
                  <h3 className="process-title">
                    <div className="process-icon">
                      <FaCode />
                    </div>
                    Development & Implementation
                  </h3>
                  <p className="process-description">
                    Using agile methodologies, we develop and implement solutions with regular updates 
                    and transparent communication throughout.
                  </p>
                  <ul className="process-features">
                    <li><FaCheckCircle /> Agile development cycles</li>
                    <li><FaCheckCircle /> Regular progress reviews</li>
                    <li><FaCheckCircle /> Quality assurance testing</li>
                    <li><FaCheckCircle /> Client feedback integration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">04</div>
              <div className="process-content">
                <div className="process-card">
                  <h3 className="process-title">
                    <div className="process-icon">
                      <FaTasks />
                    </div>
                    Testing & Deployment
                  </h3>
                  <p className="process-description">
                    Rigorous testing ensures flawless performance before smooth deployment with minimal 
                    business disruption.
                  </p>
                  <ul className="process-features">
                    <li><FaCheckCircle /> Comprehensive system testing</li>
                    <li><FaCheckCircle /> User acceptance testing</li>
                    <li><FaCheckCircle /> Phased deployment strategy</li>
                    <li><FaCheckCircle /> Performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="process-step">
              <div className="process-number">05</div>
              <div className="process-content">
                <div className="process-card">
                  <h3 className="process-title">
                    <div className="process-icon">
                      <FaShieldAlt />
                    </div>
                    Training & Ongoing Support
                  </h3>
                  <p className="process-description">
                    We provide comprehensive training and continuous support to ensure your team maximizes 
                    the value of your new systems.
                  </p>
                  <ul className="process-features">
                    <li><FaCheckCircle /> User training programs</li>
                    <li><FaCheckCircle /> Documentation & guides</li>
                    <li><FaCheckCircle /> 24/7 technical support</li>
                    <li><FaCheckCircle /> Regular maintenance & updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-content">
            <h2>Visit Our Technology Hub</h2>
            <p>
              Located right at the heart of Hawally, Ibn-Khaldoun Street, Kuwait. 
              We're embedded in Kuwait's dynamic tech ecosystem, providing easy access 
              for consultations, demos, and ongoing support.
            </p>
            
            <ul className="location-features">
              <li><FaMapMarkerAlt /> Central Hawally location</li>
              <li><FaUsers /> Easy access for consultations and demos</li>
              <li><FaBuilding /> Modern tech facility</li>
              <li><FaGlobe /> Connected to Kuwait's tech ecosystem</li>
            </ul>
          </div>
          
          <div className="map-placeholder">
            <img 
              src="images/profile/image2.png" 
              alt="Digital53 Corp Location Map" 
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Ready to Elevate Your Business?</h3>
            <p style={{marginBottom: '30px', color: '#ccc'}}>
              Get in touch for digital solutions, ERP implementation, software development, or staffing solutions.
            </p>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <strong>Phone</strong><br />
                +965-99144152/72
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <strong>Email</strong><br />
                info@digital53.com
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong>Address</strong><br />
                Ibn-Khaldoun Street<br />
                Hawally, Kuwait
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{marginBottom: '30px', fontSize: '1.8rem', paddingTop: '70px'}}>Request a Free Consultation</h3>
            
            <a href='/calendar' className="btn-primary" style={{}}>
              Request Free Consultation
              <FaArrowRight />
            </a>
            <a href='/showcase' className="btn-primary" style={{ marginTop: '25px', background: 'linear-gradient(45deg, #0044EB, #0066FF)'}}>
              View Detailed Profile
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;