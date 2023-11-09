import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Article from "@/components/Article";
import StrAPIService from "@/global/services/strapiService";


const ArticlePage = ({article}) => (

  <RootLayout>
  <Article article={article}/>
  </RootLayout>
);
export default ArticlePage;

export async function getServerSideProps({ locale}) {
  const { data } = await StrAPIService.getArticlesById(locale, 2);

  return {
    props: { ...(await serverSideTranslations(locale, ['common'])), article: data },
  };
}
