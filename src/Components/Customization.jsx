import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Card_Customization from "./Card_Customization";
import Slide from "./Slides_Up";
import {
  avatarTypo,
  gridItem,
  gridMain,
  typoGrid,
} from "../Styles/Customization_Styles";

const Customization = () => {
  const cardsData = [
    {
      src: "https://cremawork.com/images/color-customization/mui/light.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
  ];
  return (
    <Grid id="customization" container spacing={5} sx={gridMain}>
      <Grid item xs={12} md={5} sx={gridItem}>
        <Slide direction="left">
          <Typography sx={typoGrid}>FINE-TUNE COLOR PALETTE</Typography>
          <Typography
            variant="h4"
            sx={{ paddingTop: 2, fontWeight: "bold", color: "white" }}
          >
            Color Customization
          </Typography>
          <Typography sx={{ paddingTop: 2, paddingBottom: 2, color: "white" }}>
            Feel free to rearrange the entire color palette, making your website
            unique and beautiful.
          </Typography>
          <Typography sx={avatarTypo}>
            <Avatar
              sx={{ height: "45px", width: "45px" }}
              src="https://cremawork.com/images/customization/scheme.svg"
            />
            Light & Dark Color Schemes
          </Typography>
          <Typography sx={avatarTypo}>
            <Avatar
              sx={{ height: "45px", width: "45px" }}
              src="https://cremawork.com/images/customization/color-palette.svg"
            />
            Create Your Own Color Palettes{" "}
          </Typography>
          <Typography sx={avatarTypo}>
            <Avatar
              sx={{ height: "45px", width: "45px" }}
              src="https://cremawork.com/images/customization/granular.svg"
            />
            Granular Control
          </Typography>
        </Slide>
      </Grid>
      <Grid item xs={12} md={7}>
        {cardsData.map((card, index) => (
          <Card_Customization key={index} data={card} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Customization;
