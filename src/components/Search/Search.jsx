import { useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchStyles from '@/components/Search/Search.styles';

const Search = ({ setFindCards, cards, searchValue, setSearchValue }) => {
  function searchData() {
    const cardsArray = [...cards].filter((card) =>
      card.attributes.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    setFindCards(cardsArray);
  }

  useEffect(() => {
    setFindCards([]);

    const delayDebounceFn = setTimeout(() => {
      if (searchValue?.length >= 3) {
        searchData();
      }
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <SearchStyles>
      <div className="search">
        <label className="label">
          <input
            name="search"
            type="text"
            className="input-search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => {
              if (
                e.code === 'Enter' ||
                e.code === 'NumpadEnter' ||
                e.key === 'Enter' ||
                e.key === 'NumpadEnter' ||
                e.which === 13
              ) {
                if (searchValue.length !== 0) {
                  searchData();
                }
              }
            }}
          />
          <i
            className="icon-search"
            onClick={() => {
              if (searchValue.length !== 0) {
                searchData();
              }
            }}
          />
        </label>
      </div>
    </SearchStyles>
  );
};

export default Search;

Search.propTypes = {
  setFindCards: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({ title: PropTypes.string }),
    }),
  ).isRequired,
};
