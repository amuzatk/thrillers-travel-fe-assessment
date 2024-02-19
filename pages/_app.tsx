import React from 'react';
// import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../store';


function MyApp({ Component, pageProps }) {
  return (
  <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
      </>
  );
}

export default MyApp;


// import React from 'react';
// import dynamic from 'next/dynamic';
// import '../styles/globals.scss';
// import { Provider } from 'react-redux';
// import { store } from '../store';

// const DynamicTawkToWidget = dynamic(() => import('../components/TawkToWidget'), {
//   ssr: false,
// });

// function MyApp({ Component, pageProps }) {
//   return (
//   <>
//   <Provider store={store}>
//   <Component {...pageProps} />
//       <DynamicTawkToWidget />
//       </Provider>
//       </>
//   );
// }

// export default MyApp;