import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const Card_Testimonials = ({ data }) => {
  // Extract the first character of the name
  const nameInitial = data?.name?.charAt(0).toUpperCase();

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        backgroundColor: "white",
        gap: 2,
        paddingX: 5,
        paddingY: 5,
        borderRadius: 2,
        marginX: 2,
        marginY: 2,
      }}
    >
      <Avatar
        sx={{
          backgroundColor: "rgb(10, 143, 220)",
          margin: "auto",
          height: 55,
          width: 55,
          marginBottom: 2,
        }}
      >
        {nameInitial}
      </Avatar>
      <Box>
        <Typography
          sx={{ color: "rgba(1,1,1,0.5)", paddingTop: 1, lineHeight: 1.2 }}
        >
          {data?.comment}
        </Typography>
        <Typography sx={{ paddingTop: 1, color: "rgb(244, 119, 46)" }}>
          ★★★★★
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>{data?.name}</Typography>
      </Box>
    </Grid>
  );
};

export default Card_Testimonials;
