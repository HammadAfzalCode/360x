import React from "react";
import "../styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaId="G-86KR95GT0N" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
