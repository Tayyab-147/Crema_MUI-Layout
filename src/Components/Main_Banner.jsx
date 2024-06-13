// Main_Banner.js
import React from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Slide from "../Components/Slides_Up";
import {
  containerStyle,
  gridContainerStyle,
  textStyle,
  subtextStyle,
  avatarContainerStyle,
  buttonContainerStyle,
  buttonStyle,
  docsButtonStyle,
} from "../Styles/Main_Banner_Styles";

const Main_Banner = () => {
  return (
    <Box id="home" sx={containerStyle}>
      <Grid container sx={gridContainerStyle}>
        <Grid item xs={12} md={5}>
          <Slide direction="left">
            <Box sx={textStyle}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Start a new project with Crema MUI
              </Typography>
              <Typography variant="h6" sx={subtextStyle}>
                Our creatively crafted products keep you moving faster in this
                digital space.
              </Typography>
              <Typography sx={avatarContainerStyle}>
                <Avatar
                  sx={{ height: "50px", width: "50px" }}
                  src="https://cremawork.com/images/banner/figma.svg"
                />
                <Avatar
                  sx={{ height: "50px", width: "50px" }}
                  src="https://cremawork.com/images/banner/mui-with-bg.svg"
                />
                <Avatar
                  sx={{ height: "50px", width: "50px" }}
                  src="https://cremawork.com/images/banner/nextjs.svg"
                />
                <Avatar
                  sx={{ height: "50px", width: "50px" }}
                  src="https://cremawork.com/images/banner/js.svg"
                />
                <Avatar
                  sx={{ height: "50px", width: "50px" }}
                  src="https://cremawork.com/images/banner/ts.svg"
                />
              </Typography>
              <Typography sx={buttonContainerStyle}>
                <Button variant="contained" sx={buttonStyle}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDkgMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMC44OTU2MjMgOC43MzcySDIuMzMxOEwwLjUyNDI5MiAxNS4wODgxQzAuNDE1MDc3IDE1LjQ2NDggMC42MjgwNDYgMTUuODU4IDEuMDA0ODQgMTUuOTcyN0MxLjA3MDM3IDE1Ljk5NDUgMS4xNDEzNiAxNiAxLjIwNjg5IDE2QzEuMzk4MDEgMTYgMS41ODM2OCAxNS45MjM1IDEuNzE0NzQgMTUuNzg3TDguNTE4ODMgOC45NjEwOUM4LjgxOTE3IDguNjYwNzUgOC44MTkxNyA4LjE3NDc0IDguNTI0MjkgNy44NzQ0QzguMzc2ODUgNy43MjY5NiA4LjE4MDI2IDcuNjQ1MDUgNy45NzI3NSA3LjY0NTA1SDYuNjM0ODdMOC4yNzMxIDEuODY3NThDOC40OTE1MyAxLjA4NjY5IDguMDM4MjggMC4yNzMwMzggNy4yNTc0IDAuMDU0NjA3NUM3LjEzMTggMC4wMTYzODIzIDcuMDAwNzQgMCA2Ljg2NDIyIDBIMy4zMTQ3M0MyLjY1OTQ0IDAuMDA1NDYwNzUgMi4wODYwNyAwLjQzNjg2IDEuOTA1ODYgMS4wNjQ4NUwwLjAzMjgyNDIgNy42MTc3NUMtMC4wOTgyMzM4IDguMDg3MzcgMC4xNzQ4MDQgOC41Nzg4NCAwLjY0NDQyOCA4LjcwOTlDMC43MjA4NzkgOC43MzE3NCAwLjgwMjc5IDguNzQyNjYgMC44ODQ3MDEgOC43NDI2NkwwLjg5NTYyMyA4LjczNzJaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=" />
                  Live Preview
                </Button>
                <Button variant="outlined" sx={docsButtonStyle}>
                  Docs
                </Button>
              </Typography>
            </Box>
          </Slide>
        </Grid>
        <Grid item sm={12} md={7}>
          <Slide>
            <Box sx={{ paddingTop: 3 }}>
              <img
                src={
                  "https://cremawork.com/static/banner-63ffadaaa28f3ce3fb0b0d5b6adcfcd2.png"
                }
              />
            </Box>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main_Banner;
