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
      image: "/img/youtube.gif",
      title: "Откройте мир без ограничений!",
      description: "С нашим VPN вы получите доступ к YouTube, социальным сетям и любимым сервисам в любое время, где бы вы ни находились. Наслаждайтесь интернетом без блокировок!",
    },
    {
      image: "/img/star.gif",
      title: "Оплата в Telegram Stars!",
      description: "Оформление подписки стало еще проще: выберите удобный тариф и оплатите его прямо через Telegram. Быстро, безопасно и без лишних сложностей. Начните пользоваться нашим сервисом уже сегодня!",
    },
    {
      image: "/img/ezgif-6-ed19dc7229.gif",
      title: "Подключение за минуту!",
      description: "VPN-сервис с минимальными настройками. Выберите план и активируйте доступ через Telegram. Оплата принимается через Telegram Stars — это быстро и надежно.",
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
              <div className="wrapper_slider" style={{backgroundImage: `url(${slide.image})`}}>
              {/* <img src={slide.image} alt={slide.title} /> */}
              </div>
             
              <h2 className="slider_title">{slide.title}</h2>
              <div style={{padding: "0px 15px"}}>
              <p className="slider_desc" style={{fontSize: "8spx"}}>{slide.description}</p>
              </div>
              
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

    </div>
  );
};

export default WelcomeSlider;
