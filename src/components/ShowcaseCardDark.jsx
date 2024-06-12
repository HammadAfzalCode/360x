import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";

export default function MultiActionAreaCardDark({
  path,
  heading,
  description,
  buttonList,
}) {
  return (
    <Card
      sx={{
        maxWidth: { xs: "90vw", md: "45vw", xl: "27vw" },
        backgroundColor: "#181815",
        color: "#fff",
        marginX: "auto",
        display: { xs: "block", sm: "flex", xl: "block" },
        marginBottom: "6rem",
        justifyContent: "space-around",
        border: "1px solid #fff",
        borderRadius: "20px",
      }}
    >
      <CardActionArea
        sx={{
          width: { xs: "20vw", xl: "100%" },
          background: "linear-gradient(to bottom right, #d0140f, #fae8e7)",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={path}
          alt="green iguana"
          sx={{
            background: "linear-gradient(to bottom right, #d0140f, #fae8e7)",
            objectFit: "contain",

            width: { xs: "90vw", sm: "20vw", xl: "100%" },
            height: { sm: "70vh", md: "50vh", xl: "35vh " },
          }}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          variant="h3"
          sx={{
            width: { md: "12rem", xl: "100%" },
            marginBottom: { xs: "2rem", sm: "2rem", lg: "2rem" },
            cursor: "pointer",
            marginTop: { xs: "1rem", sm: "2rem" },
            overflow: "wrap",
            paddingX: { xs: "0px", sm: "40px", md: "20px", xl: "0px" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem", xl: "2.3rem" },

            "&:hover": {
              color: "#d0140f",
              transition: "color .4s ease",
            },
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: { md: "13rem", xl: "100%" },

            paddingX: { xs: "0px", sm: "40px", md: "20px", xl: "0px" },
            fontFamily: "clash display",
            color: "#fff",
            marginBottom: { xs: "1rem", sm: "2rem", lg: "2rem" },
          }}
        >
          {description}
        </Typography>
        <Button
          endIcon={<ArrowRightAltIcon />}
          variant="text"
          sx={{
            paddingX: { xs: "0px", sm: "40px", md: "20px", xl: "0px" },
            marginBottom: { xs: "1rem", sm: "2rem", lg: "2rem" },
            color: "#d0140f",
            "&:hover": {
              color: "#fff",
              borderColor: "#fff",
              transition: "color .4s ease",
            },
          }}
        >
          Read More
        </Button>
        <Stack
          direction="row"
          // spacing={1}
          sx={{
            // overflow: "wrap",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "8px",
            // justifyContent: "space-between",
            paddingX: { xs: "0px", sm: "40px", md: "20px", xl: "0px" },
            // width: { md: "12vw" },
          }}
        >
          {buttonList.map((button) => (
            <Button
              sx={{
                fontSize: { md: "0.6rem" },
                color: "#fff",
                borderColor: "#fff",
                dispaly: { sm: "flex" },
                "&:hover": {
                  color: "#fff",
                  borderColor: "#fff",
                  transition: "color .4s ease",
                },
              }}
              size="small"
              variant="outlined"
            >
              {button}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
