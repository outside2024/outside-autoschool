import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import RootLayout from '@/layouts/RootLayout';
import BlogComponents from '@/components/Blog/Blog';
import StrAPIService from '@/global/services/strapiService';

const Blog = ({ allArticles }) => {
  const { locale } = useRouter();
  return (
    <RootLayout>
      <BlogComponents cards={allArticles} locale={locale} />
    </RootLayout>
  );
};

export default Blog;

export async function getServerSideProps({ locale }) {
  const { data } = await StrAPIService.getAllArticles(locale);

  return {
    props: { ...(await serverSideTranslations(locale, ['common'])), allArticles: data },
  };
}

Blog.propTypes = {
  allArticles: PropTypes.shape({
    attributes: PropTypes.shape({
      textBlock: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.shape({
            richText: PropTypes.arrayOf(
              PropTypes.shape({
                children: PropTypes.arrayOf(
                  PropTypes.shape({
                    text: PropTypes.string,
                  }),
                ),
              }),
            ),
          }),
        }),
      ),
      title: PropTypes.string,
      createdAt: PropTypes.string,
      blog_articles: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            attributes: PropTypes.shape({ title: PropTypes.string }),
          }),
        ).isRequired,
      }),
    }),
  }).isRequired,
};
