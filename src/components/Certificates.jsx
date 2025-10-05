import { useState } from "react";

import cert1 from "../assets/images/certificates/cert1.png";
import cert2 from "../assets/images/certificates/cert2.png";
import cert3 from "../assets/images/certificates/cert3.png";
import cert4 from "../assets/images/certificates/cert4.png";
import cert5 from "../assets/images/certificates/cert5.jpg";
import cert6 from "../assets/images/certificates/cert6.jpg";
import cert7 from "../assets/images/certificates/cert7.png";
import cert8 from "../assets/images/certificates/cert8.png";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Certificates() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const certificates = [
    { src: cert1, title: "Database Fundamentals" },
    { src: cert2, title: "Networking Essentials" },
    { src: cert3, title: "UX Design Fundamentals" },
    { src: cert4, title: "Introduction to Data Science" },
    { src: cert5, title: "Enactus Egypt" },
    { src: cert6, title: "Enactus Fayoum" },
    { src: cert7, title: "Learn HTML & CSS" },
    { src: cert8, title: "Masterign OOP using C++" },
  ];

  return (
    <div
      id="Certifications"
      className="bg-[var(--bg-primary-dark)] pt-24 space-y-12 sm:space-y-24 text-center"
    >
      <div
        data-aos="fade-up"
        className="relative mx-auto mt-16 max-w-full pt-10 lg:px-8"
      >
        {/* LightEffect */}
        <div
          aria-hidden="true"
          className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(2,132,199,0.65)_50%,rgba(0,0,0,0)_100%)]"
        ></div>
        <div
          aria-hidden="true"
          className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-10 transform-gpu 
            [background:conic-gradient(from_90deg_at_50%_50%,transparent_50%,transparent_50%),radial-gradient(rgba(200,200,200,0.05)_0%,transparent_70%)] 
            md:max-w-[600px]"
        ></div>

        <div className="relative isolate">
          {/* BackgroundEffect */}
          <div className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20"
              style={{
                clipPath:
                  "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)",
              }}
            ></div>
          </div>
          {/* Info */}
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-title-dark)]">
              My Certificates
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-subtitle-dark)]">
              Here are some of my certificates that reflect my continuous
              learning journey and commitment to professional growth.
            </p>
          </div>
        </div>
      </div>
      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, EffectCoverflow]}
        className="max-w-7xl mx-auto px-4"
        data-aos="fade-up"
        breakpoints={{
          0: {
            slidesPerView: 1.3, // موبايل صغير جداً
          },
          500: {
            slidesPerView: 2, // من أول تابلت أو موبايل واسع
          },
          1024: {
            slidesPerView: 3, // من أول لابتوب وفوق
          },
        }}
      >
        {certificates.map((cert, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={cert.src}
                alt={cert.title}
                loading="lazy"
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-black/50"></div>
                <p className="relative text-white font-semibold px-4">
                  {cert.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative rounded-xl p-4 max-w-7xl w-[90%] shadow-lg">
            {/* زرار الإغلاق */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-xl sm:text-3xl font-black cursor-pointer text-red-700 hover:text-red-400 transition duration-500 hover:rotate-180 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>

            {/* الصورة */}
            <img
              loading="lazy"
              src={certificates[index].src}
              alt={certificates[index].title}
              className="max-h-[80vh] mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Certificates;
