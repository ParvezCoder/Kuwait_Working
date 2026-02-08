// import React, { Fragment } from 'react';
// import Link from "next/link";
// import Teams from '../../api/team'
// import Header from '../../components/Header2/Header2';
// import PageTitle from '../../components/pagetitle/PageTitle'
// import Scrollbar from '../../components/scrollbar/scrollbar'
// import Footer from '../../components/software-company-components/Footer/Footer';
// import CtaSection from '../../components/CtaSection/CtaSection';
// import tImg from '/public/images/team/team_cartoon_image.webp'
// import sImg1 from '/public/images/icons/icon_facebook.svg'
// import sImg2 from '/public/images/icons/icon_twitter_x.svg'
// import sImg3 from '/public/images/icons/icon_linkedin.svg'
// import sImg4 from '/public/images/icons/icon_instagram.svg'
// import Image from 'next/image';

// const TeamPage = (props) => {

//     const ClickHandler = () => {
//         window.scrollTo(10, 0);
//     }
//     return (
//         <Fragment>
//             <Header />
//             <main className="page_content about-page">
//                 <PageTitle pageTitle={'Team Member'} pagesub={'Members 😍'} pageTop={'Team'} />
//                 <section className="about_section section_space bg-light">
//                     <div className="container">
//                         <div className="row align-items-center justify-content-lg-between">
//                             <div className="col-lg-6 order-lg-last">
//                                 <div className="team_cartoon_image">
//                                     <Image src={tImg} alt="Team Cartoon" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-5">
//                                 <div className="about_content">
//                                     <div className="heading_block">
//                                         <div className="heading_focus_text">
//                                             Our Dedicated
//                                             <span className="badge bg-secondary text-white">Team 🙂</span>
//                                         </div>
//                                         <h2 className="heading_text">
//                                             Get to Know Our Expert Corp-Digital Team
//                                         </h2>
//                                         <p className="heading_description mb-0">
//                                             Get acquainted with the powerhouse behind Corp-Digital – our expert team of professionals dedicated to revolutionizing the IT landscape. Comprising.
//                                         </p>
//                                     </div>
//                                     <Link onClick={ClickHandler} href={'/team'} className="btn">
//                                         <span className="btn_label" data-text="Talk to an Expart">Talk to an Expart</span>
//                                         <span className="btn_icon">
//                                             <i className="fa-solid fa-arrow-up-right"></i>
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 <section className="team_section section_space">
//                     <div className="container">
//                         <div className="heading_block text-center">
//                             <div className="heading_focus_text">
//                                 <span className="badge bg-secondary text-white">Our Expert</span>
//                                 Team Members 😍
//                             </div>
//                             <h2 className="heading_text mb-0">
//                                 Top Skilled Experts
//                             </h2>
//                         </div>

//                         <div className="row">
//                             {Teams.slice(0, 6).map((team, tm) => (
//                                 <div className="col-lg-4 col-md-6 col-sm-6" key={tm}>
//                                     <div className="team_block">
//                                         <div className="team_member_image">
//                                             <Link onClick={ClickHandler} className="image_wrap" aria-label="Team Details Button" href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
//                                                 <Image src={team.tImg} alt="" />
//                                                 <i className="fa-solid fa-arrow-up-right"></i>
//                                             </Link>
//                                         </div>
//                                         <div className="team_member_info">
//                                             <h3 className="team_member_name">
//                                                 <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link>
//                                             </h3>
//                                             <h4 className="team_member_designation">{team.title}</h4>
//                                             <ul className="social_icons_block unordered_list justify-content-center">
//                                                 <li>
//                                                     <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
//                                                         <Image src={sImg1} alt="Icon Facebook" />
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
//                                                         <Image src={sImg2} alt="Icon Twitter X" />
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
//                                                         <Image src={sImg3} alt="Icon Linkedin" />
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>
//                                                         <Image src={sImg4} alt="Icon Instagram" />
//                                                     </Link>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <CtaSection />
//             <Footer />
//             <Scrollbar />
//         </Fragment>
//     )
// };
// export default TeamPage;


import React, { Fragment } from 'react';
import Header from '../../components/Header2/Header2';
import Teams from '../../api/team'
import CountUp from 'react-countup';
import { useRouter } from 'next/router'
import Link from "next/link";
import Image from 'next/image';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/software-company-components/Footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import sImg1 from '/public/images/icons/icon_facebook.svg'
import sImg2 from '/public/images/icons/icon_twitter_x.svg'
import sImg3 from '/public/images/icons/icon_linkedin.svg'
import sImg4 from '/public/images/icons/icon_instagram.svg'
import tImg from '/public/images/team/team1.png'
import Head from 'next/head';

const TeamPage = (props) => {
    const router = useRouter()

    const TeamDetails = Teams.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Head>
                <title>Team | Corp-Digital</title>
                <meta name="description" content="Learn more about Corp-Digital, our values, our mission, and how we provide cutting-edge digital solutions to help businesses grow." />
                <meta name="keywords" content="About Corp-Digital, Digital Solutions, Business Transformation, CEO Message" />
                <meta property="og:title" content="Team | Corp-Digital" />
                <meta property="og:description" content="We are committed to providing quality digital solutions worldwide. Learn more about our mission and team." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://corp.digital53.com/team" />
                <meta property="og:image" content="https://corp.digital53.com/images/logoseo.png" /> // Replace with actual image URL
                <link rel="canonical" href="https://corp.digital53.com/team" />
            </Head>
            <Header />
            <main className="page_content about-page">
                <PageTitle pageTitle='Our Team' pagesub={'Digital 😍'} pageTop={'Corp'} />
                <section className="team_details_section section_space bg-light">
                    <div className="container">
                        <div className="team_member_details_card">
                            <div className="team_member_image">
                                <Image src={tImg} alt="Office"/>
                            </div>
                            <div className="team_member_content">
                                <h2 className="team_member_name">Team consist of</h2>
                                <ul className="icon_list unordered_list_block">
                                    <li>
                                        <span className="icon_list_text">
                                        <strong>Best Rated:</strong> Project Managers
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                        <strong>High Caliber:</strong> IT Managers
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                        <strong>Value Added:</strong> Sales Team
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                        <strong>Diversified Knowledge Based:</strong> Procurement Team
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                        <strong>Our Staff:</strong> Has Served Various Domains of Customers Who Are Highly Ranked IT Users
                                        </span>
                                    </li>
                                </ul>
                                    {/* <li>
                                        <span className="icon_list_text">
                                            <strong>Responsibility:</strong>
                                            {TeamDetails?.title}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Experience:</strong>
                                            18 Years
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Email:</strong>
                                            August@example.com
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon_list_text">
                                            <strong>Phone:</strong>
                                            +91590 0574 258
                                        </span>
                                    </li> */}
                                <div className="social_wrapper">
                                    <h3 className="social_title">Social Media</h3>
                                    <ul className="social_icons_block unordered_list">
                                        <li>
                                            <Link onClick={ClickHandler} href={'https://www.facebook.com/digital53/'} target='_blank'>
                                                <Image src={sImg1} alt="Icon Facebook"/>
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link onClick={ClickHandler} href={'/team'}>
                                                <Image src={sImg2} alt="Icon Twitter X"/>
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link onClick={ClickHandler} href={'https://www.linkedin.com/in/joharmandav/'} target='_blank'>
                                                <Image src={sImg3} alt="Icon Linkedin"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} href={'https://www.instagram.com/digitaledge.q8/'} target='_blank'>
                                                <Image src={sImg4} alt="Icon Instagram"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 className="details_item_info_title">Professional Skills</h3>

                        <p>
                            The development team consists of highly qualified, talented and certified Best Ranked Project Managers, industry certified software and QA engineers, who between them have decades of successful software development & Hardware Maintenance experience.
                        </p>
                        <p>
                            They have expertise in latest programming languages specialized in .Net Java, operating systems, Servers, RDBMS and other software technologies,tools and techniques.
                        </p>
                        

                        <div className="row mb-5">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="98"><CountUp end={98} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Product Development</h3>
                                    <div className="bottom_line bg-primary"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="88"><CountUp end={88} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Problem-Solving</h3>
                                    <div className="bottom_line bg-danger"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="99"><CountUp end={99} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Communication Skills</h3>
                                    <div className="bottom_line bg-secondary"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="funfact_block text-center">
                                    <div className="counter_value">
                                        <span className="odometer" data-count="77"><CountUp end={77} enableScrollSpy /></span>
                                        <span>%</span>
                                    </div>
                                    <h3 className="funfact_title mb-0">Passion for Helping</h3>
                                    <div className="bottom_line bg-warning"></div>
                                </div>
                            </div>
                        </div>

                        <h3 className="details_item_info_title">Professional Experience</h3>
                        <p>
                            Our organization’s Technical & Customer Care Department is dedicated to provide best possible help to our respected clients at any stage keeping in mind that “Service Comes First”. Organization is moving ahead and achieving success quickly. Due to serious & disciplined concern to our work, we proudly can say we are one of the best Turnkey Solution providers in Information Technology Industry. Digital Edge Solutions Inc. is a state of the art Turnkey Solutions provider, in a dynamic and technology-driven global IT Market.
                        </p>
                        <p>

                            In DE Service, quality is the first priority with highest consideration of time and money of clients. Whether you require a simple customization of existing software or the development of advanced Custom Applications, we can scale our efforts which precisely meet your needs in the most efficient, effective & value for money possible. The IT Department level generation of the SOP, Disaster Recovery Plan, Maintaining the Project Management documentations, Job Description and Hiring the Staff in Management and technical sites are part of our IT Consultation.;
                        </p>
                        <p>
                            Our approach to Software Engineering is based on Flexibility, Quality and Innovation. We are committed to provide the best solution to our clients. We are working toward providing the Best solutions around the globe.
                        </p>
                        <h4 className="mb-2">Qualifications of our team:</h4>
                        <ul className="icon_list unordered_list_block">
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Proficiency in systems analysis, design, implementation, and maintenance.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Strong knowledge of network protocols, hardware, and software components.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Proficient in virtualization technologies.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Skilled in cloud computing platforms.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Proficient in scripting languages.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Experience in Database Management Softwares.
                                </span>
                            </li>
                            <li>
                                <span className="icon_list_icon">
                                    <i className="fa-solid fa-circle fa-fw"></i>
                                </span>
                                <span className="icon_list_text">
                                    Excellent problem-solving and analytical skills.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
                <CtaSection />
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
