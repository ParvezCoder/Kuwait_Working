import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Special = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const solutions = [
    {
      title: "CRM Solutions",
      description: "Streamline your customer relationship's with our comprehensive Customer Relationship Management solutions. Manage leads, track interactions, and boost sales performance with integrated tools.",
      features: [
        "Lead management and tracking",
        "Customer interaction history",
        "Sales pipeline visualization", 
        "Automated follow-up",
        "Performance analytics"
      ],
      image: "/images/services/crm-diagram.webp",
      showBanner: false
    },
    {
      title: "POS Solutions", 
      description: "Revolutionize your retail operations with our advanced Point of Sale systems. Process transactions, manage inventory, and analyze sales data in real-time.",
      features: [
        "Multi-payment processing",
        "Inventory management",
        "Real-time sales reporting",
        "Customer loyalty programs", 
        "Mobile POS capabilities"
      ],
      image: "/images/services/pos-diagram (2).png",
      showBanner: true
    },
    {
      title: "IT Maintenance",
      description: "Keep your technology infrastructure running smoothly with our comprehensive IT maintenance services. Proactive monitoring, updates, and support for optimal performance.",
      features: [
        "24/7 system monitoring",
        "Preventive maintenance",
        "Security updates and patches",
        "Technical support",
        "Performance optimization"
      ],
      image: "/images/services/it-maintenance-diagram2.png",
      showBanner: false
    }
  ];

  const bannerStats = [
    {
      iconSrc: "/images/icons/tmbill-customer.png", // Replace with your icon link
      alt: "Happy Restaurants Icon",
      number: "12000+",
      label: "Happy Restaurants"
    },
    {
      iconSrc: "/images/icons/tmbill-contry.png", // Replace with your icon link
      alt: "GLobe Icon",
      number: "30+",
      label: "Countries"
    },
    {
      iconSrc: "/images/icons/tmbill-platform.png", // Replace with your icon link
      alt: "Platform Icon",
      number: "1",
      label: "Platform"
    },
    {
        iconSrc: "/images/icons/tmbill-shopping.png", // Replace with your icon link
        alt: "Shop Icon",
      number: "1M+",
      label: "Daily Orders World wide"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

return (
    <section className="solutions_section section_space">
        <div className="container">
            <div className="row align-items-center">
                {/* Image Section - Now on Left */}
                <div className="col-lg-6 order-lg-first">
                    <div className={`solutions_image_container ${isVisible ? 'animate-in' : ''}`}>
                        <div className="solution_image_box">
                            <div className="image_content">
                                <div 
                                    className={`diagram_placeholder tab-${activeTab}`}
                                    key={activeTab}
                                >
                                    <Image 
                                        src={solutions[activeTab].image}
                                        alt={`${solutions[activeTab].title} Diagram`}
                                        width={450}
                                        height={300}
                                        style={{ 
                                            objectFit: 'contain',
                                            borderRadius: '12px',
                                            filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.08))'
                                        }}
                                        priority
                                    />
                                </div>
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="floating_element element_1">
                                <div className="pulse_dot"></div>
                            </div>
                            <div className="floating_element element_2">
                                <div className="pulse_dot"></div>
                            </div>
                            <div className="floating_element element_3">
                                <div className="pulse_dot"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section - Now on Right */}
                <div className="col-lg-6 order-lg-last">
                    <div className={`solutions_content ${isVisible ? 'animate-in' : ''}`}>
                        {/* Enhanced Navigation Tabs */}
                        <div className="solutions_nav">
                            <div className="nav_container">
                                {solutions.map((solution, index) => (
                                    <button
                                        key={index}
                                        className={`solution_tab ${activeTab === index ? 'active' : ''}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <span className="tab_text">{solution.title.replace(' Solutions', '')}</span>
                                        <div className="tab_indicator"></div>
                                    </button>
                                ))}
                                <div 
                                    className="active_indicator"
                                    style={{
                                        transform: `translateX(${activeTab * 100}%)`,
                                        width: `${100 / solutions.length}%`
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Enhanced Content */}
                        <div className={`solution_content_active content-${activeTab}`} key={activeTab}>
                            <h2 className="solution_title">
                                <span className="title_highlight">{solutions[activeTab].title.split(' ')[0]}</span>
                                <span className="title_normal"> {solutions[activeTab].title.split(' ').slice(1).join(' ')}</span>
                            </h2>
                            
                            <p className="solution_description">
                                {solutions[activeTab].description}
                            </p>

                            <ul className="solution_features">
                                {solutions[activeTab].features.map((feature, index) => (
                                    <li key={index} className="feature_item" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="feature_icon">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M10 3L4.5 8.5L2 6" stroke="#020842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <span className="feature_text">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats Banner - Only show for POS Solutions */}
                            {solutions[activeTab].showBanner && (
                                <div className="stats_banner">
                                    <div className="stats_grid">
                                        {bannerStats.map((stat, index) => (
                                            <div key={index} className="stat_card" style={{ animationDelay: `${index * 150}ms` }}>
                                                <div className="stat_icon">
                                                    <Image src={stat.iconSrc} alt={stat.alt} width={50} height={50} style={{ objectFit: 'contain' }} />
                                                </div>
                                                <div className="stat_number">{stat.number}</div>
                                                <div className="stat_label">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="cta_section">
                                <Link href="/service" legacyBehavior>
                                    <a className="btn btn-primary">
                                        <span className="btn_text">Learn More</span>
                                        <div className="btn_icon">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </a>
                                </Link>
                                
                                <div className="stats_mini">
                                    <div className="stat_item">
                                        <span className="stat_number">99%</span>
                                        <span className="stat_label">Success Rate</span>
                                    </div>
                                    <div className="stat_divider"></div>
                                    <div className="stat_item">
                                        <span className="stat_number">24/7</span>
                                        <span className="stat_label">Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .solutions_section {
                background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);
                padding: 100px 0;
                position: relative;
                overflow: hidden;
            }

            .solutions_section::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 20%, rgba(2, 8, 66, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(2, 8, 66, 0.02) 0%, transparent 50%);
                pointer-events: none;
            }

            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 20px;
                position: relative;
                z-index: 1;
            }
            
            .row {
                display: flex;
                align-items: center;
                gap: 60px;
            }
            
            .col-lg-6 {
                flex: 1;
                min-width: 0;
            }

            /* Enhanced Image Section */
            .solutions_image_container {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                opacity: 0;
                transform: translateX(-50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .solutions_image_container.animate-in {
                opacity: 1;
                transform: translateX(0);
            }

            .solution_image_box {
                background: linear-gradient(145deg, #ffffff 0%, #f8f9ff 100%);
                border-radius: 24px;
                box-shadow: 
                    0 20px 60px rgba(2, 8, 66, 0.08),
                    0 8px 25px rgba(0, 0, 0, 0.04),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
                padding: 50px 40px;
                width: 100%;
                max-width: 540px;
                position: relative;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .solution_image_box:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 
                    0 30px 80px rgba(2, 8, 66, 0.12),
                    0 12px 35px rgba(0, 0, 0, 0.06);
            }

            .image_content {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 300px;
            }

            .diagram_placeholder {
                opacity: 0;
                transform: scale(0.9) rotate(2deg);
                animation: slideInImage 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
            }

            /* Floating Elements */
            .floating_element {
                position: absolute;
                z-index: 2;
            }

            .element_1 {
                top: 20px;
                right: 20px;
                animation: float 6s ease-in-out infinite;
            }

            .element_2 {
                bottom: 30px;
                left: 20px;
                animation: float 8s ease-in-out infinite reverse;
            }

            .element_3 {
                top: 50%;
                right: -10px;
                animation: float 7s ease-in-out infinite 2s;
            }

            .pulse_dot {
                width: 12px;
                height: 12px;
                background: linear-gradient(135deg, #020842, #0d47a1);
                border-radius: 50%;
                position: relative;
            }

            .pulse_dot::before {
                content: '';
                position: absolute;
                top: -5px;
                left: -5px;
                right: -5px;
                bottom: -5px;
                background: inherit;
                border-radius: 50%;
                opacity: 0.3;
                animation: pulse 2s infinite;
            }

            /* Enhanced Content Section */
            .solutions_content {
                padding-left: 20px;
                opacity: 0;
                transform: translateX(50px);
                transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
            }

            .solutions_content.animate-in {
                opacity: 1;
                transform: translateX(0);
            }

            /* Enhanced Navigation */
            .solutions_nav {
                margin-bottom: 50px;
            }

            .nav_container {
                position: relative;
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(10px);
                border-radius: 50px;
                padding: 6px;
                display: flex;
                box-shadow: 
                    0 8px 32px rgba(2, 8, 66, 0.08),
                    inset 0 1px 0 rgba(255, 255, 255, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .solution_tab {
                position: relative;
                flex: 1;
                background: transparent;
                border: none;
                padding: 16px 24px;
                border-radius: 44px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                z-index: 2;
                overflow: hidden;
            }

            .tab_text {
                font-size: 15px;
                font-weight: 600;
                color: #666;
                transition: all 0.3s ease;
                position: relative;
                z-index: 2;
            }

            .solution_tab.active .tab_text {
                color: white;
            }

            .solution_tab:hover:not(.active) .tab_text {
                color: #020842;
            }

            .active_indicator {
                position: absolute;
                top: 6px;
                bottom: 6px;
                background: linear-gradient(135deg, #020842 0%, #0d47a1 100%);
                border-radius: 44px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 20px rgba(2, 8, 66, 0.3);
            }

            /* Enhanced Content */
            .solution_content_active {
                opacity: 0;
                transform: translateY(20px);
                animation: slideInContent 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
            }

            .solution_title {
                font-size: 42px;
                font-weight: 800;
                margin-bottom: 24px;
                line-height: 1.2;
            }

            .title_highlight {
                background: linear-gradient(135deg, #020842 0%, #0d47a1 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }

            .title_normal {
                color: #1a1a1a;
            }

            .solution_description {
                font-size: 17px;
                color: #666;
                line-height: 1.7;
                margin-bottom: 36px;
                font-weight: 400;
            }

            .solution_features {
                list-style: none;
                padding: 0;
                margin: 0 0 40px 0;
            }

            .feature_item {
                display: flex;
                align-items: center;
                margin-bottom: 16px;
                opacity: 0;
                transform: translateX(-20px);
                animation: slideInFeature 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            .feature_icon {
                width: 24px;
                height: 24px;
                background: linear-gradient(135deg, rgba(2, 8, 66, 0.1) 0%, rgba(2, 8, 66, 0.05) 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                flex-shrink: 0;
                transition: all 0.3s ease;
            }

            .feature_item:hover .feature_icon {
                background: linear-gradient(135deg, #020842 0%, #0d47a1 100%);
            }

            .feature_item:hover .feature_icon svg path {
                stroke: white;
            }

            .feature_text {
                font-size: 16px;
                color: #444;
                font-weight: 500;
            }

            /* Stats Banner */
            .stats_banner {
                margin: 40px 0;
                background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
                border-radius: 20px;
                padding: 40px 30px;
                box-shadow: 0 20px 60px rgba(46, 125, 50, 0.15);
                position: relative;
                overflow: hidden;
            }

            .stats_banner::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
                pointer-events: none;
            }

            .stats_grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 30px;
                position: relative;
                z-index: 1;
            }

            .stat_card {
                text-align: center;
                opacity: 0;
                transform: translateY(20px);
                animation: slideInStat 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }

            .stat_icon {
                font-size: 32px;
                margin-bottom: 12px;
                display: block;
            }

            .stat_card .stat_number {
                font-size: 20px;
                font-weight: 800;
                color: white;
                display: block;
                line-height: 1;
                margin-bottom: 8px;
            }

            .stat_card .stat_label {
                font-size: 8px;
                color: rgba(255, 255, 255, 0.9);
                font-weight: 500;
                line-height: 1.3;
            }

            /* Enhanced CTA Section */
            .cta_section {
                display: flex;
                align-items: center;
                gap: 32px;
                flex-wrap: wrap;
            }

            .btn {
                background: linear-gradient(135deg, #020842 0%, #0d47a1 100%);
                color: white;
                border: none;
                padding: 16px 32px;
                border-radius: 50px;
                font-size: 15px;
                font-weight: 600;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 12px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                text-decoration: none;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(2, 8, 66, 0.2);
            }

            .btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: left 0.5s;
            }

            .btn:hover::before {
                left: 100%;
            }

            .btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 30px rgba(2, 8, 66, 0.3);
            }

            .btn_icon {
                transition: all 0.3s ease;
            }

            .btn:hover .btn_icon {
                transform: translate(2px, -2px);
            }

            .stats_mini {
                display: flex;
                align-items: center;
                gap: 20px;
            }

            .stat_item {
                text-align: center;
            }

            .stats_mini .stat_number {
                display: block;
                font-size: 18px;
                font-weight: 700;
                color: #020842;
                line-height: 1;
            }

            .stats_mini .stat_label {
                display: block;
                font-size: 12px;
                color: #666;
                margin-top: 4px;
                font-weight: 500;
            }

            .stat_divider {
                width: 1px;
                height: 40px;
                background: linear-gradient(to bottom, transparent, #ddd, transparent);
            }

            /* Animations */
            @keyframes slideInImage {
                to {
                    opacity: 1;
                    transform: scale(1) rotate(0deg);
                }
            }

            @keyframes slideInContent {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes slideInFeature {
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            @keyframes slideInStat {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }

            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 0.3; }
                50% { transform: scale(1.5); opacity: 0.1; }
            }

            /* Responsive Design */
            @media (max-width: 1024px) {
                .row {
                    gap: 40px;
                }
                
                .solutions_content {
                    padding-left: 0;
                }

                .stats_grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                }
            }

            @media (max-width: 992px) {
                .row {
                    flex-direction: column;
                    gap: 50px;
                }
                
                .col-lg-6 {
                    flex: none;
                    width: 100%;
                }
                
                .solutions_image_container {
                    order: 2;
                }
                
                .solutions_content {
                    order: 1;
                }
                
                .solution_title {
                    font-size: 36px;
                }
                
                .solution_image_box {
                    max-width: 100%;
                    padding: 40px 30px;
                }
            }

            @media (max-width: 768px) {
                .solutions_section {
                    padding: 80px 0;
                }
                
                .nav_container {
                    flex-direction: column;
                    border-radius: 16px;
                }
                
                .solution_tab {
                    border-radius: 12px;
                }
                
                .active_indicator {
                    display: none;
                }
                
                .solution_tab.active {
                    background: linear-gradient(135deg, #020842 0%, #0d47a1 100%);
                }
                
                .solution_title {
                    font-size: 28px;
                }
                
                .solution_description {
                    font-size: 16px;
                }
                
                .cta_section {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                }
                
                .stats_mini {
                    align-self: center;
                }
                
                .solution_image_box {
                    padding: 30px 20px;
                }

                .stats_grid {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .stats_banner {
                    padding: 30px 20px;
                }

                .stat_card .stat_number {
                    font-size: 28px;
                }

                .stat_icon {
                    font-size: 28px;
                }
            }

            @media (max-width: 480px) {
                .container {
                    padding: 0 15px;
                }
                
                .solution_title {
                    font-size: 24px;
                }
                
                .btn {
                    padding: 14px 24px;
                    font-size: 14px;
                }

                .stats_grid {
                    gap: 15px;
                }

                .stat_card .stat_number {
                    font-size: 24px;
                }

                .stat_icon {
                    font-size: 24px;
                }
            }
        `}</style>
    </section>
);
};

export default Special;