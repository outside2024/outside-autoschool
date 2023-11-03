import styled from 'styled-components';
import { desktopBreakpoint, mobileBreakpoint, tabletBreakpoint } from '@/global/constants/contants';
import { desktopBigBreakpoint } from '../../global/constants/contants';

const GalleryStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding: 40px 0;

  .gallery {
    list-style: none;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 8px;
    margin-bottom: 4px;

    @media screen and (min-width: ${mobileBreakpoint}) and (max-width: ${tabletBreakpoint}) {
      gap: 8px;
      margin-bottom: 4px;
    }

    @media screen and (min-width: ${desktopBreakpoint}) {
      gap: 36px;
      margin-bottom: 32px;
    }
  }
  .gap {
    margin-bottom: 24px;

    @media screen and (min-width: ${desktopBreakpoint}) {
      margin-bottom: 36px;
    }
  }

  .gallery-images {
    width: 100%;
    object-fit: cover;
    height: 100px;

    @media screen and (min-width: 460px) and (max-width: 590px) {
      height: 130px;
    }

    @media screen and (min-width: 591px) and (max-width: 719px) {
      height: 160px;
    }

    @media screen and (min-width: 720px) and (${tabletBreakpoint}) {
      height: 210px;
    }

    @media screen and (min-width: ${desktopBreakpoint}) and (max-width: ${desktopBreakpoint}) {
      height: 316px;
    }

    @media screen and (min-width: ${desktopBigBreakpoint}) {
      height: 380px;
    }
  }

  .gallery-img1,
  .gallery-img2 {
    width: 30%;
  }

  .gallery-img3 {
    width: 40%;
  }
  .gallery-img4,
  .gallery-img5 {
    width: 29%;
  }

  .gallery-img6 {
    width: 44%;
  }

  .gallery-img7 {
    width: 32%;
  }

  .gallery-img8 {
    width: 33%;
  }

  .gallery-img9 {
    width: 35%;
  }
`;

export default GalleryStyles;
