import React, { useState } from 'react';
import { FaCheckCircle, FaStore, FaCog, FaChartLine, FaGlobe, FaUsers, FaShoppingCart, FaWarehouse, FaUtensils, FaTools, FaShip, FaHandshake, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const Ecommerce = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');
  return (
    <div className="digital53-homepage">
      <style jsx>{`
        .digital53-homepage {
          font-family: inherit;
          line-height: 1.6;
        }
        
        .hero-section {
          background: linear-gradient(135deg, #020842 0%, #0044EB 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.2;
          color: #ffffff;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }
        
        .hero-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 40px 0;
        }
        
        .hero-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
        }
        
        .hero-feature i {
          color: #F44380;
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
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(244, 67, 128, 0.3);
        }
        
        .btn-secondary {
          background: transparent;
          color: #020842;
          border: 2px solid #020842;
          padding: 15px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }
        
        .btn-secondary:hover {
          background: #020842;
          color: white;
        }
        
        .section {
          padding: 80px 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-header {
          text-center;
          margin-bottom: 60px;
        }
        
        .section-badge {
          background: #E3F0FF;
          color: #020842;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }
        
        .section-title {
          font-size: 2.5rem;
          color: #020842;
          margin-bottom: 15px;
          font-weight: bold;
        }
        
        .section-subtitle {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .feature-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(2, 8, 66, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #E3F0FF;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(2, 8, 66, 0.15);
        }
        
        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #0044EB, #F44380);
          color: white;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 25px;
        }
        
        .feature-title {
          font-size: 1.4rem;
          color: #020842;
          margin-bottom: 15px;
          font-weight: 600;
        }
        
        .feature-description {
          color: #666;
          line-height: 1.6;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 15px 0 0 0;
        }
        
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          color: #666;
        }
        
        .feature-list li i {
          color: #0044EB;
        }
        
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .industry-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          border-left: 4px solid #F44380;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .industry-card:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .industry-icon {
          font-size: 2.5rem;
          color: #0044EB;
          margin-bottom: 15px;
        }
        
        .industry-title {
          font-size: 1.3rem;
          color: #020842;
          margin-bottom: 10px;
          font-weight: 600;
        }
        
        .industry-description {
          color: #666;
        }
        
        .pricing-section {
          background: #E3F0FF;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .pricing-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          position: relative;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .pricing-card.featured {
          border-color: #F44380;
          transform: scale(1.05);
        }
        
        .pricing-card.featured::before {
          content: 'Most Popular';
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #F44380;
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .plan-name {
          font-size: 1.5rem;
          color: #020842;
          margin-bottom: 10px;
          font-weight: 600;
        }
        
        .plan-price {
          font-size: 2.5rem;
          color: #0044EB;
          margin-bottom: 20px;
          font-weight: bold;
        }
        
        .plan-features {
          list-style: none;
          padding: 0;
          margin: 20px 0 30px 0;
          text-align: left;
        }
        
        .plan-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #666;
        }
        
        .plan-features li i {
          color: #0044EB;
        }
        
        .contact-section {
          background: #020842;
          color: white;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .contact-info {
          margin-bottom: 30px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          background: #F44380;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
        }
        
        .form-control {
          width: 100%;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        .form-control:focus {
          outline: none;
          border-color: #0044EB;
          box-shadow: 0 0 0 3px rgba(0, 68, 235, 0.1);
        }
        
        .form-control.textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .bg-light {
          background-color: #E3F0FF;
        }
        
        .text-center {
          text-align: center;
        }
        
        .mt-4 {
          margin-top: 2rem;
        }
        
        .mb-4 {
          margin-bottom: 2rem;
        }
        
        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .why-choose-item {
          text-align: center;
          padding: 30px 20px;
        }
        
        .why-choose-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #0044EB, #F44380);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 20px auto;
        }
        
        .why-choose-title {
          font-size: 1.2rem;
          color: #020842;
          margin-bottom: 10px;
          font-weight: 600;
        }
        
        .why-choose-description {
          color: #666;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .features-grid,
          .industries-grid {
            grid-template-columns: 1fr;
          }
          
          .pricing-card.featured {
            transform: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Business with Unified ERP Power</h1>
          <p className="hero-subtitle">Streamline operations, boost sales, and manage finances effortlessly.</p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <FaUsers />
              <span>Core CRM at the Heart</span>
            </div>
            <div className="hero-feature">
              <FaShoppingCart />
              <span>Embedded POS</span>
            </div>
            <div className="hero-feature">
              <FaChartLine />
              <span>Finance Automation</span>
            </div>
            <div className="hero-feature">
              <FaGlobe />
              <span>B2B & eCommerce</span>
            </div>
          </div>
          
          <div className="mt-4">
            <a href="#contact" className="btn-primary">Get Started Today</a>
          </div>
        </div>
      </section>

      {/* Why Choose Digital53 */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Why Choose Digital53?</div>
            <h2 className="section-title">Built for SMBs Across Industries</h2>
            <p className="section-subtitle">
              Our platform is designed for SMBs in diverse sectors like retail shops, spare parts, bakeries, hardware, and import-export.
            </p>
          </div>
          
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaChartLine />
              </div>
              <h3 className="why-choose-title">Scalable Solutions</h3>
              <p className="why-choose-description">From single-store setups to multi-branch enterprises</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaCheckCircle />
              </div>
              <h3 className="why-choose-title">Cost-Effective</h3>
              <p className="why-choose-description">Transparent pricing with no hidden fees</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon">
                <FaGlobe />
              </div>
              <h3 className="why-choose-title">Cloud-Based Access</h3>
              <p className="why-choose-description">Access your data anywhere, anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Core Features</div>
            <h2 className="section-title">Everything You Need in One Platform</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3 className="feature-title">Core CRM Integration</h3>
              <p className="feature-description">Centralize customer data for personalized interactions:</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> Lead tracking and sales pipelines</li>
                <li><FaCheckCircle /> Automated emails and campaign tools</li>
                <li><FaCheckCircle /> Customer analytics for targeted marketing</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaShoppingCart />
              </div>
              <h3 className="feature-title">Embedded POS System</h3>
              <p className="feature-description">Efficient point-of-sale for retail environments:</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> Barcode scanning and quick checkouts</li>
                <li><FaCheckCircle /> Offline mode with real-time sync</li>
                <li><FaCheckCircle /> Multi-user support for busy stores</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3 className="feature-title">Finance & Accounting Module</h3>
              <p className="feature-description">Simplify financial operations:</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> Automated invoicing and expense tracking</li>
                <li><FaCheckCircle /> Profit/loss reports and tax compliance</li>
                <li><FaCheckCircle /> Banking integration for reconciliations</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaGlobe />
              </div>
              <h3 className="feature-title">eCommerce Platform</h3>
              <p className="feature-description">Build your online presence:</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> Customizable storefronts with catalogs</li>
                <li><FaCheckCircle /> Secure payments and order management</li>
                <li><FaCheckCircle /> Real-time inventory updates</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3 className="feature-title">B2B Capabilities</h3>
              <p className="feature-description">Unlock wholesale potential:</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> Dedicated B2B portals with role-based access</li>
                <li><FaCheckCircle /> Bulk pricing and credit limits</li>
                <li><FaCheckCircle /> Import-export workflow integration</li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <FaWarehouse />
              </div>
              <h3 className="feature-title">Inventory Management</h3>
              <p className="feature-description">Stay in control of stock:</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> Real-time tracking with alerts</li>
                <li><FaCheckCircle /> Automated reordering</li>
                <li><FaCheckCircle /> Batch and expiry management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Industries We Serve</div>
            <h2 className="section-title">Tailored Solutions for Every Business</h2>
          </div>
          
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-icon">
                <FaStore />
              </div>
              <h3 className="industry-title">Retail Shops & SMBs</h3>
              <p className="industry-description">
                Optimize daily operations with unified POS and eCommerce for faster sales and better customer service.
              </p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <FaCog />
              </div>
              <h3 className="industry-title">Spare Parts Dealers</h3>
              <p className="industry-description">
                Track parts with precision using serial/batch numbers, warranty tools, and supplier integrations.
              </p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <FaUtensils />
              </div>
              <h3 className="industry-title">Bakeries & Food Businesses</h3>
              <p className="industry-description">
                Manage recipes, production batches, and freshness with expiry alerts and costing features.
              </p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <FaTools />
              </div>
              <h3 className="industry-title">Hardware Stores</h3>
              <p className="industry-description">
                Handle diverse inventories across warehouses, with tools for stock audits and demand forecasting.
              </p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <FaShip />
              </div>
              <h3 className="industry-title">Import-Export Companies</h3>
              <p className="industry-description">
                Navigate global trade with multi-currency support, shipping tracking, and customs documentation.
              </p>
            </div>
            
            <div className="industry-card">
              <div className="industry-icon">
                <FaHandshake />
              </div>
              <h3 className="industry-title">B2B Extension</h3>
              <p className="industry-description">
                Enhance any industry with wholesale portals for distributors and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Flexible Pricing</div>
            <h2 className="section-title">Plans for Every Business Size</h2>
          </div>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">$49<span style={{fontSize: '1rem', color: '#666'}}>/month</span></div>
              <ul className="plan-features">
                <li><FaCheckCircle /> Basic ERP + CRM for small shops</li>
                <li><FaCheckCircle /> Unlimited users</li>
                <li><FaCheckCircle /> 24/7 support</li>
                <li><FaCheckCircle /> Free setup and training</li>
              </ul>
              <a href="#contact" className="btn-secondary">Get Started</a>
            </div>
            
            <div className="pricing-card featured">
              <h3 className="plan-name">Pro</h3>
              <div className="plan-price">$99<span style={{fontSize: '1rem', color: '#666'}}>/month</span></div>
              <ul className="plan-features">
                <li><FaCheckCircle /> Full POS, eCommerce, and Finance</li>
                <li><FaCheckCircle /> Advanced inventory management</li>
                <li><FaCheckCircle /> Unlimited users</li>
                <li><FaCheckCircle /> 24/7 priority support</li>
                <li><FaCheckCircle /> Free setup and training</li>
              </ul>
              <a href="#contact" className="btn-primary">Choose Pro</a>
            </div>
            
            <div className="pricing-card">
              <h3 className="plan-name">Enterprise</h3>
              <div className="plan-price">$199<span style={{fontSize: '1rem', color: '#666'}}>/month</span></div>
              <ul className="plan-features">
                <li><FaCheckCircle /> B2B features & Import-Export tools</li>
                <li><FaCheckCircle /> Custom integrations</li>
                <li><FaCheckCircle /> Unlimited users</li>
                <li><FaCheckCircle /> Dedicated account manager</li>
                <li><FaCheckCircle /> Free setup and training</li>
              </ul>
              <a href="#contact" className="btn-secondary">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{background: '#F44380', color: 'white'}}>Get in Touch</div>
            <h2 className="section-title" style={{color: 'white'}}>Ready to Transform Your Business?</h2>
            <p className="section-subtitle" style={{color: '#ccc'}}>
              Fill out the form below to see our platform in action with a free demo.
            </p>
          </div>
          
          <div className="contact-grid">
            <div>
              <h3 style={{marginBottom: '30px', fontSize: '1.5rem'}}>Contact Information</h3>
              
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
                  <FaPhone />
                </div>
                <div>
                  <strong>Phone</strong><br />
                  +965-99144152/72
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
              <h3 style={{marginBottom: '30px', fontSize: '1.5rem', paddingTop: '30px'}}>Request a Ecommerce Demo</h3>
                <a href='/calendar' className="btn-primary" style={{width: '100%'}}>
                  Request a Ecommerce Demo <FaArrowRight style={{marginLeft: '10px'}} />
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;