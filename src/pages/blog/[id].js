import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Article from "@/components/Article";
import StrAPIService from "@/global/services/strapiService";


const ArticlePage = ({article, articlesList}) => (
  <RootLayout>
    <Article article={article} articlesList={articlesList}/>
  </RootLayout>
);
export default ArticlePage;

export async function getServerSideProps({locale, params}) {
  const {data: article} = await StrAPIService.getArticlesById(locale, Number(params.id));
  const {data} = await StrAPIService.getAllArticles(locale);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      article,
      articlesList: data.attributes.blog_articles.data
    },
  };
}

ArticlePage.propTypes = Article.propTypes;