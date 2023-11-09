import styled from 'styled-components';

export const StyledDiscount = styled('div')`
  padding-top: 56px;
  padding-bottom: 51px;
  
  .discount {
    
    &Container{
      display: flex;
    }
    
    &Title {
      text-transform: uppercase;
    }

    &Description{
      padding-top: 8px;
      max-width: 344px;
    }
    
    &Card{
      max-width: 300px;
      &Title{
        padding-top: 24px;
        padding-bottom: 16px;
      }
    }
    
  }
`;