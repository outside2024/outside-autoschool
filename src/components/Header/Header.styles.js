import styled from 'styled-components';

export const StyledHeader = styled('div')`
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: ${({ theme, light }) =>
    light ? theme.colors.bg.white : theme.colors.bg.black};
  position: relative;
  .headerWrapper {
    display: flex;
    justify-content: space-between;
  }
  .navBlock {
    display: flex;
    align-items: center;
    gap: 32px;
    @media screen and (max-width: 1280px) {
      gap: 10px;
    }

    .companyLogo {
      display: flex;
      align-items: center;
    }
  }
  .linkText {
    padding: 12px 0;
    display: flex;
    color: ${({ theme, light }) => (light ? theme.colors.typo.black : theme.colors.typo.white)};
    min-width: fit-content;
    gap: 4px;
    @media screen and (max-width: 1280px) {
      gap: 2px;
    }
  }

  .link {
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.button.green};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.button.green};
    cursor: default;
    pointer-events: none;
  }

  .disabled {
    pointer-events: none;
  }
  .cityLngBlock {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cityBlock {
    display: flex;
    align-items: center;

    gap: 16px;
    @media screen and (max-width: 1280px) {
      gap: 8px;
    }
  }
  .socialLngBlock {
    display: flex;
    align-items: center;
    gap: 24px;
    @media screen and (max-width: 1280px) {
      gap: 8px;
    }
  }
  .socialBlock {
    display: flex;
    align-items: center;
    gap: 8px;
    @media screen and (max-width: 1280px) {
      gap: 4px;
    }
    .iconSocial {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.typo.white};
      cursor: pointer;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.button.green};
      }
    }
  }
  .langBlock {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .branchesBlock {
    position: absolute;
    top: 60px;
    width: 100%;
    height: fit-content;
    opacity: 1;
    display: flex;
    pointer-events: all;
    z-index: 1;
    background-color: ${({ theme, light }) =>
      light ? theme.colors.bg.white : theme.colors.bg.black};
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
    padding-top: 36px;
    padding-bottom: 36px;
  }
  .branchesWrapper {
    width: ${({ brancheswidth }) => (brancheswidth ? brancheswidth : '100%')};
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
    .icon-right {
      transform: rotate(270deg);
      font-size: 14px;
    }
  }
  .subBranchesWrapper {
    position: relative;
    width: 40%;
    display: grid;
    grid-template-columns: repeat(2, calc(100% / 2));
    &::before {
      position: absolute;
      content: '';
      width: 2px;
      height: 100%;
      background-color: ${({ theme, light }) =>
        light ? theme.colors.bg.black : theme.colors.bg.white};
      left: -36px;
    }
  }
  .hidden {
    display: none;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    width: 0;
    height: 0;
  }
  branchText {
  }
`;

export default StyledHeader;
