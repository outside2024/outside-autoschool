import { createGlobalStyle, css } from 'styled-components';
import theme from './theme';
import {
  text11Semibold,
  text12Bold,
  text12Semibold,
  text14Bold,
  text14Semibold,
  text16Semibold,
  text16bold,
  text20Bold,
  text20Semibold,
  text24Bold,
  text32Bold,
  text32Semibold,
  text36Bold,
  text40Bold,
  text54Bold,
  text60Bold,
} from './textStyles';
import {
  footerTabletBreakpoint,
  mobileBreakpoint,
  tabletBreakpoint,
} from '@/global/constants/contants';

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

  a {
    text-decoration: none;
    color: inherit;
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
      padding-left: 100px;
      padding-right: 100px;

      @media screen and (max-width: ${tabletBreakpoint}) {
        padding-left: 36px;
        padding-right: 36px;
      }

      @media screen and (max-width: ${mobileBreakpoint}) {
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
      ${text60Bold};
      @media screen and (max-width: ${tabletBreakpoint}) {
        ${text32Semibold}
      }
    }

    &TitleSecondary {
      ${text40Bold};
      @media only screen and (max-width: ${tabletBreakpoint}) {
        ${text24Bold};
      }
    }

    &TitleTertiary {
      ${text54Bold} @media screen and(max-width: ${tabletBreakpoint}) {
        ${text36Bold}
      }
      @media screen and (max-width: ${mobileBreakpoint}) {
        ${text32Bold}
      }
    }

    &TextPrimary {
      ${text20Semibold} @media screen and(max-width: ${tabletBreakpoint}) {
        ${text12Semibold}
      }
    }

    &Subtitle {
      ${text20Semibold};
      @media only screen and (max-width: ${tabletBreakpoint}) {
        ${text12Semibold};
      }
    }

    &ButtonPrimary {
      ${text20Bold};
      @media screen and (max-width: ${tabletBreakpoint}) {
        ${text12Bold};
      }
    }

    &ButtonSecondary {
      ${text14Semibold};
      @media screen and (max-width: ${tabletBreakpoint}) {
        ${text11Semibold};
      }
    }

    &HeaderLink {
      ${text16bold};
    }

    &HeaderChooseCity {
      ${text16bold};
      @media screen and (max-width: ${tabletBreakpoint}) {
        ${text16Semibold};
      }
    }

    &HeaderBranchLink {
      ${text16bold};
      @media screen and (max-width: ${tabletBreakpoint}) {
        ${text11Semibold};
      }
      @media screen and (max-width: ${mobileBreakpoint}) {
        ${text16bold};
      }
    }

    &FooterRouteLinks {
      ${text16bold};
      @media screen and (max-width: ${footerTabletBreakpoint}) {
        ${text11Semibold};
      }
      @media only screen and (max-width: ${mobileBreakpoint}) {
        ${text14Bold};
      }
    }

    &FooterNav {
      ${text20Bold};
      @media only screen and (max-width: ${footerTabletBreakpoint}) {
        ${text14Bold};
      }
    }

    &FooterRights {
      ${text14Semibold};

      @media only screen and (max-width: ${mobileBreakpoint}) {
        ${text11Semibold};
      }
    }

    &FooterSocialsText {
      ${text20Semibold};

      @media only screen and (max-width: ${mobileBreakpoint}) {
        ${text14Bold};
      }
    }

    &DiscountCardTitle {
      ${text20Bold};

      @media only screen and (max-width: ${mobileBreakpoint}) {
        ${text14Bold};
      }
    }
    &DiscountCardSubtitle {
      ${text14Semibold};
      @media only screen and (max-width: ${mobileBreakpoint}) {
        ${text12Semibold}
      }
    }
  }
`}
`;

export default GlobalStyle;
