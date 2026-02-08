import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import Image from 'next/image';
import Head from 'next/head';

const SolutionDetailsPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [solution, setSolution] = useState(null);
    const [loading, setLoading] = useState(true);
    const [images, setImages] = useState({});
    
    useEffect(() => {
        const fetchSolution = async () => {
            try {
                // Fetch images first to ensure they are available before setting solution
                const imagesRes = await fetch('/api/images');
                const imagesData = await imagesRes.json();

                // Create a mapping of ImagesID to image URL
                const imagesMap = {};
                imagesData.forEach(image => {
                    imagesMap[image.ImageID] = image.EnglishImagesURL;
                });

                setImages(imagesMap);

                // Fetch all solutions
                const res = await fetch('/api/solutions');
                const solutions = await res.json();
                
                // Find the solution that matches the slug
                const foundSolution = solutions.find(s => 
                    s.title.toLowerCase().replace(/\s+/g, '-') === slug
                );
                
                if (foundSolution) {
                    setSolution(foundSolution);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching solution:", error);
                setLoading(false);
            }
        };

        if (slug) {
            fetchSolution();
        }
    }, [slug]);

    if (loading) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <div className="container text-center py-5">
                        <p>Loading solution...</p>
                    </div>
                </main>
                <Footer />
                <Scrollbar />
            </Fragment>
        );
    }

    if (!solution) {
        return (
            <Fragment>
                <Header />
                <main className="page_content about-page">
                    <div className="container text-center py-5">
                        <p>Solution not found</p>
                        <Link href="/solutions" className="btn btn_dark">
                            Back to Solutions
                        </Link>
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
                <title>Solution Details | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="Solution Details | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/solution_details" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/solution_details" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle={solution.title} pageTop={'Solution Details'} />
                
                <section className="solution_detail_section section_space">
                    <div className="container">
                        {/* Solution Image */}
                        {solution.IMAGEID && images[solution.IMAGEID] ? (
                            <div style={{
                                width: '500px',
                                height: '500px',
                                margin: '0 auto',        // Centers horizontally
                                display: 'flex',         // Enables centering
                                alignItems: 'center',    // Centers vertically
                                justifyContent: 'center' // Centers horizontally
                            }}>
                                <Image 
                                    src={images[solution.IMAGEID]} 
                                    alt={solution.title || 'Solution Image'} 
                                    width={500}  
                                    height={500}  
                                    style={{
                                        objectFit: 'contain', // Ensures full image is shown
                                    }}
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    quality={85}
                                    // unoptimized={true}
                                />
                            </div>
                        ) : (
                            <div className="portfolio_image_wrap bg-light d-flex align-items-center justify-content-center" 
                                 style={{ height: '400px' }}>
                                <span>No Image Available</span>
                            </div>
                        )}
                        
                        {/* Solution Content */}
                        <div className="solution_content">
                            <div dangerouslySetInnerHTML={{ __html: solution.filePath }} />
                            
                            {solution.formUrl && (
                                <div className="text-center mt-5">
                                    <Link 
                                        href={solution.formUrl} 
                                        className="btn btn_dark"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Open Form
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default SolutionDetailsPage;
