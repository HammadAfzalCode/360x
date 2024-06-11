import React from "react";
import { Box } from "@mui/material";

const Container = ({children}) => {
  return (
    <>
    <Box sx={{width: "95%", marginX: "auto"}} >{children}</Box>
    </>
  )
}

export default Container;