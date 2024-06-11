import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { toast } from "react-toastify";     
// import { toast } from "react-hot-toast";
import { toast, Toaster } from "react-hot-toast";
import { useTheme } from "@mui/system";
import TypingIndicator from "../components/TypingIndicator";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image"; // Import next/image

const useStyles = makeStyles({
  messageIconContainer: {
    position: "fixed",
    zIndex: 10000,
    textAlign: "right",
  },
  chatContainer: {
    position: "fixed",
    bottom: "75px",
    right: "60px",
    backgroundColor: "#1B1B19",
    borderRadius: "10px",
    zIndex: 9999,
    overflowY: "auto",
    display: "none",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    maxHeight: "400px",
    width: "350px",
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  show: {
    display: "block",
  },
  closeButton: {
    position: "absolute",
    top: 3,
    left: 1,
    cursor: "pointer",
    color: "#FF0000",
    fontSize: "1em",
  },
  conversationBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    paddingTop: '10%'
  },
  messageContainer: {
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "70%",
    wordWrap: "break-word",
  },
  userMessage: {
    backgroundColor: "white",
    color: "black",
    alignSelf: "flex-start",
  },
  botMessage: {
    backgroundColor: "#D01510",
    color: "white",
    alignSelf: "flex-end",
  },
  timestamp: {
    // fontSize: "0.5rem",
    color: "#888",
    // marginLeft: "10px",
    paddingTop: "3.2%",
    // paddingRight:"1vw",
    position: "absolute"
  },
  textareaContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  textarea: {
    width: "100%",
    height: "43px",
    resize: "none",
    color: "#FFFFFF",
    fontSize: "16px",
    borderRadius: "5px",
    marginTop: "0.25em",
    backgroundColor: "#343434",
    borderColor: "#343434",
    paddingLeft: "14px",
    paddingTop: "10px",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    border: "none",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  sendButton: {
    background: "none",
    border: "none",
    marginTop: "4px",
    cursor: "pointer",
  },
  typingIndicator: {
    display: "flex",
    // justifyContent:"flex-end",
    // flexDirection:"row-reverse",
    paddingLeft: "85%",
    bottom: "10%",
    padding: "5px",
    gap: "5px",
    color: "#888",
    fontSize: "0.8rem",
  },
  smallScreen: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,
    width: "90%",
    maxWidth: 350,
    margin: "0px auto 91px",
    borderRadius: 0,
  },
});

const ChatBot = () => {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Message: "",
  });

  const [step, setStep] = useState(1);
  const [showChat, setShowChat] = useState(false);
  const [conversation, setConversation] = useState([]);
  const conversationBoxRef = useRef(null);
  const [invalidEmailMessage, setInvalidEmailMessage] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const chatContainerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Name:", name);
    console.log("Value:", value);

    setFormData({ ...formData, [name]: value });

    if (name === "Email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(value);
      console.log("isValidEmail:", isValidEmail);
      setValidEmail(isValidEmail);

      if (!isValidEmail && value.trim() !== "") {
        setInvalidEmailMessage("Please enter a valid email address ");
      } else {
        setInvalidEmailMessage("");
      }
    }
  };


  const email = async () => {
    try {
      const response = await fetch("/api/SendChatEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, email: formData.Email }),
      });

      if (!response.ok) throw new Error("Failed to send email ");

      const result = await response.json();
      toast.success(result.message);

      setFormData({
        FullName: "",
        Email: "",
        Message: "",
      });
      toast.success("Email successfully sent!");

    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentInput =
      step === 1
        ? formData.FullName
        : step === 2
          ? formData.Email
          : formData.Message;

    // if (!currentInput.trim()) {
    //   toast.warn("Please enter a valid response.");
    //   return;
    // }

    if (step === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/;
      const isValidEmail = emailRegex.test(formData.Email);
      if (!isValidEmail) {
        toast.error("Please enter a valid email address.");
        return;
      }
    }
    setFormData({
      ...formData,
      [step === 1 ? "FullName" : step === 2 ? "Message" : "Email"]: " ",
    });

    try {
      const nextStep = step + 1;

      let botResponse = "";
      switch (nextStep) {
        case 1:
          botResponse = "Enter your Full name:";
          break;
        case 2:
          botResponse = `Enter your email, ${formData.FullName}` ;
          break;
        case 3:
          botResponse = `Enter any message, ${formData.FullName}`;
          break;
        case 4:
          botResponse = `Thanks! Your Message Has Been Submitted, ${formData.FullName}`;
          break;

      }

      if (step <= 3) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "user",
            content: currentInput,
            time: new Date().toLocaleTimeString(),
          },
        ]);
      }

      setStep(nextStep);

      if (nextStep === 4) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "bot",
            content: botResponse,
            time: new Date().toLocaleTimeString(),
          },
        ]);

        await email();
        setIsTyping(false);
        return;
      }

      if (botResponse && nextStep < 4) {
        setIsTyping(true);

        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation,
            {
              type: "bot",
              time: new Date().toLocaleTimeString(),
            },
          ]);
        }, 1000);

        setTimeout(() => {
          setConversation((prevConversation) => [
            ...prevConversation.slice(0, -1),
            {
              type: "bot",
              content: botResponse,
              time: new Date().toLocaleTimeString(),
            },
          ]);
          setIsTyping(false);
        }, 1500);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChatToggle = () => {
    setShowChat((prevShowChat) => !prevShowChat);

    if (!showChat && conversation.length === 0) {
      setConversation([
        {
          type: "bot",
          content: "Hi there! How can I help you?",
          time: new Date().toLocaleTimeString(),
        },
      ]);

      setTimeout(() => {
        setConversation([
          {
            type: "bot",
            content: "What is your name?",
            time: new Date().toLocaleTimeString(),
          },
        ]);
        setStep(1);
      }, 2000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        setShowChat(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (
      showChat &&
      step === 3 &&
      conversation.length > 0 &&
      conversation[conversation.length - 1].content === "Enter any message:"
    ) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Message: "",
      }));
    }
  }, [showChat, step, conversation]);

  useEffect(() => {
    if (conversationBoxRef.current) {
      const conversationBoxHeight = conversationBoxRef.current.clientHeight;
      if (conversationBoxHeight) {
        const newHeight = conversationBoxHeight + 88;
        chatContainerRef.current.style.height = `${newHeight}px`;
      }
    }
  }, [conversation]);

  return (
    <>
      <Box
        className={classes.messageIconContainer}
        onClick={handleChatToggle}
        style={{
          bottom: isSmallScreen ? "20px" : "100px",
          right: isSmallScreen ? "20px" : "60px",
          // top:"90%"
        }}
      >
        <img
          src="/assets/favicon.svg"
          alt="Message"
          style={{
            width: isSmallScreen ? "30px" : "40px",
            height: "auto",
            cursor: "pointer",
            position: "sticky",
            paddingLeft: "96%",
            zIndex: 9999,
            // bottom:"50%"
          }}
        />
      </Box>
      <Box
        ref={chatContainerRef}
        className={`${classes.chatContainer} ${showChat ? classes.show : ""
          } ${isSmallScreen ? classes.smallScreen : ""}`}
      >
        {showChat && (
          <form onSubmit={handleSubmit}>
            <Button
              className={classes.closeButton}
              onClick={() => setShowChat(false)}
            >
              ...
            </Button>
            <Box className={classes.conversationBox} ref={conversationBoxRef}>
              {conversation.map((msg, index) => (
                msg.content && (
                  <div
                    key={index}
                    className={`${classes.messageContainer} ${msg.type === "user"
                        ? classes.userMessage
                        : classes.botMessage
                      }`}
                  >
                    <Typography>{msg.content}</Typography>
                    <Typography sx={{ fontSize: "0.6rem", }} className={classes.timestamp}>
                      {msg.time}
                    </Typography>

                  </div>

                )
              ))}
              {isTyping && (
                <div className={classes.typingIndicator}>
                  <TypingIndicator />
                  {/* <Typography variant="body2">Typing...</Typography> */}
                </div>
              )}
            </Box>
            {/* {isTyping && (
                  <div className={classes.typingIndicator}>
                    <TypingIndicator />
                    <Typography variant="body2">Typing...</Typography>
                  </div>
                )} */}
            <Box className={classes.textareaContainer}>

              <textarea
                aria-label="Type your message"
                type={step === 2 ? "email" : "text"}
                id={
                  step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
                }
                name={
                  step === 1 ? "FullName" : step === 2 ? "Email" : "Message"
                }

                placeholder={
                  step === 1
                    ? "Enter Your Full Name"
                    : step === 2
                      ? "Enter Your Email"
                      : "Enter Any Message"
                }
                value={
                  step === 1
                    ? formData.FullName
                    : step === 2
                      ? formData.Email
                      : formData.Message
                }

                onChange={handleChange}
                required
                rows={6}
                className={classes.textarea}

              />
              {/* {!validEmail && <div style={{ color: "red" }}>{invalidEmailMessage}</div>} */}

              <Button
                type="submit"
                aria-label="Send Message"
                className={classes.sendButton}
                onClick={handleSubmit}
              >
                <Toaster />
                <img
                  src="/assets/Frame5847.png"
                  alt="Send"
                  style={{ width: "50px", height: "42px" }}
                />
              </Button>
            </Box>
          </form>
        )}
      </Box>
    </>
  );
};

export default ChatBot;
