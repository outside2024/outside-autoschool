import styled from "styled-components";
import {text14Semibold} from "@/styles/textStyles";
import theme from "@/styles/theme";

export const SelectContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  .inputLabel {
    ${text14Semibold};
    line-height: 21px;
    ${theme.colors.black};
      padding-bottom: 8px;
  }

  .custom {
    &Select {
      &__indicator-separator {
        display: none;
      }

        &__control{
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
        
        &__option{
         
            &--is-focused {
                background-color: ${theme.colors.button.green30};
                cursor: pointer;
            }

            &--is-selected {
                background-color: ${theme.colors.primary};
            }
            
           
            
        }
        
        &__menu {
            
            &-list{
                height: 150px;
            }
            
        }

    }


  }

`;