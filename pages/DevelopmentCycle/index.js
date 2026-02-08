import React, { Fragment, useState, useEffect } from 'react';
import Link from "next/link";
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';
import CountUp from 'react-countup';
import Head from 'next/head';

// Import images
import discoveryImg from '/public/images/lifecycle/discovery.png'; // Placeholder, replace with actual image
import designDevImg from '/public/images/lifecycle/design_development.png'; // Placeholder
import testingQaImg from '/public/images/lifecycle/testing_qa.png'; // Placeholder
import deploymentImg from '/public/images/lifecycle/deployment.png'; // Placeholder
import discoverIcon from '/public/images/icons/icon_discovery.svg'; // Placeholder
import designIcon from '/public/images/icons/icon_design.svg'; // Placeholder
import developIcon from '/public/images/icons/icon_development.svg'; // Placeholder
import testIcon from '/public/images/icons/icon_test.svg'; // Placeholder
import deployIcon from '/public/images/icons/icon_deploy.svg'; // Placeholder
import maintainIcon from '/public/images/icons/icon_maintain.svg'; // Placeholder

// Helper function to get responsive styles
const getResponsiveStyle = (baseStyle, responsiveStyles) => {
    if (typeof window === 'undefined') {
        return baseStyle; // Return base style during SSR
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

const SoftwareDevelopmentLifecyclePage = () => {
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
        backgroundColor: '#f8f9fa', // Light background for contrast
        marginBottom: '30px',
        borderRadius: '10px',
    };

    const darkSectionStyle = {
        padding: '100px 0',
        backgroundColor: 'var(--bs-light)', // Dark background for contrast
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

    const cardHoverStyle = {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
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

    const cardIconStyle = {
        color: 'white',
        fontSize: '2.5rem',
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

    const processStepStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const processStepHoverStyle = {
        transform: 'translateY(-3px)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    };

    const processNumberStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#020842',
        marginRight: '20px',
        minWidth: '50px',
        textAlign: 'center',
    };

    const processTitleStyle = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#020842',
        marginBottom: '5px',
    };

    const processDescriptionStyle = {
        fontSize: '0.95rem',
        color: '#6c757d',
        lineHeight: '1.5',
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

    const lastTdStyle = {
        padding: '15px',
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
        color: 'var(--bs-success)', // Assuming a success color is defined
        fontSize: '1.5rem',
        marginRight: '15px',
        flexShrink: 0,
    };

    const nextStepsListStyle = {
        listStyle: 'none',
        padding: '0',
    };

    const nextStepItemStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        fontSize: '1.1rem',
        color: '#343a40',
        fontWeight: '500',
    };

    const arrowIconStyle = {
        color: '#F44380',
        marginRight: '10px',
        fontSize: '1.2rem',
    };

    const linkStyle = {
        color: '#020842',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'color 0.3s ease',
    };

    const linkHoverStyle = {
        color: '#F44380',
    };

    // Responsive styles for specific elements
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

    const responsiveCardDescriptionStyle = getResponsiveStyle(cardDescriptionStyle, {
        xs: { fontSize: '0.9rem' },
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

    const responsiveProcessStepStyle = getResponsiveStyle(processStepStyle, {
        xs: { flexDirection: 'column', textAlign: 'center', padding: '15px' },
        sm: { flexDirection: 'row', textAlign: 'left' },
    });

    const responsiveProcessNumberStyle = getResponsiveStyle(processNumberStyle, {
        xs: { marginBottom: '10px', marginRight: '0' },
    });

    const responsiveProcessTitleStyle = getResponsiveStyle(processTitleStyle, {
        xs: { fontSize: '1.3rem' },
    });

    const responsiveProcessDescriptionStyle = getResponsiveStyle(processDescriptionStyle, {
        xs: { fontSize: '0.85rem' },
    });

    const responsiveTimelineItemStyle = (index) => {
        const base = {
            padding: '10px 40px',
            position: 'relative',
            width: '50%',
            boxSizing: 'border-box',
            left: index % 2 === 0 ? '0' : '50%',
            textAlign: index % 2 === 0 ? 'right' : 'left',
            marginBottom: '60px',
            zIndex: '2',
        };

        if (viewportWidth < 768) { // Adjust for small and medium screens
            return {
                ...base,
                width: '100%',
                left: '0',
                padding: '10px 20px',
                textAlign: 'left',
                marginLeft: '30px', // Offset for the vertical line
            };
        }
        return base;
    };

    const responsiveTimelineDotStyle = {
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: 'white',
        border: '4px solid var(--bs-primary)',
        borderRadius: '50%',
        top: '32px',
        zIndex: '3',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 0 0 rgba(var(--bs-primary-rgb),0.4)',
    };

    const getResponsiveTimelineDotStyle = (index) => {
        const base = { ...responsiveTimelineDotStyle };
        if (viewportWidth < 768) {
            return { ...base, left: '-10px', transform: 'translateX(0)' };
        }
        return { ...base, left: 'calc(50% - 10px)' };
    };

    const responsiveTimelineIconStyle = (index) => {
        const base = {
            position: 'absolute',
            width: '40px',
            height: '40px',
            backgroundColor: '#020842',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '24px',
            transition: 'all 0.3s ease',
        };
        if (viewportWidth < 768) {
            return { ...base, left: '-50px', right: 'auto' }; // Always on the left for small screens
        }
        return { ...base, ...(index % 2 === 0 ? { right: '-60px' } : { left: '-60px' }) };
    };

    return (
        <Fragment>
            <Head>
                <title>Software Development Lifecycle | Corp-Digital</title>
                <meta name="description" content="Explore Corp-Digital's comprehensive software development lifecycle, from Discovery to Deployment and Maintenance." />
                <meta name="keywords" content="software development lifecycle, discovery phase, design development, testing QA, deployment, agile, waterfall, devops, software process" />
                <meta property="og:title" content="Software Development Lifecycle | Corp-Digital" />
                <meta property="og:description" content="Understand the stages of software development at Corp-Digital, ensuring high-quality and efficient solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/software-development-lifecycle" /> {/* Update with actual URL */}
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> {/* Placeholder image for social share */}
                <link rel="canonical" href="https://corp.digital53.com/software-development-lifecycle" /> {/* Update with actual URL */}
            </Head>
            <Header />
            <main style={{ backgroundColor: '#ffffff', overflowX: 'hidden' }}>
                <PageTitle pageTitle={'Development Lifecycle'} pagesub={'Our Process⚙️'} pageTop={'Process'} />

                {/* Main Process Overview Section */}
                <section style={{ ...sectionStyle, paddingBottom: '0' }}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Our Software<span style={responsiveBadgeStyle}>Process</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-dark)' }}>From Idea to Impact: Our Full Lifecycle</h2>
                            <p style={headingDescriptionStyle}>At Corp-Digital, we follow a meticulous Software Development Lifecycle (SDLC) to ensure robust, scalable, and user-centric solutions. Each phase is designed to bring your vision to life.</p>
                        </div>
                        <div className="row justify-content-center">
                            {[{ icon: discoverIcon, title: 'Discovery', description: 'Understanding needs, defining scope.' }, { icon: designIcon, title: 'Design', description: 'Crafting architecture and UX/UI.' }, { icon: developIcon, title: 'Develop', description: 'Building the solution with clean code.' }, { icon: testIcon, title: 'Testing&QA', description: 'Ensuring quality and identifying defects.' }, { icon: deployIcon, title: 'Deploy', description: 'Releasing to users smoothly.' }, { icon: maintainIcon, title: 'Maintain', description: 'Ongoing support and enhancements.' },].map((step, index) => (
                                <div className="col-lg-2 col-md-4 col-sm-6" key={index} style={{ marginBottom: '30px' }}>
                                    <div
                                        style={{
                                            ...cardStyle,
                                            minHeight: '220px',
                                            transform: 'scale(1)',
                                            transition: 'transform 0.3s ease,box-shadow 0.3s ease',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.18)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'; }}
                                    >
                                        <div style={cardIconWrapperStyle}>
                                            <Image src={step.icon} alt={`${step.title} Icon`} width={40} height={40} style={{ objectFit: 'contain' }} />
                                        </div>
                                        <h3 style={responsiveCardTitleStyle}>{step.title}</h3>
                                        <p style={responsiveCardDescriptionStyle}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Discovery Phase Section */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={discoveryImg} alt="Discovery Phase" layout="responsive" width={700} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h2 style={responsiveContentBlockHeadingStyle}><span style={{ color: 'var(--bs-primary)' }}>Discovery</span> Phase: Laying the Foundation</h2>
                                    <p style={cardDescriptionStyle}>The Discovery Phase is a crucial initial stage where we research, analyze, and define the project's scope before actual development begins. It's about understanding your vision and the market.</p>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px' }}>Key Aspects:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-lightbulb"></i></span><span style={responsiveListTextStyle}><strong>Problem Identification:</strong> Understanding business challenges and defining success metrics.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-clipboard-list"></i></span><span style={responsiveListTextStyle}><strong>Requirements Gathering:</strong> Collecting stakeholder needs and prioritizing features.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-chart-line"></i></span><span style={responsiveListTextStyle}><strong>Market Research:</strong> Analyzing competitors and understanding market trends.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-microchip"></i></span><span style={responsiveListTextStyle}><strong>Technical Assessment:</strong> Evaluating tech stack, infrastructure, and constraints.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-database"></i></span><span style={responsiveListTextStyle}><strong>Data Analysis:</strong> Collecting data, developing models, and establishing data-driven frameworks.</span></li>
                                    </ul>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px' }}>Benefits:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Reduces project risks and uncertainties</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Provides more accurate cost and timeline estimates</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Helps avoid costly changes during development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design and Development Phase Section */}
                <section style={darkSectionStyle}>
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse"> {/* Reverse order for image on right */}
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={designDevImg} alt="Design and Development Phase" layout="responsive" width={900} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockDarkStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h2 style={{ ...responsiveContentBlockHeadingStyle, color: 'var(--bs-primary)' }}><span style={{ color: 'var(--bs-secondary)' }}>Design&Development</span>: Building the Solution</h2>
                                    <p style={listTextDarkStyle}>This is where the software solution takes shape based on the requirements gathered during the Discovery Phase. It involves creating system architecture, writing code, and building the product incrementally.</p>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>Design Key Activities:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-drafting-compass"></i></span><span style={listTextDarkStyle}><strong>System Architecture:</strong> Choosing tech stack, defining microservices, planning scalability.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-bezier-curve"></i></span><span style={listTextDarkStyle}><strong>UI/UX Design:</strong> Creating wireframes, prototypes, user flows, and ensuring responsiveness.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-database"></i></span><span style={listTextDarkStyle}><strong>Database&APIDesign:</strong> Structuring data and defining secure communication.</span></li>
                                    </ul>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>Development Key Activities:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-code"></i></span><span style={listTextDarkStyle}><strong>Frontend&BackendDevelopment:</strong> Building responsive interfaces and server-side logic.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-cloud"></i></span><span style={listTextDarkStyle}><strong>DevOps&CI/CDSetup:</strong> Version control, automated testing, and deployment pipelines.</span></li>
                                    </ul>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginTop: '20px', color: 'white' }}>Best Practices:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Modular Code, Code Reviews, Automated Testing</li>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Comprehensive Documentation, Regular Security Checks</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testing and QA Phase Section */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Testing&<span style={responsiveBadgeStyle}>QA</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-dark)' }}>Ensuring Quality and Reliability</h2>
                            <p style={headingDescriptionStyle}>The Testing and Quality Assurance (QA) Phase ensures that the software meets functional, performance, and security standards before deployment. It involves systematic checks to identify and fix defects.</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={testingQaImg} alt="Testing and QA Phase" layout="responsive" width={700} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem' }}>Types of Testing:</h4>
                                    <ul style={{ paddingLeft: '0', marginBottom: '20px' }}>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-vials"></i></span><span style={responsiveListTextStyle}><strong>Functional Testing:</strong> Unit, Integration, System, and User Acceptance Testing.</span></li>
                                        <li style={listItemStyle}><span style={listIconStyle}><i className="fa-solid fa-tachometer-alt"></i></span><span style={responsiveListTextStyle}><strong>Non-Functional Testing:</strong> Performance (Load, Stress), Security, Usability, Compatibility.</span></li>
                                    </ul>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem' }}>Automation vs. Manual Testing:</h4>
                                    <table style={tableStyle}>
                                        <thead>
                                            <tr>
                                                <th style={responsiveTableThStyle}>Type</th>
                                                <th style={responsiveTableThStyle}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ ...responsiveTableTdStyle, ...highlightedTdStyle }}>Manual Testing</td>
                                                <td style={responsiveTableTdStyle}>Human-executed, best for exploratory & UX testing, flexible but slower.</td>
                                            </tr>
                                            <tr>
                                                <td style={{ ...responsiveTableTdStyle, ...highlightedTdStyle }}>Automation Testing</td>
                                                <td style={responsiveTableTdStyle}>Scripted tests (Selenium, Cypress), ideal for regression, faster execution, CI/CD integration.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem' }}>Key QA Best Practices:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Shift-Left Testing, Continuous Testing</li>
                                        <li style={bestPracticeStyle}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Defect Management, Performance Benchmarking, Security Scans</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Deployment Phase Section */}
                <section style={darkSectionStyle}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>The Final<span style={responsiveBadgeStyle}>Release</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-primary)' }}>Deployment Phase: Bringing Software to Life</h2>
                            <p style={headingDescriptionStyle}>The Deployment Phase is where the tested and approved software is released to production environments, making it available to end-users. This phase requires careful planning to ensure a smooth rollout.</p>
                        </div>
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-lg-6">
                                <div style={imageWrapperStyle}>
                                    <Image src={deploymentImg} alt="Deployment Phase" layout="responsive" width={700} height={450} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div style={{ ...contentBlockDarkStyle, marginTop: viewportWidth < 992 ? '30px' : '0' }}>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', color: 'white' }}>Deployment Strategies:</h4>
                                    <table style={{ ...tableStyle, backgroundColor: '#495057', color: 'white' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ ...responsiveTableThStyle, backgroundColor: 'var(--bs-secondary)' }}>Strategy</th>
                                                <th style={{ ...responsiveTableThStyle, backgroundColor: 'var(--bs-secondary)' }}>Description</th>
                                                <th style={{ ...responsiveTableThStyle, backgroundColor: 'var(--bs-secondary)' }}>Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr style={{ backgroundColor: 'white', borderBottom: '1px solid #7c858d' }}>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Big Bang</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Full system release at once</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Small apps, low-risk updates</td>
                                            </tr>
                                            <tr style={{ backgroundColor: 'white', borderBottom: '1px solid #7c858d' }}>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Rolling Update</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Gradual rollout (server-by-server)</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Large-scale systems</td>
                                            </tr>
                                            <tr style={{ backgroundColor: 'white', borderBottom: '1px solid #7c858d' }}>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Blue-Green</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Two identical environments (switch traffic after testing)</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Zero-downtime deployments</td>
                                            </tr>
                                            <tr style={{ backgroundColor: 'white', borderBottom: '1px solid #7c858d' }}>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Canary Release</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Release to a small user group first</td>
                                                <td style={{ ...responsiveTableTdStyle, borderBottom: 'none' }}>Testing real-user feedback</td>
                                            </tr>
                                            <tr style={{ backgroundColor: 'white' }}>
                                                <td style={responsiveTableTdStyle}>Feature Flags</td>
                                                <td style={responsiveTableTdStyle}>Enable/disable features dynamically without redeploying</td>
                                                <td style={responsiveTableTdStyle}>A/B testing, gradual feature releases</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', color: 'white' }}>Deployment Best Practices:</h4>
                                    <ul style={{ paddingLeft: '0' }}>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Automate Deployments (CI/CD), Rollback Plan, Incremental Rollouts</li>
                                        <li style={{ ...bestPracticeStyle, color: '#e9ecef' }}><span style={checkIconStyle}><i className="fa-solid fa-check-circle"></i></span>Database Migration Safety, Security Hardening</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Timeline of Lifecycle */}
                <section style={sectionStyle}>
                    <div className="container">
                        <div style={headingBlockStyle}>
                            <div style={responsiveHeadingFocusTextStyle}>Our Full<span style={responsiveBadgeStyle}>Process Flow</span></div>
                            <h2 style={{ ...responsiveHeadingTextStyle, color: 'var(--bs-dark)' }}>The Software Development Journey</h2>
                            <p style={headingDescriptionStyle}>Follow our comprehensive approach, meticulously designed to ensure quality, efficiency, and a successful product delivery.</p>
                        </div>
                        <div
                            style={{
                                position: 'relative',
                                maxWidth: '1200px',
                                margin: '0 auto',
                                padding: '40px 0',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '4px',
                                    background: 'linear-gradient(to bottom,var(--bs-primary)0%,var(--bs-secondary)50%,var(--bs-primary)100%)',
                                    top: '0',
                                    bottom: '0',
                                    left: viewportWidth < 768 ? '10px' : '50%', // Adjusted for smaller screens
                                    transform: viewportWidth < 768 ? 'translateX(0%)' : 'translateX(-50%)',
                                    zIndex: '1',
                                    borderRadius: '4px',
                                    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
                                }}
                            ></div>
                            {[{ year: 'Phase 1', title: 'Discovery&Planning', description: 'Understanding your business needs and defining the project scope, requirements, and strategy.', icon: 'fa-search' }, { year: 'Phase 2', title: 'Design&Architecture', description: 'Crafting the system architecture, UI/UX, database design, and API specifications.', icon: 'fa-paint-brush' }, { year: 'Phase 3', title: 'Development&Coding', description: 'Bringing the designs to life by writing clean, modular, and scalable code.', icon: 'fa-laptop-code' }, { year: 'Phase 4', title: 'Testing&QualityAssurance', description: 'Rigorously testing the software for functionality, performance, and security.', icon: 'fa-bug' }, { year: 'Phase 5', title: 'Deployment&Launch', description: 'Releasing the software to production environments, ensuring a smooth rollout.', icon: 'fa-rocket' }, { year: 'Phase 6', title: 'Maintenance&Support', description: 'Providing ongoing support, bug fixes, updates, and feature enhancements.', icon: 'fa-tools' },].map((item, index) => (
                                <div
                                    key={index}
                                    style={responsiveTimelineItemStyle(index)}
                                    onMouseEnter={e => {
                                        e.currentTarget.querySelector('[data-timeline-dot]').style.transform = 'scale(1.3)';
                                        e.currentTarget.querySelector('[data-timeline-dot]').style.boxShadow = '0 0 0 8px rgba(var(--bs-primary-rgb),0.2)';
                                        e.currentTarget.querySelector('[data-timeline-dot]').style.borderColor = 'var(--bs-secondary)';
                                        e.currentTarget.querySelector('[data-timeline-content]').style.transform = 'translateY(-5px)';
                                        e.currentTarget.querySelector('[data-timeline-content]').style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                                        e.currentTarget.querySelector('[data-timeline-icon]').style.transform = 'rotate(15deg)scale(1.1)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.querySelector('[data-timeline-dot]').style.transform = 'scale(1)';
                                        e.currentTarget.querySelector('[data-timeline-dot]').style.boxShadow = '0 0 0 0 rgba(var(--bs-primary-rgb),0.4)';
                                        e.currentTarget.querySelector('[data-timeline-dot]').style.borderColor = 'var(--bs-primary)';
                                        e.currentTarget.querySelector('[data-timeline-content]').style.transform = 'translateY(0)';
                                        e.currentTarget.querySelector('[data-timeline-content]').style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                        e.currentTarget.querySelector('[data-timeline-icon]').style.transform = 'rotate(0deg)scale(1)';
                                    }}
                                >
                                    <div data-timeline-dot style={getResponsiveTimelineDotStyle(index)}></div>
                                    <div
                                        data-timeline-content
                                        style={{
                                            padding: '20px',
                                            background: 'white',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                            transition: 'all 0.3s ease',
                                            position: 'relative',
                                            minHeight: '120px',
                                        }}
                                    >
                                        <h3 style={{ ...responsiveCardTitleStyle, color: '#020842', marginBottom: '5px', fontSize: '1.2rem' }}>{item.year}</h3>
                                        <h4 style={{ ...responsiveCardTitleStyle, fontSize: '1.5rem', marginBottom: '10px' }}>{item.title}</h4>
                                        <p style={responsiveCardDescriptionStyle}>{item.description}</p>
                                        <div data-timeline-icon style={responsiveTimelineIconStyle(index)}>
                                            <i className={`fa-solid ${item.icon}`}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default SoftwareDevelopmentLifecyclePage;