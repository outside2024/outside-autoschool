import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import SearchStyles from '@/components/Search/Search.styles';

const Search = ({ setFindCards, cards, searchValue, setSearchValue, setSearchActive }) => {
  const { t } = useTranslation();

  function searchData() {
    const cardsArray = [...cards].filter((card) =>
      card.attributes.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setSearchActive(true);
    setFindCards(cardsArray);
  }

  useEffect(() => {
    setFindCards([]);
    setSearchActive(false);

    const delayDebounceFn = setTimeout(() => {
      if (searchValue?.length >= 2) {
        searchData();
      }
    }, 100);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <SearchStyles>
      <div className="search">
        <label className="label">
          <input
            name="search"
            type="text"
            className="input-search"
            placeholder={t('search.title')}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (
                e.code === 'Enter' ||
                e.code === 'NumpadEnter' ||
                e.key === 'Enter' ||
                e.key === 'NumpadEnter'
              ) {
                if (searchValue.length !== 0) {
                  searchData();
                  setSearchActive(true);
                }
              }
            }}
          />
          <i
            className="icon-search"
            onClick={() => {
              if (searchValue.length !== 0) {
                searchData();
                setSearchActive(true);
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
  setSearchActive: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({ title: PropTypes.string }),
    }),
  ).isRequired,
};
