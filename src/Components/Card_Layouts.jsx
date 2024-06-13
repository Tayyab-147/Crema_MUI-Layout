import React from "react";

import { Box, Typography, Card, CardContent } from "@mui/material";
import Slide from "./Slides_Up";

const Card_Layouts = ({ data }) => {
  return (
    <Box sx={{ paddingY: "10px", paddingX: "10px" }}>
      <Slide>
        <Card
          sx={{
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)", // Add the shadow here
            borderRadius: "8px",
          }}
        >
          <CardContent>
            <Box>
              <img src={data?.src} />
            </Box>

            <Typography sx={{ marginTop: "15px", fontWeight: "bold" }}>
              {data?.title}
            </Typography>
          </CardContent>
        </Card>
      </Slide>
    </Box>
  );
};

export default Card_Layouts;
