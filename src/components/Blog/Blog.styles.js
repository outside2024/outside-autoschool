import styled from 'styled-components';
import {
  tabletStartBreakpoint,
  tabletBreakpoint,
  desktopStartBreakpoint,
} from '@/global/constants/contants';

const BlogStyles = styled.div`
  padding-top: 24px;

  @media only screen and (min-width: ${desktopStartBreakpoint}) {
    padding-top: 56px;
  }

  .flex-container {
    position: relative;
    gap: 50px;
    display: flex;
    justify-content: space-between;
  }

  .container-button {
    padding-bottom: 30px;
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

  .desktop-container {
    display: none;

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      display: block;
    }
  }

  .title-container {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: ${tabletStartBreakpoint}) {
      flex-direction: column-reverse;
    }
  }

  .tablet-container {
    height: 50px;
    width: 300px;
    display: block;
    @media only screen and (max-width: ${tabletStartBreakpoint}) {
      width: 100%;
    }
    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      display: none;
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
