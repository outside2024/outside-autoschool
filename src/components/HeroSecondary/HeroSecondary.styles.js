import styled from 'styled-components';
import {
  mobileBreakpoint,
  tabletStartBreakpoint,
  desktopStartBreakpoint,
  desktopBreakpoint,
  desktopBigBreakpoint,
} from '../../global/constants/contants';
import { tabletBreakpoint } from '@/global/constants/contants';

const HeroSecondaryStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding-bottom: 24px;

  @media screen and (max-width: ${tabletBreakpoint}) {
    padding-top: 16px;
  }

  .wrapper-exam {
    @media screen and (min-width: ${desktopStartBreakpoint}) {
      padding-bottom: 81px;
    }
  }

  .wrapper {
    display: flex;
    gap: 30px;

    @media screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      gap: 24px;
    }

    @media screen and (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .left-container {
    padding: 0 16px;

    @media screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      padding: 0 0 0 64px;
      width: 100%;
    }

    @media screen and (min-width: ${desktopStartBreakpoint}) {
      padding: 54px 100px;
      width: 100%;
    }
  }

  .gap {
    margin-bottom: 8px;

    @media screen and (min-width: ${desktopStartBreakpoint}) {
      margin-bottom: 48px;
    }
  }

  .gapSecondary {
    margin-bottom: 64px;
  }
  .container {
    max-width: 1920px;
  }

  .background {
    background-image: url('/images/exam/bg.png');
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 1920px;
  }

  .icon-link {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};

    @media screen and (min-width: ${desktopStartBreakpoint}) {
      transform: rotate(-45deg);
    }
  }

  .icon-save {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .link {
    display: flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .heroSecondaryImage {
    object-fit: cover;
    width: auto;
    height: 180px;

    @media screen and (min-width: 600px) and (max-width: 800px) {
      height: 220px;
    }

    @media screen and (min-width: 801px) and (max-width: ${tabletBreakpoint}) {
      height: 250px;
    }

    @media screen and (min-width: ${desktopStartBreakpoint}) and (max-width: ${desktopBreakpoint}) {
      height: 350px;
    }

    @media screen and (min-width: ${desktopBigBreakpoint}) {
      width: 852px;
      height: 479px;
    }
  }
`;

export default HeroSecondaryStyles;
