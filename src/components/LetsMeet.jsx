import Container from "./Container";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled, useTheme } from "@mui/system";
import Footer from "./Footer";

export default function Meet() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("600"));
  const isTabletScreen = useMediaQuery("(max-width:900px)");

  const Field = [
    {
      value: "AI",
      label: "AI",
    },
    {
      value: "ML",
      label: "ML",
    },
    {
      value: "App Development",
      label: "App Development",
    },
    {
      value: "Web development",
      label: "Web development",
    },
  ];
  const MyStyledTextField = styled(TextField)({
    // width: "43vw",
    width: isMobile ? "80vw" : "43vw",
    // paddingTop: "10px",
    "& .MuiInputLabel-root": {
      color: "#FFF",
    },
    "& .MuiInputLabel-root:after": {
      color: "#FFF",
    },
    // "& .MuiInputBase-input": {
    //   color: "#FFF",
    // },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red",
    },
    "& .MuiInputLabel-shrink": {
      color: "#FFF", // Change label color after clicking
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#FFF", // Change border color on hover
    },
  });

  const MyStyledSecondTextField = styled(TextField)({
    // width: "20vw",
    width: isMobile ? "38vw" : "20vw",

    // paddingTop: "15px",
    "& .MuiInputLabel-root": {
      color: "#FFF", // Change label color
    },
    "& .MuiInputLabel-root:after": {
      color: "#FFF", // Change label color
    },
    "& .MuiInputBase-input": {
      color: "#FFF",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFF", // Change default border color
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red", // Change default border color
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "#FFF", // Change border color on hover
    },
  });

  const MyStyledButton = styled(Button)({
    borderRadius: "64px",
    border: "1px solid #FFF",
    display: "inline-flex",
    // padding: isMobile ? "10px 15px" : "15px 30px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  });

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: isTabletScreen ? "35px" : "75px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              paddingTop: "5%",
              textTransform: "capitalize",
            }}
          >
            Let’s meet
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Clash Display",
              fontSize: isTabletScreen ? "10px" : "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop: "5%",
              // inline: "block",
            }}
          >
            A project? Any questions? Contact us for more information! <br />
            Our teams are at your disposal.
          </Typography>
        </Box>

        <Grid container>
          {/* TEXT FORM  */}
          <Grid item md={6} sm={12} xs={12} lg={9} xl={9}>
            <Box
              noValidate
              autoComplete="off"
              component="form"
              sx={{
                // width:"100%",
                // display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
                display: "flex",
                // flexWrap: "wrap",
                gap: "14px",
                paddingTop: "15%",
              }}
            >
              <div>
                <MyStyledTextField
                  id="standard-select-currency"
                  select
                  label="Looking For?"
                  defaultValue=" "
                  variant="standard"
                >
                  {Field.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </MyStyledTextField>
              </div>
              {/* <Grid  > */}
              <Box
                sx={{
                  display: "flex",
                  // flexDirection:"row",
                  gap: "5%",
                }}
              >
                {/* FIRST NAME  */}
                <div>
                  <MyStyledSecondTextField
                    label="First Name"
                    variant="standard"
                  />
                </div>
                {/* LAST NAME  */}
                <div>
                  <MyStyledSecondTextField
                    label="Last Name"
                    variant="standard"
                  />
                </div>
                <Box>
                  {!isMobile && (
                    <MyStyledButton href="#">
                      <Image
                        src="/assets/linkedin.svg"
                        height={25}
                        width={25}
                      />
                      
                    </MyStyledButton>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  // flexDirection:"row",
                  gap: "5%",
                }}
              >
                {/* PHONE  */}
                <div>
                  <MyStyledSecondTextField
                    label="Phone number"
                    variant="standard"
                    type="number"
                  />
                </div>

                {/* EMAIL  */}
                <div>
                  <MyStyledSecondTextField
                    label="E-mail"
                    variant="standard"
                    type="email"
                  />
                </div>
                {/* BUTTON  */}

                <Box>
                  {!isMobile && (
                    <MyStyledButton href="#">
                      <Image
                        src="/assets/linkedin.svg"
                        height={25}
                        width={25}
                      />
                      <Typography sx={{ color: "#FFF" }}>
                        360Xpertsolutions
                      </Typography>
                    </MyStyledButton>
                  )}
                </Box>
              </Box>

              <div>
                {/* COMPANY  */}
                <MyStyledTextField label="Company" variant="standard" />
              </div>

              {/* MESSAGE  */}
              <div>
                <MyStyledTextField label="Message" variant="standard" />
              </div>

              <Box>
                <Button
                  variant="contained"
                  color="error"
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    fontFamily: "Helvetica",
                    // minHeight: "60px",
                    fontWeight: "700",
                    // minWidth: "200px",
                    // fontSize: "16px",
                    fontStyle: "normal",
                    my: "7%",
                    // display:"inline-block",
                    // display:"flex",
                    // flexDirection:"row"
                  }}
                  height={isMobile ? 30 : 100}
                  weight={isMobile ? 40 : 200}
                  fontSize={isMobile ? 20 : 70}
                  // paddingRight={isMobile?10:""}
                >
                  Get Started
                </Button>
                {isMobile && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center", my: "2%" }}
                  >
                    <MyStyledButton
                      href="#"
                      sx={{ mx: "5px", display: "flex" }}
                      // {!isXSmallScreen && '360Xpertsolutions'}
                    >
                      <Image
                        src="/assets/linkedin.svg"
                        height={isMobile ? 15 : 30} // Adjusted height for mobile
                        width={isMobile ? 15 : 30} // Adjusted width for mobile
                      />
                      <Typography
                        sx={{ color: "#FFF" }}
                        fontSize={isMobile ? 8 : 30}
                      >
                        360Xpertsolutions
                      </Typography>
                    </MyStyledButton>

                    <MyStyledButton href="#">
                      <Image
                        src="/assets/facebook.svg"
                        height={isMobile ? 15 : 30} // Adjusted height for mobile
                        width={isMobile ? 15 : 30} // Adjusted width for mobile
                      />
                      <Typography
                        sx={{ color: "#FFF" }}
                        fontSize={isMobile ? 8 : 30}
                      >
                        360Xpertsolutions
                      </Typography>
                    </MyStyledButton>
                  </Grid>
                )}
              </Box>
            </Box>
          </Grid>
          {/* MODEL  */}
          <Grid
            item
            xs={12}
            // md={3}
            lg={3}
            xl={3}
            md={isTabletScreen ? 4 : 3}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              // order: isMobile ? 1 : 0, // Change the order on mobile screens
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <Image
              src="/assets/x.png"
              height={isMobile ? 250 : isTabletScreen ? 350 : 500} // Adjust heights for different breakpoints
              width={isMobile ? 250 : isTabletScreen ? 350 : 500}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
