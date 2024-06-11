// components/PricingSection.js
import React from "react";
import PricingCard from "./PricingCard";
import styles from "../styles/PricingSection.module.css";
import { Box, Typography } from "@mui/material";
import Container from "./Container";


const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Staff Augmentation",
      features: [
        "Vetted developer profiles in 48 hours",
        "Availability of developers in every tech stack",
        "No hiring and retention stress",
        "Management and payroll freedom",
      ],
      buttonText: "Get Quotation",
      fields: [
        {
          type: "select",
          options: [
            "What are you looking to develop?",
            "MEAN",
            "MERN",
            "MEVN",
            "Python",
            "Java",
            "Lamp",
            "Ruby on Rails",
            "Full Stack Development", "Cloud & DevOps","UI/UX","Mobile Application Development","Data Annotation","Quality Assurance"
          ],
        },
        {
          type: "select",
          options: [
            "Staffing within",
            " 1-4 Weeks",
            "4-6 Weeks",
            "8-12 weeks",
            "Others",
          ],
        },
        {
          type: "select",
          options: [
            "For how long?",
            "3 Months",
            "6 Months",
            "12 Months",
            "Others",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "MVP Development",
      features: [
        "Accelerate your product development with our SaaS Express Dev Kit",
        "Ready-made core modules available to bootstrap your product",
        "Prototype and wireframing",
        "Dedicated project management",
        "Dedicated quality assurance",
        "Timely delivery",
        "Agile sprints",
      ],
      buttonText: "Get Quotation",
      fields: [
        {
          type: "date",
          label: [
            "When do you plan to launch your MVP?"
          ],
        },
        {
          type: "text",
          placeholder: [
            "Would you like to mention your MVP budget?"
          ],
        },
        {
          type: "text",
          placeholder: [
            "Which industry does your MVP target?"
          ],
        },
        {
          type:"checkbox",
          label:[
            "Do you want multilingual support?"
          ]

        },
        {
          type: "select",
          options: [
            "Do you want user login feature?",
            "Yes",
            "No"
          ],
        },
        {
          type: "select",
          options: [
            "Do you want third party API integrations?",
            "Yes",
            "No"
          ],
        },
        {
          type: "select",
          options: [
            "Do you want admin dashboard?",
            "Yes",
            "No"
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Time and Material (T&M)",
      features: [
        "Transparent pricing system",
        "Personal extended team exclusively working on your project",
        "Access to a wide range of IT experts from multiple domains",
        "Project manager allocated by 360 Xpert solutions",
        "Team flexibility and scalability",
        "Direct communication with developers",
        "Extend and reduce team according to your requirements",
      ],
      buttonText: "Get Quotation",

      fields: [
        {
          type: "select",
          options: [
            "What are you looking to develop?",
            "MEAN",
            "MERN",
            "MEVN",
            "Python",
            "Java",
            "Java",
            "Lamp",
            "Ruby on Rails",
            "Full Stack Development", "Cloud & DevOps","UI/UX","Mobile Application Development","Data Annotation","Quality Assurance"
          ],
        },
        {
          type: "select",
          options: [
            "Staffing within",
            " 1-4 Weeks",
            "4-6 Weeks",
            "8-12 weeks",
            "Others",
          ],
        },
        {
          type: "select",
          options: [
            "For how long?",
            "3 Months",
            "6 Months",
            "12 Months",
            "Others",
          ],
        },
      ],
    },
  ];

  // Handler for when the 'Get Quotation' button is clicked
  const handleGetQuoteClick = (planId) => {
    console.log(`Quotation for plan ID: ${planId}`);
  };

  return (
    <Container>
      <section>
        <Box
          style={{
            
            paddingBottom: "8%",
          }}
        >
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "300  ",
              color: "#fff",
              // paddingTop: "5rem",
              fontFamily: "Clash Display",
              fontStyle: "normal",
              fontHeight: "normal",
            }}
          >
            Our Pricing
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "400  ",
              color: "#fff",
              // marginBottom: "5rem",
              fontFamily: "Clash Display",
              fontStyle: "normal",
              fontHeight: "normal",
            }}
          >
            Choose one of the options below to get an accurate price estimation
            for your project:
          </Typography>
        </Box>
        <div className={styles.cardsContainer}>
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              features={plan.features}
              buttonText={plan.buttonText}
              onGetQuote={() => handleGetQuoteClick(plan.id)}
              fields={plan.fields} // Pass the fields to the PricingCard component
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default PricingSection;
