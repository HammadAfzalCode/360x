import Layout from "./../components/Layout";
import PricingSection from "./../components/PricingSection";
import React from "react";
import LetsWork from "./../components/LetsWork";
import Common from "./../components/Common";
import Head from "next/head";

const pricing = () => {
  return (
    <>
      <Head>
        <title>Pricing - 360XpertsSolutions</title>
      <meta name="description" hreflang="en" content="Your custom meta description goes here." /> 
      </Head>

      <Layout>
        <Common
          H1="How Much Will"
          main="Your Project"
          H2=" Cost?"
          paragraph="Our developers employ the latest technologies, frameworks, and components to create solutions that combine a strong technical back-end with easy to use modern design."
        includingImage="true"
        />
        <PricingSection />
        <LetsWork />
      </Layout>
    </>
  );
};
export default pricing;
