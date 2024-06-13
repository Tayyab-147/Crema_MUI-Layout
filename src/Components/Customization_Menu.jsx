import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Card_Customization_Menu from "./Card_Customization_Menu";
import Slide from "./Slides_Up";
import {
  gridItem,
  gridMain,
  typoGrid,
} from "../Styles/Customization_Menu_Styles";

const Customization_Menu = () => {
  const cardsData = [
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
    {
      src: "https://cremawork.com/images/selected-menu/mui/sidebar-menu1.png",
    },
  ];
  return (
    <Grid container spacing={6} sx={gridMain}>
      <Grid item xs={12} md={7}>
        {cardsData.map((card, index) => (
          <Card_Customization_Menu key={index} data={card} />
        ))}
      </Grid>
      <Grid item xs={12} md={5} sx={gridItem}>
        <Slide direction="left">
          <Typography sx={typoGrid}>SELECTED MENU STYLE</Typography>
          <Typography variant="h4" sx={{ paddingTop: 2, fontWeight: "bold" }}>
            Selected Menu
          </Typography>
          <Typography sx={{ paddingTop: 2, paddingBottom: 2 }}>
            Feel free to rearrange the entire color palette, making your website
            unique and beautiful.
          </Typography>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Customization_Menu;
