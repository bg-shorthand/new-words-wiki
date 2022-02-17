import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-7NXNZT6GQX`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-7NXNZT6GQX');
          `,
            }}
          />
          <meta name="description" content="누구나 함께 만드는 신조어 사전" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="신조어 위키" />
          <meta property="og:description" content="누구나 함께 만드는 신조어 사전" />
          <meta property="twitter:title" content="신조어 위키" />
          <meta property="twitter:description" content="누구나 함께 만드는 신조어 사전" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6551563436050338"
            crossOrigin="anonymous"
          ></script>
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
