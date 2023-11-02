import styled from 'styled-components';


export const FromComponentStyled = styled('div')`

  .content {
    display: flex;
    gap: 48px;
    padding-top: 48px;
   
  }
  
  .form {
    &Container {
      display: flex;
    }
  }
  
  .field{
    &Container {
      display: flex;
      flex-direction: column;
    }
  }
  
`;

export default FromComponentStyled;
