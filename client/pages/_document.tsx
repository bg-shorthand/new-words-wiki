import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="ko">
          <meta name="description" content="누구나 함께 만드는 신조어 사전" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="신조어 위키" />
          <meta property="og:description" content="누구나 함께 만드는 신조어 사전" />
          <meta property="twitter:title" content="신조어 위키" />
          <meta property="twitter:description" content="누구나 함께 만드는 신조어 사전" />
        </Head>
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
