import styled from 'styled-components';

const ExamStyles = styled.div`
  background-color: transparent;
  padding-top: 24px;

  @media screen and (min-width: 768px) {
    padding-top: 81px;
  }

  .exam-images {
    width: 136px;
    height: 116px;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 170px;
      height: 140px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
      width: 250px;
      height: 230px;
    }

    @media screen and (min-width: 1440px) {
      width: 333px;
      height: 271px;
    }
  }

  .exam-container {
    margin-top: 32px;
    display: flex;
    gap: 64px;
    width: 100%;

    @media screen and (max-width: 1023px) {
      margin-top: 16px;
      gap: 16px;
    }
  }

  .container-data {
    padding-top: 59px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 1023px) {
      padding-top: 0px;
    }
  }

  .data {
    display: flex;
    width: 240px;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      flex-direction: column;
      align-items: start;
      width: 170px;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: start;
      width: 136px;
    }
  }
`;

export default ExamStyles;
