import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'swiper/css';
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { StyledPrices } from './Prices.styled';
import Button, { ButtonContentTypes, ButtonTypes, IconColors } from '../Button/Button';
import { CurrentCityContext } from '@/layouts/RootLayout/RootLayout';
import { categoryTerms } from './constants';
import useWindowSize from '@/hooks/useWindowSize';
import SliderNavBar from '../SliderNavBar';
import {scrollTo} from "@/global/helpers/helpers";

const Prices = ({ prices, city }) => {
  const { t } = useTranslation();
  const widowSize = useWindowSize();
  const [isOpenSlider, setIsOpenSlider] = useState(false);
  const [firstSlides, setFirstSlides] = useState([]);
  // const [isData, setIsData] = useState([]);
  const { currentCity } = useContext(CurrentCityContext);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prices && city && prices[city]) {
      setFirstSlides([...prices[city]].slice(0, 3));
      // setIsData(true);
    } else if (prices && currentCity && prices[currentCity]) {
      setFirstSlides([...prices[currentCity]].slice(0, 3));
      // setIsData(true);
    } else {
      setFirstSlides([]);
      // setIsData(false);
    }
  }, [prices, city, currentCity]);

  return (
    // eslint-disable-next-line
    <>
      {((city && prices[city]) || prices[currentCity]) && (
        <StyledPrices className="contentContainer">
          <div className="contentWrapper pricesContent">
            <div className="titleWrapper">
              <div className="titleBlock">
                <h3 className="typoColorWhite typoTitleSecondary pricesTitleText">
                  {t('prices.title')}
                </h3>{' '}
                {isOpenSlider && widowSize.width > 767 && (
                  <Button
                    btnType={ButtonTypes.SECONDARY}
                    contentType={ButtonContentTypes.ICON}
                    iconColor={IconColors.LIGHT}
                    iconSize={36}
                    btnWidth={36}
                    content="icon-close"
                    onBtnClick={() => {
                      setIsOpenSlider(false);
                    }}
                  />
                )}
              </div>
              {((!isOpenSlider && widowSize.width > 767) || widowSize.width < 768) && (
                <p className="typoColorWhite typoPricesDescription pricesTitleText">
                  {t('prices.subtitle')}
                </p>
              )}
            </div>
            {!isOpenSlider && widowSize.width > 767 && (
              <div className="cardsWrapper">
                {firstSlides.length > 0 &&
                  firstSlides.map((el, index) => (
                    <div
                      key={uuidv4()}
                      className={`${
                        (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                          ? 'centerCard'
                          : 'categoryCard'
                      }`}
                    >
                      <div>
                        <p className="typoPricesCardTitle typoColorBlack cardTitle">
                          {t('prices.categoryCard.category')}
                          {el.categoryType}
                        </p>
                        <p className="typoDiscountCardSubtitle typoColorBlack">
                          {t('prices.categoryCard.theoryPart')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoTitlePrimary typoColorBlack'
                              : 'typoPricesCardPrice typoColorBlack'
                          }
                        >
                          {el.categoryPrice}
                          {`${String.fromCharCode(8372)}`}
                        </p>
                        <p className="typoDiscountCardSubtitle typoColorBlack">
                          {t('prices.categoryCard.practicalPart')}
                        </p>
                        <p className="typoPricesCardPerHour typoColorBlack pricePerHour">
                          {el?.pricePerHour
                            ? el?.pricePerHour
                                .replace('/', `${String.fromCharCode(8372)}/`)
                                .replace('h', t('prices.categoryCard.hour'))
                                .replace('min', t('prices.categoryCard.min'))
                            : ''}
                        </p>
                      </div>
                      <div className="notesWrapper">
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.theoryTerm')}
                          {categoryTerms[el.categoryType].theoryTerm}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.practiceTerm')}
                          {categoryTerms[el.categoryType].practiceTerm}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.baseCourse')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.medicalCourse')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.insuranceCourse')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.videoCourse')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.registration')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.documentsPreparing')}
                        </p>
                        <p
                          className={
                            (firstSlides.length === 1 || index === 1) && widowSize.width > 1025
                              ? 'typoDiscountCardSubtitle typoColorBlack'
                              : 'typoPricesCardNotes typoColorBlack'
                          }
                        >
                          {t('prices.categoryCard.support')}
                        </p>
                      </div>
                      <Button
                        btnType={ButtonTypes.PRIMARY}
                        contentType={ButtonContentTypes.TEXT}
                        content={t('prices.categoryCard.btn')}
                        onBtnClick={() => {
                          scrollTo(document, 'form');
                        }}
                      />
                    </div>
                  ))}
              </div>
            )}
            {!isOpenSlider && widowSize.width > 767 && (
              <div className="bottomWrapper">
                <p className="typoColorWhite typoPricesSubtitle pricesBottomText">
                  {t('prices.description')}
                </p>
                <div className="btnWrapper">
                  <Button
                    btnType={ButtonTypes.SECONDARY}
                    contentType={ButtonContentTypes.TEXT}
                    content={t('prices.knowMore')}
                    onBtnClick={() => {
                      setIsOpenSlider(true);
                    }}
                  />
                </div>
              </div>
            )}
            {(isOpenSlider || widowSize.width < 768) && (
              <div className="swiperWrapper">
                <Swiper
                  className="swiperContainer"
                  slidesPerView="auto"
                  updateOnWindowResize
                  observer
                  centeredSlides={prices?.[city || currentCity]?.length === 1}
                  breakpoints={{
                    0: { spaceBetween: 16 },
                    1025: { spaceBetween: 20 },
                    1900: { slidesPerView: 4 },
                  }}
                  speed={400}
                  onSwiper={setSwiper}
                  onSlideChange={(_swiper) => {
                    setActiveIndex(_swiper.activeIndex);
                  }}
                >
                  {prices?.[city || currentCity]?.map((el) => (
                    <SwiperSlide key={uuidv4()} className="swiperSlide">
                      <div className="categoryCard">
                        <div>
                          <p className="typoPricesCardTitle typoColorBlack cardTitle">
                            {t('prices.categoryCard.category')}
                            {el.categoryType}
                          </p>
                          <p className="typoDiscountCardSubtitle typoColorBlack">
                            {t('prices.categoryCard.theoryPart')}
                          </p>
                          <p className="typoPricesCardPrice typoColorBlack">
                            {el.categoryPrice}
                            {`${String.fromCharCode(8372)}`}
                          </p>
                          <p className="typoDiscountCardSubtitle typoColorBlack">
                            {t('prices.categoryCard.practicalPart')}
                          </p>

                          <p className="typoPricesCardPerHour typoColorBlack pricePerHour">
                            {el?.pricePerHour
                              ? el?.pricePerHour
                                  .replace('/', `${String.fromCharCode(8372)}/`)
                                  .replace('h', t('prices.categoryCard.hour'))
                                  .replace('min', t('prices.categoryCard.min'))
                              : ''}
                          </p>
                        </div>
                        <div className="notesWrapper">
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.theoryTerm')}
                            {categoryTerms[el.categoryType].theoryTerm}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.practiceTerm')}
                            {categoryTerms[el.categoryType].practiceTerm}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.baseCourse')}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.medicalCourse')}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.insuranceCourse')}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.videoCourse')}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.registration')}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.documentsPreparing')}
                          </p>
                          <p className="typoPricesCardNotes typoColorBlack">
                            {t('prices.categoryCard.support')}
                          </p>
                        </div>
                        <Button
                          btnType={ButtonTypes.PRIMARY}
                          contentType={ButtonContentTypes.TEXT}
                          content={t('prices.categoryCard.btn')}
                          onBtnClick={() => {
                            scrollTo(document, 'form');
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <SliderNavBar
                  activeIndex={activeIndex}
                  swiper={swiper}
                  slidesNumber={prices?.[city || currentCity]?.length}
                  maxWidth="100%"
                  isLight
                />
              </div>
            )}
          </div>
        </StyledPrices>
      )}
    </>
  );
};

export default Prices;

Prices.propTypes = {
  city: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  prices: PropTypes.any,
};

Prices.defaultProps = {
  city: null,
  prices: null,
};
