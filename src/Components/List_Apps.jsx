import React from "react";
import { ListItem, Typography } from "@mui/material";

const List_Apps = ({ dataList, activeSlide, setActiveSlide }) => {
  return (
    <ListItem
      component="li"
      sx={{
        backgroundColor: activeSlide === dataList.index ? "white" : "inherit",
        borderRadius: "8px",
        paddingY: "10px",
        width: "95%",
      }}
    >
      <Typography
        onClick={() => {
          setActiveSlide(dataList.index);
          const slideElement = document.querySelector(
            `.card-slide:nth-child(${dataList.index + 1})`
          );
          slideElement?.scrollIntoView({ behavior: "smooth" });
        }}
        sx={{
          cursor: "pointer",
          color: "rgba(0,0,0,0.6)",
          "&:hover": { color: "black" },
        }}
      >
        {dataList.index + 1}. {dataList.item.title}
      </Typography>
    </ListItem>
  );
};

export default List_Apps;
