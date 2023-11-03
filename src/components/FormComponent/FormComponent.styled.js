import styled from 'styled-components';
import theme from "@/styles/theme";
import {text14Semibold} from "@/styles/textStyles";


export const FromComponentStyled = styled('div')`
  
  .formContainer {
    display: flex;
    flex-direction: column;
   gap: 16px;
   
  }
  .content {
    display: flex;
    gap: 48px;
    padding-top: 48px;
  }
  
  .container {
    display: flex;
    gap: 16px;
    //padding-bottom: 16px;
    
    
  }

  .field{
    &Container {
      display: flex;
      flex-direction: column;
      gap: 8px;
   
    }
  }
  
  .label {
    &Text {
      ${text14Semibold};
      line-height: 21px;
      ${theme.colors.black};
    }
  }
  
  .input {
    border: 1px solid ${theme.colors.primary};
    border-radius: 6px;
    padding: 13.5px 16px;
    min-width: 255.5px;
  }
  
  .input::placeholder {
    color: ${theme.colors.typo.grey};
    ${text14Semibold};
    line-height: 21px;
  }
  
`;

export default FromComponentStyled;
