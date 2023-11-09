import styled from 'styled-components';
import {
  desktopStartBreakpoint,
  tabletBreakpoint,
  mobileBreakpoint,
} from '../../global/constants/contants';

const DocumentsStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding: 40px 0 0 0;

  .content {
    display: flex;
    padding-bottom: 24px;
    padding-top: 24px;
    justify-content: end;

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      background-image: url('/images/documents/car.png');
      background-position: bottom left;
      background-size: 800px;
      background-repeat: no-repeat;
      padding-bottom: 80px;
      padding-top: 80px;
    }
  }

  .background-img {
    background-color: #fff;
    background-position: bottom left;
    background-size: 50px;
    background-repeat: no-repeat;

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      background-size: 100px;
    }
  }

  .gap-text {
    margin-left: 50px;
    margin-top: 17px;

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      margin-left: 82px;
    }
  }

  .passport {
    background-image: url('/images/documents/1.jpeg');
    background-size: 40px;

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      background-size: 90px;
    }
  }

  .inn {
    background-image: url('/images/documents/2.jpeg');
  }

  .photo {
    background-image: url('/images/documents/3.jpeg');
  }

  .medical-certificate {
    background-image: url('/images/documents/4.jpeg');
  }

  .card-item {
    display: flex;
    width: calc(50% - 19px);
    height: 66px;
    border-radius: 10px;
    box-shadow: 2px 2px 16px 5px rgba(118, 192, 69, 0.1);

    @media only screen and (max-width: ${mobileBreakpoint}) {
      width: 100%;
    }

    @media only screen and (min-width: ${tabletBreakpoint}) and (max-width: 1260px) {
      width: 394px;
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      height: 123px;
    }
  }

  .documents-container {
    max-width: 870px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @media only screen and (max-width: ${mobileBreakpoint}) {
      flex-direction: column;
      width: 100%;
    }

    @media only screen and (min-width: ${tabletBreakpoint}) and (max-width: 1260px) {
      max-width: 850px;
    }

    @media only screen and (min-width: ${desktopStartBreakpoint}) {
      gap: 36px;
    }
  }

  .card-images {
    margin-left: auto;
    height: 100%;
    object-fit: cover;
  }
`;

export default DocumentsStyles;
