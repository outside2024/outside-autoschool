import styled from 'styled-components';

const HeroStyles = styled(`div`)`
  background-color: ${({ theme }) => theme.colors.bg.black};
  width: 100%;
  display: flex;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;

  .heroTitle {
    color: ${({ theme }) => theme.colors.typo.white};
  }

  .icon-facebook {
    color: ${({ theme }) => theme.colors.typo.white};
    font-size: 24px;
  }
`;

export default HeroStyles;
