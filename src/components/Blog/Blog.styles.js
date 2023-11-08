import styled from 'styled-components';
import {
  tabletStartBreakpoint,
  tabletBreakpoint,
  desktopStartBreakpoint,
} from '@/global/constants/contants';

const BlogStyles = styled.div`
  .flex-container {
    position: relative;
    gap: 50px;
    display: flex;
    justify-content: space-between;
  }

  .container-button {
    padding-bottom: 30px;
  }

  .input-search {
    width: calc(100% - 12px);
    border: none;
  }
  .search {
    border-bottom: 1px solid #76c045;
  }

  .icon-search {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .search-container {
    display: none;
    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      display: block;
      position: sticky;
      top: 100px;
      height: fit-content;
      gap: 16px;
    }
  }

  .list {
    margin-top: 51px;
    list-style: none;
    width: calc(100% + 36px);
    max-width: 1653px;

    margin-top: -16px;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (min-width: ${tabletStartBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      width: calc(100% + 36px);
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      max-width: 1653px;
      width: calc(100% + 78px);

      margin-top: -34px;
    }
  }

  .gap {
    padding-bottom: 24px;
  }

  .popular-list {
    width: 186px;
    margin-left: 16px;
  }

  .list-container {
    margin-top: 51px;
    max-width: 1575px;
    overflow: hidden;
  }
`;

export default BlogStyles;
