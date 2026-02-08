import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";


// Remove the interface, and rely on prop destructuring instead
export default function LogoCarousel({
  logos,
  title,
  autoPlayInterval = 3000,
  itemsToShow = { base: 2, sm: 3, md: 4, lg: 6 },
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Calculate visible items based on screen size
  const getVisibleItems = () => {
    if (typeof window === "undefined") return itemsToShow.base;

    const width = window.innerWidth;
    if (width >= 1024) return itemsToShow.lg;
    if (width >= 768) return itemsToShow.md;
    if (width >= 640) return itemsToShow.sm;
    return itemsToShow.base;
  };

  const [visibleItems, setVisibleItems] = useState(itemsToShow.base);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, autoPlayInterval, logos.length, visibleItems]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const goToPrevious = () => {
  setCurrentIndex((prevIndex) =>
    (prevIndex - 1 + logos.length) % logos.length
  );
};
const totalSlides = Math.ceil(logos.length / visibleItems);

  return (
    <div className="logo-carousel-container">
      <div className="logo-carousel-inner">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="logo-carousel-title"
        >
          {title}
        </motion.h3>

        <div
          className="logo-carousel-relative-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="logo-carousel-nav-button prev-button"
            aria-label="Previous"
          >
            <FaChevronLeft className="logo-carousel-nav-icon" />
          </button>

          <button
            onClick={goToNext}
            className="logo-carousel-nav-button next-button"
            aria-label="Next"
          >
            <FaChevronRight className="logo-carousel-nav-icon" />
          </button>

          {/* Carousel container */}
          <div ref={containerRef} className="logo-carousel-overflow-container">
            <motion.div
              className="logo-carousel-flex-container"
              initial={false}
              animate={{
                x: `-${(currentIndex * 100) / visibleItems}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="logo-carousel-item"
                  style={{ width: `${100 / visibleItems}%` }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="logo-carousel-item-inner">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.name}
                      width={120}
                      height={80}
                      className="logo-carousel-image"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="logo-carousel-dots-container">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`logo-carousel-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}