import React from 'react';
import Link from 'next/link'

const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="calltoaction_section parallaxie" style={{ backgroundImage: `url(${'/images/backgrounds/bg_image_1.webp'})` }}>
            <div className="container text-center">
                <div className="heading_block text-white">
                    <h2 className="heading_text">
                        Ready to Work, Let's Chat
                    </h2>
                    <p className="heading_description mb-0">
                        Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation.
                    </p>
                </div>

                {/* Button container */}
                <div className="cta-buttons">
                    <Link onClick={ClickHandler} href="/contact" className="btn btn-primary">
                        <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                        </span>
                    </Link>

                    <Link onClick={ClickHandler}  style={{ color: '#ffffff' }} href="/calendar" className="btn btn-outline-light">
                        <span className="btn_label" data-text="Schedule Appointment">Schedule Appointment</span>
                        <span className="btn_icon">
                            <i className="fa-solid fa-calendar-check"></i>
                        </span>
                    </Link>
                </div>
            </div>

            {/* In-file CSS */}
            <style jsx>{`
                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 20px;
                    flex-wrap: wrap;
                }

                /* Mobile view: stack vertically */
                @media (max-width: 576px) {
                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                        gap: 10px;
                    }

                    .cta-buttons .btn {
                        width: 80%; /* Make them same width */
                        max-width: 300px;
                    }
                }
            `}</style>
        </section>
    );
}

export default CtaSection;
