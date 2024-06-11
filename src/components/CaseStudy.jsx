import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, Slide, Paper, Button } from "@mui/material";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Head from "next/head";
import SchemaMarkup from '../pages/schema';
const CaseStudies = () => {
  const isXXSmallScreen = useMediaQuery("(max-width:300px)");
  const isXSmallScreen = useMediaQuery("(max-width:399px)");
  const isSmallScreen = useMediaQuery("(max-width:400px)");
  const isSmallBigScreen = useMediaQuery("(max-width:500px)");
  const isSmallMediumScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const isLargeScreen = useMediaQuery("(max-width:1092px)");
  const isXLargeScreen = useMediaQuery("(max-width:1300px)");
  const isXXLargeScreen = useMediaQuery("(max-width:1500px)");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <Head>
        <SchemaMarkup
          type="case Study"
          headline="Ophy Care, Browse projects done by us to get an overview of our work"
          description="javascript,stripe,sql, bootsrap 360XpertSolutions developed this platform from ground up and did integrations with EMR providers, payment gateways, teleconferencing providers, AWS Cognito and many more., 360XpertSolutions team worked alongside founders of ioCommit from proof-of-concept to delivering MVP for their product “Sidekick for Meeting” "
          altText="lets start, work together , show more, all our studies"
        />
      </Head>
      <Grid sx={{ padding: "20px", background: "#fff" }}>
        <Container>
          <Box>
            <Typography sx={{ fontFamily: "Clash Display", fontWeight: 500 }} variant="h4">
              Case Studies
            </Typography>
            <Typography sx={{ marginBottom: "8px" }}>
              Browse projects done by us to get an overview of our work
            </Typography>
          </Box>
          <Box
            sx={{
              display: isMediumScreen ? "" : "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "24px",
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {[1].map((index) => (
              <Grid
                key={index}
                style={{ width: "100%", position: "relative" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={`/assets/Rectangle 1885.png`}
                  alt={`image-${index}`}
                  width={isLargeScreen ? 780 : 680}
                  height={600}
                  layout="responsive"
                />
                <Slide direction="up" in={hoveredIndex === index} mountOnEnter unmountOnExit>
                  <Paper elevation={4} sx={{ color: "#FFF", background: '#D0140F', position: 'absolute', bottom: 0, width: isXXSmallScreen ? "65vw" : isSmallScreen ? "73vw" : isSmallMediumScreen ? "80vw" : isMediumScreen ? "85vw" : "43vw", height: isXXSmallScreen ? "36vh" : isSmallScreen ? "50vh" : isSmallMediumScreen ? "90vh" : isMediumScreen ? "100%" : isLargeScreen ? "100%" : isXLargeScreen ? "100%" : isXXLargeScreen ? "100%" : "95vh", padding: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: isXXSmallScreen ? "" : isSmallScreen ? "50px" : isSmallBigScreen ? "140px" : isSmallMediumScreen ? "76px" : isMediumScreen ? "70px" : isXLargeScreen ? "30px" : "70px" }}>
                      <Typography variant={isSmallScreen ? "h6" : isSmallMediumScreen ? "h4" : isXLargeScreen ? "h4" : "h3"} sx={{ fontFamily: "Clash Display", fontWeight: 600, textDecoration: 'underline' }}>Ophy Care</Typography>
                      <Box sx={{ marginTop: isXSmallScreen ? "5px" : isSmallScreen ? "12px" : isSmallMediumScreen ? "20px" : isMediumScreen ? "30px" : isXLargeScreen ? "20px" : "50px" }}>
                        <Typography sx={{ fontWeight: 400, fontSize: isXXSmallScreen ? "7px" : isXSmallScreen ? "8px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "14px" : isMediumScreen ? "18px" : isXLargeScreen ? "14px" : "18px", fontFamily: "Helvetica" }}>Built a patient and provider SaaS application for a US based telehealth startup. Ophy Care is a telemedicine platform that quickly connects patients to health care providers who speak the same language and/or share similar ethnic backgrounds.</Typography>
                        <Typography sx={{ marginTop: isXXSmallScreen ? "8px" : isXSmallScreen ? "10px" : isSmallScreen ? "6px" : isSmallMediumScreen ? "16px" : isMediumScreen ? "20px" : isXLargeScreen ? "14px" : "30px", fontWeight: 400, fontSize: isXXSmallScreen ? "7px" : isXSmallScreen ? "8px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "14px" : isMediumScreen ? "18px" : isXLargeScreen ? "14px" : "18px", fontFamily: "Helvetica" }}>360XpertSolutions developed this platform from ground up and did integrations with EMR providers, payment gateways, teleconferencing providers, AWS Cognito and many more.</Typography>
                        <Box gap={4} sx={{ marginY: isXXSmallScreen ? "8px" : isSmallScreen ? "30px" : isSmallMediumScreen ? "3rem" : isMediumScreen ? "70px" : isXLargeScreen ? "20px" : "50px", display: "flex" }}>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                            <Image width={isSmallScreen ? 20 : 30} height={30} alt="stripe logo" src="/assets/stripe_bae5568e2e 1.svg" />
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                            <Image width={isSmallScreen ? 20 : 30} height={30} alt="javascript logo" src="/assets/javascript_horizontal_5a662283b5 1.svg" />
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                            <Image width={isSmallScreen ? 20 : 30} height={30} alt="bootstrap logo" src="/assets/getbootstrap_ar21_ebe4405ebc 1.svg" />
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                            <Image width={isSmallScreen ? 20 : 30} height={30} alt="sql logo" src="/assets/mysql_horizontal_aec0b8c464 1.svg" />
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", height: isXSmallScreen ? "5px" : isSmallScreen ? "2px" : isSmallMediumScreen ? "2rem" : isMediumScreen ? "6vh" : isXLargeScreen ? "2vh" : "10vh", position: 'absolute', bottom: 0, left: 0, width: isSmallScreen ? "75vw" : isSmallMediumScreen ? "80vw" : isMediumScreen ? "85vw" : "43vw", background: '#000', padding: 2 }}>
                          <Button sx={{ fontFamily: "Clash Display", textTransform: "none", textDecoration: "underline", fontSize: isXSmallScreen ? "10px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "15px" : "20px", color: "#FFF" }} href="">Ophy Care</Button>
                          <Button sx={{ fontFamily: "Clash Display", textTransform: "none", fontSize: isSmallScreen ? "8px" : "12px", color: "#FFF", marginRight: "2px" }} href="">View More</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Slide>
              </Grid>
            ))}
            {[2].map((index) => (
              <Grid
                key={index}
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ width: "100%", position: "relative" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={`/assets/Rectangle 1886.png`}
                  alt={`image-${index}`}
                  width={isLargeScreen ? 780 : 680}
                  height={600}
                  layout="responsive"
                />
                <Slide direction="up" in={hoveredIndex === index} mountOnEnter unmountOnExit>
                  <Paper elevation={4} sx={{ color: "#FFF", background: '#D0140F', position: 'absolute', bottom: 0, width: isXXSmallScreen ? "65vw" : isSmallScreen ? "73vw" : isSmallMediumScreen ? "80vw" : isMediumScreen ? "85vw" : "43vw", height: isXXSmallScreen ? "36vh" : isXSmallScreen ? "40vh" : isSmallScreen ? "40vh" : isSmallMediumScreen ? "85vh" : isMediumScreen ? "100%" : isLargeScreen ? "100%" : isXLargeScreen ? "100%" : isXXLargeScreen ? "100%" : "95vh", padding: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: isXXSmallScreen ? "" : isXSmallScreen ? "" : isSmallScreen ? "50px" : isSmallMediumScreen ? "30px" : isMediumScreen ? "70px" : isXLargeScreen ? "30px" : "70px" }}>
                      <Typography variant={isXXSmallScreen ? "h7" : isSmallScreen ? "h6" : isSmallMediumScreen ? "h5" : isXLargeScreen ? "h4" : "h3"} sx={{ fontFamily: "Clash Display", fontWeight: 600, textDecoration: 'underline' }}>Sidekick For Meetings</Typography>
                      <Box sx={{ marginTop: isXSmallScreen ? "10px" : isSmallScreen ? "12px" : isSmallMediumScreen ? "10px" : isMediumScreen ? "30px" : isXLargeScreen ? "20px" : "50px" }}>
                        <Typography sx={{ fontWeight: 400, fontSize: isXXSmallScreen ? "7px" : isXSmallScreen ? "8px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "12px" : isMediumScreen ? "18px" : isXLargeScreen ? "14px" : "18px", fontFamily: "Helvetica" }}>360XpertSolutions team worked alongside founders of ioCommit from proof-of-concept to delivering MVP for their product “Sidekick for Meeting”. The product involved extracting tasks from online meetings on MS Teams and assigning them to participants. Development involved implementation of an MS Teams application.</Typography>
                        <Typography sx={{ marginTop: isXXSmallScreen ? "8px" : isXSmallScreen ? "10px" : isSmallScreen ? "6px" : isSmallMediumScreen ? "12px" : isMediumScreen ? "20px" : isXLargeScreen ? "14px" : "30px", fontWeight: 400, fontSize: isXXSmallScreen ? "7px" : isXSmallScreen ? "8px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "12px" : isMediumScreen ? "18px" : isXLargeScreen ? "14px" : "18px", fontFamily: "Helvetica" }}>360XpertSolutions did all engineering work for this UK Grant startup.</Typography>
                        <Box gap={4} sx={{ marginY: isSmallScreen ? "10px" : isSmallMediumScreen ? "10px" : isMediumScreen ? "50px" : isXLargeScreen ? "10px" : "50px", display: "flex" }}>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isXXSmallScreen ? "30vw" : isSmallScreen ? "30vw" : isSmallMediumScreen ? "30vw" : isMediumScreen ? "20vw" : "10vw", height: isXXSmallScreen ? "30px" : isSmallScreen ? "40px" : isSmallMediumScreen ? "50px" : "62px" }}>
                            <Image width={isXXSmallScreen ? 70 : isLargeScreen ? 80 : isXLargeScreen ? 80 : 100} height={isXXSmallScreen ? 20 : isSmallScreen ? 30 : isSmallMediumScreen ? 30 : isMediumScreen ? 30 : isLargeScreen ? 30 : isXLargeScreen ? 30 : 60} src="/assets/msteams.png" />
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "30vw" : isSmallMediumScreen ? "30vw" : isMediumScreen ? "20vw" : "10vw", height: isXXSmallScreen ? "30px" : isSmallScreen ? "40px" : isSmallMediumScreen ? "50px" : "62px" }}>
                            <Image width={isXXSmallScreen ? 70 : 100} height={isXXSmallScreen ? 30 : isSmallScreen ? 40 : isSmallMediumScreen ? 50 : 60} alt=" microsoft azure" src="/assets/azure.png" />
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", height: isXSmallScreen ? "5px" : isSmallScreen ? "2px" : isSmallMediumScreen ? "2rem" : isMediumScreen ? "6vh" : isXLargeScreen ? "2vh" : "10vh", position: 'absolute', bottom: 0, left: 0, width: isXSmallScreen ? "72vw" : isSmallScreen ? "75vw" : isSmallMediumScreen ? "80vw" : isMediumScreen ? "85vw" : "43vw", background: '#000', padding: 2 }}>
                          <Button sx={{ fontFamily: "Clash Display", textTransform: "none", textDecoration: "underline", fontSize: isXSmallScreen ? "10px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "16px" : "20px", color: "#FFF" }} href="">ioCommit</Button>
                          <Button sx={{ fontFamily: "Clash Display", textTransform: "none", fontSize: isXSmallScreen ? "8px" : isSmallScreen ? "8px" : "12px", color: "#FFF", marginRight: isSmallScreen ? "10px" : "2px" }} href="">View More</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Slide>
              </Grid>
            ))}
          </Box>
          <Box display="flex" marginTop="30px">
            <Link href="/contact">
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
                Let's Work Together
              </Button>
            </Link>
            <Link href="/Casestudy">
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  transform: "scale(0.8)",
                  height: "80px",
                  width: "12rem",
                  color: "#000",
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
                    width: "100px",
                    fontSize: "8px",
                  },
                }}
              >
                All our Studies
              </Button>
            </Link>
          </Box>
        </Container>
      </Grid >
    </>
  );
};

export default CaseStudies;
    
