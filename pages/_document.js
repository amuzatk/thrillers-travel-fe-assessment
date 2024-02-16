import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
{/* <link rel="stylesheet" href={process.env.GOOGLE_FONTS_URL} /> */}
{/* <link rel="stylesheet" href="/fonts/fonts.css" /> */}
{/* <link rel="stylesheet" href="/fonts/fonts.css" /> */}
<script src={process.env.TAWKTO_SCRIPT_URL} async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;