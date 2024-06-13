import React, { useEffect, useState } from "react";
import { Grid, Typography, List } from "@mui/material";
import Card_Apps from "./Card_Apps";
import Slide from "./Slides_Up";
import List_Apps from "./List_Apps";
import { gridItem1, mainGrid, typoGrid } from "../Styles/Apps_Styles";

const Apps = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const cardsData = [
    {
      title: "Email Application",
      src: "https://cremawork.com/images/layout/mui/default.png",
      title2: "Email Detail Application",
      src2: "https://cremawork.com/images/layout/mui/default.png",
    },
    {
      title: "Calendar",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Task Manager",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
      title2: "Task Detail Manager",
      src2: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Wall App",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Contact Manager",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
      title2: "Contact Detail Manager",
      src2: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Chat",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Scrum Board",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
      title2: "Scrum Board Detail",
      src2: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "E-Commerce",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
      title2: "Product Deetail",
      src2: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "E-Commerce Admin",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
      title2: "Add Products",
      src2: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Invoice",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
      title2: "Invoices View",
      src2: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
    {
      title: "Blog List",
      src: "https://cremawork.com/images/layout/mui/mini-sidebar-toggle.png",
    },
  ];

  const handleScroll = () => {
    const slides = document.querySelectorAll(".card-slide");

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();

      // Check if at least 50% of the slide is visible in the viewport
      if (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) / 2
      ) {
        setActiveSlide(index);
      } else if (
        rect.top < 0 &&
        rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) / 2
      ) {
        setActiveSlide(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid id="apps" container spacing={5} sx={mainGrid}>
      <Grid item xs={12} md={4} sx={gridItem1}>
        <Slide direction="top">
          <Typography sx={typoGrid}>FULLY FUNCTIONAL</Typography>
          <Typography variant="h5" sx={{ paddingTop: 2, fontWeight: "bold" }}>
            6 Applications
          </Typography>
          <Typography sx={{ paddingTop: 2, color: "gray" }}>
            No coding required to make customizations. The live customizer has
            everything you need to build your website.
          </Typography>
          <List component="ol">
            {cardsData.map((data, index) => (
              <List_Apps
                dataList={{ index, item: data }}
                key={index}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
              />
            ))}
          </List>
        </Slide>
      </Grid>
      <Grid item xs={12} md={8} sx={{ paddingRight: { md: "30px" } }}>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`card-slide ${index === activeSlide ? "active" : ""}`}
          >
            <Card_Apps data={card} />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default Apps;
