import styled from 'styled-components';
import { mobileBreakpoint, tabletStartBreakpoint } from '../../global/constants/contants';
import { tabletBreakpoint } from '@/global/constants/contants';

const HeroDescriptionStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding-top: 57px;

  @media screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
    padding-top: 24px;
  }

  @media screen and (max-width: ${mobileBreakpoint}) {
    padding-top: 24px;
  }

  .width {
    @media screen and (min-width: ${tabletStartBreakpoint}) {
      width: 50%;
    }
  }

  .flex-container {
    display: flex;
    gap: 24px;

    @media screen and (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
    }
  }
`;

export default HeroDescriptionStyles;
