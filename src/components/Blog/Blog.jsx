import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import useWindowSize from '@/hooks/useWindowSize';
import BlogStyles from '@/components/Blog/Blog.styles';
import CardBlog from '../CardBlog';
import PaginationComponent from '../PaginationComponent';
import Button, { ButtonContentTypes, ButtonTypes } from '../Button/Button';
import SearchBlog from '../SearchBlog';

function getSize(width) {
  if (width < 1025) return 4;

  if (width >= 1025) return 9;
  return 8;
}

const BlogComponents = ({ cards, locale }) => {
  const { width: windowWidth } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [currentCards, setCurrentCards] = useState(cards.attributes.blog_articles.data);
  const { t } = useTranslation();

  const size = pageSize * currentPage - pageSize;

  function getData(width) {
    if (width < 768) {
      return setCurrentCards(
        [...cards.attributes.blog_articles.data].slice(0, pageSize * currentPage),
      );
    }
    if (width >= 768) {
      return setCurrentCards(
        [...cards.attributes.blog_articles.data].slice(size, pageSize * currentPage),
      );
    }

    return setCurrentCards(
      [...cards.attributes.blog_articles.data].slice(size, pageSize * currentPage),
    );
  }

  useEffect(() => {
    setPageSize(getSize(windowWidth));
    setCurrentPage(1);
  }, [windowWidth]);

  useEffect(() => {
    getData(windowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize, size, locale]);

  return (
    <BlogStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <div className="title-container">
            <h2 className="typoColorBlack typoTitleSecondary">{t('blog.title')}</h2>
            <div className="tablet-container">
              <SearchBlog cards={cards.attributes.blog_articles.data} />
            </div>
          </div>
          <p className="typoTextPrimary">{t('blog.description')}</p>
          <div className="flex-container">
            <div className="list-container">
              <ul className="list">
                {currentCards.map((card) => (
                  <CardBlog key={uuidv4()} card={card} />
                ))}
              </ul>
            </div>
            <div className="desktop-container">
              <SearchBlog cards={cards.attributes.blog_articles.data} />
            </div>
          </div>
          {windowWidth < 768 ? (
            <div className="container-button">
              {cards.attributes.blog_articles.data.length > pageSize &&
                currentCards.length !== cards.attributes.blog_articles.data.length && (
                  <Button
                    btnType={ButtonTypes.PRIMARY}
                    contentType={ButtonContentTypes.TEXT}
                    content={t('blog.show_more')}
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
              total={cards.attributes.blog_articles.data.length}
            />
          )}
        </div>
      </div>
    </BlogStyles>
  );
};

export default BlogComponents;

BlogComponents.propTypes = {
  locale: PropTypes.string.isRequired,
  cards: PropTypes.shape({
    attributes: PropTypes.shape({
      blog_articles: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            attributes: PropTypes.shape({ title: PropTypes.string }),
          }),
        ),
      }),
    }),
  }).isRequired,
};
