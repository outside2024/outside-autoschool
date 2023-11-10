import styled from 'styled-components';
import {
  tabletStartBreakpoint,
  tabletBreakpoint,
  desktopStartBreakpoint,
} from '@/global/constants/contants';

const CardBlogStyles = styled.li`
  background-color: ${({ theme }) => theme.colors.bg.white};
  width: 100%;
  padding: 16px;
  padding-right: 0;
  border-top: solid 1px #76c045;
  padding-left: 0;

  @media only screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
    width: calc(100% / 2);
    padding-left: 16px;
  }

  @media only screen and (min-width: ${desktopStartBreakpoint}) {
    width: calc(100% / 3);
    padding: 34px;
    padding-left: 0;
  }

  .gap-card {
    margin-bottom: 8px;
  }

  .border {
    border-right: solid 1px #76c045;
    padding-bottom: 24px;
    padding-right: 34px;

    @media only screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      min-height: 180px;
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      min-height: 250px;
    }
  }

  .eclipse {
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .eclipse-text {
    -webkit-line-clamp: 10;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default CardBlogStyles;
