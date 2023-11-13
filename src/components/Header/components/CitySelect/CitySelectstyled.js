import styled from 'styled-components';
import { text14Semibold } from '@/styles/textStyles';

export const CitySelectContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 168px;

  .inputLabel {
    ${text14Semibold};
    line-height: 21px;
    color: ${({ theme, $light }) => ($light ? theme.colors.typo.white : theme.colors.typo.black)};
    padding-bottom: 8px;
  }

  .city {
    &Select {
      &__single-value {
        ${text14Semibold};
        color: ${({ theme, $light }) =>
          $light ? theme.colors.typo.black : theme.colors.typo.white};
      }
      &__indicator-separator {
        display: none;
      }

      &__control {
        outline: none !important;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        box-shadow: none;
        border-color: ${({ theme }) => theme.colors.primary};

        &--is-focused {
          border-color: ${({ theme }) => theme.colors.primary};
        }
      }

      &__control:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }

      &__option {
        ${text14Semibold};
        &--is-focused {
          background-color: ${({ theme }) => theme.colors.button.green30};
          cursor: pointer;
        }

        &--is-selected {
          background-color: ${({ theme }) => theme.colors.primary};
        }
      }

      &__menu {
        width: 220px;
        background-color: ${({ theme, $light }) =>
          $light ? theme.colors.bg.white : theme.colors.typo.black};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        &-list {
          color: ${({ theme, $light }) =>
            $light ? theme.colors.typo.black : theme.colors.typo.white};
          max-height: fit-content;
        }
      }
    }
  }
`;
