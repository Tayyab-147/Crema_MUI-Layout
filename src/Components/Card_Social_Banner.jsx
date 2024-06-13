import React from "react";

import { Box, Typography, Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";

const Card_Tilting = ({ data }) => {
  return (
    <Box>
      <Card
        sx={{
          width: "300px",
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Box
            sx={{
              position: "relative",
              width: "250px", // Adjust width as needed
              height: "250px", // Adjust height as needed
              clipPath:
                "polygon(40% 0%, 100% 15%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "5px",
              borderRadius: "150px", // Adjust the border-radius to smoothen edges
              "& img": {
                transition: "transform 0.3s ease-in-out", // Add transition for smooth effect
              },
              "&:hover img": {
                transform: `rotate(${data?.rotationDegree}deg)`, // Rotate image on hover
              },
            }}
          >
            <img
              src={data?.src}
              alt={data?.alt}
              className="w-100 h-auto"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>

          <Typography
            variant="h6"
            sx={{ marginTop: "10px", fontWeight: "bold" }}
          >
            {data?.title}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px", color: "gray" }}>
            {data?.detail}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              borderRadius: "7px",
              padding: "10px",
              paddingX: "30px",
            }}
          >
            {data?.buttonText}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Card_Tilting;
