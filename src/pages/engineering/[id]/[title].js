import Layout from "../../../components/Layout";
import React, { useState, useEffect } from "react";
import { Grid, Typography, CardMedia, CircularProgress, Container, Box } from "@mui/material";
import { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extracting only the ID
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API endpoint when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.360xpertsolutions.com/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
          <CircularProgress />
        </Grid>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="md" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
        
          {blog?.attributes.content.map((contentItem, index) => (
            <Grid item xs={12} key={index}>
              {contentItem.type === 'heading' && (
                <Typography variant={`h${contentItem.level}`} gutterBottom style={{ color: "#fff" }}>
                  {contentItem.children.map((child, childIndex) => (
                    <span key={childIndex} style={{ fontWeight: child.bold ? 'bold' : 'normal', fontStyle: child.italic ? 'italic' : 'normal', textDecoration: child.underline ? 'underline' : 'none' }}>
                      {child.text}
                    </span>
                  ))}
                </Typography>
              )}
              {contentItem.type === 'paragraph' && (
                <Typography variant="body1" align="justify" paragraph style={{ color: "#fff" }}>
                  {contentItem.children.map((child, childIndex) => (
                    <span key={childIndex} style={{ fontWeight: child.bold ? 'bold' : 'normal', fontStyle: child.italic ? 'italic' : 'normal', textDecoration: child.underline ? 'underline' : 'none' }}>
                      {child.text}
                    </span>
                  ))}
                </Typography>
              )}
              {contentItem.type === 'image' && (
                <Box display="flex" justifyContent="center" mt={2}>
                  <CardMedia
                    component="img"
                    src={contentItem.image.url}
                    alt={contentItem.image.alternativeText}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </Box>
              )}
              {contentItem.type === 'code' && (
                <Box mt={2} p={2} bgcolor="grey.200" style={{ width: '100%' }}>
                  <Typography variant="body2" style={{ fontFamily: 'Monospace' }}>
                    {contentItem.children.map((child, childIndex) => (
                      <span key={childIndex}>
                        {child.text}
                      </span>
                    ))}
                  </Typography>
                </Box>
              )}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" style={{ color: "#fff" }}>
              {blog?.attributes.author} - {blog?.attributes.publicationDate}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogDetail;
