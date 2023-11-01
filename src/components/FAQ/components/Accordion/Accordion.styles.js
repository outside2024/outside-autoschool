import styled from 'styled-components';
import theme from "@/styles/theme";
import {text12Semibold, text14Semibold, text20Semibold} from "@/styles/textStyles";

export const AccordionStyles = styled('div')`
  .accordion {
    &Item {
      display: flex;
      border: 1px solid ${theme.colors.primary};
      border-radius: 6px;
      padding: 16px;
      margin-bottom: 16px;
      cursor: pointer;
      justify-content: space-between;
      transition: all 5s ease-in-out;
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
      padding-bottom: 30px;
      transition: all 5s ease-in-out;
      
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



`;

export default AccordionStyles;