import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Slide from "./Slides_Up";

const Card_Features_Libraries = ({ data }) => {
  return (
    <>
      <Grid item xs={12} md={6} lg={3} sx={{ paddingX: 1.5, marginTop: 2 }}>
        <Slide>
          <Box
            sx={{
              display: "flex",
              boxShadow: "6px 6px 16px rgba(0, 0, 0, 0.08)",
              borderRadius: 1,
              paddingY: 2,
              paddingLeft: 2,
              gap: 2,
            }}
          >
            <img src={data?.src} />
            <Typography>{data?.title}</Typography>
          </Box>
        </Slide>
      </Grid>
    </>
  );
};

export default Card_Features_Libraries;
