import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '@/components/Header';
import { HeaderTypes } from '@/components/Header/Header';

const structuredDataLogo = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://outside.dp.ua/',
  logo: 'https://outside.dp.ua/logo.png',
};

const RootLayout = ({ children, meta, headerType }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta property="og:title" content="АУТСАЙД" />
      <meta property="og:description" content="Найкраща автошкола в Днепрі." />
      <meta property="og:image" content="%PUBLIC_URL%/website_preview.png" />
      {!meta.noindex && <meta name="robots" content="noindex" />}
      <script
        key="structured-data-logo"
        type="application/ld+json"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataLogo) }}
      />
    </Head>
    <Header headerType={headerType} />
    <main>{children}</main>
  </>
);
export default RootLayout;

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    noindex: PropTypes.bool,
  }),
  headerType: PropTypes.oneOf([HeaderTypes.LIGHT, HeaderTypes.DARK]),
};

RootLayout.defaultProps = {
  meta: {
    title: '',
    description: '',
    keywords: '',
    noindex: true,
  },
  headerType: HeaderTypes.DARK,
};
