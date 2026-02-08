import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import Head from 'next/head';
import PageTitle from '../../components/pagetitle/PageTitle'
import Profile from '../../components/Profile/Profile';


const HomePage2 = () => {

    return (
        <Fragment>
             <Head>
                <title>Profile | Corp-Digital</title>
                <meta name="description" content="Digital53 Corp - Premier software house and ERP implementors located in Ibn-Khaldoun Street, Hawally, Kuwait. Offering turnkey solutions, project management office services, custom software development, networking infrastructure, and technical talent recruitment for SMB digital transformation." />
                <meta name="keywords" content="Turnkey solutions Kuwait, ERP implementors Hawally, Project management office Kuwait, Software house Kuwait, Technical talent recruitment, Ibn-Khaldoun tech district, Networking infrastructure Hawally, Corporate manpower Kuwait, SMB digital transformation Kuwait, Custom software development" />
                <meta property="og:title" content="Digital53 Corp - Leading Software House & ERP Implementors in Hawally, Kuwait" />
                <meta property="og:description" content="Located in Ibn-Khaldoun Street, Hawally - Kuwait's premier digital solution provider offering turnkey solutions, ERP implementation, PMO services, custom software development, and technical talent recruitment." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/Profile" />
                <meta property="og:image" content="https://corp.digital53.com/favicon.png" />
                <meta name="geo.region" content="KW-HA" />
                <meta name="geo.placename" content="Hawally, Kuwait" />
                <meta name="geo.position" content="29.3375;48.0281" />
                <meta name="ICBM" content="29.3375, 48.0281" />
                <link rel="canonical" href="https://corp.digital53.com/Profile" />
            </Head>

            <div>
                <Header2 />

                <main className="page_content">
                    <PageTitle pageTitle={'Our Profile'} pagesub={'Know more 😍'} pageTop={'Profile'} />
                    <Profile />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;