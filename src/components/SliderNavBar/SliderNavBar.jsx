import PropTypes from 'prop-types';
import SliderNavBarStyles from '@/components/SliderNavBar/SliderNavBar.styled';
import Button from '@/components/Button';

const SliderNavBar = ({ activeIndex = 0, swiper }) => {
  const slidesNumber = swiper?.slides?.length || 0;
  const slidesPerView = swiper?.params?.slidesPerView || 0;

  return (
    <SliderNavBarStyles
      $width={100 / (slidesNumber - (slidesPerView - 1))}
      $left={(100 * activeIndex) / (slidesNumber - (slidesPerView - 1))}
    >
      <div className="progressBar" />
      <div className="buttonsContainer">
        <Button
          btnType="secondary"
          contentType="icon"
          btnWidth={40}
          btnHeight={32}
          content="icon-angle-down"
          onBtnClick={() => {
            swiper.slidePrev();
          }}
          iconAngle={90}
        />
        <Button
          btnType="secondary"
          contentType="icon"
          btnWidth={40}
          btnHeight={32}
          content="icon-angle-down"
          onBtnClick={() => {
            swiper.slideNext();
          }}
          iconAngle={270}
        />
      </div>
    </SliderNavBarStyles>
  );
};

export default SliderNavBar;

SliderNavBar.propTypes = {
  activeIndex: PropTypes.number,
  swiper: PropTypes.shape({
    params: PropTypes.shape({ slidesPerView: PropTypes.number }),
    spaceBetween: PropTypes.number,
    slidePrev: PropTypes.func,
    slideNext: PropTypes.func,
    slides: PropTypes.arrayOf({}),
  }),
};

SliderNavBar.defaultProps = {
  activeIndex: 0,
  swiper: PropTypes.shape({
    params: { slidesPerView: 0 },
    spaceBetween: 0,
    slidePrev: () => {},
    slideNext: () => {},
    slides: [],
  }),
};
