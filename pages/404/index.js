import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Head from 'next/head';

const ErrorPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Head>
                <title>Error 404 | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="Error 404 | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/404" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/404" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Not found'} pagesub={'Page'} pageTop={'Coming Soon'} />
                <div className="error-page">
                    <div className="container not-found-content">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="contant-wrapper text-center">
                                    <div className="error-page__text">
                                        {/* <h2>Page Not found</h2> */}
                                    </div>
                                    <div className="error-page__content mb-50">
                                        <h2> We are working hard to bring your requested page and the content.</h2>
                                        <p>Kindly revert back after sometime.</p>

                                        <div className="error-page-button">
                                            <Link onClick={ClickHandler} href="/" className="btn">
                                                <span className="btn_label" data-text="Go Back Home">Go Back Home</span>
                                                <span className="btn_icon">
                                                    <i className="fa-solid fa-arrow-up-right"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ErrorPage;