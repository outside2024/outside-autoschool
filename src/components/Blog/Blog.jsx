import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';
import useWindowSize from '@/hooks/useWindowSize';
import BlogStyles from '@/components/Blog/Blog.styles';
import CardBlog from '../CardBlog';
import PaginationComponent from '../PaginationComponent';
import Button, { ButtonContentTypes, ButtonTypes } from '../Button/Button';
import SearchBlog from '../SearchBlog';
import PropTypes from 'prop-types';

function getSize(width) {
  if (width < 1025) return 4;

  if (width >= 1025) return 9;
  return 8;
}

const BlogComponents = ({ cards }) => {
  const { width: windowWidth } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const [currentCards, setCurrentCards] = useState(cards.data.attributes.blog_articles.data);
  const { t } = useTranslation();

  const size = pageSize * currentPage - pageSize;

  function getData(width) {
    if (width < 768) {
      return setCurrentCards(
        [...cards.data.attributes.blog_articles.data].slice(0, pageSize * currentPage),
      );
    }
    if (width >= 768) {
      return setCurrentCards(
        [...cards.data.attributes.blog_articles.data].slice(size, pageSize * currentPage),
      );
    }

    return setCurrentCards(
      [...cards.data.attributes.blog_articles.data].slice(size, pageSize * currentPage),
    );
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
          <div className="title-container">
            <h2 className="typoColorBlack typoTitleSecondary">{t('blog.title')}</h2>
            <div className="tablet-container">
              <SearchBlog cards={cards.data.attributes.blog_articles.data} />
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
              <SearchBlog cards={cards.data.attributes.blog_articles.data} />
            </div>
          </div>
          {windowWidth < 768 ? (
            <div className="container-button">
              {cards.data.attributes.blog_articles.data.length > pageSize &&
                currentCards.length !== cards.data.attributes.blog_articles.data.length && (
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
              total={cards.data.attributes.blog_articles.data.length}
            />
          )}
        </div>
      </div>
    </BlogStyles>
  );
};

export default BlogComponents;

BlogComponents.propTypes = {
  cards: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        blog_articles: PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              attributes: PropTypes.shape({ title: PropTypes.string }),
            }),
          ).isRequired,
        }),
      }),
    }),
  }).isRequired,
};
