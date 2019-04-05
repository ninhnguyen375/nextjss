import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/static/Fetoria-black.png" />
          <link href="/static/lib/css/animate.css" rel="stylesheet" />
          <link href="/static/lib/css/bootstrap.css" rel="stylesheet" />
          <link href="/static/lib/slick/slick.css" rel="stylesheet" />
          <link href="/static/lib/slick/slick-theme.css" rel="stylesheet" />
          <link href="/static/lib/css/JF.css" rel="stylesheet" />
          <link href="/static/lib/css/all.css" rel="stylesheet" />
          <link href="/static/lib/css/index.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
