import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Clutch from "../components/Clutch";
import TextBox from "../components/TextBox";
import Revolutionizing from "../components/Revolutionizing";
import OurClients from "../components/OurClient";
import Resonance from "../components/Resosnance";
import CaseStudies from "../components/CaseStudies";
import Work from "../components/Work";
import Challenges from "../components/Challenges";
import Contact from "../components/LetsWork";
import Technologies from "../components/Technologies";
import Head from "next/head";
import ChatBot from "./ChatBot";
// import Casereport from "./casereport";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>
          360XpertSolutions | Leader in Software Development and Business
          Solutions
        </title>
        <meta
          name="description"
          content="360XpertSolutions is a leading software house in Karachi specializing in Web Development, Mobile Apps, and IT Solutions. We are committed to innovation and excellence."
        />
        <meta
          name="keywords"
          content="360XpertSolutions, Software House, Karachi, Web Development, Mobile Apps, IT Solutions, Technology, Hiring, ReactJS"
        />
        <meta name="author" content="360XpertSolutions" />
        <link rel="canonical" href="https://www.360xpertsolutions.com/" />
        <meta
          property="og:title"
          content="360XpertSolutions | Leader in Software Development and Business Solutions"
        />
        <meta
          property="og:description"
          content="Discover top-tier web development, mobile apps, and IT solutions at 360XpertSolutions, Karachi's leading software house. Join us in revolutionizing technology."
        />
        <meta property="og:url" content="https://www.360xpertsolutions.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/_next/image?url=%2Fassets%2FVector.png&w=256&q=75"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* <Casereport/> */}

        <TextBox />
        <ChatBot />
        <Revolutionizing />
        <OurClients />
        <Resonance />
        <CaseStudies />
        <Technologies />
        <Challenges />
        <Work />
        <Contact />
      </Layout>
    </>
  );
};
export default Home;
