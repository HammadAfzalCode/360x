import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Button from "./../components/Button";
import Navbar from "./../components/Navbar";
import Container from "./../components/Container";
import Footer from "./../components/Footer";
import Contact from "./../components/LetsWork";

export default function Performance() {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box>
          <Grid container spacing={2} sx={{ marginTop: "150px" }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Clash Display",
                  fontSize: { xs: "40px", md: "60px" },
                }}
              >
                Optimize, Digitalize And Automate{" "}
                <span
                  style={{
                    color: "red",
                    fontFamily: "Clash Display",
                    fontWeight: "400",
                  }}
                >
                  The Sales Process
                </span>
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  mt: "20px",
                  fontSize: { xs: "14px", md: "20px" },
                }}
              >
                Optimize, Digitalize, And Automate The Sales Process
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "20px", md: "40px" },
                  fontWeight: "500",
                  lineHeight: "1.5",
                  mt: "20px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                A need for simplicity and efficiency
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "14px", md: "19px" },
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                Larraqué Vins International is a group of about 100 people who
                own, negotiate and harvest Bordeaux wines. It operates 1,509
                hectares of vineyards with a turnover of more than 60 million
                Euros. 70% of sales are made to supermarkets and the company is
                present in more than 45 export countries.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "14px", md: "19px" },
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                All the activities are growing strongly, and the strategy
                implemented by Pierre Jean Larraqué via the historical
                subsidiaries requires adapted and evolving IT applications
                capable of meeting the challenges and objectives of the group.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "14px", md: "19px" },
                  fontWeight: "400",
                  lineHeight: "1.5",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#FFF",
                }}
              >
                The decision was made to implement a Customer Relationship
                Management (CRM) software to optimize, digitize and automate the
                sales process.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/assets/x.png"
                alt="Sales Process"
                style={{ maxWidth: "70%", height: "auto" }}
              />
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
              <img
                src="/assets/Rectangle 1933.svg"
                alt="Sales Process"
                style={{ maxWidth: "100%", height: "auto", paddingTop: "40px" }}
              />
            </Grid>
            <Grid container spacing={2} sx={{ padding: "20px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "100px" },
                  }}
                >
                  To provide our client with a sustainable foundation for his
                  performance
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "18px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "20px",
                  }}
                >
                  With the development of commercial activities in France and
                  abroad, the follow-up and management of the activity in the
                  retail sector became more complex, time-consuming, and a
                  source of errors and re-entries. Until now, this activity was
                  managed by cumbersome and time-consuming solutions that were
                  poorly interconnected with the back office.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "16px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "10px",
                  }}
                >
                  It appeared necessary to set up a real tool of linear survey,
                  adapted to the functioning of the team and allowing to make
                  reliable and digitalize the business processes to improve the
                  operational performance.
                </Typography>
              </Grid>
              {/* Add any additional grid items if needed */}
            </Grid>

            <Grid container spacing={2} sx={{ padding: "20px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "50px" },
                  }}
                >
                  Techstack Experience
                </Typography>
                <Button />
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ padding: "20px" }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "50px" },
                  }}
                >
                  To provide our client with a sustainable foundation for his
                  performance
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "18px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "20px",
                  }}
                >
                  The implementation of Microsoft’s Dynamics 365 CRM allowed for
                  the centralization of up-to-date operational data in a single
                  back office application. Hosted in the cloud, the application
                  interacts natively with Microsoft 365 (Teams, SharePoint and
                  Exchange email with Outlook). In the field, sales
                  representatives in the retail sector use a business
                  application built with Power Apps.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "16px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "10px",
                  }}
                ></Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "24px", md: "40px" },
                    fontWeight: "500",
                    lineHeight: { xs: "30px", md: "40px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: { md: "50px" },
                  }}
                >
                  Gains and benefits
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "18px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "20px",
                  }}
                >
                  Totally adapted to the constraints of the field, it increases
                  the operational productivity of the sales representatives for
                  the linear surveys, the calculation of the DN, the reports of
                  appointments and the promotions.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: { xs: "14px", md: "18px" },
                    fontWeight: "400",
                    lineHeight: { xs: "16px", md: "20px" },
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#fff",
                    paddingTop: "10px",
                  }}
                >
                  The sales management has daily access to reliable and
                  up-to-date data to measure and manage the activity. The CRM
                  has significantly improved the efficiency of area managers in
                  the field.
                </Typography>
              </Grid>

              {/* Add any additional grid items if needed */}
            </Grid>
          </Grid>
          <Box sx={{ paddingTop: "50px" }}></Box>
        </Box>
      </Container>
      <Contact />
      <Footer />
    </Box>
  );
}
