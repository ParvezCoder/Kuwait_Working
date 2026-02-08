import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogsjohar'
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogDetailsContent from '../../components/BlogDetails/BlogDetails'; // Renamed to avoid conflict

const BlogDetailsPage = (props) => { // Renamed the page component
    const router = useRouter()
    const blogData = blogs.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Header />
            <main className="page_content blog-single-page"> {/* Added a class for styling */}
                <PageTitle pageTitle={blogData?.title} pagesub={'Details'} pageTop={'Blog'}/>
                <BlogDetailsContent blog={blogData} /> {/* Pass the fetched blog data */}
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsPage; // Export the renamed page component