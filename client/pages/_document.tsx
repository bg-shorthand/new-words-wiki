import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="portal" />
          <NextScript />
          <script src="https://kit.fontawesome.com/1d6203395d.js" crossOrigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}
