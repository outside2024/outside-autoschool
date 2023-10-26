import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`${css`
  body,
  *,
  html {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Rubik', sans-serif;

    &.overflow-hidden {
      overflow: hidden;
    }
  }

  .content {
    &Container {
      width: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      position: relative;
      justify-content: center;
      align-content: center;

      &Background {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    &Wrapper {
      width: 100%;
      max-width: 1920px;
      padding-left: 150px;
      padding-right: 150px;

      @media screen and (max-width: 1080px) {
        padding-left: 64px;
        padding-right: 64px;
      }

      @media screen and (max-width: 720px) {
        padding-left: 32px;
        padding-right: 32px;
      }

      @media screen and (max-width: 560px) {
        padding-left: 16px;
        padding-right: 16px;
      }
    }
  }

  .typo {
    color: ${theme.colors.black};

    &Color {
      &Black {
        color: ${theme.colors.typo.black};
      }

      &White {
        color: ${theme.colors.typo.white};
      }

      &Grey {
        color: ${theme.colors.typo.grey};
      }
    }
    //! example of class for text
    &TitlePrimary {
      @media screen and (max-width: 720px) {
        font-size: 32px;
        line-height: 48px;
      }
    }
  }
`}
`;

export default GlobalStyle;
