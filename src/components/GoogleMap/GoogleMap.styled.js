import styled from 'styled-components';
import theme from "@/styles/theme";



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


  `;

export default GoogleMapStyled;