import styled from 'styled-components';
import { mobileBreakpoint } from '@/global/constants/contants';

export const StyledAwards = styled('div')`
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: 24px;
  }

  .award {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
    }

    &Container {
      display: flex;
      gap: 24px;
      @media only screen and (max-width: ${mobileBreakpoint}) {
        padding-top: 24px;
      }

      @media only screen and (min-width: 1600px) {
        gap: 150px;
      }
    }

    &Description {
      padding-top: 16px;
      @media only screen and (max-width: ${mobileBreakpoint}) {
        padding-top: 8px;
      }
    }

    &Img {
      @media only screen and (max-width: 1350px) {
        width: 229px;
        height: 304px;
      }

      @media only screen and (max-width: 500px) {
        width: 136px;
        height: 168px;
      }
    }
  }
`;
