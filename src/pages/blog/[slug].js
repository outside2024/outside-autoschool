import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Article from '@/components/Article';
import StrAPIService from '@/global/services/strapiService';

const ArticlePage = ({ article, articlesList }) => (
  <RootLayout headerType="light">
    {article && <Article article={article} articlesList={articlesList} />}
  </RootLayout>
);
export default ArticlePage;

export async function getServerSideProps({ locale, params }) {
  const [article, data] = await Promise.all([
    StrAPIService.getArticlesBySlug(locale, params.slug),
    StrAPIService.getAllArticles(locale),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      article,
      articlesList: data.attributes.blog_articles.data,
    },
  };
}

ArticlePage.propTypes = Article.propTypes;
