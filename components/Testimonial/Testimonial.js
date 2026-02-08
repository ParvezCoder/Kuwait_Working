import React from 'react';
import tImg1 from '/public/images/avatar/avatar_4.webp'
import tImg2 from '/public/images/avatar/avatar_6.webp'
import tImg3 from '/public/images/avatar/avatar_5.webp'
import tImg4 from '/public/images/avatar/avatar_7.webp'
import Bg from '/public/images/shapes/bg_pattern_2.svg'
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image';



const testimonial = [
    {
        id: '01',
        tImg:tImg1,
        Title:'Amazing services',
        Des: "As a startup, we needed a technology partner who could help us bring our vision to life. Itsafe exceeded our expectations with their innovative solutions and proactive approach. They guided us through every step of the process, our journey together.",
        Name: 'Roman Dymtro',
        sub:'Director of Marketing',
    },
    {
        id: '02',
        tImg:tImg2,
        Title:'We Are Satisfied',
        Des: "We've been partnering with Corp-Digital for several years, and they have consistently delivered exceptional results. From custom software development to cloud services integration, their solutions have helped us stay ahead of the competition and adapt to evolving market demands. Their team's expertise, reliability, and commitment to customer satisfaction make them our go-to IT partner.",
        Name: 'Michel johnson',
        sub:'Tech Startup Founder',
    },
    {
        id: '03',
        tImg:tImg3,
        Title:'Fast Respond',
        Des: "Working with Corp-Digital was a seamless experience from start to finish. Their team took the time to understand our business goals and challenges, and they delivered a solution that addressed our needs perfectly. Their professionalism, expertise, and dedication to customer satisfaction were evident throughout the project. We look forward to working with Corp-Digital on future initiatives.",
        Name: 'Bohdan Maksym',
        sub:'Monprofit Director',
    },
    {
        id: '04',
        tImg:tImg4,
        Title:'Amazing services',
        Des: "The team at Corp-Digital surpassed our expectations. Their meticulous project management and technical prowess were exceptional. They closely collaborated with us, ensuring a that not only met but exceeded our needs. We are thrilled with the outcome.",
        Name: 'Anatoliy Vasyl',
        sub:'Director of Marketing',
    }
]

const Testimonial = () => {

    return (

        <section className="review_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>

        </section>
    );
}

export default Testimonial;