import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <meta name="description" content="generated in next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="assets/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
