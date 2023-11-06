import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';

import BranchesGalleryStyles from '@/components/BranchesGallery/BranchesGallery.styles';
import useWindowSize from '@/hooks/useWindowSize';
import Button from '../Button';

function getSize(width) {
  if (width < 1025) return 5;

  if (width >= 1025) return 8;
  return 8;
}

const data = [
  {
    photo: '/images/branches/img1.jpeg',
    name: 'img1',
  },
  {
    photo: '/images/branches/img2.jpeg',
    name: 'img2',
  },
  {
    photo: '/images/branches/img3.jpeg',
    name: 'img3',
  },
  {
    photo: '/images/branches/img4.jpeg',
    name: 'img4',
  },
  {
    photo: '/images/branches/img5.jpeg',
    name: 'img5',
  },
  {
    photo: '/images/branches/img6.jpeg',
    name: 'img6',
  },
  {
    photo: '/images/branches/img7.jpeg',
    name: 'img7',
  },
  {
    photo: '/images/branches/img8.jpeg',
    name: 'img8',
  },
  {
    photo: '/images/branches/img9.jpeg',
    name: 'img9',
  },
  {
    photo: '/images/branches/img10.jpeg',
    name: 'img10',
  },
];
const BranchesGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const { t } = useTranslation();
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    getSize(windowWidth);
  }, [windowWidth]);

  return (
    <BranchesGalleryStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack gap typoTitleSecondary">{t('branches.title')}</h2>

          <Swiper
            onSwiper={setSwiperRef}
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            {data.map((card) => (
              <SwiperSlide key={uuidv4()}>
                <Image
                  src={card.photo}
                  width={482}
                  height={500}
                  quality={85}
                  alt={card.name}
                  className="branches-images"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={getSize(windowWidth)}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {data.map((card) => (
              <SwiperSlide key={uuidv4()}>
                <Image
                  src={card.photo}
                  width={148}
                  height={150}
                  quality={85}
                  alt={card.name}
                  className="branches-images-small"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-flex-container">
            <Button
              btnType="secondary"
              contentType="icon"
              btnWidth={40}
              btnHeight={32}
              content="icon-angle-down"
              onBtnClick={() => swiperRef.slidePrev()}
              iconAngle={90}
            />
            <Button
              btnType="secondary"
              contentType="icon"
              btnWidth={40}
              btnHeight={32}
              content="icon-angle-down"
              onBtnClick={() => swiperRef.slideNext()}
              iconAngle={270}
            />
          </div>
        </div>
      </div>
    </BranchesGalleryStyles>
  );
};

export default BranchesGallery;
