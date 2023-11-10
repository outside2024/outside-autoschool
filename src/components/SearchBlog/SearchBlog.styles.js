import styled from 'styled-components';
import { desktopStartBreakpoint, tabletStartBreakpoint } from '@/global/constants/contants';

const SearchBlogStyles = styled.div`
  .search-container {
    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      position: relative;
      display: block;
      position: sticky;
      top: 100px;
      height: fit-content;
      gap: 16px;
    }
  }

  .desktop-container {
    display: none;
    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      display: block;
    }
  }

  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }

  .popular-list {
    width: 186px;
    margin-left: 16px;
  }

  .block-article {
    position: absolute;
    top: 22px;
    z-index: 2;
    padding: 16px;
    list-style: none;
    box-sizing: border-box;
    width: 304px;
    height: auto;
    min-height: 100px;
    background-color: ${({ theme }) => theme.colors.bg.white};
    border: 1px solid #76c045;

    @media only screen and (max-width: ${tabletStartBreakpoint}) {
      width: 95%;
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      right: 0;
    }
  }

  .eclipse {
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default SearchBlogStyles;
