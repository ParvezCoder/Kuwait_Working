import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Hero2 from '../../components/hero2/hero2';
import FeaturePartners from '../../components/software-company-components/FeaturePartners';
import ServiceSection from '../../components/software-company-components/ServiceSection/ServiceSection';
import About from '../../components/software-company-components/about/about';
import ProcessTechnology from '../../components/software-company-components/ProcessTechnology/ProcessTechnology';
import FaqSection from '../../components/software-company-components/FaqSection/FaqSection';
import BlogSection from '../../components/software-company-components/BlogSection/BlogSection';
import ContactSection from '../../components/software-company-components/ContactSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import Head from 'next/head';


const HomePage2 = () => {

    return (
        <Fragment>
             <Head>
                <title>Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="About Us | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com" />
            </Head>
            <div>
                <Header2 />
                <main className="page_content">
                    <Hero2 />
                    <FeaturePartners />
                    <ServiceSection />
                    <About />
                    <ProcessTechnology />
                    <FaqSection />
                    <BlogSection />
                    <ContactSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;