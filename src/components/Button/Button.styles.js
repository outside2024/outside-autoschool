import styled from 'styled-components';

const ButtonStyles = styled(`button`)`
  width: ${({ btnWidth }) => (btnWidth ? `${btnWidth}px` : '100%')};
  height: ${({ btnHeight }) => `${btnHeight}px`};
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  cursor: pointer;

  &.primary {
    background-color: ${({ theme }) => theme.colors.button.green};
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.button.green30};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.green70};
    }
  }
  &.secondary {
    background-color: ${({ theme }) => theme.colors.button.transparent};
    border: 1px solid ${({ theme }) => theme.colors.button.green};
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.button.green30};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.button.green70};
    }
  }
  &.tertiary {
    background-color: ${({ theme }) => theme.colors.button.green};
    border: ${({ borderWidth }) => borderWidth} solid ${({ theme }) => theme.colors.button.green};
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
      transform: rotate(270deg);
    }
    &.light {
      color: ${({ theme }) => theme.colors.typo.white};
      font-size: 30px;
    }
  }
`;

export default ButtonStyles;
