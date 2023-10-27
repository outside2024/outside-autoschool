import styled from 'styled-components';

const SliderNavBarStyles = styled(`div`)`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 808px;
  margin-left: auto;
  padding-top: 24px;
  
  .progressBar {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.bg.black};
    position: relative;
    
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 100%;
      width: calc(100% * ${(props) => (props.activeIndex + 1) / (props.slidesNumber - (props.slidesPerView - 1))});
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
    }
  }
  
  .buttonsContainer {
    display: flex;
    gap: 16px;
    @media only screen and (max-width: 720px){
      display: none;
    }
    
    .button {
      width: 40px;
      height: 32px;
      border: ${({ theme }) => theme.colors.primary} 1px solid;
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default SliderNavBarStyles;
