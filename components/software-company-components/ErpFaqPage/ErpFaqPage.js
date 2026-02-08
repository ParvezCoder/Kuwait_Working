import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ErpFaqPage = () => {
  const [open, setOpen] = useState(null);
  
  const toggle = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  const faqData = [
    {
      id: '1',
      question: 'What is ERP software?',
      answer: 'ERP (Enterprise Resource Planning) software by Digital Edge Solutions integrates various business processes—such as finance, HR, manufacturing, and inventory—into a single system, streamlining workflows and providing real-time data visibility for better decision-making.'
    },
    {
      id: '2',
      question: 'What are the key benefits of using ERP software?',
      answer: (
        <div>
          <ul style={{ paddingLeft: '20px', marginBottom: '15px', lineHeight: '1.8' }}>
            <li>Centralized information management</li>
            <li>Improved workflow automation</li>
            <li>Enhanced reporting and analytics</li>
            <li>Reduced manual errors and duplication</li>
            <li>Better compliance and security features</li>
          </ul>
          <p style={{ marginBottom: '10px' }}>
            For future growth, a local existence is essential. Only online support will not satisfy the needs of countries like Kuwait and Gulf nations due to cultural and language barriers.
          </p>
          <p>
            A full system developed by a knowledgeable ERP company is crucial when selecting the right ERP software.
          </p>
        </div>
      )
    },
    {
      id: '3',
      question: 'Which modules are typically included in an ERP system?',
      answer: (
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>Customer Relationship Management (CRM) must be the core of the system, as you, the owner, must know your returning customers</li>
          <li>Human Resources</li>
          <li>Inventory Management</li>
          <li>Supply Chain Management</li>
          <li>Finance and Accounting</li>
          <li>Manufacturing and Production</li>
        </ul>
      )
    },
    {
      id: '4',
      question: 'Is ERP suitable for small businesses or just large enterprises?',
      answer: 'Modern ERP solutions are highly scalable and can be tailored for small, medium, or large organizations across all industries. The most important factor is having local company support, as well as the capability to provide not just software, but brilliant ideas to elevate your business to the next level.'
    },
    {
      id: '5',
      question: 'How does ERP software improve business efficiency?',
      answer: 'ERP streamlines business processes by automating tasks, eliminating data silos, and providing real-time information. This helps in faster and more accurate decision-making.'
    },
    {
      id: '6',
      question: 'How customizable is ERP software?',
      answer: (
        <div>
          <p style={{ marginBottom: '15px' }}>
            Most local ERP systems allow various deep levels of customization—from interface tweaks to building custom modules—to fit your business's unique requirements. Some also offer integration with third-party tools via APIs.
          </p>
          <p>
            Ready-made ERP systems allow customization within their limits. If you're buying a ready-made solution, make sure the company is capable of providing full customization.
          </p>
        </div>
      )
    },
    {
      id: '7',
      question: 'Can ERP software be accessed on mobile devices?',
      answer: 'Yes. Many leading ERP solutions come with mobile-friendly interfaces or dedicated mobile apps, enabling access to critical business data from anywhere.'
    },
    {
      id: '8',
      question: 'What is the difference between cloud ERP and on-premise ERP?',
      answer: (
        <div>
          <p style={{ marginBottom: '15px' }}>
            <strong>Cloud ERP:</strong> Hosted on remote servers, accessible via the internet, usually subscription-based, and has a lower initial setup cost. It's an excellent choice for business owners, operational managers, and end users who want to work from anywhere and access their output.
          </p>
          <p>
            <strong>On-premise ERP:</strong> Installed locally on your company's servers, giving you full control but typically requiring a larger upfront investment for IT, hardware, and maintenance. This also carries a higher probability of failure.
          </p>
        </div>
      )
    },
    {
      id: '9',
      question: 'How long does an ERP implementation take?',
      answer: 'ERP implementation timelines vary depending on company size, complexity, and customization needs. Typically, they range from a week to over a year, fully depending on the complexity of the changes.'
    },
    {
      id: '10',
      question: 'How can ERP help with regulatory compliance?',
      answer: 'ERP software automates record management, tracks audit trails, and generates compliance reports to help businesses comply with regulations like GDPR or HIPAA.'
    }
  ];

  const styles = {
    section: {
      backgroundColor: '#E3F0FF',
      padding: '80px 20px',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    subtitle: {
      color: '#0044EB',
      fontSize: '0.9rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '15px'
    },
    title: {
      color: '#333',
      fontSize: '3rem',
      fontWeight: '400',
      marginBottom: '20px',
      lineHeight: '1.2'
    },
    description: {
      color: '#666',
      fontSize: '1.1rem',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    sectionTitle: {
      color: '#333',
      fontSize: '1.5rem',
      fontWeight: '400',
      marginBottom: '40px',
      paddingBottom: '20px',
      borderBottom: '2px solid #0044EB'
    },
    faqItem: {
      borderBottom: '1px solid #e0e0e0',
      transition: 'all 0.3s ease'
    },
    faqItemHover: {
      backgroundColor: 'rgba(0, 68, 235, 0.02)'
    },
    questionContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 0',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    question: {
      color: '#333',
      fontSize: '1.1rem',
      fontWeight: '400',
      margin: 0,
      lineHeight: '1.4',
      flex: 1,
      paddingRight: '20px'
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: '#0044EB',
      transition: 'all 0.3s ease',
      flexShrink: 0
    },
    icon: {
      color: 'white',
      size: 18
    },
    answerContainer: {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease',
      backgroundColor: 'transparent'
    },
    answerContainerOpen: {
      maxHeight: '1000px'
    },
    answer: {
      paddingBottom: '32px',
      paddingRight: '52px',
      color: '#555',
      lineHeight: '1.7',
      fontSize: '1rem'
    }
  };

  const mobileStyles = `
    @media (max-width: 768px) {
      .faq-title {
        font-size: 2.2rem !important;
      }
      .faq-description {
        font-size: 1rem !important;
      }
      .faq-section {
        padding: 50px 15px !important;
      }
      .question-container {
        padding: 24px 0 !important;
      }
      .question-text {
        font-size: 1rem !important;
      }
      .answer-content {
        padding-right: 0 !important;
        padding-bottom: 24px !important;
      }
      .faq-container {
        max-width: 100% !important;
        margin: 0 10px !important;
      }
    }
    
    @media (max-width: 480px) {
      .faq-title {
        font-size: 1.8rem !important;
      }
      .question-container {
        padding: 20px 0 !important;
      }
      .icon-container {
        width: 28px !important;
        height: 28px !important;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      <section className="faq-section" style={styles.section}>
        <div className="faq-container" style={styles.container}>
          <div style={styles.header}>
            <div style={styles.subtitle}>Digital Edge Solutions</div>
            <h1 className="faq-title" style={styles.title}>
              Frequently Asked<br />Questions
            </h1>
            <p className="faq-description" style={styles.description}>
              Find answers to the most common questions about ERP software and how it can help optimize your business operations.
            </p>
          </div>

          {/* <div style={styles.sectionTitle}>Top ERP FAQs</div> */}

          <div>
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                style={styles.faqItem}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.faqItemHover);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div 
                  className="question-container"
                  style={styles.questionContainer}
                  onClick={() => toggle(faq.id)}
                >
                  <h3 className="question-text" style={styles.question}>
                    {faq.question}
                  </h3>
                  <div style={styles.iconContainer}>
                    {open === faq.id ? (
                      <Minus size={18} style={styles.icon} />
                    ) : (
                      <Plus size={18} style={styles.icon} />
                    )}
                  </div>
                </div>
                <div 
                  style={{
                    ...styles.answerContainer,
                    ...(open === faq.id ? styles.answerContainerOpen : {})
                  }}
                >
                  <div className="answer-content" style={styles.answer}>
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ErpFaqPage;