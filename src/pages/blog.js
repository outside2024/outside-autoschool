import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import BlogComponents from '@/components/Blog/Blog';
import { cards } from '../components/Blog/constants';

const Blog = () => (
  <RootLayout>
    <BlogComponents cards={cards} />
  </RootLayout>
);

export default Blog;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 60,
  };
}
