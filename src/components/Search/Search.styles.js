import styled from 'styled-components';

const SearchStyles = styled.div`
  .input-search {
    width: calc(100% - 12px);
    border: none;
  }

  .search {
    border-bottom: 1px solid #76c045;
  }

  .icon-search {
    cursor: pointer;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default SearchStyles;
