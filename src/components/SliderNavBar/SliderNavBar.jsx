import PropTypes from 'prop-types';
import SliderNavBarStyles from "@/components/SliderNavBar/SliderNavBar.styled";

const SliderNavBar = ({activeIndex = 0, swiper}) => {
  console.log(swiper)
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
        > -
        </div>
        <div
          className="button next"
          onClick={() => {
            swiper.slideNext();
          }}
        > +
        </div>
      </div>
    </SliderNavBarStyles>
  )
};

export default SliderNavBar;

SliderNavBar.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  swiper: PropTypes.shape({
    slides: PropTypes.arrayOf(
    ),
    params: PropTypes.shape({
      slidesPerView: PropTypes.number.isRequired
    })
  }).isRequired

}
