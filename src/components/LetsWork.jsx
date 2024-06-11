import Container from "./Container";
import { Box, Typography, Button, Grid,useMediaQuery } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {  useTheme } from "@mui/system";


export default function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("600"));
    const isMediumScreen = useMediaQuery("(min-width:700px)");
   
  return (
    <>
    <Box
    sx={{
       
        background: "white",
       paddingY:"30px"
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
                  fontSize:isMediumScreen?"50px":"30px",
                  minWidth:"20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  px:"3%",
                
                  pb:"10px"
                }}
              >
                Let's work <br/> together
              </Typography>
              <Typography
                sx={{
                  color: "#181815",
                  fontFamily: "Clash Display",
                  fontSize:isMediumScreen?"19px":"12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  px:"3%"
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
               
                  py:"2%"        
                        }}
              >
              <Link href="/contact">
                <Button
                  variant="contained"
                  color="error"
                  endIcon={<ArrowRightAltIcon />}
                
                  sx={{
                    
                        height:isMobile?"50px":"60px",
                  width:isMobile?"150px":"200px",
                    transform: "scale(0.8)",
                    '&:hover': {
                        backgroundColor: '#181815',
                        color:"#fff" // Change background color on hover
                      },
                  
                  }}
                >
                  Contact Us
                </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </Box>
    </>
  );
}