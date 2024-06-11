import React from "react";
import Divider from "@mui/material/Divider";

const CustomDivider = () => {
  return (
    <>
      {" "}
      <Divider
        variant="middle"
        color="grey"
        sx={{ marginTop: "1rem", marginBottom: "1rem" }}
      />
    </>
  );
};

export default CustomDivider;
