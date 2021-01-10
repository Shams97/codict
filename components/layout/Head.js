import React from "react";
import Head from "next/head";

export default function CustomHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      {/* Twitter */}
      <meta name="twitter:card" content={description} key="twcard" />
      <meta name="twitter:creator" content="codict" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={"https://www.codict.io"} key="ogurl" />
      <meta property="og:image" content="/favicon.ico" key="ogimage" />
      <meta property="og:site_name" content="codict" key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Head>
  );
}
