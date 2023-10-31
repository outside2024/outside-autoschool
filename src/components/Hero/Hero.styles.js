import styled from 'styled-components';

const HeroStyles = styled(`div`)`
  background-color: ${({ theme }) => theme.colors.bg.black};
  width: 100%;
  display: flex;

  /* align-items: center; */
  /* align-content: center; */
  .content {
    /* background-color: ${({ theme }) => theme.colors.bg.black}; */
    width: 100%;
    /* height: 673px; */
    &.primary {
      background-image: url('/images/hero/car.png'), url('/images/hero/bg.png');
      background-position: bottom right;
      background-size: calc(50% + 320px), contain;
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
          @media screen and (max-width: 1440px) and (min-width: 720px) {
            max-width: 426px;
          }
        }
      }
      @media screen and (max-width: 930px) {
        background-size: calc(50% + 160px), contain;
      }

      @media screen and (max-width: 720px) {
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
        background-image: url('/images/hero/car.png'), url('/images/hero/bg-mob.png');
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
  }

  .heroTitle {
    color: ${({ theme }) => theme.colors.typo.white};
  }

  .icon-facebook {
    color: ${({ theme }) => theme.colors.typo.white};
    font-size: 24px;
  }
`;

export default HeroStyles;
