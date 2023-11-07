import styled from 'styled-components';
import theme from '@/styles/theme';
import { text12Semibold, text14Bold, text14Semibold, text40Bold } from '@/styles/textStyles';
import { mobileBreakpoint, tabletBreakpoint } from '@/global/constants/contants';

export const FromComponentStyled = styled('div')`
  padding-bottom: 66px;

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: 24px;
  }

  .form {
    &Container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    &Image {
      @media only screen and (max-width: ${mobileBreakpoint}) {
        display: none;
      }

      @media only screen and (max-width: 1234px) {
        width: 324px;
        height: 436px;
        object-fit: cover;
      }
    }

    &Error {
      color: ${theme.colors.error};
      font-size: 14px;
    }

    &ErrorContainer {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
  }

  .content {
    display: flex;
    gap: 48px;
    padding-top: 48px;

    @media only screen and (max-width: ${mobileBreakpoint}) {
      padding-top: 24px;
    }

    @media only screen and (max-width: ${tabletBreakpoint}) {
      gap: 24px;
    }
  }

  .container {
    display: flex;
    gap: 16px;

    @media only screen and (max-width: ${tabletBreakpoint}) {
      flex-direction: column;
    }
  }

  .field {
    &Container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }
  }

  .label {
    &Text {
      ${text14Semibold};
      line-height: 21px;
      ${theme.colors.black};

      @media only screen and (max-width: ${mobileBreakpoint}) {
        ${text12Semibold};
      }
    }
  }

  .input {
    border: 1px solid ${theme.colors.primary};
    border-radius: 6px;
    padding: 13.5px 16px;

    @media only screen and (max-width: ${mobileBreakpoint}) {
      width: 100%;
    }
  }

  .input::placeholder {
    color: ${theme.colors.typo.grey};
    ${text14Semibold};
    line-height: 21px;
  }

  .buttonWrapper {
    padding-top: 40px;

    @media only screen and (max-width: ${tabletBreakpoint}) {
      padding-top: 8px;
    }
  }

  .formStatus {
    &Container {
      display: flex;
      flex-direction: column;
    }
    &Message {
      ${text40Bold};
      font-weight: 500;
      text-align: center;
      justify-content: center;
      align-items: center;
      padding-top: 35px;

      @media only screen and (max-width: ${mobileBreakpoint}) {
        font-size: 20px;
        ${text14Bold};
      }
    }

    &CloseIcon {
      font-size: 36px;
      align-self: end;
      cursor: pointer;
      border: 1px solid ${theme.colors.primary};
      border-radius: 5px;
    }

    &CheckIcon {
      align-self: center;
      margin-top: 30px;
    }
  }
`;

export default FromComponentStyled;
