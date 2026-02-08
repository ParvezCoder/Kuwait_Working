import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
// import ProcessTechnology from '../../components/ProcessTechnology/ProcessTechnology';
// import ModalVideo from '../../components/ModalVideo';
// import { Services } from '../../data/Services';
import srImg from '/public/images/services/core-crm-3.jpg'
import icon from '/public/images/icons/icon_check_3.svg'
import Image from 'next/image';

const ServiceSinglePage = (props) => {
    const router = useRouter();
    const [ServiceDetails, setServiceDetails] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (router.query.slug) {
            const found = Services.find(item => item.slug === router.query.slug);
            setServiceDetails(found);
            setLoading(false);
        }
    }, [router.query.slug]);

    // Don't render anything until we have the slug
    if (!router.query.slug) {
        return null;
    }

    // Show loading state
    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="page_content service-single-page">
                    <div className="container text-center py-5">
                        <p>Loading service details...</p>
                    </div>
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    // Show error if service not found
    if (!ServiceDetails) {
        return (
            <Fragment>
                <Header />
                <main className="page_content service-single-page">
                    <div className="container text-center py-5">
                        <p>Service not found</p>
                        <a href="/services" className="btn btn_dark">
                            Back to Services
                        </a>
                    </div>
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Header />
            <main className="page_content service-single-page">
                <PageTitle 
                    pageTitle={ServiceDetails?.title || 'Service Details'} 
                    pagesub={'Details 😍'} 
                    pageTop={'Services'} 
                />
                <section className="service_details_section section_space bg-light">
                    <div className="container">
                        <div className="details_item_image position-relative">
                            <Image src={srImg} alt="Service Details" />
                            <button className="video_btn ripple_effect" onClick={() => setOpen(true)}>
                                <span className="btn_icon">
                                    <i className="fa-solid fa-play"></i>
                                </span>
                            </button>
                        </div>
                        <h2 className="details_item_title">{ServiceDetails?.title}</h2>
                        <p>
                            {ServiceDetails?.title} are the backbone of modern businesses, serving as the foundation upon which all digital operations rely. At our IT solution agency, we specialize in crafting robust and reliable network architectures tailored to meet the unique needs of our clients. From small businesses to large enterprises, we understand the critical importance of a well-designed network infrastructure in driving efficiency, security, and scalability. Our team of experienced professionals works closely with clients.
                        </p>
                        <p>
                            We take a holistic approach to network design, considering factors such as bandwidth requirements, security protocols, scalability, and future growth potential. By leveraging industry best practices and cutting-edge technologies,
                        </p>
                        {/* <ProcessTechnology /> */}
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
                                    <Image src={srImg} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <Image src={srImg} alt="Service Details" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="details_item_image m-0">
                                    <Image src={srImg} alt="Service Details" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Scrollbar />
            {/* <ModalVideo isOpen={isOpen} setOpen={setOpen} /> */}
        </Fragment>
    );
};

export default ServiceSinglePage;