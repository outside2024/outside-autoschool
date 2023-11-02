import styled from 'styled-components';
import theme from '@/styles/theme';
import { text12Semibold, text14Semibold, text20Semibold } from '@/styles/textStyles';

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

      @media only screen and (max-width: 720px) {
        padding: 8px;
      }
    }

    &Question {
      ${text20Semibold};
      @media only screen and (max-width: 720px) {
        ${text12Semibold};
        max-width: 248px;
      }
    }

    &Answer {
      transition: 0.5s;
      max-height: 0;
      overflow-y: hidden;
      opacity: 0;

      ${text14Semibold};
      @media only screen and (max-width: 720px) {
        ${text12Semibold};
      }
    }

    &Close {
      font-size: 24px;

      @media only screen and (max-width: 720px) {
        font-size: 16px;
      }
    }
  }
  .visible {
    padding-top: 10px;
    max-height: 300px;
    opacity: 1;
  }
`;

export default AccordionStyles;
