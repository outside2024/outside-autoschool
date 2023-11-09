import {useEffect, useState} from "react";
import 'swiper/css';
import {useTranslation} from "next-i18next";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import {StyledDiscount} from "@/components/Discount/Discount.styled";
import getDiscountData from "@/pages/api/getDiscountData";
import SliderNavBar from "@/components/SliderNavBar";


const Discount = () => {
  const { t } = useTranslation();
  const [discounts, setDiscounts] = useState([]);

  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getDiscountData().then(data => setDiscounts(data));
  }, []);

  return (
    <StyledDiscount className="contentContainer">
      <div className="contentWrapper discountContainer">
        <div>
          <h2 className="typoColorBlack typoTitleSecondary discountTitle">{t('discount.title')}</h2>
          <div className="typoColorBlack typoSubtitle discountDescription">
            {t('discount.description')}
          </div>
        </div>
        <div>
          <Swiper
            className="swiperContainer"
            spaceBetween={48}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 16 },
              500: { slidesPerView: 2, spaceBetween: 16 },
              1440: { slidesPerView: 3, spaceBetween: 48 },
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
                    alt={discount.attributes.image.data.name || "discount"}
                    className="discountImage"
                    priority
                  />
                  <div className="discountCardTitle typoDiscountCardTitle">{discount.attributes.title}</div>
                  <div className="discountCardSubtitle typoDiscountCardSubtitle">{discount.attributes.subtitle}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderNavBar
            activeIndex={activeIndex}
            swiper={swiper}
            slidesNumber={discounts.length}
          />
        </div>


      </div>
    </StyledDiscount>
  );
};

export default Discount;
