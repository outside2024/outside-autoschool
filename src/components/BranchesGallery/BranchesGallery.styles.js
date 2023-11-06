import styled from 'styled-components';
import {
  tabletStartBreakpoint,
  tabletBreakpoint,
  desktopStartBreakpoint,
  mobileBreakpoint,
} from '../../global/constants/contants';

const BranchesGalleryStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding: 40px 0;

  .branches-images {
    width: 200px;
    object-fit: cover;
    height: 150px;

    @media only screen and (min-width: 400px) and (max-width: ${mobileBreakpoint}) {
      height: 200px;
    }

    @media only screen and (min-width: 501px) and (max-width: ${mobileBreakpoint}) {
      height: 250px;
    }

    @media only screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      width: 482px;
      height: 313px;
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      width: 820px;
      height: 557px;
    }
  }

  .gap {
    margin-bottom: 24px;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 24px;

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      font-size: 48px;
    }
  }

  .button-flex-container {
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: ${tabletStartBreakpoint}) {
      gap: 16px;
      justify-content: start;
    }
  }

  .branches-images-small {
    width: 100%;
    object-fit: cover;
    height: 50px;

    @media only screen and (min-width: 400px) and (max-width: ${500}) {
      height: 70px;
    }

    @media only screen and (min-width: 501px) and (max-width: ${mobileBreakpoint}) {
      height: 85px;
    }

    @media only screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      height: 100px;
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      height: 130px;
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 100%;
    width: 100%;
  }

  .mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
`;

export default BranchesGalleryStyles;
