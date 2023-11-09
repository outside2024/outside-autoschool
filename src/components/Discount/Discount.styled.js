import styled from 'styled-components';
import {mobileBreakpoint, tabletBreakpoint} from "@/global/constants/contants";

export const StyledDiscount = styled('div')`
  padding-top: 56px;
  padding-bottom: 51px;

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
  
  .discount {
    
    &Container{
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 1400px){
        flex-direction: column;
      }
      
    }
    
    &Title {
      text-transform: uppercase;
    }

    &Description{
      padding-top: 8px;
      max-width: 344px;

      @media only screen and (max-width: 1400px) {
        max-width: 100%;
      }
    }
    
    &Image {
      object-fit: cover;

      @media only screen and (max-width: 625px) {
        width: 200px;
        height: 283px;
      }
     
    }
    
    &Card{
      
      &Title{
        max-width: 300px;
        padding-top: 24px;
        padding-bottom: 16px;
        height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        @media only screen and (max-width: ${mobileBreakpoint}) {
          max-width: 200px;
          height: 70px;
        }
      }
      &Subtitle {
        max-width: 300px;
        @media only screen and (max-width: ${mobileBreakpoint}) {
          max-width: 200px;
        }
      }
    }
    
  }
  
  .swiperContainer {
    max-width: 900px;
    padding-bottom: 55px;
    @media only screen and (max-width: 1920px) {
     margin-right: -100px;
    }
    @media only screen and (max-width: 1400px) {
      margin: 0 auto;
    }

    @media only screen and (max-width: ${mobileBreakpoint}) {
      margin-right: -16px;
      padding-bottom: 24px;
    }
   
    @media only screen and (max-width: ${tabletBreakpoint}) {
      padding-top: 24px;
    }
  }
  
  .swiperSlide {
    @media only screen and (max-width: ${mobileBreakpoint}) {
      width: 212px;
    }
  }
  
`;