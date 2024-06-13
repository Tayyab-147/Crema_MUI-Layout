import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Card_Features from "./Card_Features";
import {
  bgimgCover,
  gradiantTypo,
  gridMain,
  libStyle,
  sideImages,
} from "../Styles/Features_Styles";
import Slide from "./Slides_Up";
import Card_Features_Libraries from "./Card_Features_Libraries";

const Features = () => {
  const cardsData = [
    {
      backgroundColor: "#FFEAE9",
      src: "https://cremawork.com/images/powerful-server/laravel-icon.svg",
      title: "Laravel + JWT Auth",
      color: "red",
    },
    {
      backgroundColor: "#EDF7ED",
      src: "https://cremawork.com/images/powerful-server/mangoose-icon.svg",
      title: "Mongoose + JWT Auth",
      color: "green",
    },
    {
      backgroundColor: "#F4F7FE",
      src: "https://cremawork.com/images/powerful-server/python-icon.svg",
      title: "Python + JWT Auth",
      color: "purple",
    },
  ];

  const libraryCards = [
    {
      src: "https://cremawork.com/images/technology/react-icon.svg",
      title: "React Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/redux-icon.svg",
      title: "Redux Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/react-icon.svg",
      title: "React Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/redux-icon.svg",
      title: "Redux Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/react-icon.svg",
      title: "React Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/redux-icon.svg",
      title: "Redux Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/react-icon.svg",
      title: "React Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/redux-icon.svg",
      title: "Redux Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/react-icon.svg",
      title: "React Toolkit",
    },
    {
      src: "https://cremawork.com/images/technology/redux-icon.svg",
      title: "Redux Toolkit",
    },
  ];
  return (
    <Box id="features" sx={{ paddingBottom: 5, paddingTop: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Slide direction="top">
          <Typography sx={{ color: "rgb(0, 144, 241)", fontWeight: "bold" }}>
            TO KICK START YOUR APP APIS
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", paddingY: 2 }}>
            Built-in with 3 most powerful API servers{" "}
          </Typography>
        </Slide>
      </Box>
      <Slide>
        <Grid
          container
          sx={{ padding: "20px", gap: 4, justifyContent: "center" }}
        >
          {cardsData.map((card, index) => (
            <Card_Features key={index} data={card} />
          ))}
        </Grid>
      </Slide>
      <Box sx={{ textAlign: "center", paddingY: 7 }}>
        <Slide direction="top">
          <Typography variant="h4" sx={gradiantTypo}>
            6 Inbuilt Languages
          </Typography>
          <Typography>Language Support</Typography>
        </Slide>
      </Box>
      <Box sx={bgimgCover}>
        <Box sx={sideImages}>
          <Slide direction="top">
            <img src="https://cremawork.com/static/language-user-left-d19526bfcfe9c021602ef10fa4581a51.png" />
          </Slide>
        </Box>
        <Box sx={{ width: "330px" }}>
          <Slide>
            <img
              src="https://cremawork.com/static/language-fb738f22bba7c0aeaa6f9f09f6d15d0f.png"
              style={{ borderRadius: "10px" }}
            />
          </Slide>
        </Box>
        <Box sx={sideImages}>
          <Slide direction="top">
            <img src="https://cremawork.com/static/language-user-right-214b9c53fb029b656b1268391eddf263.png" />
          </Slide>
        </Box>
      </Box>
      <Grid container sx={gridMain}>
        <Grid item xs={12} md={6} sx={{ paddingRight: { md: 10 } }}>
          <Slide direction="top">
            <Typography sx={{ color: "rgb(0, 144, 241)", fontWeight: "bold" }}>
              4 DIFFERENT
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold", paddingY: 2 }}>
              Authorization Support
            </Typography>
            <Typography sx={{ color: "gray" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </Typography>
          </Slide>
        </Grid>
        <Grid item xs={12} md={6}>
          <Slide>
            <Box
              sx={{
                backgroundColor: "white",
                padding: 1,
                borderRadius: 2,
                marginTop: { xs: 3 },
              }}
            >
              <img src="https://cremawork.com/static/mui-login-052d42e37d8378b16642ca1a3e7bbf49.png" />
            </Box>
          </Slide>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: 5 }}>
        <Slide direction="top">
          <Typography sx={{ color: "rgb(0, 144, 241)", fontWeight: "bold" }}>
            TOP LIBRARIES
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", paddingY: 2 }}>
            Various technology stack is covered for your app
          </Typography>
        </Slide>
      </Box>
      <Grid container sx={libStyle}>
        {libraryCards.map((card, index) => (
          <Card_Features_Libraries key={index} data={card} />
        ))}
        {console.log(libraryCards)}
      </Grid>
    </Box>
  );
};

export default Features;
