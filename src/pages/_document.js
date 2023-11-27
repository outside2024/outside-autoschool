import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key={uuidv4()}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ua">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple_icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <Script
            type="text/javascript"
            id="binotel-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function (d, w, s) {
              var widgetHash = '0YN6Klj5E79ArQAdWgLZ',
                bch = d.createElement(s);
              bch.type = 'text/javascript';
              bch.async = true;
              bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
              var sn = d.getElementsByTagName(s)[0];
              sn.parentNode.insertBefore(bch, sn);
            })(document, window, 'script')`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
