import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';
import useWindowSize from '@/hooks/useWindowSize';
import BlogStyles from '@/components/Blog/Blog.styles';
import CardBlog from '../CardBlog';
import { cards } from './constants';
import PaginationComponent from '../PaginationComponent';
import Button, { ButtonContentTypes, ButtonTypes } from '../Button/Button';

function getSize(width) {
  if (width < 1025) return 4;

  if (width >= 1025) return 9;
  return 8;
}

const BlogComponents = () => {
  const { width: windowWidth } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [currentCards, setCurrentCards] = useState(cards);
  const { t } = useTranslation();

  const size = pageSize * currentPage - pageSize;

  function getData(width) {
    if (width < 768) {
      return setCurrentCards([...cards].slice(0, pageSize * currentPage));
    }
    if (width >= 768) {
      return setCurrentCards([...cards].slice(size, pageSize * currentPage));
    }

    return setCurrentCards([...cards].slice(size, pageSize * currentPage));
  }

  useEffect(() => {
    setPageSize(getSize(windowWidth));
    setCurrentPage(1);
  }, [windowWidth]);

  useEffect(() => {
    getData(windowWidth);
  }, [currentPage, pageSize, size]);

  return (
    <BlogStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack typoTitleSecondary">{t('blog.title')}</h2>
          <p className="typoTextPrimary">{t('blog.description')}</p>
          <div className="flex-container">
            <div className="list-container">
              <ul className="list">
                {currentCards.map((card) => (
                  <CardBlog key={uuidv4()} card={card} />
                ))}
              </ul>
            </div>

            <div className="search-container">
              <div className="search">
                <label className="label">
                  <input name="search" type="text" className="input-search" />
                  <i className="icon-search" />
                </label>
              </div>
              <h2 className="typoColorBlack typoButtonPrimary gap">{t('blog.popular')}</h2>
              <ul className="popular-list">
                {cards
                  .filter((card) => card.popular)
                  .map((item) => (
                    <li key={uuidv4()} className="typoTextSecondary">
                      {item.title}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {windowWidth < 768 ? (
            <div className="container-button">
              {cards.length > pageSize && currentCards.length !== cards.length && (
                <Button
                  btnType={ButtonTypes.PRIMARY}
                  contentType={ButtonContentTypes.TEXT}
                  content="Показати ще"
                  onBtnClick={() => {
                    setCurrentPage(currentPage + 1);
                  }}
                />
              )}
            </div>
          ) : (
            <PaginationComponent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={pageSize}
              total={cards.length}
            />
          )}
        </div>
      </div>
    </BlogStyles>
  );
};

export default BlogComponents;
