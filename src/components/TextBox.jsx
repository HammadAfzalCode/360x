import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Container from "./Container";
import Box from "@mui/material/Box";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Clutch from "./Clutch";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ThreeFibreApp from "./ThreeFibreApp"; // Import the ThreeFiberApp component
import WaveForm from "./WaveForm";
import Head from "next/head";
import SchemaMarkup from "../pages/schema";

const TextBox = () => {
  const [isClient, setIsClient] = useState(false);
  const isNestHubScreen = useMediaQuery("(max-width:1200px)");
  const isXSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  useEffect(() => {
    setIsClient(true);
  }, []);

  const messages = [
    "CRMS",
    "XRMS",
    "App Development",
    "Web Development",
    "Saas",
    "Customer Engagement",
    "Supply Chain Management",
  ];

  return (
    <Container>
      <Head>
        <SchemaMarkup
          type="Service"
          headline="CRMS , XRMS ,App Development,Web Development ,Saas,Customer Engagement,Supply Chain Management , leader in software development"
          description="Our Business solutions based on ambitious companies "
          datePublished="2024-01-15T12:00:00Z"
          dateModified="2024-01-30T14:30:00Z"
          author="360XpertSolution"
          altText= "360XpertSolutions logo"
          certification="clutch certificate of honor"
        />
      </Head>
      <Grid container spacing={2} marginTop="130px">
        {/* Left Column */}
        <Grid
          item
          xs={12}
          lg={8}
          md={6}
          sm={12}
          marginTop="5%"
          order={isMediumScreen ? 2 : 1}
        >
          <Card sx={{ backgroundColor: "inherit" }} elevation={0}>
            <CardContent>
              <Box
                sx={{
                  fontSize: { sm: 50, xs: 30 },
                  fontFamily: "Clash Display",
                  color: "white",
                  display: "block",
                  fontWeight: "300",
                }}
              >
                Business solutions based on
                {/* {isClient && ( */}
                <Box sx={{ display: "block" }}>
                  <span
                    style={{
                      color: "red",
                      display: "inline-block",
                      fontWeight: "600",
                    }}
                  >
                    <Typewriter
                      options={{
                        strings: messages,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  <span style={{ fontWeight: "300" }}>for</span>
                </Box>
                {/* )} */}
                <Box sx={{ display: "block" }}>ambitious companies</Box>
              </Box>
            </CardContent>
            <CardActions>
              {/* <Button
        variant="contained"
        endIcon={<ArrowRightAltIcon />}
        sx={{
          minHeight: "80px",
          minWidth: "200px",
          fontSize:"17px",
          transform: "scale(0.8)",
          backgroundColor: "#D0140F",
          '&:hover': {
            backgroundColor: '#fff',
            color:"#D0140F" // Change background color on hover
          },
          "@media (max-width: 600px)": {
            // Adjust styles for smaller screens
            minWidth: "150px",
          },
        }}
      >
        Get Started
      </Button>
      <Button
        variant="text"
        endIcon={<ArrowRightAltIcon />}
        sx={{
          minHeight: "80px",
          minWidth: "200px",
          fontSize:"17px",
          transform: "scale(0.8)",
          color: "white",
          '&:hover': {
            backgroundColor: 'transparent',
            color:"#D0140F",
            border:"1px solid #D0140F" // Change background color on hover
          },
          "@media (max-width: 600px)": {
            // Adjust styles for smaller screens
            minWidth: "150px",
          },
        }}
      >
        View Services
      </Button> */}
              <Link href="./pricing">
                <Button
                  variant="contained"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    textTransform: "none",
                    height: "80px",
                    width: "12rem",
                    backgroundColor: "#D0140F",
                    transform: "scale(0.8)",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#D0140F",
                    },
                    "@media (max-width: 600px)": {
                      height: "3rem",
                      width: "10rem",
                      // maxWidth: "100px",
                      fontSize: "10px",
                    },
                    "@media (max-width: 370px)": {
                      height: "3rem",
                      width: "150px",
                      fontSize: "8px",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Link>
              {/* <Button
                variant="outlined"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  textTransform: "none",
                  transform: "scale(0.8)",
                  color: "#fff",
                  border: "1px solid #fff",
                  height: "80px",
                  width: "12rem",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#D0140F",
                    border: "1px solid #D0140F",
                  },
                  "@media (max-width: 600px)": {
                    height: "3rem",
                    width: "10rem",
                    fontSize: "10px",
                  },
                  "@media (max-width: 370px)": {
                    height: "3rem",
                    width: "150px",
                    fontSize: "8px",
                  },
                }}
              >
                View Services
              </Button> */}
            </CardActions>
          </Card>
          <Clutch />
        </Grid>

        {/* Right Column - 3D Model */}
        <Grid item xs={12} lg={4} md={6} order={isMediumScreen ? 1 : 2}>
          <ThreeFibreApp />
        </Grid>
        <Grid item xs={12} lg={10} md={6} order={isMediumScreen ? 1 : 2}>
          <WaveForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TextBox;
