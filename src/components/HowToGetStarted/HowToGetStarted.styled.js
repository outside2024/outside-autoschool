import styled from 'styled-components';
import {
  mobileBreakpoint,
  tabletBreakpoint,
  tabletStartBreakpoint,
} from '@/global/constants/contants';

const HowToGetStartedStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  width: 100%;
  padding: 56px 0;

  @media screen and (max-width: ${mobileBreakpoint}) {
    padding: 24px 0;
  }

  .flexContainer {
    display: flex;
    justify-content: space-between;
    gap: 64px;

    @media screen and (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
    }

    @media screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      gap: 48px;
    }
  }

  .list {
    list-style: none;
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 50%;

    @media screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      gap: 16px;
    }

    @media screen and (max-width: ${mobileBreakpoint}) {
      width: 100%;
      margin-top: 24px;
      gap: 16px;
    }
  }

  .flex-container-column {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 50%;

    @media screen and (max-width: ${mobileBreakpoint}) {
      gap: 10px;
      width: 100%;
      margin-top: 0;
    }
  }

  .video {
    max-width: 100%;
    border-radius: 10px;

    @media screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      height: 150px;
    }

    @media screen and (max-width: ${mobileBreakpoint}) {
      width: 100%;
    }
  }
`;

export default HowToGetStartedStyles;
