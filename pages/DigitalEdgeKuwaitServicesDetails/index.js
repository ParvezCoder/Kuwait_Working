import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ErpSection from '../../components/ErpSection/ErpSection';
import Head from 'next/head';

const Page = (props) => {

    return (
        <Fragment>
            <Head>
                            <title>Services Details | Corp-Digital</title>
                            <meta name="description" content="CorpDigital53 and DigitalEdgeSolutions provide innovative digital solutions, specializing in ERP systems, CRM solutions, point of sale systems, healthcare management, and recruitment portals. Transform your business with our cutting-edge technology. نظام ERP محلي في الكويت, برامج ERP صناعة كويتية, برمجيات ERP الكويت, برنامج تخطيط موارد المؤسسات الكويت, حلول ERP للشركات الكويتية, مزود نظام ERP الكويتي" />
                            <meta name="keywords" content="CorpDigital53, DigitalEdgeSolutions, ERP systems, CRM solutions, Point of Sale systems, healthcare management, recruitment portal, digital solutions, business technology, software solutions" />
                            <meta property="og:title" content="Services Details | Corp-Digital" />
                            <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://corp.digital53.com/DigitalEdgeKuwaitServicesDetails" />
                            <meta property="og:image" content="https://corp.digital53.com/favicon.png" /> // Replace with actual image URL
                            <link rel="canonical" href="https://corp.digital53.com/DigitalEdgeKuwaitServicesDetails" />
                        </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Digital Edge Solutions Made in Kuwait CRM / ERP / POS / Website Services Details'} pagesub={'learn more 😍'} pageTop={'Services'} />
                <ErpSection />
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Page;