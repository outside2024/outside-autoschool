import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import BranchesGalleryStyles from '@/components/BranchesGallery/BranchesGallery.styles';
import useWindowSize from '@/hooks/useWindowSize';
import Button from '../Button';

function getSize(width) {
  if (width < 1025) return 5;

  if (width >= 1025) return 8;
  return 8;
}

const BranchesGallery = ({ data }) => {
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
          <h2 className="typoColorBlack gap typoTitleSecondary">{t('branches.title-gallery')}</h2>

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
            {data.imageGallery.map((card) => (
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
            {data.imageGallery.map((card) => (
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

BranchesGallery.propTypes = {
  data: PropTypes.shape({
    imageGallery: PropTypes.arrayOf(
      PropTypes.shape({
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};
