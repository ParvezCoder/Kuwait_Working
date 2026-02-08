import React from 'react';
import sIcon1 from '/public/images/icons/icon_clock.svg'
import sIcon2 from '/public/images/icons/icon_dart_board_2.svg'
import sIcon3 from '/public/images/icons/icon_target.svg'
import Image from 'next/image';

const Policy = [
    {
        title: 'Our History',
        subTitle: 'Digital Edge Solutions Inc. is a Canadian company registration number is (85630 1684 RC0001) year 2000 in Canada & with its head office at Kuwait for the (Arabian Gulf) & Corporate Offices at Richmond Hill Ont. – Canada. We have been actively working in Kuwait since year 2004 our registration done by having a devoted place in heart of the IT Industry Hawally as an IT Retail Showroom. Established in year 2000; in Canada and expended in to Gulf Region which begin with having our outlet in Kuwait in year 2004.',
        icon: sIcon1,
    },
    {
        title: 'Our Methodology',
        subTitle: 'Quality is the first priority at Digital Edge (DE) Solutions Inc. We are powered with Quality product and strive for Quality Service. We engaged with the best breed product in the world. We are working toward providing the Best solutions around the globe.Digital Edge Solutions Inc. organization hierarchy is organized in such a way that it is capable of handling all the kind of Projects, from large to tiny small, quality and the end user satisfaction is our motto. We are committed to provide the best solution to our clients.',
        icon: sIcon2,
    },
    {
        title: 'Our Achievements',
        subTitle: 'Digital Edge Solutions has successfully introduced and established several IT products in Kuwait and the Middle East, including NEXCom Blade Servers from Taiwan, Bit Defender Antivirus from Romania—which is now recognized throughout the Gulf region—and Escan Antivirus as a dedicated agent in Kuwait. Since its inception, Digital Edge has effectively managed, marketed, and supported various hardware and software products, gaining significant recognition in the IT industry. Our services have reached a wide range of clients.',
        icon: sIcon3,
    },


]


const PolicySection = (props) => {

    return (
        <section className="policy_section bg-light">
            <div className="container">
                <div className="row">
                    {Policy.map((policy, pitem) => (
                        <div className="col-lg-4" key={pitem}>
                            <div className="iconbox_block">
                                <div className="iconbox_icon">
                                    <Image src={policy.icon} alt="Dollar SVG Icon" />
                                </div>
                                <div className="iconbox_content">
                                    <h3 className="iconbox_title">{policy.title}</h3>
                                    <p className="mb-0">
                                        {policy.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PolicySection;