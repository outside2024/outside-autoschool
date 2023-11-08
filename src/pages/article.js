import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import Article from "@/components/Article";
import {regularArticle} from "@/global/constants/selectedArticle";


const Online = () => (
  <RootLayout>
  <Article article={regularArticle}/>
  </RootLayout>
);
export default Online;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
