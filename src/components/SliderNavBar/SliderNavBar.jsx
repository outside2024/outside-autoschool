import PropTypes from 'prop-types';
import SliderNavBarStyles from "@/components/SliderNavBar/SliderNavBar.styled";

const SliderNavBar = ({activeIndex = 0, swiper}) => {
  return (
    <SliderNavBarStyles
      activeIndex={activeIndex}
      slidesNumber={swiper?.slides?.length || 0}
      slidesPerView={swiper?.params?.slidesPerView || 0}
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
  swiper: PropTypes.shape({
    slides: PropTypes.arrayOf(PropTypes.shape({})
    ),
    params: PropTypes.shape({
      slidesPerView: PropTypes.number.isRequired
    })
  })
}

SliderNavBar.defaultProps = {
  activeIndex: 0,
  swiper: {}
}