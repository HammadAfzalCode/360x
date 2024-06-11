import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import { Button, Typography, Grid, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Container from "./Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import Head from "next/head";
import SchemaMarkup from "../pages/schema";
// import { useEffect, useState } from 'react';
const Footer = () => {
  const router = useRouter();
  const theme = useTheme();
  const isTabScreen = useMediaQuery("(max-width: 943px)");
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isXSmallScreen = useMediaQuery("(max-width: 1042px)");
  const linkedInProfileLink =
    "https://www.linkedin.com/company/360Xpertsolutions";
  const facebookProfileLink = "https://www.facebook.com/360Xpertsolutions";
  const instagramProfileLink = "https://www.instagram.com/360xpertsolutions/";
  const openLinkInNewTab = (profileLink) => {
    window.open(profileLink, "_blank").focus();
  };
  const navItems = ["About", "Case Studies", "Pricing"];
  const handleMenuItemClick = (item) => {
    if (item === "Pricing") {
      router.push("/pricing");
    }
    if (item === "About") {
      router.push("/about");
    }
    if (item === "Case Studies") {
      router.push("/Casestudy");
    }
  };
  const handleLogoClick = () => {
    // Use router.push to navigate programmatically
    router.push("/");
  };

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Head>
        <SchemaMarkup
          type="360xpertSolutions webpage footer"
          title="Accelerating Innovation, Amplifying Impact: We transform visions into reality"
          description="about , pricing , blog , caseStudy, services , industries, all right are reserved to 360XpertSolutions"
          connect="connect@360xpertsolutions.com, https://www.linkedin.com/company/360Xpertsolutions ,https://www.instagram.com/360xpertsolutions/ ,https://www.facebook.com/360Xpertsolutions "
        />
      </Head>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "20px",
            flexShrink: 0,
            backgroundColor: "#D0140F",
          }}
        />
        <Container>
          <Grid
            container
            direction={isXSmallScreen ? "column" : "row"}
            justifyContent="space-between"
            alignItems=""
            paddingY="40px"
            width="100%"
          >
            <Grid item>
              <Image
                onClick={handleLogoClick}
                src="/assets/Vector.png"
                width={isXSmallScreen ? 100 : 150}
                height={isXSmallScreen ? 35 : 50}
              />
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {navItems.map((item, index) =>
                index === 2 ? (
                  <MenuItem
                    onClick={() => handleMenuItemClick(item)}
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "12px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                      cursor: item === "Pricing" ? "pointer" : "default", // Set cursor style for clickable item
                    }}
                  >
                    {item}
                  </MenuItem>
                ) : index === 1 ? (
                  <MenuItem
                    onClick={() => handleMenuItemClick(item)}
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "12px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                      cursor: item === "Pricing" ? "pointer" : "default", // Set cursor style for clickable item
                    }}
                  >
                    {item}
                  </MenuItem>
                ) : index === 0 ? (
                  <MenuItem
                    onClick={() => handleMenuItemClick(item)}
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "12px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                      cursor: item === "Pricing" ? "pointer" : "default", // Set cursor style for clickable item
                    }}
                  >
                    {item}
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "12px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                    }}
                  >
                    {item}
                  </MenuItem>
                )
              )}
            </Grid>
          </Grid>

          {/* Content Section */}
          <Grid container>
            {/* Box 1 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: isXSmallScreen ? "column" : "row",
                alignItems: isXSmallScreen ? "" : "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "5vh",
                  justifyContent: "space-around",
                }}
              >
                <Grid item xs={12} md={4} sx={{}}>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "12.416px",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Accelerating Innovation, Amplifying Impact: We transform
                    visions into reality
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "12.416px",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    connect@360xpertsolutions.com
                  </Typography>
                </Grid>

                {/* Box 2 */}
                <Grid item xs={12} md={4}>
                  {/* <Typography sx={{ color: '#FFF', fontSize: '12.416px', fontWeight: 400, lineHeight: 'normal' }}>
          B-121 Block 2 Gulshan e Iqbal 75300 Karachi,Pakistan
          </Typography> */}
                </Grid>
              </Box>
              {/* Box 3 */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    borderTop: "1px solid #fff",
                    width: "100%",
                    height: "2px",
                  }}
                />
                <Grid
                  container
                  direction="row" // Set the direction to 'row' for all screen sizes
                  spacing={0}
                  sx={{
                    paddingY: "0px",
                    paddingRight: "20px",
                    "& > *": {
                      marginBottom: "10px",
                    },
                  }}
                >
                  <Grid item>
                    <Button
                      sx={{ color: "#fff" }}
                      variant="text"
                      onClick={() => openLinkInNewTab(linkedInProfileLink)}
                      startIcon={<LinkedInIcon />}
                      target="_blank" // Open link in a new tab
                      // rel="noopener noreferrer" // Security best practice to use these attributes
                    >
                      {!isXSmallScreen}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{ color: "#fff" }}
                      variant="text"
                      onClick={() => openLinkInNewTab(instagramProfileLink)}
                      startIcon={<InstagramIcon />}
                    >
                      {!isXSmallScreen}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{ color: "#fff" }}
                      variant="text"
                      onClick={() => openLinkInNewTab(facebookProfileLink)}
                      startIcon={<FacebookIcon />}
                    >
                      {!isXSmallScreen}
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    borderTop: "1px solid #fff",
                    width: "100%",
                    height: "2px",
                  }}
                />
              </Grid>
            </Box>
          </Grid>

          {/* Copyright Section */}
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="start"
            sx={{
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Grid item display="flex" justifyContent="center">
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Helvetica",
                    fontSize: "12px",
                    fontStyle: "normal",
                    textAlign: "center",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  © {currentYear} 360XpertSolutions. All rights reserved.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
