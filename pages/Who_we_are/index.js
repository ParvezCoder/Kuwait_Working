import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';
import CountUp from 'react-countup';
import Head from 'next/head';

// Import images
import aboutImg1 from '/public/images/about/digitalservices.webp';
import aboutImg2 from '/public/images/about/technical_team.jpg';
import icon1 from '/public/images/icons/icon_mission.svg';
import icon2 from '/public/images/icons/icon_vision.svg';
import icon3 from '/public/images/icons/icon_values.svg';

const WhoWeArePage = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Head>
                <title>Who We Are | Corp-Digital</title>
                <meta name="description" content="Learn about Corp-Digital's history, principles, culture, and services. Established in 2000, we're a global IT solutions provider." />
                <meta name="keywords" content="Corp-Digital history, IT company about us, digital solutions provider, technology services" />
                <meta property="og:title" content="Who We Are | Corp-Digital" />
                <meta property="og:description" content="Discover our journey since 2000, our core principle, and our global IT services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/who-we-are" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" />
                <link rel="canonical" href="https://corp.digital53.com/who-we-are" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Who We Are'} pagesub={'Our Story 😍'} pageTop={'About'} />
                
                {/* Digital Facts Section */}
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

                {/* Stats Section */}
                <section className="stats_section section_space bg-dark text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="23"><CountUp end={23} enableScrollSpy duration={3} /></span>
                                        <span>+</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Years Experience</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="500"><CountUp end={500} enableScrollSpy duration={3} /></span>
                                        <span>+</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Clients Worldwide</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="50"><CountUp end={50} enableScrollSpy duration={3} /></span>
                                        <span>+</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Team Members</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="100"><CountUp end={100} enableScrollSpy duration={3} /></span>
                                        <span>+</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Projects Completed</h3>
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
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default WhoWeArePage;
