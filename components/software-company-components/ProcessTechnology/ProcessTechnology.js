
import React, { useState } from 'react';
import shape1 from '/public/images/shapes/shape_line_2.svg'
import shape2 from '/public/images/shapes/shape_line_3.svg'
import shape3 from '/public/images/shapes/shape_line_4.svg'
import shape4 from '/public/images/shapes/shape_space_3.svg'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import TechnologySection from '../TechnologySection/TechnologySection';
import Testimonial from '../Testimonial/Testimonial';
import Image from 'next/image';
import Link from 'next/link';

const FaqSection = (props) => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process_technology_review_section bg-light section_decoration">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-6">
                        <div className="heading_block">
                            <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                                Working Process
                            </div>

                            <Link href="/DevelopmentCycle" className="heading_subtitle d-block mb-3">
                            <h2 className="heading_text mb-0">
                                Our <mark>Approach</mark>
                            </h2>
                            </Link>

                        </div>
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="1">
                                    01. Discovery Phase
                                </AccordionHeader>
                                <AccordionBody accordionId="1" className='acc_body'>
                                    <p className="m-0">
                                        The Discovery Phase is a crucial initial stage in the software development lifecycle where teams research, analyze, and define the project's scope before actual development begins.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="2">
                                    02. Design and Development
                                </AccordionHeader>
                                <AccordionBody accordionId="2" className='acc_body'>
                                    <p className="m-0">
                                        The software solution takes shape based on the requirements gathered during the Discovery Phase. This stage involves creating system architecture, writing code, and building the product incrementally.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="3">
                                    03. Testing and QA
                                </AccordionHeader>
                                <AccordionBody accordionId="3" className='acc_body'>
                                    <p className="m-0">
                                        The Testing and Quality Assurance (QA) Phase ensures that the software meets functional, performance, and security standards before deployment. It involves systematic checks to identify and fix defects, ensuring a high-quality product.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="4">
                                    04. Deployment
                                </AccordionHeader>
                                <AccordionBody accordionId="4" className='acc_body'>
                                    <p className="m-0">
                                        Rolling out to production (Blue-Green, Canary releases).
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className="accordion-item">
                                <AccordionHeader targetId="5">
                                    05. Maintenance
                                </AccordionHeader>
                                <AccordionBody accordionId="5" className='acc_body'>
                                    <p className="m-0">
                                        Bug fixes, updates, and feature enhancements.
                                    </p>
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="col-lg-5">
                        <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                            <ul className="content_layer_group unordered_list_block text-center">
                                <li><AccordionHeader targetId="1"><span>Discovery Phase</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="2"><span>Design and Development</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="3"><span>Testing and QA</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="4"><span>Deployment</span></AccordionHeader></li>
                                <li><AccordionHeader targetId="5"><span>Maintenance</span></AccordionHeader></li>
                            </ul>
                        </Accordion>
                    </div>

                    
                    <div align="center" className="col-lg-12 mt-4">
                        <Link href="/DevelopmentCycle" legacyBehavior>
                                    <a className="btn btn-primary">
                                        <span className="btn_text">Learn More</span>
                                        <div className="btn_icon">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </a>
                        </Link>
                    </div>            
                </div>
                <TechnologySection/>
                <Testimonial/>
            </div>

            <div className="decoration_item shape_image_1">
                <Image src={shape1} alt="Corp-Digital Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <Image src={shape2} alt="Corp-Digital Shape" />
            </div>
            <div className="decoration_item shape_image_3">
                <Image src={shape3} alt="Corp-Digital Shape" />
            </div>
            <div className="decoration_item shape_image_4">
                <Image src={shape4} alt="Corp-Digital Shape" />
            </div>

            <style jsx>{`
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
            `}</style>

        </section>
    )
};
export default FaqSection;
