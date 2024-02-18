import React from 'react';
import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store';


function MyApp({ Component, pageProps }) {
  return (
  <>
   return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
      </>
  );
}

export default MyApp;
