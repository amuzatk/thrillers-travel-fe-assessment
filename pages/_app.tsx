import React from 'react';
import dynamic from 'next/dynamic';
import '../styles/globals.scss';

const DynamicTawkToWidget = dynamic(() => import('../components/TawkToWidget'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
  <><Component {...pageProps} />
      <DynamicTawkToWidget /></>
  );
}

export default MyApp;