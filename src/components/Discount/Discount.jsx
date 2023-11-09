import { useState } from 'react';
import 'swiper/css';
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import PropTypes from 'prop-types';
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
            spaceBetween={48}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 16 },
              500: { slidesPerView: 2, spaceBetween: 16 },
              1200: { slidesPerView: 3, spaceBetween: 48 },
              1600: { slidesPerView: 3.5, spaceBetween: 48 },
              1920: { slidesPerView: 4, spaceBetween: 48 },
            }}
            speed={400}
            onSwiper={setSwiper}
            onSlideChange={(_swiper) => {
              setActiveIndex(_swiper.activeIndex);
            }}
          >
            {discounts.map((discount) => (
              <SwiperSlide key={discount.id} className="swiperSlide">
                <div>
                  <Image
                    src={withStrapi(discount.attributes.image.data.attributes.url)}
                    width={discount.attributes.image.data.attributes.width}
                    height={discount.attributes.image.data.attributes.height}
                    quality={85}
                    alt="discount"
                    className="discountImage"
                    priority
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
