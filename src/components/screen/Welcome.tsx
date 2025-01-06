"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

type WelcomeSliderProps = {
  onSkip: () => void;
  onFinish: () => void;
};

const WelcomeSlider: React.FC<WelcomeSliderProps> = ({ onSkip, onFinish }) => {
  const slides = [
    {
      image: "/img/globus.png",
      title: "Добро пожаловать",
      description: "Откройте для себя удивительные возможности, которые мы предлагаем.",
    },
    {
      image: "/img/key.png",
      title: "Fast and Secure",
      description: "Experience top-notch security and performance.",
    },
    {
      image: "/img/globus.png",
      title: "Join Us Today",
      description: "Sign up and get started with ease.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const handleNext = () => {
    if (swiperInstance && currentSlide < slides.length - 1) {
      swiperInstance.slideTo(currentSlide + 1);
    }
  };

  return (
    <div className="welcome-slider">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperInstance} // Получаем экземпляр swiper
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} />
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons">

        {currentSlide === slides.length - 1 ? (
          <button onClick={onFinish} className="get-started-btn">
            Get Started
          </button>
        ) : (
          <button onClick={handleNext} className="next-btn">
            Next
          </button>
        )}

        {currentSlide < slides.length - 1 && (
          <button onClick={onSkip} className="skip-btn2">
            Skip
          </button>
        )}
      </div>

      <style jsx>{`
        .welcome-slider {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          background-image: url(/img/map.png);
          background-size: cover;
          background-color: #2E2E3D;
          height: 100vh;
        }
        .slide-content {
          height: 80vh;
          text-align: center;
        }
        .slide-content img {
          padding: 50px 20px;
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
          display: block;
        }
        .slide-content h2 {
          font-size: 24px;
          margin: 16px 0;
        }
        .slide-content p {
          font-size: 16px;
        }
        .buttons {
          display: flex;
          margin-top: 16px;
          justify-content: center;
          padding: 0px 80px;
          flex-direction: column;
        }
        .skip-btn,
        .get-started-btn,
        .next-btn {
          padding: 8px 15px;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          background-color: #D6A21E;
          color: white;
        }
        .skip-btn2 {
          background-color: #d6a21e00;
          padding: 0;
          margin-top:20px;
          border: none;
          cursor: pointer;
          color: #919191;
        }

        /* Пагинация Swiper */
        .swiper-pagination-bullet {
          width: 40px; /* Ширина полоски */
          height: 8px; /* Высота полоски */
          border-radius: 4px; /* Скругление углов */
          background-color: #d6a21e; /* Цвет полоски */
          opacity: 0.5; /* Прозрачность неактивной полоски */
        }

        .swiper-pagination-bullet-active {
          opacity: 1; /* Полная видимость активной полоски */
          background-color: #d6a21e; /* Цвет активной полоски */
        }

        .swiper-pagination {
          margin-top: 20px; /* Отступ между слайдами и полосками */
          display: flex;
          justify-content: center;
        }

        .swiper-pagination-bullet:not(:last-child) {
          margin-right: 8px; /* Расстояние между полосками */
        }
      `}</style>
    </div>
  );
};

export default WelcomeSlider;
