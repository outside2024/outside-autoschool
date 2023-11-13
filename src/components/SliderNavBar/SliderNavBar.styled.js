import styled from 'styled-components';
import { mobileBreakpoint } from '@/global/constants/contants';

const SliderNavBarStyles = styled(`div`)`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: ${(props) => props.$maxWidth};
  margin-left: auto;
  padding-top: 24px;

  .progressBar {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme, $isLight }) =>
      $isLight ? theme.colors.bg.white : theme.colors.bg.black};
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      height: 100%;
      width: ${(props) => props.$width}%;
      left: ${(props) => props.$left}%;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      transition: all 0.3s;
    }
  }

  .icon {
    font-size: 16px;
    &Left {
      transform: rotate(90deg);
    }
    &Right {
      transform: rotate(270deg);
    }
  }

  .buttonsContainer {
    display: flex;
    gap: 16px;
    @media only screen and (max-width: ${mobileBreakpoint}) {
      display: none;
    }

    .button {
      width: 40px;
      height: 32px;
      border: ${({ theme }) => theme.colors.primary} 1px solid;
      border-radius: 5px;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default SliderNavBarStyles;
