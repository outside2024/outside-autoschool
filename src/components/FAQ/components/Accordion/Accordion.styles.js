import styled from 'styled-components';
import theme from '@/styles/theme';
import { text12Semibold, text14Semibold, text20Semibold } from '@/styles/textStyles';
import { tabletBreakpoint } from '@/global/constants/contants';

export const AccordionStyles = styled('div')`
  margin-bottom: 16px;

  .accordion {
    &Item {
      display: flex;
      border: 1px solid ${theme.colors.primary};
      border-radius: 6px;
      padding: 16px;
      cursor: pointer;
      justify-content: space-between;

      @media only screen and (max-width: ${tabletBreakpoint}) {
        padding: 8px;
      }
    }

    &Question {
      ${text20Semibold};
      @media only screen and (max-width: ${tabletBreakpoint}) {
        ${text12Semibold};
        max-width: 248px;
      }
    }

    &Answer {
      transition: all 0.3s ease;
      max-height: 0;
      overflow-y: hidden;
      opacity: 0;

      ${text14Semibold};
      @media only screen and (max-width: ${tabletBreakpoint}) {
        ${text12Semibold};
      }
    }

    &Close {
      font-size: 24px;
      @media only screen and (max-width: ${tabletBreakpoint}) {
        font-size: 16px;
      }
    }
  }
  .visible {
    padding-top: 10px;
    max-height: 300px;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export default AccordionStyles;
