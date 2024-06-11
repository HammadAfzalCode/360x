import React from "react";
import { Box, Typography, Grid, CardMedia } from "@mui/material";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Work from "../components/Work";
import Head from "next/head";
import slugify from 'slugify'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const Blog = ({ blogs }) => {
  const calculateAspectRatio = (width, height) => {
    return width / height;
  };

  return (
    <>
      <Head>
        <title>Engineering - 360XpertsSolutions</title>
        <meta
          name="description"
          hreflang="en"
          content="Explore 360XpertSolutions' Engineering for insightful articles, tips, and industry updates."
        />
        <meta name="author" content="360XpertSolutions" />
        <link rel="canonical" href="https://360xpertsolutions.com/engineering" />
        <meta property="og:title" content="360XpertSolutions Engineering" />
        <meta
          property="og:description"
          content="Explore 360XpertSolutions' engineering for insightful articles, tips, and industry updates."
        />
        <meta
          name="keywords"
          content="360XpertSolutions, engineering, articles, tips, industry updates"
        />
        <meta name="geo.region" content="PK-S" />
        <meta name="geo.placename" content="Karachi, Sindh, Pakistan" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta http-equiv="Content-Language" content="en" />
        <meta
          property="og:image"
          content="https://360xpertsolutions.com/assets/x.png"
        />
      </Head>

      <Box>
        <Navbar />
        <Container>
          <Box>
            <Grid item xs={12} md={6} sx={{ marginTop: "120px" }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Clash Display",
                  fontSize: { xs: "40px", md: "60px" },
                }}
              >
                Discover Engineering
              </Typography>

              <Typography
                sx={{
                  color: "red",
                  lineHeight: "1.5",
                  display: "flex",
                  fontSize: { xs: "40px", md: "60px" },
                }}
              >
                Insights Unveiled
              </Typography>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{ paddingTop: "10%", marginTop: 0 }}
            >
              {blogs &&
                blogs.map((blog) => (
                  <Grid item key={blog.id} xs={12} md={6}>
    <Link href={`/engineering/${blog.id}/${slugify(blog.attributes.title, { lower: true, strict: true })}`} passHref>
                      <Box sx={{ cursor: "pointer", position: "relative" }}>
                      {blog.attributes.content &&
  blog.attributes.content.some(
    (contentItem) => contentItem.type === "image"
  ) && (
    <div>
      {blog.attributes.content
        .filter((contentItem) => contentItem.type === "image")
        .slice(0, 1)
        .map((contentItem, index) => (
          <CardMedia
            key={index}
            component="img"
            image={contentItem.image.url}
            alt={contentItem.image.alternativeText}
            sx={{
              height: 200, // Fixed height for all images
              width: '100%', // Take up all available width
              objectFit: 'cover', // Cover the area, possibly cropping the image
              paddingTop: '10px', // Optional padding, adjust as needed
            }}
          />
        ))}
    </div>
  )
 && (
                            <div>
                              {blog.attributes.content
                                .filter(
                                  (contentItem) => contentItem.type === "image"
                                )
                                .slice(0, 1)
                                .map((contentItem, index) => (
                                  <CardMedia
                                    key={index}
                                    component="img"
                                    src={contentItem.image.url}
                                    alt={contentItem.image.alternativeText}
                                    style={{
                                      maxWidth: "100%",
                                      height: "auto",
                                      paddingTop: "10px",
                                    }}
                                    onLoad={(e) => {
                                      const aspectRatio = calculateAspectRatio(
                                        e.target.naturalWidth,
                                        e.target.naturalHeight
                                      );
                                      if (aspectRatio > 1) {
                                        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.flex =
                                          "auto";
                                      }
                                    }}
                                  />
                                ))}
                            </div>
                          )}
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50% ",
                            left: 0,
                            right: 0,

                            maxwidth: "100%",
                            textAlign: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "10px",
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              fontFamily: "Clash Display",
                              color: "#ffffff",
                              fontSize: {
                                xs: "14px",
                                sm: "22px",
                                md: "31px",
                                lg: "30px",
                              },
                              fontWeight: "bold",
                            }}
                          >
                            {blog.attributes.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#FFFF",
                              fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "16px",
                                lg: "18px",
                              },
                            }}
                          ></Typography>
                        </Box>
                      </Box>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
        <Work />
        <Footer />
      </Box>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const response = await fetch("https://api.360xpertsolutions.com/api/blogs/");
  const data = await response.json();
  const blogs = data.data;
  return {
    props: {
      blogs,
    },
  };
}
