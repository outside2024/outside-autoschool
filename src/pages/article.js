import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Article from "@/components/Article";
import {regularArticle} from "@/components/Article/selectedArticle";


const ArticlePage = () => (
  <RootLayout>
  <Article article={regularArticle}/>
  </RootLayout>
);
export default ArticlePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
