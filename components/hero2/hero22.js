
import React, { useEffect, useState, useRef } from 'react';

import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import the default navigation styles
import dynamic from 'next/dynamic';
import circle1 from '/public/images/hero/circle_engine_1.webp';
import circle2 from '/public/images/hero/circle_engine_2.webp';
import circle3 from '/public/images/hero/circle_engine_3.webp';
import circle4 from '/public/images/hero/circle_engine_4.webp';
import shape1 from '/public/images/hero/shape_image_1.webp';
import shape2 from '/public/images/hero/shape_image_2.webp';
import shape3 from '/public/images/hero/shape_image_3.webp';
import shape4 from '/public/images/hero/shape_image_4.webp';
import Image from 'next/image';

// Use Autoplay and Navigation
SwiperCore.use([Autoplay, Navigation]);
// Inside the Hero22 component


const Hero22 = () => {
  const [banners, setBanners] = useState([]);
const swiperRef = useRef(null);
  useEffect(() => {
    async function fetchBanners() {
      const res = await fetch('/api/banners');
      const data = await res.json();
      setBanners(data.success ? data.data : []);
      console.log("Fetched banners:", data); // Log the fetched banners
      if (!data.success) {
        console.error("Failed to fetch banners:", data.error);
      }
    }
    fetchBanners();
  }, []);

  return (
    <section className="software_company_hero_section xb-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
<div
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}
>
  <Swiper
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    navigation
    loop
    style={{ width: '100%', height: '550px', overflow: 'hidden', paddingTop: '21px' }}
  >
    {banners.map((banner, idx) => (
      <SwiperSlide key={idx}>
        <a
          href={banner.URLTOCLICK || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', height: '100%' }}
        >
          <div
            style={{ height: '100%' }}
            dangerouslySetInnerHTML={{ __html: banner.EnglishHTML }}
          />
        </a>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

          </div>
          <div className="col-lg-6">
            <div className="engine_image">
              <div className="image_wrap_1">
                <Image src={circle1} alt="Engine" />
              </div>
              <div className="image_wrap_2">
                <Image src={circle2} alt="Engine" />
              </div>
              <div className="image_wrap_3">
                <Image src={circle3} alt="Engine" />
              </div>
              <div className="image_wrap_4">
                <Image src={circle4} alt="Engine" />
              </div>
            </div>

            <div className="shape_image_1">
              <Image src={shape1} alt="Engine" />
            </div>
            <div className="shape_image_2">
              <Image src={shape2} alt="Engine" />
            </div>
            <div className="shape_image_3">
              <Image src={shape3} alt="Engine" />
            </div>
            <div className="shape_image_4">
              <Image src={shape4} alt="Engine" />
            </div>
          </div>
        </div>
      </div>
      
    <style jsx>{`
      .software_company_hero_section {
        padding: 100px 0;
      }

      .software_company_hero_section .swiper {
        width: 100%;
        height: 500px;
        overflow: hidden;
        border-radius: 12px;
        background-color: #f5f5f5;
      }

      .software_company_hero_section .swiper-slide {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    </section>
    
  );
};

export default Hero22;
