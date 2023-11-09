import {useEffect, useState} from "react";
import {StyledDiscount} from "@/components/Discount/Discount.styled";
import getDiscountData from "@/pages/api/getDiscountData";
import {useTranslation} from "next-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import {aboutUsPhotoSlider} from "@/components/AboutUs/data";
import Image from "next/image";


const Discount = () => {
  const { t } = useTranslation();
  const [discounts, setDiscounts] = useState([]);

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getDiscountData().then(data => setDiscounts(data));
  }, []);

  console.log({discounts})
  return (
    <StyledDiscount className="contentContainer">
      <div className="contentWrapper discountContainer">
        <div>
          <h2 className="typoColorBlack typoTitleSecondary discountTitle">{t('discount.title')}</h2>
          <div className="typoColorBlack typoSubtitle discountDescription">
            {t('discount.description')}
          </div>
        </div>
        <div className="swiperContainer">
          <Swiper
           // slidesPerView="auto"
            spaceBetween={48}
            breakpoints={{
              // 0: { slidesPerView: 2, spaceBetween: 16 },
              // 500: { slidesPerView: 3, spaceBetween: 16 },
              // 1150: { slidesPerView: 4, spaceBetween: 16 },
              1440: { slidesPerView: 3, spaceBetween: 48 },
              1980: { slidesPerView: 7, spaceBetween: 24 },
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
                    src={discount.attributes.image.data.attributes.url}
                    width={discount.attributes.image.data.attributes.width}
                    height={discount.attributes.image.data.attributes.width}
                    quality={85}
                    alt={discount.attributes.image.data.name}
                    className="discountImage"
                    priority
                  />
                  <div className="discountCardTitle typoDiscountCardTitle">{discount.attributes.title}</div>
                  <div className="discountCardSubtitle typoDiscountCardSubtitle">{discount.attributes.subtitle}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>


      </div>
    </StyledDiscount>
  );
};

export default Discount;
