// import { Box } from "@mui/system";
import MultiActionAreaCard from "./ShowcaseCard";
import ShowcaseCard from "./ShowcaseCard";

// import * as React from "react";
import { Typography } from "@mui/material";
import MultiActionAreaCardDark from "./ShowcaseCardDark";

// export default function ShowcaseComponent() {
//   return (
//     <Box
//       sx={{
//         width: "98vw",
//         marginX: "auto",

//         position: "absolute",
//         top: "200px",
//       }}
//     >
//       <MultiActionAreaCardDark
//         path="/project2.webp"
//         heading="BetMakers - the next generation online batting platform"
//         description="Creation of a next generation multi-tenant Horse Racing betting system
//           hosted by one of the biggest players in the betting industry"
//         buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
//       />
//       <MultiActionAreaCard
//         path="/sportech-3.webp"
//         heading="BetMakers - the next generation online batting platform"
//         description="Creation of a next generation multi-tenant Horse Racing betting system
//           hosted by one of the biggest players in the betting industry"
//         buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
//       />
//       <MultiActionAreaCard
//         path="/project3.jpeg"
//         heading="BetMakers - the next generation online batting platform"
//         description="Creation of a next generation multi-tenant Horse Racing betting system
//           hosted by one of the biggest players in the betting industry"
//         buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
//       />
//       <MultiActionAreaCard
//         path="/project4.jpeg"
//         heading="BetMakers - the next generation online batting platform"
//         description="Creation of a next generation multi-tenant Horse Racing betting system
//           hosted by one of the biggest players in the betting industry"
//         buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
//       />
//       <MultiActionAreaCardDark
//         path="/project4.jpeg"
//         heading="BetMakers - the next generation online batting platform"
//         description="Creation of a next generation multi-tenant Horse Racing betting system
//           hosted by one of the biggest players in the betting industry"
//         buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
//       />
//     </Box>
//   );
// }
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

export default function BasicGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "98vw",
        marginX: "auto",
        backgroundColor: "#181815",
        position: "absolute",
        top: "200px",
      }}
    >
      <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={6} lg={6} xl={4}>
          {/* <Item> */}
          <MultiActionAreaCardDark
            path="/project2.webp"
            heading="BetMakers - the next generation online batting platform"
            description="Creation of a next generation multi-tenant Horse Racing betting system
           hosted by one of the biggest players in the betting industry"
            buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
          />
          {/* </Item> */}
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={4}>
          {/* <Item> */}
          <MultiActionAreaCardDark
            path="/project3.jpeg"
            heading="BetMakers - the next generation online batting platform"
            description="Creation of a next generation multi-tenant Horse Racing betting system
           hosted by one of the biggest players in the betting industry"
            buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
          />
          {/* </Item> */}
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={4}>
          {/* <Item> */}
          <MultiActionAreaCardDark
            path="/project4.jpeg"
            heading="BetMakers - the next generation online batting platform"
            description="Creation of a next generation multi-tenant Horse Racing betting system
           hosted by one of the biggest players in the betting industry"
            buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
          />
          {/* </Item> */}
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={4}>
          {/* <Item> */}
          <MultiActionAreaCardDark
            path="/sportech-3.webp"
            heading="BetMakers - the next generation online batting platform"
            description="Creation of a next generation multi-tenant Horse Racing betting system
           hosted by one of the biggest players in the betting industry"
            buttonList={["Front-End", "Back-End", "UI/UX", "Full-Stack"]}
          />
          {/* </Item> */}
        </Grid>
      </Grid>
    </Box>
  );
}
