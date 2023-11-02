import { mobileBreakpoint } from '@/global/constants/contants';
import styled from 'styled-components';

const HeroStyles = styled(`div`)`
  background-color: ${({ theme }) => theme.colors.bg.black};
  width: 100%;
  display: flex;

  .content {
    width: 100%;
    &.homePageHero {
      background-image: url('/images/hero/home/car.png'), url('/images/hero/home/bg.png');
      background-position: bottom right;
      background-size: contain;
      background-repeat: no-repeat;
      padding-top: 130px;
      padding-bottom: 130px;
      .heroBtnWrapper {
        width: 360px;
      }
      .heroTextBlock {
        display: flex;
        flex-direction: column;
        gap: 24px;
        max-width: 626px;
        margin-bottom: 64px;
        .heroDescription {
          display: inline-block;
          @media screen and (max-width: 1440px) and (min-width: ${mobileBreakpoint}) {
            max-width: 426px;
          }
        }
      }

      @media screen and (max-width: 1220px) {
        background-size: calc(50% + 320px), 55%;
      }
      @media screen and (max-width: 930px) {
        background-size: calc(50% + 160px), 45%;
      }

      @media screen and (max-width: ${mobileBreakpoint}) {
        padding-top: 48px;
        padding-bottom: 120px;
        gap: 8px;

        .heroBtnWrapper {
          width: 288px;
        }
        .heroTextBlock {
          max-width: 426px;
          gap: 12px;
          margin-bottom: 36px;
        }
      }
      @media screen and (max-width: 480px) {
        padding-top: 16px;
        padding-bottom: 16px;
        background-image: url('/images/hero/home/car.png'), url('/images/hero/home/bg-mob.png');
        background-position:
          bottom 44px right,
          bottom right;
        background-size: calc(100% + 50px), contain;

        .heroBtnWrapper {
          width: 100%;
        }

        .heroTextBlock {
          max-width: 100%;
          margin-bottom: 212px;
        }
      }
    }
    &.onlinePageHero {
      background-image: url('/images/hero/online/student.png'), url('/images/hero/online/bg.png');
      background-position:
        bottom right,
        bottom left;
      background-size: 60%, contain;
      background-repeat: no-repeat;
      padding-top: 130px;
      padding-bottom: 270px;

      .heroTextBlock {
        display: flex;
        flex-direction: column;
        gap: 48px;
        max-width: 752px;
        .heroDescription {
          display: inline-block;
        }
      }

      @media screen and (max-width: 1220px) {
        background-size: calc(50% + 320px), 55%;
        .heroDescription {
          max-width: 480px;
        }
      }
      @media screen and (max-width: 930px) {
        background-size: calc(50% + 160px), 45%;
      }

      @media screen and (max-width: 720px) {
        padding-top: 60px;
        padding-bottom: 230px;
        gap: 8px;

        .heroTextBlock {
          max-width: 448px;
          gap: 8px;
        }
      }
      @media screen and (max-width: 480px) {
        padding-top: 16px;
        padding-bottom: 212px;
        background-image: url('/images/hero/online/student.png'),
          url('/images/hero/online/bg-mob.png');
        background-position:
          bottom right,
          bottom left;
        background-size: calc(100% + 50px), contain;

        .heroTextBlock {
          max-width: 100%;
        }
      }
    }
    &.aboutPageHero {
      background-image: url('/images/hero/about/car.png'), url('/images/hero/about/bg.png');
      background-position:
        bottom right,
        bottom left;
      background-size: contain;
      background-repeat: no-repeat;
      padding-top: 110px;
      padding-bottom: 273px;

      .heroTextBlock {
        display: flex;
        flex-direction: column;
        gap: 48px;
        max-width: 752px;
      }

      @media screen and (max-width: 930px) {
        background-size: calc(50% + 250px), contain;
      }

      @media screen and (max-width: 720px) {
        background-image: url('/images/hero/about/car.png'), url('/images/hero/about/bg-tab.png');
        background-size: calc(50% + 150px), contain;
        padding-top: 60px;
        padding-bottom: 161px;
        gap: 8px;
      }
      @media screen and (max-width: 480px) {
        padding-top: 16px;
        padding-bottom: 136px;
        background-image: url('/images/hero/about/car.png'), url('/images/hero/about/bg-mob.png');
        background-position:
          bottom right,
          bottom left;
        background-size: contain;
      }
    }
  }
`;

export default HeroStyles;
