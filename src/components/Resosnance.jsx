import React, { useState } from "react";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Divider, useMediaQuery } from "@mui/material";
import Container from "./Container";
import SchemaMarkup from "../pages/schema"
import Head from "next/head";

const Resonance = ({ }) => {
  const isTabletScreen = useMediaQuery("(max-width:900px)");
  const isXSmallScreen = useMediaQuery("(max-width:500px)");
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const testimonies = [
    {
      text: "Working with 360 xpert solutions has been a game-changer for our business. Their team's expertise and dedication to delivering top-notch software solutions have significantly improved our operational efficiency and customer satisfaction. Highly recommended!",
      name: "Micheal Morin",
      role: "Technical Director",
      img: "/assets/Ellipse1.svg",
    },

    {
      text: "We are extremely pleased with the customized software solutions provided by 360 xpert solutions. Their team understood our unique requirements and delivered a product that not only met but exceeded our expectations. The level of professionalism and technical proficiency demonstrated is commendable.",
      name: "Tom Dimini",
      role: "Director",
      img: "/assets/Ellipse2.svg",
    },
    {
      text: "Choosing 360 xpert solutions for our software development needs was one of the best decisions we made. Their commitment to quality, timely delivery, and ongoing support has been instrumental in the success of our projects. We look forward to continuing our partnership with them.",
      name: "John Smith,",
      role: "Chief Technical Officer",
      img: "/assets/Ellipse3.svg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    // Update the current slide when the slider bar is clicked
    setCurrentSlide(index);
  };
  return (

    <Grid>
      <Head>
        <SchemaMarkup 
        type="Resonance"
        description='What clients have to say about 360Xpertsolutions'
        headline="Resonance from Our  Valued Collaborators "
        author="360XpertSolutions"
        />
        
      </Head>
      <Box
        sx={{
          padding: "20px",
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          background: "#FFF",
        }}
      >
        <Container>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sm={12} md={12} lg={3} xl={3}>
              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: isXSmallScreen ? "30px" : "50px",
                  maxWidth: isTabletScreen ? "80vw" : "40vw",
                }}
              >
                Resonance from Our
                <Typography
                  component="span"
                  style={{
                    fontFamily: "Clash Display",
                    fontSize: isXSmallScreen ? "30px" : "50px",
                    fontWeight: "600",
                    color: "#D0140F",
                  }}
                >
                  {" "}
                  Valued Collaborators{" "}
                </Typography>
              </Typography>
              <Typography>
                What clients have to say about 360Xpertsolutions
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }} sm={12} md={12} lg={9} xl={9}>
              <Divider
                sx={{
                  display: isXSmallScreen ? "none" : "",
                  justifyContent: isTabletScreen ? "center" : "",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Grid xs={12} sm={12} md={4} xl={4} lg={4}>
              <Slider {...settings}>
                {testimonies.map((testimony, index) => (
                  <div key={index}>
                    <Box
                      sx={{
                        marginTop: "30px",
                        background: "#fff",
                        display: "flex",
                        padding: "25px",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "16px",
                      }}
                    >
                      <Typography>{testimony.text}</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        }}
                      >
                        <Image
                          width={50}
                          height={50}
                          src={testimony.img}
                          alt="img"
                        />
                        <Box>
                          <Typography sx={{ color: "#D0140F" }}>
                            {testimony.name}
                          </Typography>
                          <Typography>{testimony.role}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                ))}
              </Slider>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
};

export default Resonance;
