import * as React from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { useMediaQuery } from "@mui/material";

const CustomButton = React.forwardRef(({ onClick, children }, ref) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  return (
    <Button
      variant="contained"
      onClick={onClick}
      ref={ref}
      sx={{
        fontWeight: 400,
        marginLeft: "10px",
        // marginTop:"2em",
        // marginBottom:"1em",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#D0140F",
          border: "1px solid #D0140F",
        },
        fontSize: { sm: "12px", lg: "19.38px" },
        padding: { lg: "18px 28px", sm: "15px 20" },
        
        textTransform: "none",
        background: "#D0140F",
      }}
      endIcon={<EastIcon />}
    >
      {children}
    </Button>
  );
});

export default CustomButton;
