import {useTranslation} from 'next-i18next';
import Image from 'next/image';
import Link from "next/link";
import {useMemo} from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {StyledArticle} from "@/components/Article/Article.styled";
import Button from "@/components/Button";
import useWindowSize from "@/hooks/useWindowSize";
import SearchBlog from "@/components/SearchBlog";


export function formatChild(child) {
  switch (child.type) {
    case 'list-item':
      return <li>{child.children.map(formatChild)}</li>;
    case 'link':
      return <Link className="articleLink" href={child.url}>{child.children.map(formatChild)}</Link>;
    case 'text':
      return child.text;
    default:
      return <span style={{color: 'red'}}>{child.children.map(formatChild)}</span>;
  }
}

export function formatRichText(data) {
  switch (data.type) {
    case 'list':
      switch (data.format) {
        case 'unordered':
          return <ul className="typoSubtitle">{data.children.map(formatChild)}</ul>;
        case 'ordered':
          return <ol>{data.children.map(formatChild)}</ol>;
        default:
          return <span style={{color: 'red'}}>{data.children.map(formatChild)}</span>;
      }
    case 'paragraph':
      return <p className="typoColorBlack typoSubtitle">{data.children.map(formatChild)}</p>;
    default:
      return <span style={{color: 'red'}}>{data.children.map(formatChild)}</span>;
  }
}

const Article = ({article, articlesList}) => {
  const {t} = useTranslation();
  const windowWidth = useWindowSize();

  const {prevArticle, nextArticle} = useMemo(() => ({
    prevArticle: articlesList.find(el => el.id === article.id - 1),
    nextArticle: articlesList.find(el => el.id === article.id + 1)
  }), [article, articlesList]);

  const date = moment(article.attributes.createdAt).format("YYYY-MM-DD");


  console.log({articlesList})


  return (
    <StyledArticle className="contentContainer">
      <div className="contentWrapper">
        <div className="articleContainer">
          <div className="articleContent">
            <h2 className="typoColorBlack typoTitleSecondary articleTitle">{article.attributes.title}</h2>
            <div className="typoColorBlack typoSubtitle articleDate">{date}</div>
            {article.attributes?.textBlock.length > 0 && article.attributes.textBlock.map(textBlock => <>
              {textBlock.subtitle && <h3 className="typoColorBlack">{textBlock.subtitle}</h3>}
              {textBlock.text.richText.map(formatRichText)}
            </>)}
            {article.image &&
              <Image
                src={article.image}
                width={948}
                height={331}
                alt="article main image"
                quality={85}
                priority
                className="articleImg"
              />}

            <div className="articleBottomContainer">
              <div className="button">
                {prevArticle && <>
                  <div className="buttonContainer">
                    <div className="buttonTextPrev typoColorBlack typoArticleBtnText">{t('article.btn_prev_text')}</div>
                    <Link href={`/blog/${prevArticle.id}`}>
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
                  <div className="buttonTitle typoButtonTitle">{prevArticle.attributes.title}</div>
                </>}
              </div>
              <div className="button">
                {nextArticle && <>
                  <div className="buttonNextTitle typoButtonTitle">{nextArticle.attributes.title}</div>
                  <div className="buttonContainer">
                    <div className="buttonTextNext typoColorBlack typoArticleBtnText">{t('article.btn_next_text')}</div>
                    <Link href={`/blog/${nextArticle.id}`}>
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
                </>}
              </div>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line react/prop-types */}
            <SearchBlog cards={articlesList}/>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

Article.propTypes = {
  image: PropTypes.string,
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      textBlock: PropTypes.arrayOf(
        PropTypes.shape({
          subtitle: PropTypes.string.isRequired,
          text: PropTypes.shape({
            richText: PropTypes.arrayOf(
              PropTypes.shape({}),
            )
          })
        })
      ),
    })
  }).isRequired,
  articlesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  ).isRequired
}

Article.defaultProps = {
  image: ""
}

export default Article;
