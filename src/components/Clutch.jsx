import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";
import Container from "./Container";

const Clutch = () => {
  const isXSmallScreen = useMediaQuery("(max-width:300px)");
  const isMediumScreen = useMediaQuery("(max-width:500px)");
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "30px",
          gap: "20px",
          alignItems: "center",
          width: { lg: "80%" },
        }}
      >
        <Box>
          <Typography
            sx={{ color: "white", fontSize: isMediumScreen ? "12px" : "" }}
          >
            Leader In Software Development
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: isMediumScreen ? "10px" : "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Divider
            orientation="vertical"
            sx={{
              backgroundColor: "#3A3A3A",
              height: "50px",
              marginTop: "15px",
            }}
            flexItem
          />
          <Image
            width={isXSmallScreen ? 40 : isMediumScreen ? 50 : 80}
            height={isMediumScreen ? 50 : isXSmallScreen ? 40 : 80}
            src="/assets/Vector.svg"
            alt="clutch certificate, top developer of 2021 logo"
          />
          <Image
            width={isXSmallScreen ? 40 : isMediumScreen ? 50 : 80}
            height={isMediumScreen ? 50 : isXSmallScreen ? 40 : 80}
            src="/assets/Vector2.svg"
            alt="clutch certificate, clients say we deliver on clutch logo"
          />
          <Image
            width={isXSmallScreen ? 40 : isMediumScreen ? 50 : 80}
            height={isMediumScreen ? 50 : isXSmallScreen ? 40 : 80}
            src="/assets/Vector3.svg"
            alt="clutch certificate, top IT services firm of 2021 logo"
          />
        </Box>
        {/* <Box>
          <img width={"100%"} height={100} src="/assets/Waveform.png" alt="" />
        </Box> */}
      </Box>
    </Container>
  );
};

export default Clutch;
