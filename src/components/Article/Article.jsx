import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import {StyledArticle} from "@/components/Article/Article.styled";


const Article = () => {
  const { t } = useTranslation();
  return (
    <StyledArticle className="contentContainer">
      <div className="contentWrapper award">
        article
      </div>
    </StyledArticle>
  );
};

export default Article;
