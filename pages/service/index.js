import React, { Fragment } from 'react';
import Link from 'next/link'
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import srImg from '/public/images/services/service_image_8.webp'; 
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import WhyUs from '../about/WhyUs';
import Image from 'next/image';
import icon from '/public/images/icons/icon_check_3.svg'
import srImg2 from '/public/images/services/service_details_image_2.webp'
import srImg3 from '/public/images/services/service_details_image_3.webp'
import srImg4 from '/public/images/services/service_details_image_4.webp'
import Head from 'next/head';


const ServicePage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <Head>
                <title>Service | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="Service | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/service" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/service" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Services'} pagesub={'Services 😍'} pageTop={'Our Main'} />
                <section className="about_section section_space bg-light">
                    <div className="container">
                        <div className="row align-items-center justify-content-lg-between">
                            <div className="col-lg-5 order-lg-last">
                                <div className="team_cartoon_image">
                                    <Image src={srImg} alt="Service Cartoon"/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about_content">
                                    <div className="heading_block">
                                        <div className="heading_focus_text">
                                            We Are
                                            <span className="badge bg-secondary text-white">IT  Guidance 🙂</span>
                                        </div>
                                        <h2 className="heading_text">
                                            Tailored IT Solutions for Your Success
                                        </h2>
                                        <p className="heading_description mb-0">
                                            we understand that every business is unique, with its own set of challenges, goals, and aspirations. That's why we offer tailored solutions according to your requirements.
                                        </p>
                                    </div>
                                    <Link onClick={ClickHandler} href={'/service'} className="btn">
                                        <span className="btn_label" data-text="Talk to an Expart">Talk to an Expart</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceSection />
                <div className="pt-130"></div>

                <div className="container">
                        
                        <h3 className="details_item_info_title">Services Outcome</h3>
                        <p className="mb-4">
                            Here are six key points that can be associated with a digital Transformation gallery case global Digital Systems Engineer Services leader helping Fortune 500 companies on their innovation agenda:
                        </p>
                        <div className="row mb-4">
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Scalability and Flexibility
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Security and Compliance
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Performance Optimization
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            User Experience
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Security and Compliance
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_icon">
                                            <Image src={icon} alt="Check SVG Icon" />
                                        </span>
                                        <span className="icon_list_text">
                                            Training and Education
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <Image src={srImg2} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <Image src={srImg3} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <Image src={srImg4} alt="Service Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                <WhyUs />
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServicePage;
