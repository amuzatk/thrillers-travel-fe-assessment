import React from 'react';
// import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store';
// import NavBar from '../components/shared/navbar';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Provider store={store}>
      {/* <NavBar handleOpenMenu={function (): void {
          throw new Error('Function not implemented.');
        } } /> */}
      <Component {...pageProps} />
    </Provider>
      </>
  );
}

export default MyApp;