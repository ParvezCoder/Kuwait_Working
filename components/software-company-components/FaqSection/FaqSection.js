import React, { useState } from 'react';
import shape1 from '/public/images/shapes/shape_space_4.svg';
import shape2 from '/public/images/shapes/shape_angle_3.webp';

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import Image from 'next/image';

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
        <section className="faq_section section_decoration">
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
                        F.A.Q.
                    </div>
                    <h2 className="heading_text mb-0">
                        Need a <mark>Support?</mark>
                    </h2>
                </div>

                <div className="faq_accordion accordion" id="faq_accordion">
                    <Accordion open={open} toggle={toggle} className="accordion" id="service_process_faq">
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="1">
                                Q. What is ERP software?
                            </AccordionHeader>
                            <AccordionBody accordionId="1" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    ERP (Enterprise Resource Planning) software by Digital Edge Solutions integrates various business processes—such as finance, HR, manufacturing, and inventory—into a single system, streamlining workflows and providing real-time data visibility for better decision-making.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="2">
                                Q. What are the key benefits of using ERP software?
                            </AccordionHeader>
                            <AccordionBody accordionId="2" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    The key benefits of ERP software include:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Centralized information management
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Improved workflow automation
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Enhanced reporting and analytics
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Reduced manual errors and duplication
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Better compliance and security features
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="3">
                                Q. Which modules are typically included in an ERP system?
                            </AccordionHeader>
                            <AccordionBody accordionId="3" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    Common ERP modules include:
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Customer Relationship Management (CRM)
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Human Resources
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Inventory Management
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Supply Chain Management
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="icon_list unordered_list_block">
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Finance and Accounting
                                                </span>
                                            </li>
                                            <li>
                                                <span className="icon_list_icon">
                                                    <i className="fa-solid fa-circle fa-fw"></i>
                                                </span>
                                                <span className="icon_list_text">
                                                    Manufacturing and Production
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="4">
                                Q. Is ERP suitable for small businesses or just large enterprises?
                            </AccordionHeader>
                            <AccordionBody accordionId="4" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    Modern ERP solutions are highly scalable and can be tailored for small, medium, or large organizations across all industries. The most important factor is having local company support and a provider who can offer not just the software, but also brilliant ideas to elevate your business to the next level.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="5">
                                Q. How does ERP software improve business efficiency?
                            </AccordionHeader>
                            <AccordionBody accordionId="5" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    ERP streamlines business processes by automating tasks, eliminating data silos, and providing real-time information. This leads to faster and more accurate decision-making, improving overall business efficiency.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem className="accordion-item">
                            <AccordionHeader targetId="6">
                                Q. Why is custom software development important for businesses?
                            </AccordionHeader>
                            <AccordionBody accordionId="6" className='acc_body'>
                                <div className="text_a">A.</div>
                                <p>
                                    Custom software development helps businesses tailor solutions to their specific needs, leading to optimized processes and better alignment with business goals. It is essential for businesses looking to stay competitive and efficiently manage their operations.
                                </p>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="decoration_item shape_image_1">
                <Image src={shape1} alt="Corp-Digital Shape" />
            </div>
            <div className="decoration_item shape_image_2">
                <Image src={shape2} alt="Corp-Digital Shape Angle" />
            </div>
        </section>
    )
};
export default FaqSection;
