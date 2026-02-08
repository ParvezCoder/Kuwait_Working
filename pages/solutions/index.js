import React, { Fragment, useState, useEffect } from 'react';
import Link from "next/link";
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';
import Head from 'next/head';

const SolutionsPage = (props) => {
    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/solutions');
                const data = await res.json();
                setSolutions(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching solutions:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const truncateDescription = (text, maxLength = 100) => {
        if (!text) return 'No description available';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <PageTitle pageTitle={'Our Solutions'} pagesub={'Solutions'} pageTop={'Our'} />
                    <div className="container text-center py-5">
                        <p>Loading solutions...</p>
                    </div>
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Head>
                <title>Solutions | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="Solutions | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/solutions" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/solutions" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Solutions'} pagesub={'Solutions'} pageTop={'Our'} />
                <section className="portfolio_section section_space bg-light">
                    <div className="container">
                        <div className="filter_elements_wrapper row">
                            {Object.values(solutions).map((solution, index) => {
                                
                                const slug = solution.title.toLowerCase().replace(/\s+/g, '-');
                                const imagePath = `/images/solutions/${solution.title}.png`; // Assuming the image is named after the title
                                
                                return (
                                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                        <div className="portfolio_block portfolio_layout_2 h-100">
                                            <div className="portfolio_image" style={{ height: '250px', overflow: 'hidden' }}>
                                                <Link 
                                                    onClick={ClickHandler} 
                                                    className="portfolio_image_wrap bg-light h-100 d-block" 
                                                    href={`/solution_details/${slug}`}
                                                >
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        position: 'relative'
                                                    }}>
                                                        <Image 
                                                            src={imagePath}
                                                            alt={solution.title || 'Solution Image'} 
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center'
                                                            }}
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                            quality={85}
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="portfolio_content p-4">
                                                <h3 className="portfolio_title mb-3">
                                                    <Link onClick={ClickHandler} href={`/solution_details/${slug}`}>
                                                        {solution.title || 'Untitled Solution'}
                                                    </Link>
                                                </h3>
                                                <p className="portfolio_description mb-3">
                                                    {truncateDescription(solution.description)}
                                                </p>
                                                <Link 
                                                    onClick={ClickHandler} 
                                                    href={`/solution_details/${slug}`}
                                                    className="btn btn_dark"
                                                >
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default SolutionsPage;