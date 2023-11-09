import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SearchBlogStyles from '@/components/SearchBlog/SearchBlog.styles';

import Search from '../Search';

const SearchBlog = ({ cards }) => {
  const { t } = useTranslation();
  const [findCards, setFindCards] = useState([]);

  return (
    <SearchBlogStyles>
      <div className="search-container">
        <Search setFindCards={setFindCards} cards={cards} />
        <div className="desktop-container">
          <h2 className="typoColorBlack typoButtonPrimary gap">{t('blog.popular')}</h2>
          <ul className="popular-list">
            {cards
              .filter((card) => card.attributes.popular)
              .map((item) => (
                <li key={uuidv4()} className="typoTextSecondary">
                  {item.attributes.title}
                </li>
              ))}
          </ul>
        </div>
        {findCards.length > 0 && (
          <ul className="block-article">
            {findCards.map((card) => (
              <li key={uuidv4()} className="typoColorBlack typoTextTertiary eclipse">
                {card.attributes.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </SearchBlogStyles>
  );
};

export default SearchBlog;

SearchBlog.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({ title: PropTypes.string }),
    }),
  ).isRequired,
};
