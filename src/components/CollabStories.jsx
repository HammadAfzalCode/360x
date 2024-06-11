import Box from "@mui/material/Box";
import Common from "../components/Common";
import Contact from "./LetsWork";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
export default function collabStories() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("600"));
  const isTabletScreen = useMediaQuery("(max-width:899px)");
  const isLargeScreen = useMediaQuery("(max-width:1299px)");

  const data = [
    {
      title: "Optimize, digitalize and automate the sales process",
      subtitle: "Commerce de gros",
      imageSrc: "/assets/Rectangle2.png",
      width: 500,
      height: 400,
      paddingTop: ["23%", "16%"],
    },
    {
      title: "Optimize, digitalize and automate the sales process",
      subtitle: "Commerce de gros",
      imageSrc: "/assets/Rectangle4.png",
      width: 685,
      height: 300,
      paddingTop: ["30%", "9%"],
    },
    {
      title: "Optimize, digitalize and automate the sales process",
      subtitle: "Commerce de gros",
      imageSrc: "/assets/Rectangle3.png",
      width: 500,
      height: 500,
      paddingTop: ["37%", "12%"],
    },
    {
      title: "Optimize, digitalize and automate the sales process",
      subtitle: "Commerce de gros",
      imageSrc: "/assets/Rectangle5.png",
      width: 565,
      height: 200,
      paddingTop: ["", ""], // Add values based on your design
    },
  ];
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Common
        H1="Stories: our beautiful "
        main=" collaborations"
        paragraph="Our developers employ the latest technologies, frameworks, and components to
          create solutions that combine a strong technical back-end with easy to use
          modern design.
          "
        includingImage=""
      />

      <Container>
        <Box>
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                display: "flex",
                paddingTop: "20%",
                position: "absolute",
                color: "#FFF",
                fontFamily: "Clash Display",
                fontSize: isMobile ? "15px" : isTabletScreen ? "25px" : "45px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                paddingLeft: "20px",
              }}
            >
              Optimize, digitalize and automate the sales process
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                display: "flex",
                paddingTop: "25%",
                position: "absolute",
                color: "#D0140F",
                fontFamily: "Clash Display",
                fontSize: isMobile ? "15px" : isTabletScreen ? "20px" : "25px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                paddingLeft: "20px",
              }}
            >
              Commerce de gros
            </Typography>
            <Image
              src="/assets/Rectangle.png"
              className="image1"
              width={500}
              height={400}
            />
          </Box>
          <Box sx={{ display: "flex", paddingBottom: "5%" }}>
            <Box sx={{ flexDirection: isMobile ? "row" : "column" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "23%",
                  position: "absolute",
                  color: "#FFF",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "25px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Optimize, digitalize and automate the sales process
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "26%",
                  position: "absolute",
                  color: "#D0140F",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Commerce de gros
              </Typography>

              <Image
                src="/assets/Rectangle2.png"
                className="image2"
                width={500}
                height={400}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "16%",
                  position: "absolute",
                  color: "#FFF",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "25px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Optimize, digitalize and automate the sales process
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "19%",
                  position: "absolute",
                  color: "#D0140F",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Commerce de gros
              </Typography>
              <Image
                src="/assets/Rectangle4.png"
                className="image4"
                width={685}
                height={300}
              />
            </Box>
            <Box sx={{ flexDirection: "column" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "30%",
                  position: "absolute",
                  color: "#FFF",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Optimize, digitalize and automate the sales process
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "33%",
                  position: "absolute",
                  color: "#D0140F",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Commerce de gros
              </Typography>
              <Image
                src="/assets/Rectangle3.png"
                className="image3"
                width={500}
                height={500}
              />
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "9%",
                  position: "absolute",
                  color: "#FFF",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Optimize, digitalize and automate the sales process
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  display: "flex",
                  paddingTop: "12%",
                  position: "absolute",
                  color: "#D0140F",
                  fontFamily: "Clash Display",
                  fontSize: isTabletScreen ? "25px" : "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  paddingLeft: "20px",
                }}
              >
                Commerce de gros
              </Typography>
              <Image
                src="/assets/Rectangle5.png"
                className="image5"
                width={565}
                height={200}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      <Contact />
      <Footer />
    </>
  );
}
