import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Container from "./../components/Container";
import Work from "./../components/Work";
import { LinkOff } from "@mui/icons-material";
import Head from "next/head";

export default function Casestudy() {
  return (
    <>
      <Head>
        <title>Case studies - 360XpertsSolutions</title>
        <meta name="description" hreflang="en" content="360XpertSolutions experience, performance and journey with their clients and experties in various industries" />
        <meta name="author" content="360XpertSolutions" />
        <link rel="cononical" href="https://360xpertsolutions.com/Casestudy" />
        <meta
          property="og:title"
          content="360XpertSolutions collabrations and case studies "
        />
        <meta property="og:description" content="Explore our beautiful collaborations and discover effective sales processes. Unveil valuable customer insights through cohort analysis. Learn about successful business strategies, customer engagement, and data-driven sales optimization. Join us on a journey of collaborative success stories in the world of business." /> 
        <meta name="keywords" content="360XpertSolutions,collaborative stories,cohort analysis,customer engagment strategies,sales process optimizations,data driven sales,marketing,testimonials,Customer Insights Analysis"/>
        <meta name="geo.region" content="PK-S" />
        <meta name="geo.placename" content="Karachi, Sindh, Pakistan" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta http-equiv="Content-Language" content="en" />
        <meta property="og:image" content="https://360xpertsolutions.com/assets/x.png"/>
        <meta property="og:image" content="https://360xpertsolutions.com/assets/Rectangle1933%20(1).svg"/>
        <meta property="og:image" content="https://360xpertsolutions.com/assets/Rectangle%201934.svg"/>
        <meta property="og:image" content="https://360xpertsolutions.com/assets/Rectangle%201936.svg"/>
        <meta property="og:image" content="https://360xpertsolutions.com/assets/Rectangle%201937.svg"/>


      </Head>
      <Box>
        <Navbar />
        <Container>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ paddingTop: "10%", marginTop: "50px" }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Clash Display",
                    fontSize: { xs: "40px", md: "60px" },
                  }}
                >
                  Stories: our beautiful
                </Typography>

                <Typography
                  sx={{
                    color: "red",
                    lineHeight: "1.5",
                    display: "flex",
                    gap: "20px",
                    fontSize: { xs: "40px", md: "60px" },
                  }}
                >
                  collaborations
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="./performance">
                  <img
                    src="./assets/Rectangle1933 (1).svg"
                    alt="Sales Process"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      paddingTop: "40px",
                    }}
                  />
                </Link>
              </Grid>
              <Grid container spacing={2}>
                {/* Add any additional grid items if needed */}
              </Grid>

              <Grid container spacing={2}>
                {/* Add any additional grid items if needed */}
              </Grid>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ justifyContent: "space-between" }}>
                  <Box
                    sx={{
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                      textAlign: "center",
                      position: "relative",
                    }}

                  >
                    <Link href="./cohort-analysis">
                      <Typography
                        variant="h1"
                        sx={{
                          width: { lg: "600px", md: "600", sm: "400", xs: "300" },
                          color: '#ffffff',
                          textShadow: "4px 4px 4px black",
                          border: '2px solid black',
                          position: "absolute",
                          display: "flex",
                          top: "60%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          cursor: "pointer",
                          fontFamily: "cursive",
                          // fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                          border: "black",
                          wordSpacing: "2px",
                          fontSize: { xs: "14px", sm: "22px", md: "31px", lg: "46px" },

                        }}
                      >

                        Unveiling Customer Insights
                        with Cohort Analysis
                      </Typography>
                    </Link>
                    {/* 360 */}
                    <Link href="./cohort-analysis">
                      <img
                        src="./assets/Rectangle 1934.svg"
                        alt="Sales Process"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Link href="./performance">
                      <img
                        src="./assets/Rectangle 1936.svg"
                        alt="Sales Process"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Link href="./performance">
                      <img
                        src="./assets/Rectangle 1935.svg"
                        alt="Sales Process"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    <Link href="./performance">
                      <img
                        src="./assets/Rectangle 1937.svg"
                        alt="Sales Process"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          paddingTop: "10px",
                        }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
              {/* <Box>

}}
>
<img
      src="/Group 302.svg"
      alt="Sales Process"
      style={{ maxWidth: '100%', height: 'auto' ,paddingTop:"40px" }}
    />

</Box>
</Box> */}
            </Grid>
          </Box>
        </Container>
        <Work />
        <Footer />
      </Box>
    </>
  );
}
