import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Twirl as Hamburger } from "hamburger-react";
import cremaLogo from "../assets/Crema Logo.png";
import logoWhite from "../assets/logoWhite.png";

import Slide from "../Components/Slides_Up";
import {
  appBarStyle,
  buttonToggleStyle,
  drawerTypo,
  typoHoverStyle,
} from "../Styles/Navbar_Styles";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  function handleScroll() {
    const scrollLocation = window.scrollY;
    setIsTop(scrollLocation === 0);
    const navbarHeightAdjustment = 80;

    // Determine which section is currently active based on scroll position
    const homeSection = document.getElementById("home");
    const layoutsSection = document.getElementById("layouts");
    const appsSection = document.getElementById("apps");
    const customizationSection = document.getElementById("customization");
    const featuresSection = document.getElementById("features");
    const testimonialsSection = document.getElementById("testimonials");

    if (
      scrollLocation >= homeSection.offsetTop &&
      scrollLocation < layoutsSection.offsetTop - navbarHeightAdjustment
    ) {
      setActiveSection("home");
    } else if (
      scrollLocation >= layoutsSection.offsetTop - navbarHeightAdjustment &&
      scrollLocation < appsSection.offsetTop - navbarHeightAdjustment
    ) {
      setActiveSection("layouts");
    } else if (
      scrollLocation >= appsSection.offsetTop - navbarHeightAdjustment &&
      scrollLocation < customizationSection.offsetTop - navbarHeightAdjustment
    ) {
      setActiveSection("apps");
    } else if (
      scrollLocation >=
        customizationSection.offsetTop - navbarHeightAdjustment &&
      scrollLocation < featuresSection.offsetTop - navbarHeightAdjustment
    ) {
      setActiveSection("customization");
    } else if (
      scrollLocation >= featuresSection.offsetTop - navbarHeightAdjustment &&
      scrollLocation < testimonialsSection.offsetTop - navbarHeightAdjustment
    ) {
      setActiveSection("features");
    } else {
      setActiveSection(null);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    const navbarHeightAdjustment = 40;
    if (element) {
      const offsetTop = element.offsetTop - navbarHeightAdjustment;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "layouts",
      title: "Layouts",
    },
    {
      id: "apps",
      title: "Apps",
    },
    {
      id: "customization",
      title: "Customization",
    },
    {
      id: "features",
      title: "Features",
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" origin="top" sx={appBarStyle(isTop)}>
          <Slide direction="left">
            <Toolbar>
              <Typography>
                <Link to="/">
                  <img
                    className="h-10"
                    src={isTop ? logoWhite : cremaLogo}
                    alt="Logo"
                  />
                </Link>
              </Typography>
              <Typography
                sx={{
                  alignItems: "center",
                  marginLeft: "auto",
                }}
              >
                <Typography
                  sx={{
                    display: { xs: "none", md: "flex" },
                    gap: 4,
                  }}
                >
                  {navItems.map((navItem) => (
                    <Typography
                      key={navItem.id}
                      onClick={() => scrollToElement(navItem.id)}
                      sx={typoHoverStyle(isTop, activeSection === navItem.id)}
                    >
                      {navItem.title}
                    </Typography>
                  ))}
                </Typography>
              </Typography>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Hamburger
                  toggled={mobileOpen}
                  toggle={handleDrawerToggle}
                  color={isTop ? "black" : "rgb(0, 144, 241)"}
                  label="Show menu"
                />
              </Box>
            </Toolbar>
          </Slide>
        </AppBar>
        {/* Drawer Start */}
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "300px",
            },
          }}
        >
          <Box>
            <Button onClick={handleDrawerToggle} sx={buttonToggleStyle}>
              X
            </Button>
            <Box className="flex flex-col gap-5 p-4 ml-2">
              {navItems.map((navItem) => (
                <Typography
                  key={navItem.id}
                  onClick={() => scrollToElement(navItem.id)}
                  sx={drawerTypo(activeSection === navItem.id)}
                >
                  {navItem.title}
                </Typography>
              ))}
            </Box>
          </Box>
        </Drawer>
        {/* Drawer End */}
      </Box>
    </>
  );
}

export default Navbar;
