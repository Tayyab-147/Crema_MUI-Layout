import React from "react";
import { Box, Typography, Link, Divider, Grid } from "@mui/material";
import Slide from "../Components/Slides_Up";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(32, 33, 36)",
          color: "#fff",
          paddingX: { xs: "2%", md: "10%" },
          textAlign: "left",
          paddingTop: "20px",
        }}
      >
        <Slide>
          <Box sx={{ paddingBottom: 2 }}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAyCAMAAADWQ11hAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMASWMFg3M4My5NIwh8WX/jrBgNmHdeVVNGKx/vs6RvQxsU9enPujvVk2xQxo2IaPrcwJsRhT8on8ph8wZuAAADqUlEQVRIx9WW6Y7aUAyFT3aykoRswACBAsMyrMNSv/+L1eZSilqp6mTmTz8JxYL4XOfa9wT8nfANX8GJqq+QWdPE/7xKi4jmn5fZsIz+eZnZl8iMdyxz/rSMRYzxaZnvrDKDYBiGz6Rp/XEVY8Iy1aAtfGP6/T6dPi5Tskqft/mZ8cdlXjhtDfdZxf73kTPjw2wh9/c5bwjQg7iFfyZQKSY8uaSAG2VWuRxaegsfIeyTMBt581EXinkHHyY5kDBxHi07NjtaQ7oxgGLKcSPjGb2S8Dp6tGyKJvhXEkoItoQtNCKfcDVA75Cpnh/RjOQ7T422ky3qsEwbTcmcjITvtjiG11TGUJ1vh/jWsFfCakLCy1j1at9I5OeZDCR2JEqaqLyT8O0+ykeOo8YOGr9DcWuW0dBBrWcTG/SbTOA32p9/a1zaQKY99fEFtPD/4mpjuXiu7KeT6xqESi97uJOWuqtaPS71IpGgq92oE03hYUYxmD1F8Ac3q9JgzCRYqNxWW6aw4EjfEbPlKL4P+JYUC/SIahn2/s0rr50JmTDpe/RCbSXTpjh65S+xJFov1pwsM72fzWaHarQ+tKl9WIfAKwUif0RO/S6QFKJXAWPVb+M2vBcDiSpEJ+rySLsPM2FTEnSx2R3/Nn0M7RtNBtunMVxIUkj7u7+/sczALYuVlBtJFUKf4NFBrhoUqfjC7i46msqG2QjoCmFAV5a5IV0wKfp56DYDKuTplvjJ5TT99cKuOnuaQGNnFta3al7j+CV+f5ZxZOlUXk7fagCFj6S6vVV0VY2M84RSEIXKhVoso357lgG396R6slts9tTh7VhnQV9V47FbZAv5X2uyEXIDaSOdsv6UCdVTon4hZjpC1pZgAyF5k3gi9QUPN4xlXcXi4dGp9XNTRqZZKhuOAqlFCeXRUPlnb2kObwvaevdxgvWvPMPe2EPa7bFsCoUBvN9XSOXqXcSZux5/DPC9f0hIhtZZjSzH6WV5XrTQq17Qc5NA36bbFPNIz6BbWjI/n+2uHVYOklMxrDkxlAO9bWGe8zo6d96EHbtjS4e/uoZDN15VeniBFWx9f9FDscxh1+GqXDnz48iHY+J09Aw3kzo3c4SbsZtffY4NkQlCLmyQW7rmrPWwxnLDy3TeMcpcLINSKwqbJQr0BvnZi0zbvjW7C+1y1jEwAMtwgtprRdoqd7i+HIthkmnLOnC7ZaZZvhXOi6qyvfHFdla4yMAM37B0ah/W1pnrdVia3g+VwomhFFSpnwAAAABJRU5ErkJggg==" />
          </Box>
        </Slide>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={12} sm={4}>
            <Slide>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Our Products
                </Typography>
                <Divider
                  sx={{
                    backgroundColor: "rgb(255, 255, 255)",
                    width: "30px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="body2" gutterBottom>
                  <Link
                    href="#"
                    sx={{
                      color: "#999",
                      "&:hover": { color: "#fff", textDecoration: "none" },
                      textDecoration: "none",
                    }}
                  >
                    Crema
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link
                    href="#"
                    sx={{
                      color: "#999",
                      "&:hover": { color: "#fff", textDecoration: "none" },
                      textDecoration: "none",
                    }}
                  >
                    Crema Ant
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link
                    href="#"
                    sx={{
                      color: "#999",
                      "&:hover": { color: "#fff", textDecoration: "none" },
                      textDecoration: "none",
                    }}
                  >
                    Hipster
                  </Link>
                </Typography>
              </Box>
            </Slide>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Slide>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Important Links
                </Typography>
                <Divider
                  sx={{
                    backgroundColor: "rgb(255, 255, 255)",
                    width: "30px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="body2" gutterBottom>
                  <Link
                    href="#"
                    sx={{
                      color: "#999",
                      "&:hover": { color: "#fff", textDecoration: "none" },
                      textDecoration: "none",
                    }}
                  >
                    Features
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link
                    href="#"
                    sx={{
                      color: "#999",
                      "&:hover": { color: "#fff", textDecoration: "none" },
                      textDecoration: "none",
                    }}
                  >
                    Support
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Link
                    href="#"
                    sx={{
                      color: "#999",
                      "&:hover": { color: "#fff", textDecoration: "none" },
                      textDecoration: "none",
                    }}
                  >
                    Contact Us
                  </Link>
                </Typography>
              </Box>
            </Slide>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Slide>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Our Offices
                </Typography>
                <Divider
                  sx={{
                    backgroundColor: "rgb(255, 255, 255)",
                    width: "30px",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="body2" gutterBottom sx={{ color: "#999" }}>
                  Shop 17, Sangam market Jhunjhunu(Raj), India
                </Typography>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          padding: "10px",
          color: "#999",
          backgroundColor: "rgb(32, 33, 36)",
        }}
      >
        <Divider
          sx={{
            backgroundColor: "rgba(255, 255, 255,0.3)",
            marginY: "10px",
            paddingX: "30px",
          }}
        />
        <Typography variant="body2" gutterBottom>
          © 2021 VCS Soft Technologies Pvt. Ltd.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
