import styled from 'styled-components';
import { text14Bold, text14Semibold, text20Bold } from '@/styles/textStyles';

export const StyledAboutUs = styled('div')`
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 720px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .swiperContainer {
    padding-top: 24px;
    max-width: 1240px;
  }

  .swiperSlide {
    display: flex;
    justify-content: center;
  }

  .swiper-wrapper {
  }

  .about {
    &Image {
      @media only screen and (max-width: 720px) {
        width: 136px;
        height: 188px;
      }
    }

    &Name {
      ${text20Bold};
      font-weight: 900;
      padding-top: 18px;
      padding-bottom: 12px;

      @media only screen and (max-width: 720px) {
        ${text14Bold};
        padding-top: 4px;
        padding-bottom: 4px;
      }
    }

    &Text {
      text-transform: capitalize;
      ${text14Semibold};
      padding-top: 4px;
    }
  }
`;

export default StyledAboutUs;
