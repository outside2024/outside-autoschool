import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { StyledArticle } from '@/components/Article/Article.styled';
import Button from '@/components/Button';
import useWindowSize from '@/hooks/useWindowSize';
import SearchBlog from '@/components/SearchBlog';
import { withStrapi } from '@/global/helpers/helpers';

export function formatChild(child) {
  switch (child.type) {
    case 'list-item':
      return <li key={uuidv4()}>{child.children.map(formatChild)}</li>;
    case 'link':
      return (
        <Link className="articleLink" href={child.url || ''} key={uuidv4()}>
          {child.children.map(formatChild)}
        </Link>
      );
    case 'text':
      return child.text;
    default:
      return <span key={uuidv4()}>{child.children.map(formatChild)}</span>;
  }
}

export function formatRichText(data) {
  switch (data.type) {
    case 'list':
      switch (data.format) {
        case 'unordered':
          return (
            <ul className="typoSubtitle" key={uuidv4()}>
              {data.children.map(formatChild)}
            </ul>
          );
        case 'ordered':
          return <ol key={uuidv4()}>{data.children.map(formatChild)}</ol>;
        default:
          return <span key={uuidv4()}>{data.children.map(formatChild)}</span>;
      }
    case 'paragraph':
      return (
        <p className="typoColorBlack typoSubtitle articleParagraph" key={uuidv4()}>
          {data.children.map(formatChild)}
        </p>
      );
    default:
      return <span key={uuidv4()}>{data.children.map(formatChild)}</span>;
  }
}

const Article = ({ article, articlesList }) => {
  const { t } = useTranslation();
  const windowWidth = useWindowSize();

  const { prevArticle, nextArticle } = useMemo(
    () => ({
      prevArticle: articlesList.find((el) => el.id === article.id - 1),
      nextArticle: articlesList.find((el) => el.id === article.id + 1),
    }),
    [article, articlesList],
  );

  const date = moment(article.attributes.createdAt).format('YYYY-MM-DD');

  return (
    <StyledArticle className="contentContainer">
      <div className="contentWrapper">
        <div className="articleContainer">
          <div className="articleContent">
            {article?.attributes?.image?.data?.attributes?.url && (
              <Image
                src={withStrapi(article.attributes.image.data.attributes.url)}
                width={948}
                height={331}
                alt="article main image"
                quality={85}
                priority
                className="articleImg"
              />
            )}
            <h2 className="typoColorBlack typoTitleSecondary articleTitle">
              {article.attributes.title}
            </h2>
            <div className="typoColorBlack typoSubtitle articleDate">{date}</div>
            {article.attributes?.textBlock.length > 0 &&
              article.attributes.textBlock.map((textBlock) => (
                <div key={uuidv4()}>
                  {textBlock.subtitle && <h3 className="typoColorBlack">{textBlock.subtitle}</h3>}
                  {textBlock.text.richText.map(formatRichText)}
                </div>
              ))}

            <div className="articleBottomContainer">
              <div className="button">
                {prevArticle && (
                  <>
                    <div className="buttonContainer">
                      <div className="buttonTextPrev typoColorBlack typoArticleBtnText">
                        {t('article.btn_prev_text')}
                      </div>
                      <Link href={`/blog/${prevArticle.attributes.slug}` || ''}>
                        <Button
                          btnType="secondary"
                          contentType="icon"
                          btnWidth={windowWidth.width <= 900 ? 32 : 100}
                          btnHeight={windowWidth.width <= 900 ? 28 : 32}
                          content="icon-angle-down"
                          iconAngle={90}
                        />
                      </Link>
                    </div>
                    <div className="buttonTitle typoButtonTitle">
                      {prevArticle.attributes.title}
                    </div>
                  </>
                )}
              </div>
              <div className="button">
                {nextArticle && (
                  <>
                    <div className="buttonNextTitle typoButtonTitle">
                      {nextArticle.attributes.title}
                    </div>
                    <div className="buttonContainer">
                      <div className="buttonTextNext typoColorBlack typoArticleBtnText">
                        {t('article.btn_next_text')}
                      </div>
                      <Link href={`/blog/${nextArticle.attributes.slug}` || ''}>
                        <Button
                          btnType="secondary"
                          contentType="icon"
                          btnWidth={windowWidth.width <= 900 ? 32 : 100}
                          btnHeight={windowWidth.width <= 900 ? 28 : 32}
                          content="icon-angle-down"
                          iconAngle={270}
                        />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            <SearchBlog cards={articlesList} />
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      image: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      textBlock: PropTypes.arrayOf(
        PropTypes.shape({
          subtitle: PropTypes.string,
          text: PropTypes.shape({
            richText: PropTypes.arrayOf(PropTypes.shape({})),
          }),
        }),
      ),
    }),
  }).isRequired,
  articlesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default Article;
