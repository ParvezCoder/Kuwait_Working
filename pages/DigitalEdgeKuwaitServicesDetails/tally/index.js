import React, { Fragment, useState, useEffect } from 'react';
import Link from "next/link";
import Header from '../../../components/Header2/Header2';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import Footer from '../../../components/software-company-components/Footer/Footer';
import CtaSection from '../../../components/CtaSection/CtaSection';
import Image from 'next/image';
import CountUp from 'react-countup';
import Head from 'next/head';


// Import images (using same as sample for now)
import discoveryImg from '/public/images/lifecycle/first.jpg';
import designDevImg from '/public/images/lifecycle/second.jpg';
import testingQaImg from '/public/images/lifecycle/third.jpg';
import deploymentImg from '/public/images/lifecycle/fourth.jpg';
import discoverIcon from '/public/images/icons/tally.svg';
import designIcon from '/public/images/icons/icon_design.svg';
import developIcon from '/public/images/icons/bilingual.svg';
import testIcon from '/public/images/icons/icon_maintain.svg';
import deployIcon from '/public/images/icons/migration.svg';
import maintainIcon from '/public/images/icons/training.svg';
import whatsappIcon from '/public/images/icons/icons8-whatsapp.svg';

// Helper function to get responsive styles
const getResponsiveStyle = (baseStyle, responsiveStyles) => {
    if (typeof window === 'undefined') {
        return baseStyle;
    }
    const width = window.innerWidth;
    let finalStyle = { ...baseStyle };

    if (width < 576 && responsiveStyles.xs) {
        finalStyle = { ...finalStyle, ...responsiveStyles.xs };
    } else if (width >= 576 && width < 768 && responsiveStyles.sm) {
        finalStyle = { ...finalStyle, ...responsiveStyles.sm };
    } else if (width >= 768 && width < 992 && responsiveStyles.md) {
        finalStyle = { ...finalStyle, ...responsiveStyles.md };
    } else if (width >= 992 && width < 1200 && responsiveStyles.lg) {
        finalStyle = { ...finalStyle, ...responsiveStyles.lg };
    } else if (width >= 1200 && responsiveStyles.xl) {
        finalStyle = { ...finalStyle, ...responsiveStyles.xl };
    }
    return finalStyle;
};

const TallyERPKuwaitPage = () => {
    const clickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [viewportWidth, setViewportWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        if (typeof window !== 'undefined') {
            setViewportWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    // Inline styles to prevent CSS conflicts
    const sectionStyle = {
        padding: '100px 0',
        backgroundColor: '#f8f9fa',
        marginBottom: '30px',
        borderRadius: '10px',
    };

    const darkSectionStyle = {
        padding: '100px 0',
        backgroundColor: 'var(--bs-light)',
        color: '#ffffff',
        marginBottom: '30px',
        borderRadius: '10px',
    };

    const headingBlockStyle = {
        textAlign: 'center',
        marginBottom: '60px',
    };

    const headingFocusTextStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#020842',
        display: 'inline-block',
        marginRight: '10px',
    };

    const badgeStyle = {
        backgroundColor: '#0044EB',
        color: 'white',
        padding: '8px 15px',
        borderRadius: '20px',
        fontSize: '1.8rem',
        verticalAlign: 'middle',
    };

    const headingTextStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#020842',
        marginTop: '15px',
        marginBottom: '20px',
    };

    const headingDescriptionStyle = {
        fontSize: '1.1rem',
        color: '#6c757d',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6',
    };

    const contentBlockStyle = {
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const contentBlockDarkStyle = {
        padding: '30px',
        backgroundColor: '#020842',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        height: '100%',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const listItemStyle = {
        listStyleType: 'none',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'flex-start',
    };

    const listIconStyle = {
        marginRight: '15px',
        color: '#0044EB',
        fontSize: '1.2rem',
        minWidth: '20px',
        textAlign: 'center',
    };

    const listTextStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#495057',
    };

    const listTextDarkStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#e9ecef',
    };

    const cardStyle = {
        backgroundColor: 'var(--bs-light)',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(212,34,34,0.08)',
        padding: '30px',
        marginBottom: '30px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
    };

    const cardIconWrapperStyle = {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: '#020842',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        flexShrink: 0,
    };

    const cardTitleStyle = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: 'var(--bs-secondary)',
    };

    const cardDescriptionStyle = {
        fontSize: '1rem',
        color: '#6c757d',
        lineHeight: '1.6',
    };

    const imageWrapperStyle = {
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '30px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    };

    const thStyle = {
        backgroundColor: 'var(--bs-primary)',
        color: 'white',
        padding: '15px',
        textAlign: 'left',
        fontSize: '1.1rem',
    };

    const tdStyle = {
        padding: '15px',
        borderBottom: '1px solid #dee2e6',
        color: '#495057',
        fontSize: '0.95rem',
    };

    const highlightedTdStyle = {
        backgroundColor: '#f0f8ff',
        fontWeight: 'bold',
    };

    const bestPracticeStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '15px',
        fontSize: '1.05rem',
        color: '#343a40',
    };

    const checkIconStyle = {
        color: 'var(--bs-success)',
        fontSize: '1.5rem',
        marginRight: '15px',
        flexShrink: 0,
    };

    const statsCounterStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        marginBottom: '20px',
    };

    const featureBoxStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '25px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        marginBottom: '20px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid #e9ecef',
    };

    const ctaButtonStyle = {
        backgroundColor: 'var(--bs-primary)',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: '600',
        display: 'inline-block',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0,68,235,0.3)',
        border: 'none',
        cursor: 'pointer',
    };

    // Responsive styles
    const responsiveHeadingFocusTextStyle = getResponsiveStyle(headingFocusTextStyle, {
        xs: { fontSize: '1.8rem' },
        sm: { fontSize: '2rem' },
    });

    const responsiveBadgeStyle = getResponsiveStyle(badgeStyle, {
        xs: { fontSize: '1.2rem', padding: '6px 10px' },
        sm: { fontSize: '1.5rem' },
    });

    const responsiveHeadingTextStyle = getResponsiveStyle(headingTextStyle, {
        xs: { fontSize: '2rem' },
        sm: { fontSize: '2.5rem' },
    });

    const responsiveCardTitleStyle = getResponsiveStyle(cardTitleStyle, {
        xs: { fontSize: '1.4rem' },
        sm: { fontSize: '1.6rem' },
    });

    const responsiveContentBlockHeadingStyle = getResponsiveStyle({ ...headingTextStyle, color: 'var(--bs-primary)' }, {
        xs: { fontSize: '1.8rem' },
        sm: { fontSize: '2rem' },
    });

    const responsiveListTextStyle = getResponsiveStyle(listTextStyle, {
        xs: { fontSize: '0.9rem' },
    });

    const responsiveTableThStyle = getResponsiveStyle(thStyle, {
        xs: { padding: '10px', fontSize: '0.9rem' },
    });

    const responsiveTableTdStyle = getResponsiveStyle(tdStyle, {
        xs: { padding: '10px', fontSize: '0.8rem' },
    });

    return (
        <Fragment>
            <Head>
                <title>Authorized Tally Partner in Kuwait | TallyPrime Solutions & Support</title>
                <meta name="description" content="Your trusted Tally partner in Kuwait. We are located in Hawally Ibn-Khaldoun Street,We offer Tally on Browser services, We make Tally boundaries open, We offer TallyPrime software, expert implementation, VAT-compliant customization, and support to streamline your business. Get a free demo today!" />
                <meta name="keywords" content="tally partner kuwait, tallyprime kuwait, tally erp kuwait, tally customization kuwait, accounting software kuwait, bilingual invoicing kuwait" />
                <meta property="og:title" content="Authorized Tally Partner in Kuwait | TallyPrime Solutions & Support" />
                <meta property="og:description" content="Leading Tally ERP partner in Kuwait offering comprehensive TallyPrime solutions, Arabic-English bilingual invoicing, and expert support for businesses." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/tally-erp-partner-kuwait" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" />
                <link rel="canonical" href="https://corp.digital53.com/tally-erp-partner-kuwait" />
                <meta name="geo.region" content="KW" />
                <meta name="geo.placename" content="Kuwait" />
                <meta name="geo.position" content="29.3759;47.9774" />
                <meta name="ICBM" content="29.3759, 47.9774" />
            </Head>
            <Header />
            <main style={{ backgroundColor: '#ffffff', overflowX: 'hidden' }}>
                <PageTitle pageTitle={'Tally ERP Partner Kuwait'} pagesub={'Business Solutions 🇰🇼'} pageTop={'Tally Kuwait'} />

                {/* Hero Section */}
                <section style={{ ...sectionStyle, paddingBottom: '0', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Your #1 <span style={responsiveBadgeStyle}>Tally ERP Partner</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-dark)' }}>Authorized Tally Solutions Provider in Kuwait</h2>
                            <p style={headingDescriptionStyle}>
                                Certified Master Tally Partner providing comprehensive TallyPrime solutions, Arabic-English bilingual invoicing,شريك تالي في الكويت,برامج تالي في الكويت,حلول برنامج Tally في الكويت, شريك تالي المعتمد الكويت, أفضل شريك تالي في الكويت,مزود حلول Tally الكويت,       
                                VAT compliance, and expert support for businesses across Kuwait. Streamline your accounting, inventory, and operations today.
                            </p>
                            <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a href='/calendar'
                                    style={ctaButtonStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = 'var(--bs-secondary)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,68,235,0.4)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = 'var(--bs-primary)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,68,235,0.3)';
                                    }}
                                >
                                    Request Free Demo
                                    <i className="fa-solid fa-play" style={{ marginLeft: '8px' }}></i>
                                </a>
                                <button 
                                    style={{ ...ctaButtonStyle, backgroundColor: 'transparent', color: 'var(--bs-primary)', border: '2px solid var(--bs-primary)' }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = 'var(--bs-primary)';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.color = 'var(--bs-primary)';
                                    }}
                                >
                                    Get Quote
                                    <i className="fa-solid fa-calculator" style={{ marginLeft: '8px' }}></i>
                                </button>
                            </div>
                        </div>
                        
                        {/* Core Services Cards */}
                        <div className="row justify-content-center">
                            {[
                                { icon: discoverIcon, title: 'TallyPrime Implemen\ntation', description: 'Professional setup and configuration tailored to your business needs.' },
                                { icon: designIcon, title: 'Advanced Custom\nization', description: 'Custom modules, workflows, and reports for unique business requirements.' },
                                { icon: developIcon, title: 'Bilingual Invoicing', description: 'Arabic-English invoice solutions compliant with Kuwait regulations.' },
                                { icon: testIcon, title: 'Annual Maintenance (AMC)', description: 'Regular updates, data protection, and priority technical support.' },
                                { icon: deployIcon, title: 'Data Migration', description: 'Safe migration from legacy systems with minimal business disruption.' },
                                { icon: maintainIcon, title: 'Training & Support', description: 'Corporate and individual training with 24/7 technical assistance.' },
                            ].map((service, index) => (
                                <div className="col-lg-2 col-md-4 col-sm-6" key={index} style={{ marginBottom: '30px' }}>
                                    <div
                                        style={{
                                            ...cardStyle,
                                            minHeight: '280px',
                                            transform: 'scale(1)',
                                            transition: 'transform 0.3s ease,box-shadow 0.3s ease',
                                        }}
                                        onMouseEnter={e => { 
                                            e.currentTarget.style.transform = 'scale(1.05)'; 
                                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.18)'; 
                                        }}
                                        onMouseLeave={e => { 
                                            e.currentTarget.style.transform = 'scale(1)'; 
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'; 
                                        }}
                                    >
                                        <div style={cardIconWrapperStyle}>
                                            <Image src={service.icon} alt={`${service.title} Icon`} width={40} height={40} style={{ objectFit: 'contain' }} />
                                        </div>
                                        <h3 style={responsiveCardTitleStyle}>{service.title}</h3>
                                        <p style={cardDescriptionStyle}>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={discoveryImg} alt="About Tally Partner Kuwait" layout="responsive" width={700} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h2 style={responsiveContentBlockHeadingStyle}><span style={{ color: 'var(--bs-primary)' }}>Kuwait's Trusted</span> Tally Solutions Provider</h2>
                                    <p style={cardDescriptionStyle}>
                                        As a certified Master Tally Partner with over 10+ years of experience in Kuwait, we are dedicated to empowering 
                                        businesses with efficient, scalable, and compliant financial management solutions using TallyPrime.
                                    </p>
                                    
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '25px' }}>Our Expertise:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-certificate"></i></span><span style={responsiveListTextStyle}><strong>Official Certification:</strong> Authorized Master Tally Partner with Gold Partner status</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-building"></i></span><span style={responsiveListTextStyle}><strong>Local Expertise:</strong> Deep understanding of Kuwait business regulations and VAT compliance</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-language"></i></span><span style={responsiveListTextStyle}><strong>Bilingual Solutions:</strong> Arabic-English invoice generation and reporting capabilities</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-users"></i></span><span style={responsiveListTextStyle}><strong>Proven Track Record:</strong> Successfully serving 500+ businesses across various industries in Kuwait</span></li>
                                    </ul>

                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '25px' }}>Our Mission:</h4>
                                    <p style={cardDescriptionStyle}>
                                        To empower businesses in Kuwait with efficient, scalable, and simple solutions for their financial and operational needs, 
                                        ensuring compliance with local regulations while maximizing productivity and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TallyPrime Features Section */}
                <section style={darkSectionStyle}>
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={designDevImg} alt="TallyPrime Features" layout="responsive" width={700} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockDarkStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h2 style={{ ...responsiveContentBlockHeadingStyle, color: 'var(--bs-primary)' }}><span style={{ color: 'var(--bs-secondary)' }}>TallyPrime:</span> Complete Business Management</h2>
                                    <p style={listTextDarkStyle}>
                                        TallyPrime is the next-generation business management software that simplifies your accounting, inventory, 
                                        payroll, and compliance needs - perfect for businesses of all sizes in Kuwait.
                                    </p>
                                    
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>Key Features & Benefits:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-mouse-pointer"></i></span><span style={listTextDarkStyle}><strong>Simplicity & Ease of Use:</strong> User-friendly interface that's easy to learn and navigate</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-chart-bar"></i></span><span style={listTextDarkStyle}><strong>Comprehensive Reporting:</strong> Financial statements, cash-flow reports, and cost-center analysis</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-shield-alt"></i></span><span style={listTextDarkStyle}><strong>Data Security:</strong> Robust security features to keep your business data safe</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-cloud"></i></span><span style={listTextDarkStyle}><strong>Remote Access:</strong> Access your business data from anywhere, anytime</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-globe"></i></span><span style={listTextDarkStyle}><strong>Multi-Currency:</strong> Handle multiple currencies with automatic exchange rate updates</span></li>
                                    </ul>

                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>Kuwait-Specific Benefits:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>VAT-compliant reporting and invoice generation</li>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Arabic-English bilingual invoice printing</li>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Local banking integration and payment gateway support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comprehensive Services Section */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Comprehensive <span style={responsiveBadgeStyle}>Tally Services</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-dark)' }}>Complete Tally Solutions in Kuwait</h2>
                            <p style={headingDescriptionStyle}>
                                From implementation to ongoing support, we provide end-to-end Tally services to ensure your business 
                                operates efficiently and remains compliant with Kuwait regulations.
                            </p>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                <div 
                                    style={featureBoxStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ ...cardIconWrapperStyle, width: '50px', height: '50px', marginRight: '15px', marginBottom: '0' }}>
                                            <i className="fa-solid fa-cogs" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                        </div>
                                        <h3 style={{ ...responsiveCardTitleStyle, fontSize: '1.4rem', marginBottom: '0' }}>Tally Implementation</h3>
                                    </div>
                                    <p style={cardDescriptionStyle}>
                                        Professional installation, configuration, and setup of TallyPrime tailored to your specific business processes. 
                                        We ensure seamless integration with your existing systems and workflows.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                <div 
                                    style={featureBoxStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ ...cardIconWrapperStyle, width: '50px', height: '50px', marginRight: '15px', marginBottom: '0' }}>
                                            <i className="fa-solid fa-code" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                        </div>
                                        <h3 style={{ ...responsiveCardTitleStyle, fontSize: '1.4rem', marginBottom: '0' }}>Tally Customization</h3>
                                    </div>
                                    <p style={cardDescriptionStyle}>
                                        Custom modules, pre-printed invoices, salesman-wise reports, and approval workflows. 
                                        We adapt Tally to fit your unique business processes and industry requirements.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                <div 
                                    style={featureBoxStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ ...cardIconWrapperStyle, width: '50px', height: '50px', marginRight: '15px', marginBottom: '0' }}>
                                            <i className="fa-solid fa-language" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                        </div>
                                        <h3 style={{ ...responsiveCardTitleStyle, fontSize: '1.4rem', marginBottom: '0' }}>Bilingual Invoice Solutions</h3>
                                    </div>
                                    <p style={cardDescriptionStyle}>
                                        Mandatory Arabic-English invoice generation compliant with Kuwait regulations. 
                                        Leverage TallyPrime's bilingual capabilities to save time and reduce compliance errors.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                <div 
                                    style={featureBoxStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ ...cardIconWrapperStyle, width: '50px', height: '50px', marginRight: '15px', marginBottom: '0' }}>
                                            <i className="fa-solid fa-shield-alt" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                        </div>
                                        <h3 style={{ ...responsiveCardTitleStyle, fontSize: '1.4rem', marginBottom: '0' }}>Annual Maintenance (AMC)</h3>
                                    </div>
                                    <p style={cardDescriptionStyle}>
                                        Regular updates, data protection, priority access to remote and on-site support. 
                                        Ensure your Tally system runs smoothly with our comprehensive maintenance contracts.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                <div 
                                    style={featureBoxStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ ...cardIconWrapperStyle, width: '50px', height: '50px', marginRight: '15px', marginBottom: '0' }}>
                                            <i className="fa-solid fa-database" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                        </div>
                                        <h3 style={{ ...responsiveCardTitleStyle, fontSize: '1.4rem', marginBottom: '0' }}>Data Migration & Integration</h3>
                                    </div>
                                    <p style={cardDescriptionStyle}>
                                        Safe migration from legacy systems to TallyPrime with minimal downtime. 
                                        Integration with CRM and other business software for enhanced operational efficiency.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6" style={{ marginBottom: '30px' }}>
                                <div 
                                    style={featureBoxStyle}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ ...cardIconWrapperStyle, width: '50px', height: '50px', marginRight: '15px', marginBottom: '0' }}>
                                            <i className="fa-solid fa-graduation-cap" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                        </div>
                                        <h3 style={{ ...responsiveCardTitleStyle, fontSize: '1.4rem', marginBottom: '0' }}>Training & Support</h3>
                                    </div>
                                    <p style={cardDescriptionStyle}>
                                        Comprehensive corporate and individual training programs. 24/7 technical support 
                                        to ensure your team maximizes Tally's capabilities for business growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Metrics Section */}
                <section style={darkSectionStyle}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Success <span style={responsiveBadgeStyle}>Metrics</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-primary)' }}>Proven Track Record in Kuwait</h2>
                            <p style={headingDescriptionStyle}>
                                Our commitment to excellence and client satisfaction has established us as the leading Tally partner in Kuwait.
                            </p>
                        </div>
                        <div className="row">
                            {[
                                { number: 500, suffix: '+', title: 'Happy Clients', description: 'Businesses successfully using our Tally solutions' },
                                { number: 10, suffix: '+', title: 'Years Experience', description: 'Decade of expertise in Kuwait market' },
                                { number: 98, suffix: '%', title: 'Client Satisfaction', description: 'Based on post-implementation feedback' },
                                { number: 24, suffix: '/7', title: 'Support Available', description: 'Round-the-clock technical assistance' }
                            ].map((stat, index) => (
                                <div className="col-lg-3 col-md-6" key={index}>
                                    <div style={{ ...statsCounterStyle, backgroundColor: '#fff', color: '#343a40' }}>
                                        <div style={{ 
                                            fontSize: '3rem', 
                                            fontWeight: 'bold', 
                                            color: '#020842', 
                                            marginBottom: '10px',
                                            ...(viewportWidth < 576 && { fontSize: '2.5rem' })
                                        }}>
                                            <CountUp end={stat.number} duration={2} />
                                            {stat.suffix}
                                        </div>
                                        <h4 style={{ 
                                            ...responsiveCardTitleStyle, 
                                            fontSize: '1.3rem', 
                                            marginBottom: '10px',
                                            ...(viewportWidth < 576 && { fontSize: '1.1rem' })
                                        }}>
                                            {stat.title}
                                        </h4>
                                        <p style={{ 
                                            ...cardDescriptionStyle, 
                                            fontSize: '0.9rem',
                                            ...(viewportWidth < 576 && { fontSize: '0.8rem' })
                                        }}>
                                            {stat.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={testingQaImg} alt="Why Choose Our Tally Services" layout="responsive" width={700} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h2 style={responsiveContentBlockHeadingStyle}><span style={{ color: 'var(--bs-primary)' }}>Why Choose</span> Our Tally Services?</h2>
                                    <p style={cardDescriptionStyle}>
                                        We combine technical expertise with deep local market knowledge to deliver exceptional Tally solutions 
                                        that drive business growth and ensure regulatory compliance in Kuwait.
                                    </p>
                                    
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '25px' }}>Local Advantages:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Deep understanding of Kuwait's VAT and business regulations</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Arabic-English bilingual support and documentation</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>On-site support across Kuwait City and surrounding areas</li>
                                    </ul>

                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '25px' }}>Technical Excellence:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Certified Master Tally Partner with Gold status</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Expertise across all Tally versions from Tally.ERP 9 to TallyPrime</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Custom development and integration capabilities</li>
                                    </ul>

                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '25px' }}>Service Quality:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Rapid response times and priority support</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Comprehensive training and knowledge transfer</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Ongoing relationship management and business growth support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Getting Started Section */}
                                <section style={darkSectionStyle}>
                                    <div className="container">
                                        <div className="row align-items-center flex-row-reverse">
                                            <div className="col-lg-6">
                                                <div style={imageWrapperStyle}>
                                                    <Image src={deploymentImg} alt="Get Started with Tally" layout="responsive" width={700} height={450} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div style={{ ...contentBlockDarkStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                                    <h2 style={{ ...responsiveContentBlockHeadingStyle, color: 'var(--bs-primary)' }}><span style={{ color: 'var(--bs-secondary)' }}>Ready to Get</span> Started?</h2>
                                                    <p style={listTextDarkStyle}>
                                                        Transform your business operations with TallyPrime. Contact us today for a free consultation 
                                                        and discover how our Tally solutions can streamline your accounting and boost efficiency.
                                                    </p>
                                                    
                                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>What We Offer:</h4>
                                                    <ul style={{ paddingLeft: '0' }}>
                                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-play"></i></span><span style={listTextDarkStyle}><strong>Free Demo:</strong> See TallyPrime in action with your business scenarios</span></li>
                                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-calculator"></i></span><span style={listTextDarkStyle}><strong>Custom Quote:</strong> Tailored pricing based on your specific requirements</span></li>
                                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-comments"></i></span><span style={listTextDarkStyle}><strong>Free Consultation:</strong> Expert advice on optimizing your business processes</span></li>
                                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-rocket"></i></span><span style={listTextDarkStyle}><strong>Quick Implementation:</strong> Fast setup and go-live with minimal disruption</span></li>
                                                    </ul>

                                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>Contact Information:</h4>
                                                    <ul style={{ paddingLeft: '0' }}>
                                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}>
                                                            <span style={checkIconStyle}>
                                                                <a href="https://wa.me/96599144152" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                                    <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} style={{ marginRight: '8px' }} />
                                                                </a>
                                                            </span>
                                                            <a href="https://wa.me/96599144152" target="_blank" rel="noopener noreferrer" style={{ color: '#e9ecef', textDecoration: 'underline' }}>
                                                             Call Us: +965-99144152
                                                            </a>
                                                        </li>
                                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-envelope"></i></span>Email: info@digital53.com</li>
                                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-map-marker-alt"></i></span>Nassima Complex, Ground Floor, Shop #2 and 3, Hawally, Kuwait</li>
                                                    </ul>

                                                    <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>

                                                        <Link href="https://wa.me/96599144152" target='_blank' passHref>
                                                        <button 
                                                            style={ctaButtonStyle}
                                                            onMouseEnter={e => {
                                                e.currentTarget.style.backgroundColor = 'var(--bs-secondary)';
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,68,235,0.4)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.backgroundColor = 'var(--bs-primary)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,68,235,0.3)';
                                            }}
                                        >
                                            Consult Us
                                            <Image src={whatsappIcon} alt="WhatsApp" width={24} height={24} style={{ marginLeft: '8px' }} />
                                        </button>
                                                        </Link>
                                        <Link href="/contact?message=I want to Enquire about Tally." passHref>
                                        <button 
                                            style={{ ...ctaButtonStyle, backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.backgroundColor = 'white';
                                                e.currentTarget.style.color = 'var(--bs-primary)';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.color = 'white';
                                            }}
                                        >
                                            Contact Us
                                            <i className="fa-solid fa-phone" style={{ marginLeft: '8px' }}></i>
                                        </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials & Client Logos Section */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Client <span style={responsiveBadgeStyle}>Success Stories</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-dark)' }}>Trusted by Leading Businesses in Kuwait</h2>
                            <p style={headingDescriptionStyle}>
                                See what our satisfied clients say about our Tally solutions and the impact on their business operations.
                            </p>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                                <div style={{ ...contentBlockStyle, textAlign: 'center', minHeight: '200px' }}>
                                    <div style={{ fontSize: '3rem', color: 'var(--bs-primary)', marginBottom: '15px' }}>
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p style={{ ...cardDescriptionStyle, fontStyle: 'italic', marginBottom: '20px' }}>
                                        "The bilingual invoicing feature saved us countless hours and ensured perfect compliance 
                                        with Kuwait regulations. Excellent support and implementation."
                                    </p>
                                    <h5 style={{ color: 'var(--bs-primary)', fontWeight: 'bold' }}>Ahmed Al-Rashid</h5>
                                    <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>CFO, Kuwait Trading Co.</p>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                                <div style={{ ...contentBlockStyle, textAlign: 'center', minHeight: '200px' }}>
                                    <div style={{ fontSize: '3rem', color: 'var(--bs-primary)', marginBottom: '15px' }}>
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p style={{ ...cardDescriptionStyle, fontStyle: 'italic', marginBottom: '20px' }}>
                                        "Their expertise in TallyPrime customization helped us streamline our inventory management. 
                                        The ROI was visible within the first month of implementation."
                                    </p>
                                    <h5 style={{ color: 'var(--bs-primary)', fontWeight: 'bold' }}>Sarah Mohamed</h5>
                                    <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Operations Manager, Gulf Industries</p>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                                <div style={{ ...contentBlockStyle, textAlign: 'center', minHeight: '200px' }}>
                                    <div style={{ fontSize: '3rem', color: 'var(--bs-primary)', marginBottom: '15px' }}>
                                        <i className="fa-solid fa-quote-left"></i>
                                    </div>
                                    <p style={{ ...cardDescriptionStyle, fontStyle: 'italic', marginBottom: '20px' }}>
                                        "Outstanding support and training. Our team became proficient in TallyPrime quickly, 
                                        and the 24/7 support gives us peace of mind for our operations."
                                    </p>
                                    <h5 style={{ color: 'var(--bs-primary)', fontWeight: 'bold' }}>Khalid Al-Sabah</h5>
                                    <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Finance Director, Kuwait Services LLC</p>
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
    );
};

export default TallyERPKuwaitPage;