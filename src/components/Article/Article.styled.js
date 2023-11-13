import styled from 'styled-components';
import theme from '@/styles/theme';
import { mobileBreakpoint, tabletBreakpoint } from '@/global/constants/contants';

export const StyledArticle = styled('div')`
  padding-top: 56px;
  padding-bottom: 82px;

  .article {
    &Img {
      @media only screen and (max-width: ${mobileBreakpoint}) {
        height: 213px;
        max-width: 320px;
        margin-left: -16px;
        margin-right: -16px;
      }
    }

    &Container {
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: ${tabletBreakpoint}) {
        flex-direction: column-reverse;
        gap: 16px;
      }
    }

    &Content {
      display: flex;
      flex-direction: column;
      max-width: 948px;
    }

    &Title {
      padding-top: 10px;
      max-width: 654px;
    }

    &Date {
      font-weight: 700;
      padding-top: 10px;
    }

    &BottomContainer {
      padding-top: 56px;
      display: flex;
      justify-content: space-between;
    }

    &Link {
      color: ${theme.colors.blue};
    }
  }

  .button {
    display: flex;
    gap: 16px;

    &Container {
      display: flex;
      flex-direction: column;
    }

    &Title {
      max-width: 227px;

      @media only screen and (max-width: ${mobileBreakpoint}) {
        max-width: 82px;
      }
    }

    &NextTitle {
      max-width: 227px;
      text-align: right;

      @media only screen and (max-width: ${mobileBreakpoint}) {
        max-width: 82px;
      }
    }

    &Wrapper {
      width: 100px;
      height: 32px;
      border: 1px solid ${theme.colors.primary};
      border-radius: 5px;
    }

    &TextPrev {
      text-align: right;
      padding-bottom: 6px;
    }

    &TextNext {
      padding-bottom: 6px;
    }
  }
`;
