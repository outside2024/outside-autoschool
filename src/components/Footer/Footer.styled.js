import styled from 'styled-components';
import theme from "@/styles/theme";
import {text14Semibold, text16bold, text20Bold, text20Semibold} from "@/styles/textStyles";

export const StyledFooter = styled('div')`
  // min-height: 368px;
  background-color: ${theme.colors.black};
  padding-top: 56px;
  
  .test{
    display: flex;
  }

  .footer {
    display: flex;

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
    }

    &SocialsText {
      color: ${theme.colors.typo.white};
      ${text20Semibold};
      padding-top: 40px;
      width: 210px;
    }

    &Menu {
      display: flex;
      flex-direction: column;
      padding-left: 243px;
      padding-right: 116px;
      gap: 8px;
      width: 100%;
    }

    &Route {
      color: ${theme.colors.typo.white};
      cursor: pointer;
      ${text16bold};
      
      &Nav{
        color: ${theme.colors.typo.white};
        cursor: pointer;
        ${text20Bold};
        
      }
    }

    &Branches {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
      row-gap: 16px;
      padding-right: 40px;

      &Title {
        color: ${theme.colors.primary};
        ${text20Bold};
        padding-bottom: 16px;
      }
    }
    
    &Rights{
      width: 100%;
      border-top: ${theme.colors.typo.white} 1px solid;
      color: ${theme.colors.typo.white};
      align-self: start;
      padding: 11px 0 8px 56px;
      ${text14Semibold};    
    }
  }




`;

export default StyledFooter;