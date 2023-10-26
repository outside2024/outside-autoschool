import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';

const App = ({ Component }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component />
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default appWithTranslation(App);
