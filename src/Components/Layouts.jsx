import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Card_Layouts from "./Card_Layouts";
import Slide from "./Slides_Up";
import { buyButton, gridItem, gridMain, learnButton } from "../Styles/Layouts";
import { typoGrid } from "../Styles/Apps_Styles";

const Layouts = () => {
  const cardsData = [
    {
      title: "Layout 1 - Default",
      src: "https://cremawork.com/images/layout/mui/default.png",
    },
    {
      title: "Layout 2 - Mini Sidebar Toggle",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 3",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 4",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 5",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 6",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 7",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 8",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 9",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 10",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Layout 11 - Horizontal Dark Layout",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
  ];
  return (
    <Grid id="layouts" container spacing={5} sx={gridMain}>
      <Grid item xs={12} md={7}>
        {cardsData.map((card, index) => (
          <Card_Layouts key={index} data={card} />
        ))}
      </Grid>
      <Grid item xs={12} md={5} sx={gridItem}>
        <Slide direction="top">
          <Typography sx={typoGrid}>AWARD-WINNING DESIGN COLLECTION</Typography>
        </Slide>
        <Slide direction="top">
          <Typography variant="h4" sx={{ paddingTop: 3, fontWeight: "bold" }}>
            Best-in-class designs to get you started.
          </Typography>
        </Slide>
        <Slide direction="top">
          <Typography sx={{ paddingTop: 3, color: "gray" }}>
            Crama has a powerful layout system which allows you to configure,
            customize and also create you own layout.
          </Typography>
        </Slide>
        <Slide direction="top">
          <Button variant="contained" sx={buyButton}>
            Buy Now
          </Button>
          <Button sx={learnButton}>Learn More</Button>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Layouts;
