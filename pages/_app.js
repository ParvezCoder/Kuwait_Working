import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/animate.css';
import '../styles/fontawesome.css';

import "@n8n/chat/style.css";
import styles from "../styles/styling.css";

import '../styles/themify-icons.css';
import '../styles/sass/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/LogoCarousel.css";

import React, { useEffect } from 'react';
import Head from "next/head";
// import { getGTM } from "../lib/gtm";
import Chatbot from '../components/Chatbot/Chatbot';
import Script from 'next/script';

import $ from 'jquery';

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $; // Attach jQuery to window
}

function MyApp({ Component, pageProps }) {
// useEffect(() => {
//   getGTM().then((gtm) => {
//     gtm.dataLayer({
//       dataLayer: {
//         event: "page_view",
//       },
//     });
//   });
// }, []);

  return (
    <>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1HRR9H1F19"
        strategy="afterInteractive"
      />
      <Script id="ga-setup" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1HRR9H1F19');
        `}
      </Script>

      <Head>
        <title>
          Corp-Digital 53 | ERP Software | Automation For Marketing | Performance Analytics
        </title>
        <meta
          name="description"
          content="Best ERP software for marketing automation, human resource & finance management, performance analytics for a business. Why corp.digital53? Robust performance, data security, user-friendly, instant support and budget friendly."
        />
        <meta
          name="keywords"
          content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message, enterprise resource planning system, customer relationship management, enterprise resource planning, customer resource management"
        />
        <meta property="og:title" content="Corp-Digital-53" />
        <meta
          property="og:description"
          content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://corp.digital53.com" />
        <meta
          property="og:image"
          content="https://corp.digital53.com/images/logoseo.png"
        />
        <meta
          name="google-site-verification"
          content="vlT1CW0_m4R7fUB35bBTnv9Wc0PQ1fn6rjxErdLefhU"
        />
        {/* <link rel="canonical" href="https://corp.digital53.com" /> */}
      </Head>

      {/* Your page content */}
      <Component {...pageProps} />
      <Chatbot />
    </>
  );
}

export default MyApp;
