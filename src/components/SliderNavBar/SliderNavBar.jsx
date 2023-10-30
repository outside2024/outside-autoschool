import PropTypes from 'prop-types';
import SliderNavBarStyles from '@/components/SliderNavBar/SliderNavBar.styled';

const SliderNavBar = ({activeIndex = 0, swiper}) => {
  const slidesNumber = swiper?.slides?.length || 0;
  const slidesPerView = swiper?.params?.slidesPerView || 0;

  return (
    <SliderNavBarStyles
      width={100 * (activeIndex + 1) / (slidesNumber - (slidesPerView - 1))}
    >
      <div className="progressBar"/>
      <div className="buttonsContainer">
        <div
          className="button prev"
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <i className="icon-angle-down iconLeft"/>
        </div>
        <div
          className="button next"
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <i className="icon-angle-down iconRight"/>
        </div>
      </div>
    </SliderNavBarStyles>
  )
};

export default SliderNavBar;

SliderNavBar.propTypes = {
  activeIndex: PropTypes.number,
  swiper: PropTypes.shape({}),
};

SliderNavBar.defaultProps = {
  activeIndex: 0,
  swiper: {},
};
