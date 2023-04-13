import Head from "next/head";
import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Head>
        <meta property="og:title" content={title} key="title" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
