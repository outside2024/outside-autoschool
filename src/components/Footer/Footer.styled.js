import styled from 'styled-components';
import theme from "@/styles/theme";
import {text14Semibold, text20Bold, text20Semibold} from "@/styles/textStyles";

export const StyledFooter = styled('div')`
  //min-height: 368px;
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
    }

    &Route {
      color: ${theme.colors.typo.white};
      cursor: pointer;
      ${text20Bold};
    }

    &Branches {
      display: flex;
      flex-direction: column;

      &Title {
        color: ${theme.colors.primary};
        ${text20Bold};
      }
    }
    
    &Rights{
      color: ${theme.colors.typo.white};
      align-self: start;
      padding-left: 156px;
      margin-bottom: 8px;
      ${text14Semibold};
    
    }
  }




`;

export default StyledFooter;