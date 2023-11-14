import styled from 'styled-components';
import {desktopBreakpoint, desktopStartBreakpoint, tabletStartBreakpoint} from '@/global/constants/contants';

const SearchBlogStyles = styled.div`
  .search-container {
    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      display: block;
      position: sticky;
      top: 100px;
      height: fit-content;
      gap: 16px;
    }
  }

  .gap-top {
    padding-top: 24px;
  }

  .desktop-container {
    display: none;
    @media only screen and (min-width: ${desktopBreakpoint}) {
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
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 186px;
    margin-left: 16px;
  }

  .block-article {
    position: absolute;
    top: 22px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 16px;
    list-style: none;
    box-sizing: border-box;
    width: 304px;
    height: auto;
    background-color: ${({ theme }) => theme.colors.bg.white};
    box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 5px 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};

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
