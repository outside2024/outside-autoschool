import styled from 'styled-components';
import theme from "@/styles/theme";
import {text14Semibold, text16bold, text20Semibold} from "@/styles/textStyles";

const GoogleMapStyled = styled(`div`)`
  padding-top: 36px;
  
  .branches{
    &Title{
      padding-bottom: 36px;
    }
    &Address {
      width: 366px;
      height:718px;
      background-color: ${theme.colors.bg.white};
      position: absolute;
      z-index: 10;
      right: 93px;
      padding-top: 29px;
      padding-left: 40px;

      @media only screen and (max-width: 720px) {
        display: none;
      }
    }
  }
  
  .mobile {
    &Container {
      padding-top: 20px;
    }
    
    &Number{
      padding-bottom: 4px;
      ${text20Semibold};
    }
    
  }
  
  .addressesContainer{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 29px;
  }
  
  .branch {
    display: flex;
    gap: 11px;
    align-items: center;
    
    &Name {
      ${text16bold};
      
    }
    &Address {
      ${text14Semibold};
      line-height: 21px;
      padding-top: 4px;
    }
  }
  
  
.iconPin {
  display: block;
  color: ${theme.colors.primary};
  font-size: 24px;
}

  `;

export default GoogleMapStyled;