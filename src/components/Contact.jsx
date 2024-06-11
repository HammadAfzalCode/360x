import Container from "./Container";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useTheme } from "@mui/system";
import Head from "next/head";
import SchemaMarkup from "../pages/schema";
export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("600"));

  return (
    <>
    <Head>
      <SchemaMarkup title="Let's work together"headline="do work with us , contact us  " description="Because the answer to your strategic challenges is not only technological, we advise you upstream, accompany you in the digitization of your business processes, and align your strategy with 360Xpertsolutions, for concrete and measurable results."  />
    </Head>
      <Box
        sx={{

          background: "white",

        }}
      >


        <Container>
          <Box
            sx={{
              display: "flex",

              gap: "30px", // Adjusted gap

            }}
          >
            <Grid container spacing={2} justifyContent="left" sx={{ width: "100%" }}>
              <Grid item xs={12} md={8}>
                <Typography
                  sx={{
                    color: "#000",
                    fontFamily: "Clash Display",
                    fontSize: { xs: "30px", md: "35px", lg: "50px" },
                    minWidth: "20px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    px: "3%",

                    pb: "10px"
                  }}
                >
                  Let's work <br />together
                </Typography>
                <Typography
                  sx={{
                    color: "#181815",
                    fontFamily: "Clash Display",
                    fontSize: { xs: "12px", md: "15px", lg: "19px" },
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    px: "3%"
                  }}
                >
                  Because the answer to your strategic challenges is not only technological, we advise you upstream, accompany you in the digitization of your business processes, and align your strategy with 360Xpertsolutions, for concrete and measurable results.
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "16px",

                    py: "2%"
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    endIcon={<ArrowRightAltIcon />}

                    sx={{

                      height: isMobile ? "50px" : "60px",
                      width: isMobile ? "150px" : "200px",
                      transform: "scale(0.8)",

                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
