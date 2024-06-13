import React from "react";
import { Grid, Typography } from "@mui/material";
import Slide from "./Slides_Up";
import Card_Apps_Other_Pages from "./Card_Apps_Other_Pages";
import {
  gridItem,
  gridMain,
  typoGrid,
} from "../Styles/Apps_Other_Pages_Styles";

const Apps_Other_Pages = () => {
  const cardsData = [
    {
      src: "https://cremawork.com/images/other-pages/mui/about-us.png",
    },
    {
      src: "https://cremawork.com/images/other-pages/mui/about-us.png",
    },
    {
      src: "https://cremawork.com/images/other-pages/mui/about-us.png",
    },
    {
      src: "https://cremawork.com/images/other-pages/mui/pricing.png",
    },
  ];
  return (
    <Grid container spacing={5} sx={gridMain}>
      <Grid item xs={12} md={7}>
        {cardsData.map((card, index) => (
          <Card_Apps_Other_Pages key={index} data={card} />
        ))}
      </Grid>
      <Grid item xs={12} md={5} sx={gridItem}>
        <Slide direction="left">
          <Typography sx={typoGrid}>OTHER PAGES SECTION</Typography>
          <Typography variant="h4" sx={{ paddingTop: 2, fontWeight: "bold" }}>
            Other Pages
          </Typography>
          <Typography sx={{ paddingTop: 2, color: "gray" }}>
            Feel free to rearrange the entire color palette, making your website
            unique and beautiful.
          </Typography>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default Apps_Other_Pages;
