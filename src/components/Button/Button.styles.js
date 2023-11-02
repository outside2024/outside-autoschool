import styled from 'styled-components';
import { tabletBreakpoint } from '@/global/constants/contants';

const ButtonStyles = styled(`button`)`
  width: ${({ $btnWidth }) => ($btnWidth ? `${$btnWidth}px` : '100%')};
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &.primary {
    background-color: ${({ theme }) => theme.colors.button.green};
    height: 56px;
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.button.green30};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.green70};
    }
    @media screen and (max-width: ${tabletBreakpoint}) {
      height: 28px;
    }
  }
  &.secondary {
    background-color: ${({ theme }) => theme.colors.button.transparent};
    height: ${({ $btnHeight }) => ($btnHeight ? `${$btnHeight}px` : '36px')};
    border: 1px solid ${({ theme }) => theme.colors.button.green};
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.button.green30};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.green70};
    }
    @media screen and (max-width: ${tabletBreakpoint}) {
      height: ${({ $btnHeight }) => ($btnHeight ? `${$btnHeight}px` : '32px')};
    }
  }
  &.tertiary {
    background-color: ${({ theme }) => theme.colors.button.green};
    border: ${({ $borderWidth }) => $borderWidth} solid ${({ theme }) => theme.colors.button.green};
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.button.green30};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.green70};
    }
  }

  .icon {
    &.dark {
      color: ${({ theme }) => theme.colors.typo.black};
      font-size: 18px;
      transform: ${({ $iconAngle }) => `rotate(${$iconAngle}deg)`};
    }
    &.light {
      color: ${({ theme }) => theme.colors.typo.white};
      font-size: 30px;
    }
  }
`;

export default ButtonStyles;
