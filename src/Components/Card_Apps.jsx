import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Slide from "./Slides_Up";

const Card_Apps = ({ data }) => {
  return (
    <Box sx={{ paddingY: { md: "10px" }, paddingX: "10px" }}>
      <Slide>
        <Card
          sx={{
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
          }}
        >
          <CardContent>
            <Box>
              <img src={data?.src} alt={data?.title} />
            </Box>

            <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
              {data?.title}
            </Typography>
          </CardContent>
        </Card>
      </Slide>
      {data.title2 && (
        <Slide>
          <Card
            sx={{
              boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            <CardContent>
              <Box>
                <img src={data?.src2} alt={data?.title2} />
              </Box>

              <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
                {data?.title2}
              </Typography>
            </CardContent>
          </Card>
        </Slide>
      )}
    </Box>
  );
};

export default Card_Apps;
