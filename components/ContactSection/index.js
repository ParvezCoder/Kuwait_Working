import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import icon1 from '/public/images/icons/icon_map_mark_2.svg'
import icon2 from '/public/images/icons/icon_calling_2.svg'
import icon3 from '/public/images/icons/icon_mail_3.svg'
import icon4 from '/public/images/icons/icon_calendar_2.svg'
import icon5 from '/public/images/icons/icons8-whatsapp.svg'
import Image from 'next/image'
import Link from 'next/link'


const ContactSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon1} alt="Map Mark SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Location</h3>
                                <p className="mb-0">
                                    Nassima Complex, Ground Floor, Shop #2 and 3, Hawally, Kuwait
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon2} alt="Calling SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Contact</h3>
                                {/* <p className="mb-0">+965-22660781</p> */}
                                                              <Link
                                        href="https://wa.me/96599144152"
                                        target="_blank"
                                        className="whatsapp_link"
                                        style={{
                                            color: '#595764', 
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = '#003a99')} // darker on hover
                                        onMouseOut={(e) => (e.currentTarget.style.color = '#595764')} // back to original
                                        >
                                        <Image src={icon5} alt="WhatsApp" height={25} width={25} />
                                        +965-99144152
                                        </Link>
                                          <Link
                                        href="https://wa.me/96599144172"
                                        target="_blank"
                                        className="whatsapp_link"
                                        style={{
                                            color: '#595764', 
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = '#003a99')} // darker on hover
                                        onMouseOut={(e) => (e.currentTarget.style.color = '#595764')} // back to original
                                        >
                                        <Image src={icon5} alt="WhatsApp" height={25} width={25} />
                                        +965-99144172
                                        </Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon3} alt="User Check SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Email</h3>
                                <Link
                                        href="mailto:info@digital53.com"
                                        target="_blank"
                                        className="whatsapp_link"
                                        style={{
                                            color: '#595764', 
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseOver={(e) => (e.currentTarget.style.color = '#003a99')} // darker on hover
                                        onMouseOut={(e) => (e.currentTarget.style.color = '#595764')} // back to original
                                        > <p className="mb-0">info@digital53.com</p> </Link>
                                <p className="mb-0">.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <Image src={icon4} alt="Calendar SVG Icon" />
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Visit Between(Sat - Thur)</h3>
                                {/* <p className="mb-0">Saturday - Thursday</p> */}
                                <p className="mb-0">Morning Shift: 10:00 - 13:00</p>
                                <p className="mb-0">Evening Shift: 17:00 - 22:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="row justify-content-lg-between">
                        <div className="col-lg-7">
                            <div className="contact_form mb-0">
                                <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                                <p className="mb-5">
                                    Give us chance to serve and bring magic to your brand.
                                </p>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="gmap_canvas ps-lg-5">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.0116806938802!2d48.006855514865066!3d29.339820214323694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c997e87b405%3A0xc7f9af0336b80ddc!2sDigital%20Edge%20Solutions%20Computer%20An%20ERP%20Company!5e0!3m2!1sen!2skw!4v1745681815341!5m2!1sen!2skw"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;