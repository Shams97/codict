/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";

export default function CustomHead({ title, description, keywords }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" key="charset"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
        <meta name="theme-color" content="#F6F7FF" key="5" />
        <meta name="description" content={description} key="description" />
        <meta name="keywords" content={keywords} key="keywords" />
        <meta charSet="utf-8" />
        <meta name="google" content="nositelinkssearchbox"></meta>
        <meta name="robots" content="index,follow"></meta>
        <meta name="google" content="notranslate"></meta>
        <link rel="author" href="Mustafa Kamal"></link>

        <link rel="Creator" href="https://imustafa.com" type="text/html" />
        <link rel="me" href="mailto:gistcodee@gmail.com" />
        <link rel="me" href="sms:+9647826623170"></link>
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
    </>
  );
}
