import styled from 'styled-components';

const HeroDescriptionStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding-top: 57px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding-top: 24px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 24px;
  }

  .flex-container {
    display: flex;
    gap: 24px;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
`;

export default HeroDescriptionStyles;
