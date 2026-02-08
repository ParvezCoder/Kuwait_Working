import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import ITSection from '../../components/ITSection';
import Head from 'next/head';

const Page = (props) => {

    return (
        <Fragment>
            <Head>
                            <title>IT Services and Solutions in kuwait | Corp-Digital</title>
                            <meta name="description" content="Get the best IT services in Kuwait – حلول وخدمات تكنولوجيا المعلومات الاحترافية للأعمال في الشرق الأوسط. Expert IT support and technology solutions" />
                            <meta name="keywords" content="IT services kuwait, IT solutions kuwait, information technologies services kuwait, best IT services kuwait , it support management kuwait, technology solutions kuwait" />
                            <meta property="og:title" content="IT Services and Solutions in Middle East, kuwait | Corp-Digital" />
                            <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://corp.digital53.com/IT-Services-and-Solutions-in-middle-east-kuwait" />
                            <meta property="og:image" content="https://corp.digital53.com/favicon.png" /> // Replace with actual image URL
                            <link rel="canonical" href="https://corp.digital53.com/IT-Services-and-Solutions-in-middle-east-kuwait" />
                        </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Best IT Services and Solution in Middle East, Kuwait'} pagesub={'learn more 😍'} pageTop={'IT Services and Solutions kuwait'} />
                <ITSection />
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Page;