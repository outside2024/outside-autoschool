import { useState } from 'react';
import 'swiper/css';
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { StyledDiscount } from '@/components/Discount/Discount.styled';
import SliderNavBar from '@/components/SliderNavBar';
import { withStrapi } from '@/global/helpers/helpers';

const Discount = ({ discounts }) => {
  const { t } = useTranslation();

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledDiscount className="contentContainer">
      <div className="contentWrapper discountContainer">
        <div className="descriptionContainer">
          <h2 className="typoColorBlack typoTitleSecondary discountTitle">{t('discount.title')}</h2>
          <div className="typoColorBlack typoSubtitle discountDescription">
            {t('discount.description')}
          </div>
        </div>
        <div className="swiperWrapper">
          <Swiper
            className="swiperContainer"
            slidesPerView="auto"
            updateOnWindowResize
            observer
            breakpoints={{
              0: { spaceBetween: 16 },
              1025: { spaceBetween: 48 },
              1900: { slidesPerView: 4 },
            }}
            speed={400}
            onSwiper={setSwiper}
            onSlideChange={(_swiper) => {
              setActiveIndex(_swiper.activeIndex);
            }}
          >
            {discounts.map((discount) => (
              <SwiperSlide key={uuidv4()} className="swiperSlide">
                <div>
                  <Image
                    src={withStrapi(discount.attributes.image.data.attributes.url)}
                    width={discount.attributes.image.data.attributes.width}
                    height={discount.attributes.image.data.attributes.height}
                    quality={85}
                    alt="discount"
                    className="discountImage"
                  />
                  <div className="discountCardTitle typoDiscountCardTitle">
                    {discount.attributes.title}
                  </div>
                  <div className="discountCardSubtitle typoDiscountCardSubtitle">
                    {discount.attributes.subtitle}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNavBar
            activeIndex={activeIndex}
            swiper={swiper}
            slidesNumber={discounts.length}
            maxWidth="100%"
          />
        </div>
      </div>
    </StyledDiscount>
  );
};

Discount.propTypes = {
  discounts: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        image: PropTypes.shape({
          data: PropTypes.shape({
            attributes: PropTypes.shape({
              width: PropTypes.number.isRequired,
              height: PropTypes.number.isRequired,
              url: PropTypes.string.isRequired,
            }),
          }),
        }),
      }),
    }),
  ).isRequired,
};

export default Discount;
