import React from "react";
import { Box, Typography } from "@mui/material";
import Slide from "./Slides_Up";
import Card_Social_Banner from "./Card_Social_Banner";
import { nanoid } from "@reduxjs/toolkit";
import {
  boxStyles,
  typographyStyles,
  boxWithFlexStyles,
} from "../Styles/Social_Banner_Styles";

const Social_Banner = () => {
  const cardsData = [
    {
      id: nanoid(),
      rotationDegree: 15,
      src: "https://cremawork.com/images/features/documentation.svg",
      alt: "First",
      title: "Documentation",
      detail: "Available our detailed document and top call support here.",
      buttonText: "Check Document",
    },
    {
      id: nanoid(),
      rotationDegree: 15,
      src: "https://cremawork.com/images/features/git-hub.svg",
      alt: "GitHub",
      title: "GitHub",
      detail: "Get latest feature, make pull request or bug fixes.",
      buttonText: "Join On GitHub",
    },
    {
      id: nanoid(),
      rotationDegree: -15,
      src: "https://cremawork.com/images/features/slack.svg",
      alt: "Slack",
      title: "Slack",
      detail:
        "Share your idea and insights, for inspiration collaboration and great result.",
      buttonText: "Join Our Community",
    },
  ];

  return (
    <>
      <Box sx={boxStyles}>
        <Slide direction="top">
          <Typography variant="body1" sx={typographyStyles.body}>
            CREMA MUI
          </Typography>
        </Slide>
        <Slide direction="top">
          <Typography variant="h4" sx={typographyStyles.heading}>
            Crema MUI is a great kick-starter
          </Typography>
        </Slide>

        <Box sx={boxWithFlexStyles}>
          {cardsData.map((card, index) => (
            <Slide>
              <Card_Social_Banner key={index} data={card} />
            </Slide>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Social_Banner;
