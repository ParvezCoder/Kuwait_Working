import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import ErpFaqPage from '../../components/software-company-components/ErpFaqPage/ErpFaqPage';
import Scrollbar from '../../components/scrollbar/scrollbar';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/software-company-components/Footer/Footer';
import Head from 'next/head';
import PageTitle from '../../components/pagetitle/PageTitle'


const HomePage2 = () => {

    return (
        <Fragment>
             <Head>
                <title>ERP FAQ | Corp-Digital</title>
                <meta name="description" content="Explore the most frequently asked questions about ERP software and how Corp-Digital’s ERP solutions can help optimize your business operations." />
                <meta name="keywords" content="ERP FAQ, ERP software, Digital Solutions, Corp-Digital ERP, Business Operations, ERP Systems" />
                <meta property="og:title" content="ERP FAQ | Corp-Digital" />
                <meta property="og:description" content="Get answers to all your questions about ERP software and how it can streamline your business processes. Learn more with Corp-Digital." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/FaqErp" />
                <meta property="og:image" content="https://corp.digital53.com/favicon.png" />
                <link rel="canonical" href="https://corp.digital53.com/FaqErp" />
            </Head>

            <div>
                <Header2 />

                <main className="page_content">
                    <PageTitle pageTitle={'ERP FAQs'} pagesub={'Know more 😍'} pageTop={'FAQ'} />
                    <ErpFaqPage />
                    <CtaSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;