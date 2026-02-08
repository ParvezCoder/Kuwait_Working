import React, { Fragment, useState, useEffect } from 'react';
import Link from "next/link";
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';
import Head from 'next/head';

const PortfolioPage = (props) => {
    const [portfolios, setPortfolios] = useState([]);
    const [images, setImages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch portfolios
                const portfoliosRes = await fetch('/api/portfolio');
                const portfoliosData = await portfoliosRes.json();
                setPortfolios(portfoliosData);

                // Fetch all images
                const imagesRes = await fetch('/api/images');
                const imagesData = await imagesRes.json();

                // Create a mapping of ImagesID to image URL
                const imagesMap = {};
                imagesData.forEach(image => {
                    imagesMap[image.ImageID] = image.EnglishImagesURL;
                });
                setImages(imagesMap);
                
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
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
                    <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio 😍'} pageTop={'Our'} />
                    <div className="container text-center py-5">
                        <p>Loading portfolios...</p>
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
                            <title>Portfolio | Corp-Digital</title>
                            <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                            <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                            <meta property="og:title" content="Portfolios | Corp-Digital" />
                            <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://corp.digital53.com/portfolio" />
                            <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                            <link rel="canonical" href="https://corp.digital53.com/portfolio" />
                        </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={'Our Portfolio'} pagesub={'Portfolio 😍'} pageTop={'Our'} />
                <section className="portfolio_section section_space bg-light">
                    <div className="container">
                        <div className="filter_elements_wrapper row">
                            {portfolios.map((portfolio, index) => (
                                <div className="col-lg-6 mb-4" key={index}>
                                    <div className="portfolio_block portfolio_layout_2 h-100">
                                        <div className="portfolio_image" style={{ height: '400px', overflow: 'hidden' }}>
                                            {portfolio.IMAGEID && images[portfolio.IMAGEID] ? (
                                                <Link 
                                                    onClick={ClickHandler} 
                                                    className="portfolio_image_wrap bg-light h-100 d-block" 
                                                    href={portfolio.redirectLink || '#'}
                                                >
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        position: 'relative'
                                                    }}>
                                                        <Image 
                                                            src={images[portfolio.IMAGEID]} 
                                                            alt={portfolio.title || 'Portfolio Image'} 
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                                objectPosition: 'center'
                                                            }}
                                                            sizes="(max-width: 768px) 100vw, 50vw"
                                                            quality={85}
                                                            // unoptimized={true} // Bypass optimization if still having issues
                                                        />
                                                    </div>
                                                </Link>
                                            ) : (
                                                <div className="portfolio_image_wrap bg-light d-flex align-items-center justify-content-center" 
                                                     style={{ height: '876px' }}>
                                                    <span>No Image Available</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="portfolio_content p-4">
                                            <h3 className="portfolio_title mb-3">
                                                <Link onClick={ClickHandler} href={portfolio.redirectLink || '#'}>
                                                    {portfolio.title || 'Untitled Portfolio'}
                                                </Link>
                                            </h3>
                                            <p className="portfolio_description mb-3">
                                                {truncateDescription(portfolio.description)}
                                            </p>
                                            {portfolio.formUrl && (
                                                <Link 
                                                    href={portfolio.formUrl} 
                                                    className="btn btn_dark"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View Form
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
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

export default PortfolioPage;