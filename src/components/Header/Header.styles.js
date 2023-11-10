import styled from 'styled-components';

export const StyledHeader = styled('div')`
  position: sticky;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: ${({ theme, $light }) =>
    $light ? theme.colors.bg.white : theme.colors.bg.black};
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
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: 60px;
      justify-content: space-evenly;
    }

    .companyLogo {
      display: flex;
      align-items: center;
    }
  }

  .linkText {
    padding: 12px 0;
    display: flex;
    color: ${({ theme, $light }) => ($light ? theme.colors.typo.black : theme.colors.typo.white)};
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

  .langBlock {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .menuWrapper {
    position: absolute;
    top: 60px;
    width: 100%;
    height: fit-content;
    opacity: 1;
    display: flex;
    flex-direction: column;
    pointer-events: all;
    z-index: 2;
    background-color: ${({ theme, $light }) =>
      $light ? theme.colors.bg.white : theme.colors.bg.black};
    border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
    @media screen and (max-width: 1024px) {
      top: 0px;
    }
  }

  .branchesBlock {
    width: 100%;
    height: fit-content;
    opacity: 1;
    display: flex;
    pointer-events: all;
    padding-top: 36px;
    padding-bottom: 36px;
    @media screen and (max-width: 1024px) {
      padding-top: 12px;
    }
  }
  .branchesWrapper {
    width: ${({ $brancheswidth }) => $brancheswidth || '100%'};
    display: grid;
    grid-template-columns: repeat(3, calc(100% / 3));
  }
  .icon-right {
    transform: rotate(270deg);
    font-size: 16px;
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
      background-color: ${({ theme, $light }) =>
        $light ? theme.colors.bg.black : theme.colors.bg.white};
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
  .iconMenu {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.button.green};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.button.green30};
    }
  }

  .tabletHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
  .tabletlogoIconWrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tabletHeaderLine {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  .mobileHeader {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 5px);
    .mobilelogoIconWrapper {
      display: flex;
      align-items: center;
      height: 60px;
      margin-bottom: 4px;
      gap: calc(50% - 41px);
    }
    .mobileCityBlock {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 46px;
      margin-bottom: 34px;
    }
    .mobileNavBlock {
      display: flex;
      flex-direction: column;
      .mobileNavBlockItem {
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
        padding: 16px 0;
      }
    }
    .mobileSocialLngBlock {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 43px;
      .mobileSocialBlock {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    .mobileBranchesWrapper {
      display: grid;
      grid-template-columns: repeat(2, calc((100% - 16px) / 2));
      grid-column-gap: 16px;
    }
    .mobileBranchesItem {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      padding: 24px 0;
    }
    .backButton {
      cursor: pointer;
      display: flex;
      padding: 4px;
      padding-bottom: 24px;
      width: 20%;

      &:hover {
        .iconLeft {
          color: ${({ theme }) => theme.colors.button.green30};
        }
      }
    }
    .iconLeft {
      font-size: 24px;
      color: ${({ theme }) => theme.colors.white};
      transform: rotate(90deg);
    }
  }
  .menuButton {
    padding: 4px;
  }
`;

export default StyledHeader;
