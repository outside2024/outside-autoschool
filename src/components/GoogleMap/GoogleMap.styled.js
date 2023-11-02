import styled from 'styled-components';
import theme from '@/styles/theme';
import { text14Semibold, text16bold, text20Semibold } from '@/styles/textStyles';

const GoogleMapStyled = styled(`div`)`
  padding-top: 36px;
  position: relative;
  margin-bottom: 36px;

  .map {
    margin-right: -100px;
    margin-left: -100px;
  }

  .mapContainer {
    height: 718px;
  }

  .branches {
    &Title {
      padding-bottom: 36px;
    }

    &Address {
      width: 366px;
      height: 718px;
      bottom: 0;
      background-color: ${theme.colors.bg.white};
      position: absolute;
      z-index: 10;
      right: 93px;
      padding: 29px 40px 0 40px;
      overflow-y: auto;

      @media only screen and (max-width: 720px) {
        display: block;
        width: 100%;
        height: auto;
        padding: 16px;
        position: unset;
        word-break: break-all;
      }
    }
  }

  .mobile {
    &Container {
      padding-top: 20px;
    }

    &Number {
      padding-bottom: 4px;
      ${text20Semibold};
    }
  }

  .addressesContainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 29px;

    @media only screen and (max-width: 720px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .branch {
    display: flex;
    gap: 11px;
    align-items: center;
    cursor: pointer;

    &Name {
      ${text16bold};
    }

    &Address {
      ${text14Semibold};
      line-height: 21px;
      padding-top: 4px;
    }
  }

  .iconPin {
    display: block;
    color: ${theme.colors.primary};
    font-size: 24px;
  }
`;

export default GoogleMapStyled;
