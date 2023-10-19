import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@/global/theme';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const customRender = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
