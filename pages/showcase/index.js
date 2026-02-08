import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header4/Header4";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Showcase() {
  const slidesRef = useRef([]);

const downloadPDF = async () => {
  const pdf = new jsPDF("landscape", "mm", "a4", true);

  for (let i = 0; i < slidesRef.current.length; i++) {
    const img = slidesRef.current[i].querySelector("img");
    if (!img) continue;

    // Convert to JPEG with compression
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const targetWidth = 1280; // resize down
    const targetHeight = (img.naturalHeight / img.naturalWidth) * targetWidth;
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    const imgData = canvas.toDataURL("image/jpeg", 0.7); // 70% quality

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const ratio = Math.min(pdfWidth / targetWidth, pdfHeight / targetHeight);

    const finalWidth = targetWidth * ratio;
    const finalHeight = targetHeight * ratio;
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, "JPEG", x, y, finalWidth, finalHeight);
  }

  pdf.save("DigitalEdgeSolutions_Profile.pdf");
};



  return (
    <>
      <Header />
      <div>
        {/* Fullpage carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          direction="vertical"
          slidesPerView={1}
          spaceBetween={0}
          mousewheel
          style={{ height: "100vh", width: "100vw" }}
        >
        {[...Array(11)].map((_, i) => (
            <SwiperSlide key={i}>
                <div
                    ref={el => (slidesRef.current[i] = el)}
                    style={{
                        height: "100vh",
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "black",
                    }}
                >
                    <img
                        src={`/images/pdf/slide${i + 1}.png`}
                        alt={`Slide ${i + 1}`}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>
            </SwiperSlide>
        ))}
          <div
            className="swiper-button-prev"
            style={{ color: "white", left: "20px" }}
          ></div>
          <div
            className="swiper-button-next"
            style={{ color: "white", right: "20px" }}
          ></div>
        </Swiper>

        {/* Download button */}
        <button
          onClick={downloadPDF}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          Download PDF
        </button>
      </div>
    </>
  );
}
