import { Fragment, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import { getCachedData } from '../../lib/redis';
import { queryDB } from '../../lib/db';
import Head from 'next/head';

function LoadingState() {
  return (
    <div className="loading-container">
      <p className="loading-text">Loading service content...</p>
      <div className="loading-spinner"></div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `https://${context.req.headers.host}`;
  const canonicalUrl = `${baseUrl}/services/${id}`;

  try {
    const cacheKey = `service:${id}`;

    const service = await getCachedData(
      cacheKey,
      async () => {
        let result = await queryDB(`
          SELECT EnglishHTML, WebEnglish, OtherLanguageHTML, 
                 WebSitePageSubSerial, WebSiteShortName, PrimaryKeywords, 
                 LongTailKeywords, MetaTitle, MetaDescription
          FROM WEBSITECONTENT 
          WHERE WebSitePageSubSerial = @id
          AND Active = 1;
        `, { id });

        // console.log("JSON.stringify(result,null,2): ", result)

        if (result.recordset.length === 0) {
          result = await queryDB(`
            SELECT EnglishHTML, WebEnglish, OtherLanguageHTML, 
                   WebSitePageSubSerial, WebSiteShortName
            FROM WEBSITECONTENT 
            WHERE WebSitePageSubSerial = @id
            AND Active = 1;
          `, { id });
        }

        return result.recordset[0] || null;
      },
      86400
    );

    if (!service) {
      const availableServicesResult = await queryDB(`
        SELECT WebSitePageSubSerial, WebSitePageSerNo, 
               WebSiteShortName, WebEnglish
        FROM WEBSITECONTENT 
        WHERE WebSitePageSerNo IN (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
        ORDER BY WebSitePageSerNo
      `);

      return {
        props: {
          service: null,
          error: 'Service not found',
          availableServices: availableServicesResult.recordset,
          searchedId: id
        },
      };
    }

    if (!service.EnglishHTML) {
      return {
        props: {
          service,
          error: 'Service content not available',
          noContent: true,
        },
      };
    }

    return {
      props: {
        service,
        metadata: {
          title: service.MetaTitle,
          description: service.MetaDescription,
          keywords: service.PrimaryKeywords
        },
        canonicalUrl
      },
    };
  } catch (error) {
    console.error('Error fetching service:', error);

    return {
      props: {
        service: null,
        error: 'Failed to load service',
        errorMessage: error.message
      },
    };
  }
}

export default function ServicePage({ service, error, availableServices, searchedId, noContent, errorMessage, metadata, canonicalUrl }) {

  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleComplete = () => setIsNavigating(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (isNavigating) {
    return (
      <Fragment>
        <Header />
        <main className="page_content about-page">
          <section className="service-section">
            <LoadingState />
          </section>
        </main>
        <Footer />
        <Scrollbar />
        <ServicePageStyles />
      </Fragment>
    );
  }

  if (error && !service) {
    return (
      <Fragment>
        <Header />
        <main className="page_content about-page">
          <PageTitle
            pageTitle="Service Not Available"
            pagesub=""
            pageTop=""
          />

          <section className="service-section">
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <h3 className="error-title">Service Not Available</h3>
              <p className="error-text">{error}</p>

              {availableServices && availableServices.length > 0 && (
                <div className="available-services">
                  <h4>Available Services:</h4>
                  <div className="services-grid">
                    {availableServices.map((svc, index) => (
                      <div key={index} className="service-item">
                        <strong>{svc.WebSiteShortName || svc.WebEnglish}</strong>
                        <span>ID: {svc.WebSitePageSubSerial || svc.WebSitePageSerNo}</span>
                      </div>
                    ))}
                  </div>

                  <div className="help-text">
                    <p><strong>💡 How to access services:</strong></p>
                    <ul>
                      <li>Use the <strong>Services</strong> dropdown in the navigation menu</li>
                      <li>Visit <a href="/services">/services</a> to see all available services</li>
                      <li>Use the correct service ID from the list above</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="error-actions">
                <a href="/services" className="back-button">
                  Back to Services
                </a>
              </div>

              {searchedId && (
                <div className="debug-info">
                  <p><strong>Debug Info:</strong></p>
                  <p>Searched ID: {searchedId}</p>
                  {errorMessage && <p>Error: {errorMessage}</p>}
                </div>
              )}
            </div>
          </section>

          <CtaSection />
        </main>
        <Footer />
        <Scrollbar />
        <ServicePageStyles />
      </Fragment>
    );
  }

  if (noContent) {
    return (
      <Fragment>
        <Header />
        <main className="page_content about-page">
          <PageTitle
            pageTitle={service?.WebEnglish || service?.WebSiteShortName || 'Service'}
            pagesub=""
            pageTop=""
          />

          <section className="service-section">
            <div className="no-content">
              <div className="no-content-icon">📄</div>
              <h3>No Content Available</h3>
              <p>This service doesn't have any content yet.</p>
              <a href="/services" className="back-button">
                Back to Services
              </a>
            </div>
          </section>

          <CtaSection />
        </main>
        <Footer />
        <Scrollbar />
        <ServicePageStyles />
      </Fragment>
    );
  }

  return (
    <>
      <Header />
      <main className="page_content about-page">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />

          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <PageTitle
          pageTitle={service.WebEnglish || 'Service Details'}
          pagesub=""
          pageTop=""
        />

        <section className="service-section">
          <div className="service-container">
            <IsolatedHTMLContent htmlContent={service.EnglishHTML} />
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <Scrollbar />


      <ServicePageStyles />
    </>
  );
}


function IsolatedHTMLContent({ htmlContent }) {
  const iframeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const adjustHeight = () => {
      try {
        if (iframe.contentWindow && iframe.contentWindow.document.body) {
          const height = iframe.contentWindow.document.body.scrollHeight;
          iframe.style.height = `${height}px`;
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error adjusting iframe height:', err);
        setIsLoading(false);
      }
    };

    iframe.addEventListener('load', adjustHeight);

    const resizeObserver = new ResizeObserver(adjustHeight);
    if (iframe.contentWindow?.document.body) {
      resizeObserver.observe(iframe.contentWindow.document.body);
    }

    return () => {
      iframe.removeEventListener('load', adjustHeight);
      resizeObserver.disconnect();
    };
  }, []);

  const sanitizedHTML = htmlContent

  return (
    <>
      {isLoading && <LoadingState />}
      <iframe
        ref={iframeRef}
        style={{ width: '100%', border: 'none', minHeight: '400px', overflow: 'hidden' }}
        srcDoc={sanitizedHTML}
        title="Service Content"
      />
    </>
  );
}



function ServicePageStyles() {
  return (
    <style jsx global>{`
      .service-section {
        display: flex;
        justify-content: center;
        padding: 10px 20px 60px 20px;
        background: #f9f9fb;
        width: 100%;
        min-height: 400px;
      }

      .service-container {
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin: 0;
      }

      .service-html-content {
        width: 100%;
        padding: 30px 5vw;
        background: #fff;
        position: relative;
      }

      /* Loading States */
      .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        padding: 60px 20px;
      }

      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #007bff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .loading-text {
        margin-top: 20px;
        color: #666;
        font-size: 16px;
      }

      @media (max-width: 768px) {
        .service-html-content {
          padding: 24px 4vw;
        }
      }

      .error-container,
      .no-content {
        text-align: center;
        padding: 60px 20px;
        max-width: 800px;
        margin: 0 auto;
      }

      .error-icon,
      .no-content-icon {
        font-size: 48px;
        margin-bottom: 20px;
      }

      .error-title {
        font-size: 24px;
        color: #d32f2f;
        margin-bottom: 16px;
      }

      .error-text {
        font-size: 18px;
        color: #666;
        margin-bottom: 30px;
      }

      .no-content h3 {
        color: #666;
        margin-bottom: 16px;
      }

      .no-content p {
        color: #888;
        margin-bottom: 30px;
      }

      .available-services {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        text-align: left;
      }

      .available-services h4 {
        color: #495057;
        margin-bottom: 16px;
        text-align: center;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 12px;
      }

      .service-item {
        background: white;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #dee2e6;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .service-item strong {
        color: #007bff;
      }

      .service-item span {
        font-size: 12px;
        color: #6c757d;
      }

      .error-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
        margin: 30px 0;
        flex-wrap: wrap;
      }

      .back-button {
        background: #6c757d;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s;
        text-decoration: none;
        display: inline-block;
      }

      .back-button:hover {
        background: #545b62;
        color: white;
      }

      .debug-info {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 6px;
        padding: 16px;
        margin-top: 20px;
        text-align: left;
        font-family: monospace;
        font-size: 14px;
      }

      .debug-info p {
        margin: 4px 0;
      }

      .help-text {
        background: #e8f5e8;
        border: 1px solid #c3e6c3;
        border-radius: 6px;
        padding: 16px;
        margin-top: 20px;
      }

      .help-text p {
        margin-bottom: 12px;
        color: #2d5a2d;
      }

      .help-text ul {
        margin: 0;
        padding-left: 20px;
      }

      .help-text li {
        margin-bottom: 8px;
        color: #2d5a2d;
      }

      .help-text a {
        color: #007bff;
        text-decoration: none;
      }

      .help-text a:hover {
        text-decoration: underline;
      }
    `}</style>
  );
}
