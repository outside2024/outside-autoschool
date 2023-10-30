import styled from 'styled-components';

const HowToGetStartedStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  width: 100%;
  padding: 56px 0;

  @media screen and (max-width: 720px) {
    padding: 24px 0;
  }

  .flexContainer {
    display: flex;
    justify-content: space-between;
    gap: 64px;

    @media screen and (max-width: 720px) {
      flex-direction: column;
    }

    @media screen and (min-width: 721px) and (max-width: 1080px) {
      gap: 48px;
    }
  }

  .list {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 20px;
    width: 50%;

    @media screen and (min-width: 721px) and (max-width: 1080px) {
      gap: 16px;
    }

    @media screen and (max-width: 720px) {
      width: 100%;
      margin-top: 24px;
      gap: 16px;
    }
  }

  .flex-container-column {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    width: 50%;

    @media screen and (max-width: 720px) {
      gap: 10px;
      width: 100%;
      margin-top: 0;
    }
  }

  .video {
    max-width: 100%;
    border-radius: 10px;

    @media screen and (min-width: 721px) and (max-width: 1080px) {
      height: 150px;
    }

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
`;

export default HowToGetStartedStyles;
