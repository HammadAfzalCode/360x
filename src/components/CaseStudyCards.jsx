import { useState } from 'react';
import { Box, Grid, Typography, Paper, Slide, Button, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const CaseStudyCards = ({ index, imageSrc, title }) => {
    const isXXSmallScreen = useMediaQuery("(max-width:300px)");
    const isXSmallScreen = useMediaQuery("(max-width:399px)");
    const isSmallScreen = useMediaQuery("(max-width:400px)");
    const isSmallMediumScreen = useMediaQuery("(max-width:600px)");
    const isMediumScreen = useMediaQuery("(max-width:900px)");
    const isLargeScreen = useMediaQuery("(max-width:1092px)");
    const isXLargeScreen = useMediaQuery("(max-width:1300px)");
    const isXXLargeScreen = useMediaQuery("(max-width:1500px)");

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = (index) => {
        setHovered(index);
    };
    const handleMouseLeave = () => {
        setHovered(null);
    };

    return (
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
            <Grid
                key={index}
                style={{ width: "100%", position: "relative" }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
            >
                <Image src={imageSrc} alt={`image-${index}`} width={780} height={600} layout="responsive" />
                <Slide direction="up" in={hovered === index} mountOnEnter unmountOnExit>
                    <Paper elevation={4} sx={{ color: "#FFF", background: '#D0140F', position: 'absolute', bottom: 0, width: isXXSmallScreen ? "65vw" : isSmallScreen ? "73vw" : isSmallMediumScreen ? "78vw" : isMediumScreen ? "85vw" : "43vw", height: isXXSmallScreen ? "36vh" : isSmallScreen ? "50vh" : isSmallMediumScreen ? "85vh" : isMediumScreen ? "100%" : isLargeScreen ? "100%" : isXLargeScreen ? "100%" : isXXLargeScreen ? "100%" : "95vh", padding: 2 }}>
                        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: isXXSmallScreen ? "" : isSmallScreen ? "50px" : isSmallMediumScreen ? "140px" : isMediumScreen ? "70px" : isXLargeScreen ? "30px" : "70px" }}>
                            <Typography variant={isSmallScreen ? "h6" : isSmallMediumScreen ? "h5" : isXLargeScreen ? "h4" : "h3"} sx={{ fontFamily: "Clash Display", fontWeight: 600, textDecoration: 'underline' }}>{title}</Typography>
                            <Box sx={{ marginTop: isXSmallScreen ? "5px" : isSmallScreen ? "12px" : isSmallMediumScreen ? "10px" : isMediumScreen ? "30px" : isXLargeScreen ? "20px" : "50px" }}>
                                <Typography sx={{ fontWeight: 400, fontSize: isXXSmallScreen ? "7px" : isXSmallScreen ? "8px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "12px" : isMediumScreen ? "18px" : isXLargeScreen ? "14px" : "18px", fontFamily: "Helvetica" }}>Built a patient and provider SaaS application for a US based telehealth startup. Ophy Care is a telemedicine platform that quickly connects patients to health care providers who speak the same language and/or share similar ethnic backgrounds.</Typography>
                                <Typography sx={{ marginTop: isXXSmallScreen ? "8px" : isXSmallScreen ? "10px" : isSmallScreen ? "6px" : isSmallMediumScreen ? "12px" : isMediumScreen ? "20px" : isXLargeScreen ? "14px" : "30px", fontWeight: 400, fontSize: isXXSmallScreen ? "7px" : isXSmallScreen ? "8px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "12px" : isMediumScreen ? "18px" : isXLargeScreen ? "14px" : "18px", fontFamily: "Helvetica" }}>360XpertSolutions developed this platform from ground up and did integrations with EMR providers, payment gateways, teleconferencing providers, AWS Cognito and many more.</Typography>
                                <Box gap={4} sx={{ marginY: isXXSmallScreen ? "8px" : isSmallScreen ? "30px" : isSmallMediumScreen ? "10px" : isMediumScreen ? "70px" : isXLargeScreen ? "20px" : "50px", display: "flex" }}>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                                        <Image width={isSmallScreen ? 20 : 30} height={30} src="/assets/stripe_bae5568e2e 1.svg" />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                                        <Image width={isSmallScreen ? 20 : 30} height={30} src="/assets/javascript_horizontal_5a662283b5 1.svg" />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                                        <Image width={isSmallScreen ? 20 : 30} height={30} src="/assets/getbootstrap_ar21_ebe4405ebc 1.svg" />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', background: "#FFF", width: isSmallScreen ? "55px" : "86px", height: isSmallScreen ? "30px" : isSmallMediumScreen ? "50px" : "62px" }}>
                                        <Image width={isSmallScreen ? 20 : 30} height={30} src="/assets/mysql_horizontal_aec0b8c464 1.svg" />
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", height: isXSmallScreen ? "5px" : isSmallScreen ? "2px" : isSmallMediumScreen ? "2px" : "10vh", position: 'absolute', bottom: 0, left: 0, width: isXSmallScreen ? "72vw" : isSmallScreen ? "75vw" : isSmallMediumScreen ? "75vw" : "43vw", background: '#000', padding: 2 }}>
                                    <Button sx={{ fontFamily: "Clash Display", textTransform: "none", textDecoration: "underline", fontSize: isXSmallScreen ? "10px" : isSmallScreen ? "10px" : isSmallMediumScreen ? "16px" : "20px", color: "#FFF" }} href="">ioCommit</Button>
                                    <Button sx={{ fontFamily: "Clash Display", textTransform: "none", fontSize: isXSmallScreen ? "8px" : isSmallScreen ? "8px" : "12px", color: "#FFF", marginRight: isSmallScreen ? "10px" : "2px" }} href="">View More</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Slide>
            </Grid>
        </Box>
    );
};
export default CaseStudyCards;