"use client";
import { Box, Typography, Grid } from "@mui/material";
import Container from "../components/Container";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Head from "next/head";
import SchemaMarkup from "../pages/schema";
// import { LinearProgress } from "@mui/material";
// import { useState, useEffect } from "react";
// import  "../styles/globals.css"
// import GridBox from "./GridBox";
// import { Health } from "../../public/assets/healthcare.svg";

export default function Challenges() {
  const imagesPath = [
    "/assets/healthcare.svg",
    "/assets/banking.svg",
    "/assets/investments.svg",
    "/assets/retail.svg",
    "/assets/manufacturing.svg",
    "/assets/information-technologies.svg",
    "/assets/transportation.svg",
    "/assets/professional-services.svg",
  ];
  const TextPath = [
    "Health Care",
    "Banking",
    "Investment",
    "Retail",
    "Manufacturing",
    "Information Technologies",
    "Logistics & Distribution",
    "Cyber Security",
  ];
  // const [hoverStates, setHoverStates] = useState(Array(8).fill(false));

  // const handleMouseOver = (index) => {
  //     const updatedHoverStates = [...hoverStates];
  //     updatedHoverStates[index] = true;
  //     setHoverStates(updatedHoverStates);
  // };

  // const handleMouseOut = (index) => {
  //     const updatedHoverStates = [...hoverStates];
  //     updatedHoverStates[index] = false;
  //     setHoverStates(updatedHoverStates);
  // };

  const isMediumScreen = useMediaQuery("(min-width:700px)");
  const isXSmallScreen = useMediaQuery("(max-width:300px)");

  return (
    <>
      <Head>
        <SchemaMarkup
          type="our business"
          headline="We adapt to your business & your challenges"
          description="Health Care, Banking,Investment,Retail,Manufacturing ,Information Technologies,Logistics & Distribution,Cyber Security, We’ve excelled our experience in a wide range of industries to
            bring valuable insights and provide our customers with the truly
            beneficial solutions.  "
        />
      </Head>

      <Container>
        <Box
          sx={{
            // Adjusted width=
            width: { lg: "45rem", md: "40rem", sm: "30rem", xs: "100%" },
            flexDirection: "column",
            marginTop: "50px",
            gap: "10px", // Reduced the gap
          }}
        >
          <Typography>
            <span
              style={{
                color: "#D0140F",
                fontFamily: "Clash Display",
                fontSize: isMediumScreen ? "50px" : "30px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              We adapt
            </span>{" "}
            &nbsp;
            <span
              style={{
                color: "#FFF",
                fontFamily: "Clash Display",
                fontSize: isMediumScreen ? "50px" : "30px",
                fontStyle: "normal",
                fontWeight: "300",
                lineHeight: "normal",
              }}
            >
              to your business & your challenges
            </span>
          </Typography>

          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: isMediumScreen ? "19px" : "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              pb: "10%",
            }}
          >
            We’ve excelled our experience in a wide range of industries to bring
            valuable insights and provide our customers with the truly
            beneficial solutions.
          </Typography>
        </Box>

        {/* BOXES  */}
        <Grid container spacing={4} paddingBottom={6} paddingRight={2}>
          {/* Top Boxes */}

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <Grid key={item} item xs={12} md={6} sm={6} lg={3}>
              <Box
                sx={{
                  width: "100%",
                  height: "186px",

                  background: "#252525",
                  boxShadow: "0px 13px 15px 0px rgba(0,0,0,0.1)",
                  margin: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                // onMouseOver={() => handleMouseOver(index)}
                // onMouseOut={() => handleMouseOut(index)}
              >
                {/* {hoverStates[index] && (
                <LinearProgress
                
                    className="progress"
                    sx={{ width: "100%", background:"red",
                    "& .MuiLinearProgress-barColorPrimary": {
                      backgroundColor: "red", // Change the primary (default) color
                    }}}
                />
                )} */}
                <Image
                  alt={TextPath[index]}
                  src={imagesPath[index]}
                  width={108}
                  height={108}
                  justifyContentCenter="center"
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Clash Display",
                    fontSize: isXSmallScreen ? "15px" : "20px",
                    fontStyle: "normal",
                    fontWeight: "300",
                    lineHeight: "normal",
                    inline: "block",
                  }}
                >
                  {TextPath[index]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
