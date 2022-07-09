import React from 'react';
import Head from 'next/head';
import { Header, Footer } from './';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '-ecommerce' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className="container m-auto pt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
