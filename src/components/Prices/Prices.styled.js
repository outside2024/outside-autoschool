import styled from 'styled-components';
import { mobileBreakpoint, tabletBreakpoint } from '@/global/constants/contants';

export const StyledPrices = styled('div')`
  .pricesContent {
    background-image: url('/images/prices/bg.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.bg.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    .titleWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      width: 100%;
      @media screen and (max-width: ${tabletBreakpoint}) {
        gap: 16px;
      }

      .titleBlock {
        width: 100%;
        display: flex;
        align-items: center;

        justify-content: space-between;
        .iconClose {
          font-size: 24px;
          color: ${({ theme }) => theme.colors.button.green};
          cursor: pointer;
          &:hover {
            color: ${({ theme }) => theme.colors.button.green30};
          }
        }
      }

      .pricesTitleText {
        width: 100%;
        text-align: left;
      }
    }

    .bottomWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      .pricesBottomText {
        width: 100%;
        text-align: center;
      }
      .btnWrapper {
        width: 160px;
        @media screen and (max-width: ${tabletBreakpoint}) {
          width: 288px;
        }
        @media screen and (max-width: ${mobileBreakpoint}) {
          width: 100%;
        }
      }
    }

    .cardsWrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      @media screen and (max-width: ${tabletBreakpoint}) {
        gap: 16px;
      }
      .centerCard {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 10px;
        border: 5px solid ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.bg.white};
        width: 380px;
        max-width: calc((100% - 64px) / 3);
        padding: 70px 16px 16px;
        gap: 32px;

        .cardTitle {
          margin-bottom: 16px;
        }

        .notesWrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          @media screen and (max-width: ${tabletBreakpoint}) {
            gap: 4px;
          }
        }
      }
    }

    .categoryCard {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 10px;
      border: 5px solid ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.bg.white};
      width: 348px;

      padding: 38px 16px 16px;
      gap: 32px;

      @media screen and (max-width: ${tabletBreakpoint}) {
        padding: 16px;
        gap: 16px;
      }
      @media screen and (max-width: ${mobileBreakpoint}) {
        width: 212px;
      }
      .cardTitle {
        margin-bottom: 16px;
      }

      .pricePerHour {
        min-height: 32px;
        @media screen and (max-width: ${tabletBreakpoint}) {
          min-height: 24px;
        }
      }
      .notesWrapper {
        display: flex;
        flex-direction: column;
        gap: 12px;
        @media screen and (max-width: ${tabletBreakpoint}) {
          gap: 4px;
        }
      }
    }
    .swiperWrapper {
      width: 100%;
      max-width: 100%;
      max-height: 100vh;
      min-height: 0;
      min-width: 0;
    }

    .swiperContainer {
      padding-bottom: 55px;
      margin-right: -100px;

      @media only screen and (max-width: 1024px) {
        margin-right: -36px;
      }

      @media only screen and (max-width: ${mobileBreakpoint}) {
        margin-right: -16px;
        padding-bottom: 24px;
      }
    }

    .swiperSlide {
      width: 348px;

      @media screen and (max-width: ${tabletBreakpoint}) {
        width: 260px;
      }

      @media screen and (max-width: ${mobileBreakpoint}) {
        width: 212px;
      }
    }
  }
`;
