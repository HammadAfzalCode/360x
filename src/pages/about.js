import Layout from "../components/Layout";
import React from "react";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Common from "../components/Common";
import { Grid, Typography } from "@mui/material";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About us - 360XpertsSolutions</title>
        <meta name="description" hreflang="en" content="Your custom meta description goes here." />
      </Head>
      <Layout>
        <Common
          H1="We excel in "
          main=" revolutionizing"
          H2=" your business processes."
          paragraph="At 360Xpert solutions, we care about the detail, and what makes your organization unique. You no longer have to accept the one-size-fits-all approach of boxed vendor solutions, because we've hand-picked our team to ensure they have the right level of creativity, tenacity and skill to help you achieve the outcomes you desire."
          includingImage="false"
        />
        <Grid container spacing={2} sx={{ padding: "50px" }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Clash Display",
              }}
            >
              Our Vision
              <Typography
                sx={{
                  color: "#FFFF",
                  borderColor: "#3A3A3A",
                  marginBottom: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  maxWidth: "500px",
                }}
              >
                Bringing IT solutions within reach of the ambitions and
                performance of companies.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Clash Display",
              }}
            >
              Our Mission
              <Typography
                sx={{
                  color: "#FFFF",
                  borderColor: "#3A3A3A",
                  marginBottom: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  maxWidth: "500px",
                }}
              >
                Optimize our clients' sales and marketing performance by
                understanding their strategy and applying with our deep
                expertise in software.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Clash Display",
              }}
            >
              Our Values
              <Typography
                sx={{
                  color: "#FFFF",
                  borderColor: "#3A3A3A",
                  marginBottom: "10px",
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  maxWidth: "500px",
                }}
              >
                Expertise <br /> Agility <br /> Well-being at work <br /> Social
                commitment <br /> Equity and solidarity.
              </Typography>
            </Typography>
          </Grid>
        </Grid>
        <Work />
        <Contact />
      </Layout>
    </div>
  );
};

export default About;
