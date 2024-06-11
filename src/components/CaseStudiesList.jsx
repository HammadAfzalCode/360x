import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, Slide, Paper, Button } from "@mui/material";
import Container from "./Container";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CaseStudyItem from "./CaseStudyItem";

const CaseStudiesList = () => {
    const isXXSmallScreen = useMediaQuery("(max-width:300px)");
    const isXSmallScreen = useMediaQuery("(max-width:376px)");
    const isSmallScreen = useMediaQuery("(max-width:400px)");
    const isSmallMediumScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:900px)");
    const isLargeScreen = useMediaQuery("(min-width:1092px)");
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <Grid sx={{ padding: "20px", background: "#fff" }}>
                <Container>
                    <Box>
                        <Typography sx={{ fontFamily: "Clash Display", fontWeight: 500 }} variant="h4">
                            Case Studies
                        </Typography>
                        <Typography sx={{ marginBottom: "8px" }}>
                            Browse projects done by us to get an overview of our work
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: isMediumScreen ? "" : "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            gap: "24px",
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {[1, 2].map((index) => (
                            <CaseStudyItem
                                key={index}
                                index={index}
                                isXXSmallScreen={isXXSmallScreen}
                                isXSmallScreen={isXSmallScreen}
                                isSmallScreen={isSmallScreen}
                                isSmallMediumScreen={isSmallMediumScreen}
                                isMediumScreen={isMediumScreen}
                                isLargeScreen={isLargeScreen}
                                hoveredIndex={hoveredIndex}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        ))}
                    </Box>
                    <Box display="flex" marginTop="30px">
                        <Link href="/contact">
                            <Button
                                variant="contained"
                                endIcon={<ArrowRightAltIcon />}
                                sx={{
                                    textTransform: "none",
                                    height: "80px",
                                    width: "12rem",
                                    backgroundColor: "#D0140F",
                                    transform: "scale(0.8)",
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                        color: "#D0140F",
                                    },
                                    "@media (max-width: 600px)": {
                                        height: "3rem",
                                        width: "10rem",
                                        // maxWidth: "100px",
                                        fontSize: "10px",
                                    },
                                    "@media (max-width: 370px)": {
                                        height: "3rem",
                                        width: "150px",
                                        fontSize: "8px",
                                    },
                                }}
                            >
                                Let's Work Together
                            </Button>
                        </Link>
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                transform: "scale(0.8)",
                                height: "80px",
                                width: "12rem",
                                color: "#000",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    color: "#D0140F",
                                    border: "1px solid #D0140F",
                                },
                                "@media (max-width: 600px)": {
                                    height: "3rem",
                                    width: "10rem",
                                    fontSize: "10px",
                                },
                                "@media (max-width: 370px)": {
                                    height: "3rem",
                                    width: "100px",
                                    fontSize: "8px",
                                },
                            }}
                        >
                            All our Studies
                        </Button>
                    </Box>
                </Container>
            </Grid>
        </>
    );
};

export default CaseStudiesList;