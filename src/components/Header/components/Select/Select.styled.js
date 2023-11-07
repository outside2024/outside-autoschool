import styled from 'styled-components';
import { text14Semibold } from '@/styles/textStyles';
import theme from '@/styles/theme';

export const SelectContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 168px;

  .inputLabel {
    ${text14Semibold};
    line-height: 21px;
    color: ${({ theme, light }) => (light ? theme.colors.typo.white : theme.colors.typo.black)};
    padding-bottom: 8px;
  }

  .custom {
    &Select {
      &__input-container {
        color: ${({ theme, light }) => (light ? theme.colors.typo.white : theme.colors.typo.black)};
      }
      &__indicator-separator {
        display: none;
      }

      &__control {
        outline: none !important;
        background-color: transparent;
        color: ${theme.colors.primary};
        box-shadow: none;
        border-color: ${theme.colors.primary};

        &--is-focused {
          border-color: ${theme.colors.primary};
        }
      }

      &__control:hover {
        border-color: ${theme.colors.primary};
      }

      &__option {
        &--is-focused {
          background-color: ${theme.colors.button.green30};
          cursor: pointer;
        }

        &--is-selected {
          background-color: ${theme.colors.primary};
        }
      }

      &__menu {
        &-list {
          max-height: 400px;
        }
      }
    }
  }
`;
