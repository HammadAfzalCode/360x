import { Box, Typography } from '@mui/material';
import Container from './Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from '@mui/material/useMediaQuery';
import React from 'react';
import Head from 'next/head';
import SchemaMarkup from '../pages/schema';
const clientsLeftToRight = [
    { id: 1, backgroundColor: '#848484', imageUrl: '/assets/client1.png' },
    { id: 2, backgroundColor: '#848484', imageUrl: '/assets/client2.png' },
    // Add more client objects as needed
];

const clientsRightToLeft = [
    { id: 1, backgroundColor: '#848484', imageUrl: '/assets/client3.png' },
    { id: 2, backgroundColor: '#848484', imageUrl: '/assets/client4.png' },
    // Add more client objects as needed
];
const firstMap = [
    { imageUrl: '/assets/wisayah.png', alt: "wisayah logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/gtc.png', alt: "gtc logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/Hassana Logos-1.png', alt: "hassana logo", style: { width: "100%", height: "auto", marginTop: "20px" } },
    { imageUrl: '/assets/eagle-iot.png', alt: "eagle-iot logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/busma.png', alt: "busma logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/stc.png', alt: "stc logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/dms.png', alt: "dms logo", style: { width: "100%", height: "auto" } },
    { imageUrl: 'assets/Frame 5850.png', alt: "bykea logo", style: { width: "100%", height: "auto" } }
];


const secondMap = [
    { imageUrl: '/assets/wisayah.png', alt: "wisayah logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/gtc.png', alt: "gtc logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/Hassana Logos-1.png', alt: "hassana logo", style: { width: "100%", height: "auto", marginTop: "20px" } },
    { imageUrl: '/assets/eagle-iot.png', alt: "eagle-iot logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/busma.png', alt: "busma logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/stc.png', alt: "stc logo", style: { width: "100%", height: "auto" } },
    { imageUrl: '/assets/dms.png', alt: "dms logo", style: { width: "100%", height: "auto" } },
    { imageUrl: 'assets/Frame 5850.png', alt: "bykea logo", style: { width: "100%", height: "auto" } }
]
export default function OurClients() {


    const sliderSettingsLeftToRight = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 6,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 0,
        rtl: true,
        ltr: false,
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1393,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const sliderSettingsRightToLeft = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 6,
        slidesToScroll: 2,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        rtl: false,
        ltr: true, // Set to true for right-to-left movement
        responsive: [
            {
                breakpoint: 1393,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <Container>
            <Head>
                <SchemaMarkup
                    type="our clientele"
                    headline="client"
                    description="folio3, koderlab, kodexolabs ,ibm, salesforces,stripe,microsoft,google,oracle" />
            </Head>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    // minHeight: "70vh",
                    marginTop: "50px",
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Clash Display Variable',
                        fontSize: { xs: "2rem", sm: "3rem" },
                        textAlign: 'center',
                        color: '#D0140F',
                    }}
                >
                    Our Clientele
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Clash Display Variable',
                        fontSize: '1rem',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    We have been working with clients around the world.
                </Typography>
                <Box sx={{ width: '55%', borderTop: '1px solid #3A3A3A', marginTop: '30px' }}></Box>
                <Box sx={{ width: '100%', marginTop: '50px' }}>
                    <Slider {...sliderSettingsLeftToRight}>
                        {firstMap.map((item, index) => (
                            <Box
                                key={index}
                                className="box"
                                sx={{
                                    // backgroundColor: '#848484',
                                }}
                            >
                                <img style={item.style} alt={item.alt} src={item.imageUrl} />
                            </Box>
                        ))}
                    </Slider>
                </Box>
                <Box sx={{ width: '100%', marginTop: '50px' }}>
                    <Slider {...sliderSettingsRightToLeft}>
                        {secondMap.map((item, index) => (
                            <Box
                                key={index}
                                className="box"
                                sx={{
                                    // backgroundColor: '#848484',
                                }}
                            >
                                <img style={item.style} alt={item.alt} src={item.imageUrl} />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Container>
    );
}
