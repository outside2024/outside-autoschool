import PropTypes from 'prop-types';
import SliderNavBarStyles from "@/components/SliderNavBar/SliderNavBar.styled";

const SliderNavBar = ({activeIndex = 0, swiper}) => (
  <SliderNavBarStyles
    activeindex={activeIndex}
    slidesnumber={swiper?.slides?.length || 0}
    slidesperview={swiper?.params?.slidesPerView || 0}
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
);

export default SliderNavBar;

SliderNavBar.propTypes = {
  activeIndex: PropTypes.number,
  swiper: PropTypes.shape({}),
}

SliderNavBar.defaultProps = {
  activeIndex: 0,
  swiper: {}
}