import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import StyledAboutUs from '@/components/AboutUs/AboutUs.styles';
import { aboutUsPhotoSlider } from '@/components/AboutUs/data';
import SliderNavBar from '@/components/SliderNavBar';

const AboutUs = () => {
  const { t } = useTranslation();
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledAboutUs className="contentContainer">
      <div className="contentWrapper">
        <h2 className="typoColorBlack typoTitleSecondary">{t('aboutUs.title')}</h2>
        <h3 className="typoColorBlack typoSubtitle">{t('aboutUs.subtitle')}</h3>
        <div className="swiperContainer">
          <Swiper
            slidesPerView="auto"
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 16 },
              1000: { slidesPerView: 3, spaceBetween: 24 },
              1440: { slidesPerView: 5, spaceBetween: 24 },
            }}
            onSwiper={setSwiper}
            onSlideChange={(_swiper) => {
              setActiveIndex(_swiper.activeIndex);
            }}
          >
            {aboutUsPhotoSlider.map((card) => (
              <SwiperSlide key={card.id} className="swiperSlide">
                <div>
                  <Image
                    src={card.photo}
                    width={229}
                    height={304}
                    quality={85}
                    alt="teacher photo"
                    className="aboutImage"
                    priority
                  />
                  <div className="aboutName">{t(`${card.name}`)}</div>
                  <div className="aboutText">{t(`${card.position}`)}</div>
                  <div className="aboutText">{card.experience}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNavBar activeIndex={activeIndex} swiper={swiper} />
        </div>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;
