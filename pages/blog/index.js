import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';
import Head from 'next/head';


const BlogPage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>Blog | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="Blog | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/blog" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/blog" />
            </Head>
            <Header />
            <main className="page_content blog-page">
              
                <BlogList/>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
