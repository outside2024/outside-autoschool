import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RootLayout from '@/layouts/RootLayout';
import BlogComponents from '@/components/Blog/Blog';

const Blog = () => (
  <RootLayout>
    <BlogComponents />
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
