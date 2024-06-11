import * as React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "./Container";
import Typography from "@mui/material/Typography";
import Head from "../pages/schema"
import SchemaMarkup from "../pages/schema";

export default function Revolutionizing() {
  const isStandardDesktop = useMediaQuery("(max-width:900px)");
  const content = [
    {
      title: "Empower your business to soar with AI",
      description:
        "Unlocking Hidden Potential, Optimizing Operations, and Delivering Exceptional Customer Experiences through AI Transformation Services.",
    },
    {
      title: "Innovate with Integrated IoT Solutions",
      description:
        "Embark on the path to innovation with our comprehensive IoT Solutions.Connect and automate for efficiency, bolster safety, and unlock new possibilities.",
    },
    {
      title: "Captivate with Animation-Enhanced Web Experiences",
      description:
        "Capture the imagination of your audience with our Animation-Enhanced Web Experiences.We blend art and technology to craft animated website elements that tell your story and engage users in an unforgettable journey.",
    },
    {
      title: " App Development Through Transformative Innovations.",
      description:

        "Transform Mobile Engagement with Our Transformative App Development Services. Our team crafts custom, scalable, and robust applications tailored to precisely fit your unique business requirements."
    },

  ];
  const groupedContent = [];
  for (let i = 0; i < content.length; i += 2) {
    groupedContent.push(content.slice(i, i + 2));
  }

  return (
    <Container>
      <Head>
        <SchemaMarkup 
        type=" Revolutionizing"
        headline="Revolutionizing your Experience"  
        author="360XpertSolution"
        description='Empower your business to soar with AI ,Transformative App Development,Innovate with Integrated IoT Solutions , Captivate with Animation-Enhanced Web Experiences,' />
      </Head>
      <Box
        sx={{
          borderRadius: "25px",
          border: "1px solid #3A3A3A",
          backgroundColor: "inherit",
          background:
            "linear-gradient(180deg, rgba(24, 24, 21, 0.25) 0%, rgba(24, 24, 21, 0.25) 100%)",
          backdropFilter: "blur(16.25px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: "2%",
          gap: "24px",
          maxWidth: "100%",
          minHeight: "400px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "12px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Clash Display",
              fontSize: ["30px", "40px"],
              fontWeight: "300",
            }}
          >
            Revolutionizing Your
          </Typography>
          <Typography
            sx={{
              color: "#D0140F",
              fontFamily: "Clash Display",
              fontSize: ["30px", "40px"],
              fontWeight: "600",
            }}
          >
            Experience
          </Typography>
        </Box>

        {groupedContent.map((group, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "20px", // Add margin between rows
              flexWrap: "wrap", // Wrap items to next line if not enough space
            }}
          >
            {group.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                sx={{
                  flexBasis: isStandardDesktop ? "100%" : "48%", // Adjust width based on screen size
                }}
              >
              <Box sx={{borderTop:"1px solid #3A3A3A ",paddingBottom:"40px"}}>

              </Box>


                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Clash Display",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#B4B4B4",
                    fontFamily: "Clash Display",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "normal",
                 paddingTop:"8px"
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    color: "#D0140F",
                    flexDirection: "row",
                    justifyContent: "end",
                  paddingTop:"8px"
                  }}
                >
                  <ArrowRightAltIcon />
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
