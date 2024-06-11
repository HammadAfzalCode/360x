"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import MenuItem from "@mui/material/MenuItem";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownAltIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/system";
import Image from "next/image";
import CustomButton from "./CustomButton";


const drawerWidth = 240;
const navItems = [
  "About",
  "Case Studies",
  "Pricing",
  "Engineering"
];

function Navbar(props) {
  const router = useRouter();
  const handleMenuItemClick = (item) => {
    if (item === "Pricing") {
      router.push("/pricing");
    }
    if (item === "About") {
      router.push("/about");
    }
    if (item === "Case Studies") {
      router.push("/Casestudy");
    }
    if (item === "Engineering") {
      router.push("/engineering");
    }
   
    
  };
  const handleLogoClick = () => {
    // Use router.push to navigate programmatically
    router.push("/");
  };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { window } = props;
  const theme = useTheme();
  const isXSmallScreen = useMediaQuery("(max-width: 1042px)");
  const isTabScreen = useMediaQuery("(max-width: 943px)");
  const isTabletScreen = useMediaQuery("(min-width: 901px)and(max-width:982px");
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        backgroundColor: "#252525",
        color: "#fff",
      }}
    >
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => handleMenuItemClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton >
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          background: "#181815",
          boxShadow: "none",
          paddingY: { xs: "20px", lg: "20px" },
        }}
      >
        <Box sx={{ width: "95%", margin: "auto" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >

            <Image
              onClick={handleLogoClick}
              src="/assets/Vector.png"
              alt="360XpertSolutions Logo"
              width={isXSmallScreen ? 150 : 233}
              height={isXSmallScreen ? 50 : 70}
              // layout="responsive"

            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: { sm: "20px", lg: "40px" },
              }}
            >
              {isMediumScreen
                ? null
                : // Render navigation links for screens larger than 600px
                navItems.map((item, index) => (
                  index === 2 ? (
                    <MenuItem
                      onClick={() => handleMenuItemClick(item)}
                      key={item}
                      sx={{
                        fontSize: isTabScreen ? "14px" : "16px",
                        paddingX: ".5rem",
                        textTransform: "none",
                        color: "#fff",
                        cursor: item === "Pricing" ? "pointer" : "default", // Set cursor style for clickable item
                      }}
                    >
                      {item}
                    </MenuItem>


                  ) : index === 1 ? (<MenuItem
                    onClick={() => handleMenuItemClick(item)}
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "14px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                      cursor: item === "Case Studies" ? "pointer" : "default", // Set cursor style for clickable item
                    }}
                  >
                    {item}
                  </MenuItem>) : index === 0 ? (<MenuItem
                    onClick={() => handleMenuItemClick(item)}
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "14px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                      cursor: item === "About" ? "pointer" : "default", // Set cursor style for clickable item
                    }}
                  >
                    {item}
                  </MenuItem>) : index === 3 ? (<MenuItem
                    onClick={() => handleMenuItemClick(item)}
                    key={item}
                    sx={{
                      fontSize: isTabScreen ? "14px" : "16px",
                      paddingX: ".5rem",
                      textTransform: "none",
                      color: "#fff",
                      cursor: item === "Engineering" ? "pointer" : "default", // Set cursor style for clickable item
                    }}
                  >
                    {item}
                  </MenuItem>) : (
                    <MenuItem key={item} sx={{ fontSize: isTabScreen ? '14px' : '16px', paddingX: '.5rem', textTransform: 'none', color: '#fff' }}>
                      {item}
                    </MenuItem>
                  )))}
              {/* <Button
                variant="contained"
                sx={{
                  fontWeight: 400,
                  marginLeft: "10px",
                  '&:hover': {
                    backgroundColor: '#fff',
                    color:"#D0140F", // Change background color on hover
                    border:"1px solid #D0140F"
                  },
                  fontSize:{sm:"12px",lg:"19.38px"},
                padding:{lg:"18px 28px",sm:"15px 20"},
                  textTransform: "none",
                  background: "#D0140F",
                  display: isSmallScreen ? "none" : "",
                }}
                endIcon={<EastIcon />}
                icon={ArrowRightAltIcon}
              >
                Contact us
              </Button> */}
              <Link href="/contact">
                <CustomButton
                // onClick={handleNavItemClick}
                >
                  Contact us
                </CustomButton>
              </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                //   top: "15px", // Adjust the top position as needed
                right: mobileOpen ? "10px" : "", // Adjust the right position based on drawer state
                transition: "right 0.3s ease-in-out",
                marginRight: "0px",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant={isSmallScreen ? "temporary" : "permanent"}
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
