import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import '@/styles/style.css';

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

App.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType.isRequired,
};

App.defaultProps = {
  pageProps: {},
};

export default appWithTranslation(App);
