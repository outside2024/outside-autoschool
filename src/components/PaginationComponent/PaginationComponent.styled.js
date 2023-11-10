import styled from 'styled-components';
import { text20Semibold } from '../../styles/textStyles';

const PaginationComponentContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;

  .pagination {
    .ant-select-selector {
      display: none;
    }

    .ant-pagination-item-link {
      display: none;
    }

    .ant-pagination-item {
      height: 50px;
      ${text20Semibold}
      padding: 10px 0;
      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.button.green30};
      }
      & a {
        color: ${({ theme }) => theme.colors.black};
      }

      &-active {
        ${text20Semibold}
        border: 2px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export default PaginationComponentContainer;
