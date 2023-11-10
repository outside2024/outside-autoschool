import styled from 'styled-components';
import { mobileBreakpoint } from '@/global/constants/contants';

export const StyledDiscount = styled('div')`
  padding-top: 56px;
  padding-bottom: 51px;

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .discount {
    &Container {
      display: flex;
      gap: 69px;

      @media only screen and (max-width: 1400px) {
        flex-direction: column;
        gap: 24px;
      }
    }

    &Title {
      text-transform: uppercase;
    }

    &Description {
      padding-top: 8px;
      max-width: 344px;

      @media only screen and (max-width: 1400px) {
        max-width: 100%;
      }
    }

    &Image {
      object-fit: cover;

      @media only screen and (max-width: 625px) {
        width: 212px;
        height: 283px;
      }
    }

    &Card {
      &Title {
        max-width: 300px;
        padding-top: 24px;
        padding-bottom: 16px;
        height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        @media only screen and (max-width: ${mobileBreakpoint}) {
          max-width: 200px;
          height: 70px;
        }
      }

      &Subtitle {
        max-width: 300px;
        @media only screen and (max-width: ${mobileBreakpoint}) {
          max-width: 200px;
        }
      }
    }
  }

  .descriptionContainer {
    width: 344px;
    flex-shrink: 0;

    @media only screen and (max-width: 1400px) {
      width: 100%;
    }
  }

  .swiperWrapper {
    width: 100%;
    max-width: 100%;
    max-height: 100vh;
    min-height: 0;
    min-width: 0;
  }

  .swiperContainer {
    padding-bottom: 55px;
    margin-right: -100px;

    @media only screen and (max-width: 1024px) {
      margin-right: -36px;
    }

    @media only screen and (max-width: ${mobileBreakpoint}) {
      margin-right: -16px;
      padding-bottom: 24px;
    }
  }

  .swiperSlide {
    overflow-x: hidden;
    @media only screen and (max-width: ${mobileBreakpoint}) {
      width: 212px;
    }

    width: fit-content;

    & div {
      width: fit-content;
    }
  }
`;
