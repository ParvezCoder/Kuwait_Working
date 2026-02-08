import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header2/Header2';
import { FaBullseye, FaChartLine, FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const GoalsMissionPage = () => {
  return (
    <>
      <Head>
        <title>Our Vision & Mission | Corp-Digital</title>
        <meta name="description" content="Discover Corp-Digital's vision to lead in OEM products and our mission to empower IT professionals and businesses worldwide." />
      </Head>
        <Header />
        
      <main className="vision-mission-page">
        {/* Hero Section */}
        <section className="hero-section bg-gradient-primary">
          <div className="container">
            <h1 className="hero-title">
               <span className="text-secondary">Our Purpose</span>
            </h1>
            <p className="hero-subtitle">
              Driving innovation through vision and execution
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section section-space">
          <div className="container">
            <div className="section-header text-center">
              <div className="badge bg-secondary text-white mb-3">Our Compass</div>
              <h2 className="section-title">Our Vision</h2>
              <p className="section-intro">
                To be the world leader in our OEM products, services and solutions that enable and transform the way consumers and businesses gather, manage, distribute and communicate information.
              </p>
            </div>

            <div className="vision-pillars row g-4">
              {/* Working Pillar */}
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="pillar-icon bg-primary">
                    <FaChartLine size={28} />
                  </div>
                  <h3 className="pillar-title">Working</h3>
                  <p className="pillar-description">
                    This is about effort. Work. We all have a task to do. We are here to provide value to our customers and to the communities where we work.
                  </p>
                </div>
              </div>

              {/* Leadership Pillar */}
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="pillar-icon bg-secondary">
                    <FaBullseye size={28} />
                  </div>
                  <h3 className="pillar-title">Leadership</h3>
                  <p className="pillar-description">
                    We are not here to be known. We are here to lead, to be the best, nothing less. Setting standards in our industry through innovation.
                  </p>
                </div>
              </div>

              {/* Excellence Pillar */}
              <div className="col-md-4">
                <div className="pillar-card">
                  <div className="pillar-icon bg-warning">
                    <FaLightbulb size={28} />
                  </div>
                  <h3 className="pillar-title">Excellence</h3>
                  <p className="pillar-description">
                    Continuous improvement in everything we do. Delivering exceptional quality in products, services, and customer experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section bg-light section-space">
          <div className="container">
            <div className="section-header text-center">
              <div className="badge bg-primary text-white mb-3">Our Blueprint</div>
              <h2 className="section-title">Our Mission</h2>
            </div>

            <div className="mission-items row g-4">
              <div className="col-lg-6">
                <div className="mission-card">
                  <div className="mission-number">01</div>
                  <div className="mission-content">
                    <h3 className="mission-title">Best Practicing IT Procedures</h3>
                    <p className="mission-description">
                      Implementing and maintaining industry-leading IT processes to ensure reliability, security, and efficiency in all our solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mission-card">
                  <div className="mission-number">02</div>
                  <div className="mission-content">
                    <h3 className="mission-title">High Caliber IT Managers</h3>
                    <p className="mission-description">
                      Developing and empowering top-tier IT professionals who drive innovation and deliver exceptional results for our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mission-card">
                  <div className="mission-number">03</div>
                  <div className="mission-content">
                    <h3 className="mission-title">Caring for Our Customers</h3>
                    <p className="mission-description">
                      Building lasting relationships through exceptional service, understanding client needs, and delivering beyond expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="mission-card">
                  <div className="mission-number">04</div>
                  <div className="mission-content">
                    <h3 className="mission-title">Empowering IT Professionally</h3>
                    <p className="mission-description">
                      Providing the tools, training, and environment for IT professionals to excel and push the boundaries of what's possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mx-auto">
                <div className="mission-card">
                  <div className="mission-number">05</div>
                  <div className="mission-content">
                    <h3 className="mission-title">Empowering Our Suppliers</h3>
                    <p className="mission-description">
                      Collaborating with suppliers to align with our vision, ensuring quality and innovation throughout our value chain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<section className="values-section">
  <div className="container1">
    <div className="section-header">
      <div className="foundation-badge">Our Foundation</div>
      <h2 className="section-title">Core Values</h2>
      <p className="section-subtitle">
        These fundamental principles guide every decision we make and shape the way we work together to achieve excellence.
      </p>
    </div>

    <div className="values-container">
      <div className="values-grid">
        <div className="center-value">
          <div className="center-circle">
            <span>Integrity</span>
          </div>
        </div>
        
        <div className="value-item innovation">
          <div className="value-bubble">
            <span>Innovation</span>
          </div>
        </div>
        
        <div className="value-item excellence">
          <div className="value-bubble">
            <span>Excellence</span>
          </div>
        </div>
        
        <div className="value-item collaboration">
          <div className="value-bubble">
            <span>Collaboration</span>
          </div>
        </div>
        
        <div className="value-item customer-focus">
          <div className="value-bubble">
            <span>Customer Focus</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </main>
      <CtaSection />
            <Footer />
            <Scrollbar />
    </>
  );
};

export default GoalsMissionPage;