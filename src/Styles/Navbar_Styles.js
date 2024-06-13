export const appBarStyle = (isTop) => ({
  backgroundColor: isTop ? "transparent" : "white",
  color: isTop ? "white" : "black",
  paddingY: isTop ? "15px" : "5px",
  boxShadow: isTop ? "none " : "",
  paddingX: { xs: "3%", md: "6%", lg: "10%" },
  transform: isTop ? "translateY(0)" : "translateY(-7%)",
  zIndex: 100,
  transition: `background-color 1s, color 1s, opacity 1s, paddingY 2s ease-in-out, transform 0.5s`,
});

export const typoHoverStyle = (isTop, isActive) => ({
  cursor: "pointer",
  color: isActive ? (isTop ? "yellow" : "red") : "inherit",
  "&:hover": isActive ? {} : isTop ? { color: "yellow" } : { color: "red" },
});

export const buttonToggleStyle = {
  display: { xs: "block", md: "none" },
  alignItems: "center",
  margin: "10px",
  marginLeft: "auto",
  fontSize: 22,
};
export const drawerTypo = (isActive) => ({
  cursor: "pointer",
  color: isActive ? "rgb(0, 144, 241)" : "inherit",
  "&:hover": isActive ? {} : { color: "rgb(0, 144, 241)" },
  display: { xs: "block", md: "none" },
  alignItems: "center",
  fontSize: 22,
});
