import styled from 'styled-components';
import theme from '@/styles/theme';
import {
  text14Semibold11Semibold,
  text16bold11Semibold14Bold,
  text20Bold,
  text20Bold14Bold,
  text20Semibold14Bold,
} from '@/styles/textStyles';
import { footerTabletBreakpoint, mobileBreakpoint } from '@/global/constants/contants';

export const StyledFooter = styled('div')`
  background-color: ${theme.colors.black};
  padding-top: 56px;

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: 24px;
  }

  .mobileSocials {
    @media only screen and (min-width: ${mobileBreakpoint}) {
      display: none;
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 40px;

    @media only screen and (max-width: ${footerTabletBreakpoint}) {
      gap: 20px;
    }

    @media only screen and (max-width: ${mobileBreakpoint}) {
      max-width: 500px;
      flex-direction: column;
      gap: 16px;
      margin: 0 auto;
    }
  }

  .firstColumn {
    margin-right: auto;

    @media only screen and (max-width: ${mobileBreakpoint}) {
      margin: 0 auto;
    }
  }

  .footer {
    display: flex;

    &Logo {
      @media only screen and (max-width: ${mobileBreakpoint}) {
        margin: 0 auto;
      }
    }

    &SocialsContainer {
      @media only screen and (max-width: ${mobileBreakpoint}) {
        display: none;
      }
    }

    &Icon {
      color: ${theme.colors.white};
      font-size: 36px;
      cursor: pointer;
    }

    &Icons {
      display: flex;
      gap: 16px;
      padding-top: 20px;
      padding-bottom: 36px;

      @media only screen and (max-width: ${mobileBreakpoint}) {
        padding-top: 16px;
        padding-bottom: 16px;
      }
    }

    &SocialsText {
      color: ${theme.colors.typo.white};
      ${text20Semibold14Bold};
      padding-top: 40px;
      width: 210px;

      @media only screen and (max-width: ${mobileBreakpoint}) {
        padding-top: 0;
      }
    }

    &Menu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-right: 116px;

      @media only screen and (max-width: ${footerTabletBreakpoint}) {
        padding-right: 0;
      }

      @media only screen and (max-width: ${mobileBreakpoint}) {
        padding-top: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
      }
    }

    &Route {
      color: ${theme.colors.typo.white};
      cursor: pointer;
      ${text16bold11Semibold14Bold};

      &Nav {
        color: ${theme.colors.typo.white};
        cursor: pointer;
        ${text20Bold14Bold};
      }
    }

    &Branches {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
      row-gap: 16px;

      &Title {
        color: ${theme.colors.primary};
        ${text20Bold};
        padding-bottom: 16px;
      }
    }

    &Rights {
      width: 100%;
      border-top: ${theme.colors.typo.white} 1px solid;
      color: ${theme.colors.typo.white};
      padding: 11px 0 8px 56px;
      ${text14Semibold11Semibold};

      @media only screen and (max-width: ${mobileBreakpoint}) {
        padding: 8px 0 24px 0;
        text-align: center;
      }
    }
  }
`;

export default StyledFooter;
