import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Card_Testimonials from "./Card_Testimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  buttonTypo,
  gradiantTypo,
  mainBox,
} from "../Styles/Testimonials_Styles";
import Slide from "./Slides_Up";

const Testimonials = () => {
  const cardsData = [
    {
      comment:
        "The cream team did a great job on the app. Very clean and modern code. They are very responsive and helpful on Slack. I would definitely recommend this for anyone looking for this type of functionality.",
      name: "Jpearce05",
    },
    {
      comment:
        "Extensive features with high customizability, not forget to mention the great design quality, code structure, and documentation as well. Highly recommended. ;)",
      name: "Oziuji",
    },
    {
      comment:
        "Really easy to read and manage! With great code structure and documentation, also support!",
      name: "Muhaki",
    },
    {
      comment:
        "Crema is one of the best themes I've ever seen. I highly recommend this.",
      name: "eugene2238",
    },
    {
      comment:
        "I am Korean, and I speak English wrong, but the translator sentence may not be correct, but thank you very much for kindly explaining each one through the remote.",
      name: "kjo1333",
    },
    {
      comment:
        "I asked them to help me with the typescript starter and they gave me one the next day. The template is great, thank you very much",
      name: "marcell93",
    },
    {
      comment:
        "when i met issue, can not access git hub repository. Crema team support with teamviewer and solve my issue just 5 minute. it is awesome support thing. Crema is the best satisfactory support among the SW products I have purchased.",
      name: "Ultracat",
    },
    {
      comment: "Fast to fix some small issues",
      name: "thibdu",
    },
    {
      comment: "Many best practices used. Love it",
      name: "yashmakadia1",
    },
    {
      comment:
        "Its a great product and you will get a lot of components in this package. I've been looking for such a great work in react with typescript for a long time.",
      name: "eclators",
    },
    {
      comment: "good code and support very helpful",
      name: "body-n-soul",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box id="testimonials" sx={mainBox}>
      <Slide direction="top">
        <Typography sx={{ color: "rgb(0, 144, 241)", fontWeight: "bold" }}>
          RECENT REVIEW
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", paddingY: 2 }}>
          Our Testimonials
        </Typography>
      </Slide>
      <Slide>
        <Box sx={{ paddingX: { xs: "2%", md: "10%" }, marginBottom: 5 }}>
          <Slider {...sliderSettings}>
            {cardsData.map((card, index) => (
              <Card_Testimonials key={index} data={card} />
            ))}
          </Slider>
        </Box>
      </Slide>
      <Slide>
        <Typography variant="h3" sx={gradiantTypo}>
          Build a stunning site today.
        </Typography>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          It's available for only $24
        </Typography>
        <Button variant="contained" sx={buttonTypo}>
          Purchase Now
        </Button>
      </Slide>
    </Box>
  );
};

export default Testimonials;
