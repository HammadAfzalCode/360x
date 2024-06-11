
import { useState } from "react";
import Container from "./../components/Container";
import styles from "../styles/contact.module.css";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { styled, useTheme } from "@mui/system";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function Meet() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("750"));
  const isLargeScreen = useMediaQuery("(max-width:1200px)");
  const isMediumScreen2 = useMediaQuery("(max-width:900px)");

  const [formData, setFormData] = useState({
    field: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, email })
      });

      if (!response.ok) throw new Error("Failed to send email");

      const result = await response.json();
      console.log(result);
      console.log(formData);
      toast.success(result.message); // Use toast.success to display a success message

      setFormData({
        field: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast.error(error.message); // Use toast.error to display an error message
    }
  };

  const Field = [
    { value: "AI", label: "AI" },
    { value: "ML", label: "ML" },
    { value: "App Development", label: "App Development" },
    { value: "Web development", label: "Web development" },
  ];

  const MyStyledButton = styled(Button)({
    borderRadius: "64px",
    border: "1px solid #FFF",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  });

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handle = (e) => {
    setEmail(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    // Check if email is empty
    if (!email) {
      setEmailError(toast.error("Email is required"));
    } else {
      handleSubmit(e);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - 360XpertsSolutions</title>
      </Head>
      <Navbar />
      <Container>
        <Toaster />

        <Grid container sx={{ marginTop: "150px" }}>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            lg={6}
            xl={9}
            order={isMediumScreen2 ? 2 : 1}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: isMobile ? "10px" : "15px",
                fontFamily: "clash display",
              }}
            >
              {/* Row 1: Looking For? */}
              {/* <div className="looking"  > */}
              <label className={styles.label} htmlFor="cars">
                Looking For?
              </label>

              <select
              className={styles.input}
              id="cars"
              name="field"
              value={formData.field}
              onChange={handleChange}
            >
              <option value="AI">AI</option>
              <option value="ML">ML</option>
              <option value="App Development">App Development</option>
              <option value="Web Development">Web Development</option>
            </select>

              <Box
                className={styles.contact}
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  //  flexDirection:"column",
                  gap: "14px",
                  fontSize: isMobile ? "10px" : "15px",
                  fontFamily: "clash display",
                }}
              >
                <Grid item lg={6} sm={12}>
                  <label
                    sx={{ marginBottom: "20px" }}
                    className={styles.label}
                    for="fname"
                    id="fname"
                  >
                    First name
                  </label>
                  <input
                    className={styles.input2}
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid lg={6} sm={12}>
                  <label className={styles.label} for="lname" id="name">
                    Last name
                  </label>
                  <input
                    className={styles.input2}
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Box>

              {/* Row 3: Phone Number and Email */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: "14px",
                  fontSize: isMobile ? "10px" : "15px",
                  fontFamily: "clash display",
                }}
              >
                <Grid item lg={6} sm={12}>
                  <label className={styles.label} htmlFor="phoneNumber">
                    Phone Number{" "}
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className={styles.input2}
                    required
                  />
                </Grid>
          
                <Grid item lg={6} sm={12}>
                  <label className={styles.label} for="email">
                    Email{" "}
                  </label>
                  <input
                    className={styles.input2}
                    type="email"
                    id="email"
                    name="email"
                    onChange={handle}
                    required
                  />
                </Grid>

              </Box>
              <label className={styles.label} for="company">
                Company{" "}
              </label>
              <input
                className={styles.input}
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                // required
              />
            
              <label className={styles.label} for="message">
                Message
              </label>
              <input
                className={styles.input}
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                // required
              />
              
              <Button
                className={styles.Button}
                sx={{
                  marginTop: isMobile ? "0px" : "20px",
                  fontSize: isMobile ? "10px" : isMediumScreen2 ? "12px" : "",
                  display: "flex",
                  marginRight: isMobile
                    ? "40%"
                    : isMediumScreen2
                    ? "70%"
                    : isLargeScreen
                    ? "70px"
                    : "70%",
                  padding: isMobile ? "10px" : isLargeScreen ? "10px" : "18px",
                  marginBottom: isMobile
                    ? "20px"
                    : isMediumScreen2
                    ? "20px"
                    : " ",
                  backgroundColor: "#D0140F",
                  fontWeight: "550",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#D0140F",
                    border: "1px solid #D0140F",
                  },
                  gap: "4.919px",
                }}
                type="submit"
                variant="contained"
                // color="error"
                endIcon={<ArrowRightAltIcon />}
                onClick={submit}
              >
                {/* <Typography sx={{ fontsize: isMobile?"10px":"17px"}} > */}
                Get started
                {/* </Typography> */}
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            lg={6}
            xl={3}
            order={isMediumScreen2 ? 1 : 2}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Image
              width={isMobile ? 200 : 500}
              height={isMobile ? 300 : 700}
              src="/assets/x.png"
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
