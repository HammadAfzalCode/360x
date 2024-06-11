'use client'
import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Work from '../components/Work';
const data = [
  { name: 'Jan', uv: 1000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 5000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 3780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const CaseReport = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Box>{isClient ? 'This is never prerendered' : 'Prerendered'}</Box>
      <Navbar />
      <Container>
        <Typography sx={{
          color: '#FFF',
          textAlign: 'start',
          paddingTop: "30vh",
          fontSize: {
            xs: '3vh',
            sm: '5vh',
            md: '7vh',
            lg: '10vh'
          }
        }}>
          Unveiling Customer Insights
        </Typography>
        <Typography sx={{
          textAlign: 'start',
          marginBottom: '40px',
          color: "#D0140F",
          fontSize: {
            xs: '3vh',
            sm: '4vh',
            md: '5vh',
            lg: '6vh'
          }
        }}>
          with Cohort Analysis
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Executive Summary:</Typography>

            <Typography sx={{ '@media (max-width: 600px)': { fontSize: '1.2rem', padding: '0 1rem' }, color: '#fff' }}>
              Imagine having a crystal ball for understanding your customer base. This Power BI dashboard prototype is your glimpse into that future, showcasing the potential of cohort analysis to unveil customer behavior, pinpoint trends, and inform data-driven strategies.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="green" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>The Vision:</Typography>


            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Track customer acquisition: Monitor new customer influx across various periods and identify acquisition patterns." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Analyze customer churn: Gain insights into customer loss trends and pinpoint cohorts at risk of churn." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Measure customer retention: Understand how different customer segments behave over time and track retention rates." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Uncover key metrics: Explore churn rate, lifetime value, customer acquisition cost, and other crucial metrics for informed decision-making." />
              </ListItem>
            </List>

          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Visualizing the Power:</Typography>
            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Interactive Cohort Table: Explore customer behavior by month and segment, drilling down into specific cohorts for granular analysis." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Churn Rate Trend Line: Visualize the evolution of churn rate over time, highlighting periods of high or low customer loss." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Retention Curve Comparison: Compare retention curves for different customer segments, revealing differences in loyalty patterns." />
              </ListItem >
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Scatter Plot with Drilldown: Analyze relationships between customer attributes and churn/retention, identifying potential risk factors or success indicators." />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#D0140F" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="green" />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>The Prototype's Promise:</Typography>
            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Empower data-driven decision-making: Equip businesses with actionable insights to optimize marketing, customer service, and product development efforts." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Reduce customer churn: Proactive interventions based on churn risk identified through the dashboard can help retain valuable customers." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Increase customer lifetime value: Deeper understanding of customer behavior leads to more effective engagement strategies, fostering stronger relationships and repeat business." />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Beyond the Prototype:</Typography>
            <List>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Integration with additional data sources: Expand the scope of analysis by incorporating marketing campaign data, customer support interactions, or product usage metrics." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Predictive modeling: Leverage machine learning to predict customer churn likelihood and personalize retention efforts." />
              </ListItem>
              <ListItem sx={{ color: "#fff", fontSize: '3.5vh' }}>
                <ListItemText primary="Customized dashboards: Tailor the dashboard layout and visualizations to specific business needs and user preferences." />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#D0140F" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: '20px', marginBottom: '80px' }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ fontSize: "4vh", color: '#D0140F' }}>Ready to unlock the power of customer data?</Typography>
            <Typography variant="1" sx={{ '@media (max-width: 600px)': { fontSize: '1rem', padding: '0 1rem' }, color: '#fff', marginTop: '40px' }}>
              Let's collaborate to refine this prototype into a customized dashboard that delivers actionable insights and drives business growth. Contact us to discuss your unique needs and explore how we can help you make the most of your customer data.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Work />
      <Footer />
    </>
  );
};

export default CaseReport;
