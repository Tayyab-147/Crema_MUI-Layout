import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Card_Features = ({ data }) => {
  return (
    <Grid
      xs={12}
      md={5}
      lg={3}
      item
      sx={{
        backgroundColor: data?.backgroundColor,
        display: "flex",
        gap: 2,
        paddingX: 3,
        paddingY: { md: 5, xs: 3 },
        borderRadius: 2,
      }}
    >
      <img src={data?.src} />
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>{data?.title}</Typography>
        <Typography sx={{ color: data?.color, paddingTop: 1 }}>
          Checkout the auth APIs here
        </Typography>
      </Box>
    </Grid>
  );
};

export default Card_Features;
