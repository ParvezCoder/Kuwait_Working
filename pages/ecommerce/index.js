import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import Head from 'next/head';
import PageTitle from '../../components/pagetitle/PageTitle'
import Ecommerce from '../../components/Ecommerce/Ecommerce';


const HomePage2 = () => {

    return (
        <Fragment>
             <Head>
                <title>Ecommerce | Corp-Digital</title>
                <meta name="description" content="Transform your business with Corp-Digital’s all-in-one ERP software. Streamline CRM, POS, finance, eCommerce, B2B, and inventory management for retail shops, spare parts, bakeries, hardware, and import-export businesses." />
                <meta name="keywords" content="ERP software for SMBs, retail ERP solutions, bakery ERP, spare parts inventory software, hardware store ERP, import-export ERP system, CRM with POS integration, finance automation ERP, cloud-based ERP platform, B2B eCommerce ERP" />
                <meta property="og:title" content="Ecommerce | Corp-Digital" />
                <meta property="og:description" content="Boost growth with Corp-Digital ERP. Unified CRM, POS, finance automation, inventory management, and B2B eCommerce tailored for retail, bakeries, hardware, spare parts, and import-export industries." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/ecommerce" />
                <meta property="og:image" content="https://corp.digital53.com/favicon.png" />
                <link rel="canonical" href="https://corp.digital53.com/ecommerce" />
            </Head>


            <div>
                <Header2 />

                <main className="page_content">
                    <PageTitle pageTitle={'Ecommerce Solutions'} pagesub={'Know more 😍'} pageTop={'Ecommerce'} />
                    <Ecommerce />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;