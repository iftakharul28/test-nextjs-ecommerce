import React from 'react';
import { StateContext } from '../context/StateContext';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <StateContext products={pageProps?.products}>
      <Component {...pageProps} />
    </StateContext>
  );
}
export default MyApp;
