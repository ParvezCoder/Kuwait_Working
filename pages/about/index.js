import React, { Fragment, useState } from 'react';
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import aImg from '/public/images/about/office_building.jpg'
import ModalVideo from 'react-modal-video'
import PolicySection from './Policy';
import WhyUs from './WhyUs';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
// import TeamSection from '../../components/TeamSection/TeamSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/software-company-components/Footer/Footer';
import Image from 'next/image';
import Head from 'next/head';
import aboutImg1 from '/public/images/about/digitalservices.webp';
import aboutImg2 from '/public/images/about/technical_team.jpg';
import icon1 from '/public/images/icons/icon_mission.svg';
import icon2 from '/public/images/icons/icon_vision.svg';
import icon3 from '/public/images/icons/icon_values.svg';
import { FaBullseye, FaChartLine, FaUsers, FaHandshake, FaLightbulb } from 'react-icons/fa';


const AboutUsPage = (props) => {

    const [isOpen, setOpen] = useState(false)
    return (
        <Fragment>
            <Head>
                <title>About Us | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="About Us | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/about" />
                <meta property="og:image" content="https://corp.digital53.com/images/about/aboutus1.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/about" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'About Us'} pagesub={'More Corp-Digital 😃'} pageTop={'About'}/>
                <section className=" section_space bg-light">
                    {/* <div className="intro_about_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="image_wrap">
                                        <Image src={aImg} alt="Corp-Digital - About " />
                                    </div>
                                </div>
                                 <div className="col-lg-4">
                                    <div className="image_wrap position-relative">
                                        <Image src={aImg2} alt="Corp-Digital - About" />
                                        <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                            <span className="btn_icon">
                                                <i className="fa-solid fa-play"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div> */}
                    <div className="container">
                        <div className="heading_block mb-0">
                            <div className="row justify-content-lg-between">
                                <div className="col-lg-4">
                                    <div className="heading_focus_text">
                                        About
                                        <span className="badge bg-secondary text-white">Corp-Digital 🙂</span>
                                    </div>
                                    <h2 className="heading_text mb-0">
                                    MESSAGE FROM CHAIRMAN AND CEO
                                    </h2>
                                </div>
                                <div className="col-lg-6 mt-4 mt-lg-6">
                                    <p className="heading_description mb-0">
                                    "Quality is the first priority at Digital Edge (DE) Solutions Inc. We are powered with Quality product and strive for Quality Service. We engaged with the best breed product in the world. We are working toward providing the Best solutions around the globe."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <PolicySection />
                <FeaturesSection />
                {/* <TeamSection /> */}
                <WhyUs />


                {/* Who We Are */}  
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about_image">
                                    <Image src={aboutImg1} alt="Corp-Digital Office" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Digital
                                            <span className="badge bg-secondary text-white">Facts</span>
                                        </div>
                                        <h2 className="heading_text">
                                            Our Journey Since 2000
                                        </h2>
                                        <p className="heading_description">
                                            Established in 2000 with our first office in Canada, Ontario. We expanded to Kuwait in 2004 as a retail business and IT infrastructure provider, representing brands like BitDefender and Nexcom.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="iconbox_item">
                                                <div className="item_icon">
                                                    <i className="fa-solid fa-globe"></i>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="item_title">Global Presence</h3>
                                                    <p className="mb-0">Investing in technology across the globe</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="iconbox_item">
                                                <div className="item_icon">
                                                    <i className="fa-solid fa-chart-line"></i>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="item_title">Market Leaders</h3>
                                                    <p className="mb-0">Strong track record of building leading companies</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principles Section - Updated with consistent icon sizing */}
<section className="principles_section section_space">
    <div className="container">
        <div className="heading_block text-center">
            <div className="heading_focus_text">
                Our Core
                <span className="badge bg-secondary text-white">Principles</span>
            </div>
            <h2 className="heading_text">
                What Guides Our Work
            </h2>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="principles_card">
                    <div className="item_icon" style={{ width: '80px', height: '80px' }}>
                        <Image 
                            src={icon1} 
                            alt="Mission Icon" 
                            width={48} 
                            height={48}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <h3 className="item_title">Service First</h3>
                    <p className="mb-0">
                        We believe in putting service above all else, ensuring our clients receive the best support and solutions.
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="principles_card">
                    <div className="item_icon" style={{ width: '80px', height: '80px' }}>
                        <Image 
                            src={icon2} 
                            alt="Vision Icon" 
                            width={48} 
                            height={48}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <h3 className="item_title">Global Perspective</h3>
                    <p className="mb-0">
                        We recognize that technology markets are global and design our solutions accordingly.
                    </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="principles_card">
                    <div className="item_icon" style={{ width: '80px', height: '80px' }}>
                        <Image 
                            src={icon3} 
                            alt="Values Icon" 
                            width={48} 
                            height={48}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <h3 className="item_title">Growth Focus</h3>
                    <p className="mb-0">
                        We maintain a strong focus on sales productivity as the engine of sustainable growth.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


                {/* Culture Section */}
                <section className="culture_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-last">
                                <div className="culture_image">
                                    <Image src={aboutImg2} alt="Corp-Digital Team Culture" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="culture_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            Our Unique
                                            <span className="badge bg-secondary text-white">Culture</span>
                                        </div>
                                        <h2 className="heading_text">
                                            How We Work Together
                                        </h2>
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Belief in the power of coaching to develop world-class talent
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Openness to new ideas and fresh business approaches
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Culture of transparency, healthy skepticism, and debate
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Conviction that top-quality companies can be built from anywhere
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services_section section_space">
                    <div className="container">
                        <div className="heading_block text-center">
                            <div className="heading_focus_text">
                                Our Online
                                <span className="badge bg-secondary text-white">Services</span>
                            </div>
                            <h2 className="heading_text">
                                Comprehensive Digital Solutions
                            </h2>
                            <p className="heading_description mx-auto">
                                We have a full team of professionals to share their expertise with you across multiple disciplines.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="service_card">
                                    <div className="item_icon bg-primary">
                                        <i className="fa-solid fa-language"></i>
                                    </div>
                                    <h3 className="item_title">Translation Services</h3>
                                    <p className="mb-0">
                                        Professional translation in all major languages with industry-specific expertise.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service_card">
                                    <div className="item_icon bg-danger">
                                        <i className="fa-solid fa-keyboard"></i>
                                    </div>
                                    <h3 className="item_title">Transcription Services</h3>
                                    <p className="mb-0">
                                        Accurate and timely transcription for audio and video content.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service_card">
                                    <div className="item_icon bg-secondary">
                                        <i className="fa-solid fa-code"></i>
                                    </div>
                                    <h3 className="item_title">Development Services</h3>
                                    <p className="mb-0">
                                        Custom software development and programming solutions.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="service_card">
                                    <div className="item_icon bg-warning">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <h3 className="item_title">SEO & SMM Services</h3>
                                    <p className="mb-0">
                                        Comprehensive digital marketing strategies to grow your online presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Goal and Mission */}

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



                {/* Timeline Section - Enhanced Design */}
<section className="timeline_section section_space bg-light">
    <div className="container">
        <div className="heading_block text-center">
            <div className="heading_focus_text">
                Our Growth
                <span className="badge bg-secondary text-white">Timeline</span>
            </div>
            <h2 className="heading_text">
                Key Milestones in Our Journey
            </h2>
        </div>
        <div className="timeline_wrapper position-relative">
            {/* Timeline line */}
            
            <div className="timeline_connector"></div>
            
            {/* Timeline items */}
            <div className="timeline_item left">
                <div className="timeline_dot"></div>
                <div className="timeline_content card">
                    <h3 className="timeline_year text-primary">2000</h3>
                    <h4 className="timeline_title">Founded in Canada</h4>
                    <p className="timeline_description">
                        Established our first office in Ontario, Canada, focusing on IT solutions.
                    </p>
                    <div className="timeline_icon">
                        <i className="fa-solid fa-building"></i>
                    </div>
                </div>
            </div>
            <div className="timeline_item right">
                <div className="timeline_dot"></div>
                <div className="timeline_content card">
                    <h3 className="timeline_year text-primary">2004</h3>
                    <h4 className="timeline_title">Expanded to Kuwait</h4>
                    <p className="timeline_description">
                        Launched retail operations and IT infrastructure services in Kuwait.
                    </p>
                    <div className="timeline_icon">
                        <i className="fa-solid fa-globe"></i>
                    </div>
                </div>
            </div>
            <div className="timeline_item left">
                <div className="timeline_dot"></div>
                <div className="timeline_content card">
                    <h3 className="timeline_year text-primary">2007</h3>
                    <h4 className="timeline_title">Strategic Partnerships</h4>
                    <p className="timeline_description">
                        Formed agency relationships with BitDefender and Nexcom.
                    </p>
                    <div className="timeline_icon">
                        <i className="fa-solid fa-handshake"></i>
                    </div>
                </div>
            </div>
            <div className="timeline_item right">
                <div className="timeline_dot"></div>
                <div className="timeline_content card">
                    <h3 className="timeline_year text-primary">2015</h3>
                    <h4 className="timeline_title">Global Expansion</h4>
                    <p className="timeline_description">
                        Began investing in technology businesses across multiple continents.
                    </p>
                    <div className="timeline_icon">
                        <i className="fa-solid fa-route"></i>
                    </div>
                </div>
            </div>
            <div className="timeline_item left">
                <div className="timeline_dot"></div>
                <div className="timeline_content card">
                    <h3 className="timeline_year text-primary">2023</h3>
                    <h4 className="timeline_title">Digital Transformation</h4>
                    <p className="timeline_description">
                        Launched comprehensive digital services platform serving clients worldwide.
                    </p>
                    <div className="timeline_icon">
                        <i className="fa-solid fa-rocket"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>




                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </Fragment>
    )
};
export default AboutUsPage;
