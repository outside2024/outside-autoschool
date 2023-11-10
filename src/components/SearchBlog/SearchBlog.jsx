import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SearchBlogStyles from '@/components/SearchBlog/SearchBlog.styles';

import Search from '../Search';

const SearchBlog = ({ cards }) => {
  const { t } = useTranslation();
  const [findCards, setFindCards] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchBlogStyles>
      <div className="search-container">
        <Search
          setFindCards={setFindCards}
          cards={cards}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          setSearchActive={setSearchActive}
        />
        <div className="desktop-container">
          <h2 className="typoColorBlack typoButtonPrimary gap gap-top">{t('blog.popular')}</h2>
          <ul className="popular-list">
            {cards
              .filter((card) => card.attributes.popular)
              .map((item) => (
                <Link
                  key={uuidv4()}
                  href={`blog/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <li className="typoTextFifth">{item.attributes.title}</li>
                </Link>
              ))}
          </ul>
        </div>

        {findCards.length > 0 && (
          <>
            <div
              className="backdrop"
              onClick={() => {
                setSearchValue('');
                setSearchActive(false);
              }}
            />
            <ul className="block-article">
              {findCards.map((card) => (
                <Link
                  onClick={() => {
                    setSearchValue('');
                  }}
                  key={uuidv4()}
                  href={`blog/${card.id}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <li className="typoColorBlack typoTextTertiary eclipse">
                    {card.attributes.title}
                  </li>
                </Link>
              ))}
            </ul>
          </>
        )}
        {searchActive && findCards.length === 0 && (
          <>
            <div
              className="backdrop"
              onClick={() => {
                setSearchValue('');
                setSearchActive(false);
              }}
            />
            <ul className="block-article">
              <li key={uuidv4()} className="typoColorBlack typoTextTertiary eclipse">
                {t('blog.nothing_was_found')}
              </li>
            </ul>
          </>
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
