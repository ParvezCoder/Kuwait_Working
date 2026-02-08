import React, { Fragment } from 'react';
import Header2 from '../components/Header2/Header2';
// import CtaSection from '../components/CtaSection/CtaSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import Hero2 from '../components/hero2/hero2';
import Hero22 from '../components/hero2/hero22';
// import FeaturePartners from '../components/software-company-components/FeaturePartners';
import ServiceSection from '../components/software-company-components/ServiceSection/ServiceSection';
import About from '../components/software-company-components/about/about';
import ProcessTechnology from '../components/software-company-components/ProcessTechnology/ProcessTechnology';
import FaqSection from '../components/software-company-components/FaqSection/FaqSection';
import Special from '../components/Special/Special';
// import BlogSection from '../components/software-company-components/BlogSection/BlogSection';
import ContactSection from '../components/software-company-components/ContactSection';
import Footer from '../components/software-company-components/Footer/Footer';
import Head from 'next/head';

const HomePage = () => {

    return (
        <Fragment>
            {/* SEO Content is here ---------->>>>>>>>> */}
            <Head>
                <title>Corp-Digital53 | CRM ERP Software | Full Corporate Office Automation Software|POS|Recruitement Partner|Computer Shop at Hawally|محل كمبيوتر في حولي </title>
                <meta name="description" content="Best ERP software for marketing automation, human resource & finance management, performance analytics for a business. Why you choose corp.digital53 ERP solution? Robust performance, data security, user-friendly, instant support and budget friendly." />
                <meta name="keywords" content="Digital Edge Solutions, Business Transformation, CRM Based ERP Solutions, POS for Retail, Cloud POS,Help Desk for Hospital, Social Security Solutions for the Government / Universities / Corporate,ODOO Partner, Telly Partner, POS for Store, POS for SPA, POS for Salon, POS for Restaurent, POS For Laundary, POS for Moving Truck, Invoice Printing,POS For Perfume Shops, POS for Store, POS For Clinic,محل كمبيوتر في حولي " />
                <meta property="og:title" content="Corp-Digital53" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Best Computer Software Company in Kuwait,." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                
                <meta name="facebook-domain-verification" content="g7byywbqasdmwwuc103kpluv41rewi" />
                <meta name="google-site-verification" content="1gDoBR8G-h8L0S0euP0XZsGcyYrW9dc15HYkOZ5wAJY" />
                <link rel="canonical" href="https://corp.digital53.com" />
            </Head>
            
            {/* SEO Content ends here ---------->>>>>>>>> */}


            <div>
                <Header2 />
                <main className="page_content">
                    <Hero22 />
                    {/* <FeaturesSection />
                    <About />
                    <PolicySection />
                    <ServiceSection />
                    <ProjectSection />
                    <Testimonial />
                    <TeamSection />
                    <BlogSection /> */}
                    {/* 
                    <CtaSection /> */}
                    {/* <FeaturePartners /> */}
                    <ServiceSection />
                    <About />
                    <ProcessTechnology />
                    <Special />
                    {/* <ProcessTechnology /> */}
                
                    {/* <BlogSection /> */}
                    <ContactSection />
                        <FaqSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;
