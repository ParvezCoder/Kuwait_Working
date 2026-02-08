import React, { useState } from 'react';
import Head from 'next/head'; // <--- Added for Canonical Tag
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import { queryDB } from '../../lib/db';
import { getCachedData } from '../../lib/redis';
import Link from 'next/link';

export async function getServerSideProps(context) {
  try {
    const cacheKey = `services_all`;

    const services = await getCachedData(
      cacheKey,
      async () => {
        const allServicesResult = await queryDB(`
          SELECT WebSitePageSerNo, WebSitePageSubSerial, WebSiteShortName, 
                 SortBy, SWITCH1, SWITCH2, active, WebEnglish
          FROM WEBSITECONTENT 
          WHERE WebSitePageSerNo NOT IN (1200, 1201, 1300) AND active = 1
          ORDER BY SWITCH1, SortBy
        `);

        return allServicesResult.recordset || [];
      },
      86400 
    );

    console.log("✅ Services loaded:", services.length);

    return {
      props: {
        services: services || [],
        error: null
      },
    };
  } catch (error) {
    console.error('❌ Error fetching services:', error);
    
    return {
      props: {
        services: [],
        error: error.message || 'Failed to load services'
      },
    };
  }
}

export default function ServicesPage({ services, error }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // --- SEO & Content Section Data ---
  const pageDescription = "Digital53 offers comprehensive IT management services in Kuwait, specializing in custom software development, ERP implementation, CRM solutions, and digital transformation strategies designed to elevate your business efficiency.";

  if (error) {
    return (
      <>
        <Header />
        <main className="page_content services-page">
          <PageTitle pageTitle="Our Services" pagesub="What We Offer" pageTop="Services" />
          <div className="container text-center py-5">
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <h4 className="error-title">Error Loading Services</h4>
              <p className="error-text">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="retry-button"
              >
                Try Again
              </button>
            </div>
          </div>
        </main>
        <Footer />
        <Scrollbar />
        <ServicesPageStyles />
      </>
    );
  }

  if (!services || services.length === 0) {
    return (
      <>
        <Header />
        <main className="page_content services-page">
          <PageTitle pageTitle="Our Services" pagesub="What We Offer" pageTop="Services" />
          <div className="container text-center py-5">
            <div className="no-services-container">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h4>No Services Available</h4>
              <p>We're currently updating our services. Please check back later.</p>
            </div>
          </div>
        </main>
        <Footer />
        <Scrollbar />
        <ServicesPageStyles />
      </>
    );
  }

  const groupedServices = services.reduce((acc, service) => {
    const category = service.SWITCH1 || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});

  const categories = Object.keys(groupedServices).reduce((acc, key) => {
    if (key === 'other') {
      acc[key] = 'Other Services';
    } else {
      const categoryNames = {
        '1': 'Primary Services',
        '2': 'Secondary Services',
        '3': 'Tertiary Services',
        '4': 'Quaternary Services',
        '5': 'Quinary Services',
        '31': 'Software Services',
        '32': 'IT Services',
        '33': 'Management Services',
        '34': 'Solutions & Applications',
        '35': 'Design & CRM',
        'Banner': 'Banner Services',
        'BannerInne': 'Banner Inner Services'
      };
      acc[key] = categoryNames[key] || `Category ${key}`;
    }
    return acc;
  }, {});

  const getCategoryServices = () => {
    if (selectedCategory === 'all') {
      return services;
    }
    return groupedServices[selectedCategory] || [];
  };

  const filteredServices = getCategoryServices();

  return (
    <>
      {/* --- 1. Added Head with Canonical Tag --- */}
      <Head>
        <title>IT Services & Software Solutions in Kuwait | Digital53</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.digital53.com/services" />
      </Head>

      <Header />
      <main className="page_content services-page">
        <PageTitle pageTitle="Our Services" pagesub="What We Offer" pageTop="Services" />

        {/* --- 2. Added SEO Content Section (Fixes "Thin Content" Issue) --- */}
        <section className="service-intro-section">
          <div className="container">
             <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                   <h2 className="section-title">Comprehensive IT Solutions & Digital Services</h2>
                   <p className="section-desc">
                     At Digital53, we empower businesses across Kuwait with cutting-edge technology solutions. 
                     From robust <strong>ERP and CRM implementations</strong> to custom <strong>software development</strong> and 
                     IT infrastructure management, our services are designed to streamline your operations and drive digital growth. 
                     Explore our diverse range of services below to find the perfect solution for your industry needs.
                   </p>
                </div>
             </div>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <div className="category-filter mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="filter-buttons text-center">
                    <button
                      className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Services ({services.length})
                    </button>
                    {Object.entries(categories).map(([key, name]) => (
                      <button
                        key={key}
                        className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(key)}
                      >
                        {name} ({groupedServices[key]?.length || 0})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {filteredServices.length > 0 ? (
              <div className="services-grid">
                <div className="row">
                  {filteredServices.map((service, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={service.WebSitePageSubSerial || index}>
                      <div className="service-card">
                        <div className="service-icon">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <div className="service-content">
                          <h4 className="service-title">
                            <Link href={`/services/${service.WebSitePageSubSerial}`}>
                              {service.WebSiteShortName || service.WebEnglish || 'Service'}
                            </Link>
                          </h4>
                          <p className="service-description">
                            {service.WebEnglish || 'Professional service offering'}
                          </p>
                          <div className="service-meta">
                            <span className="service-category">
                              {categories[service.SWITCH1] || 'Other'}
                            </span>
                            <span className="service-id">ID: {service.WebSitePageSerNo}</span>
                          </div>
                          <Link
                            href={`/services/${service.WebSitePageSubSerial}`}
                            className="service-link"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {(selectedCategory === 'all' || selectedCategory === '1') && (
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="service-card">
                        <div className="service-icon">
                          <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="service-content">
                          <h4 className="service-title">
                            <Link href="/ecommerce">
                              Ecommerce Solutions
                            </Link>
                          </h4>
                          <p className="service-description">
                            Complete ecommerce platform solutions for your business
                          </p>
                          <div className="service-meta">
                            <span className="service-category">
                              Primary Services
                            </span>
                            <span className="service-id">ID: 31</span>
                          </div>
                          <Link href="/ecommerce" className="service-link">
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-5">
                <div className="no-services">
                  <i className="fas fa-search fa-3x text-muted mb-3"></i>
                  <h4>No Services Found</h4>
                  <p>No services match the selected category.</p>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="btn-primary"
                  >
                    View All Services
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <Scrollbar />
      <ServicesPageStyles />
    </>
  );
}

function ServicesPageStyles() {
  return (
    <style jsx global>{`
      /* --- Added Styles for Intro Section --- */
      .service-intro-section {
        padding: 60px 0 20px 0;
        background: #fff;
      }
      .section-title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #333;
      }
      .section-desc {
        font-size: 18px;
        color: #666;
        line-height: 1.8;
        margin-bottom: 20px;
      }

      /* --- Original Styles --- */
      .services-section {
        padding: 40px 0 60px 0; /* Adjusted top padding */
        background: #f8f9fa;
      }

      .category-filter {
        margin-bottom: 40px;
      }

      .filter-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
      }

      .filter-btn {
        padding: 10px 20px;
        border: 2px solid #007bff;
        background: white;
        color: #007bff;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        font-size: 14px;
      }

      .filter-btn:hover,
      .filter-btn.active {
        background: #007bff;
        color: white;
      }

      .service-card {
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      }

      .service-icon {
        text-align: center;
        margin-bottom: 20px;
      }

      .service-icon i {
        font-size: 48px;
        color: #007bff;
        background: #f8f9fa;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      }

      .service-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .service-title {
        font-size: 20px;
        margin-bottom: 15px;
        color: #333;
      }

      .service-title a {
        color: inherit;
        text-decoration: none;
      }

      .service-title a:hover {
        color: #007bff;
      }

      .service-description {
        color: #666;
        margin-bottom: 20px;
        flex: 1;
        line-height: 1.6;
      }

      .service-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        font-size: 14px;
        flex-wrap: wrap;
        gap: 10px;
      }

      .service-category {
        background: #e3f2fd;
        color: #1976d2;
        padding: 4px 12px;
        border-radius: 15px;
        font-weight: 500;
        font-size: 12px;
      }

      .service-id {
        color: #999;
        font-family: monospace;
        font-size: 12px;
      }

      .service-link {
        color: #007bff;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
        display: inline-block;
      }

      .service-link:hover {
        color: #0056b3;
      }

      .no-services,
      .no-services-container {
        padding: 40px 20px;
        color: #666;
      }

      .no-services i,
      .no-services-container i {
        color: #ccc;
      }

      .no-services .btn-primary,
      .no-services-container .btn-primary {
        background: #007bff;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 20px;
        transition: background 0.3s ease;
      }

      .no-services .btn-primary:hover,
      .no-services-container .btn-primary:hover {
        background: #0056b3;
      }

      .error-container {
        padding: 60px 20px;
        text-align: center;
      }

      .error-icon {
        font-size: 48px;
        margin-bottom: 20px;
      }

      .error-title {
        font-size: 24px;
        color: #d32f2f;
        margin-bottom: 16px;
      }

      .error-text {
        font-size: 18px;
        color: #666;
        margin-bottom: 30px;
      }

      .retry-button {
        background: #007bff;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .retry-button:hover {
        background: #0056b3;
      }

      @media (max-width: 768px) {
        .filter-buttons {
          flex-direction: column;
          align-items: stretch;
        }
        
        .filter-btn {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }

        .service-card {
          padding: 20px;
        }

        .service-icon i {
          width: 60px;
          height: 60px;
          font-size: 36px;
        }
        
        .section-title {
          font-size: 26px;
        }
        
        .section-desc {
          font-size: 16px;
        }
      }
    `}</style>
  );
}