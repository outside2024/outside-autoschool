import {useTranslation} from 'next-i18next';
import Image from 'next/image';
import {StyledArticle} from "@/components/Article/Article.styled";
import Button from "@/components/Button";
import useWindowSize from "@/hooks/useWindowSize";


const Article = ({article}) => {
  const { t } = useTranslation();
  const windowWidth=useWindowSize();

  console.log(article)
  return (
    <StyledArticle className="contentContainer">
      <div className="contentWrapper">
        <div className="articleContainer">
          <div className="articleContent">
            {/* {article.image && */}
            {/*   <Image */}
            {/*     src={article.image} */}
            {/*     width={948} */}
            {/*     height={331} */}
            {/*     alt="article main image" */}
            {/*     quality={85} */}
            {/*     priority */}
            {/*     className="articleImg" */}
            {/*   />} */}
            {/* <h2 className="typoColorBlack typoTitleSecondary articleTitle">{article.title}</h2> */}
            {/* <div className="typoColorBlack typoSubtitle articleDate">{article.date}</div> */}
            {/* { */}
            {/*   article.content.map((data => { */}
            {/*     switch (data.type) { */}
            {/*       case "ul": */}
            {/*         return <ul> */}
            {/*           {data.value.map(li => (<li key={111}>{li}</li>))} */}
            {/*         </ul> */}
            {/*       case "p": */}
            {/*       default: */}
            {/*         // eslint-disable-next-line react/no-danger */}
            {/*         return <p dangerouslySetInnerHTML={{__html: data.value}}/> */}
            {/*     } */}
            {/*   })) */}
            {/* } */}
            <div className="articleBottomContainer">
              <div className="button">
                <div className="buttonContainer">
                  <div className="buttonTextPrev typoColorBlack typoArticleBtnText">{t('article.btn_prev_text')}</div>
                  <Button
                    btnType="secondary"
                    contentType="icon"
                    btnWidth={windowWidth.width <= 900 ? 32: 100}
                    btnHeight={windowWidth.width <= 900 ? 28: 32}
                    content="icon-angle-down"
                    iconAngle={90}
                  />
                </div>
                {/* <div className="buttonTitle typoButtonTitle">{article.previous}</div> */}
              </div>
              <div className="button">
                {/* <div className="buttonNextTitle typoButtonTitle">{article.next}</div> */}
                <div className="buttonContainer">
                  <div className="buttonTextNext typoColorBlack typoArticleBtnText">{t('article.btn_next_text')}</div>
                  <Button
                    btnType="secondary"
                    contentType="icon"
                    btnWidth={windowWidth.width <= 900 ? 32: 100}
                    btnHeight={windowWidth.width <= 900 ? 28: 32}
                    content="icon-angle-down"
                    iconAngle={270}
                  />
                </div>

              </div>
            </div>
          </div>
          <div>Search</div>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Article;
