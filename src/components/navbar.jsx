import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

function ResponsiveAppBar() {
  const [isScrolling, setisScrolling] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        setisScrolling(true);
      } else {
        setisScrolling(false);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <AppBar
      className="navbar"
      position="fixed"
      style={{
        backgroundColor: !isScrolling ? "transparent" : "rgb(20, 38, 68)",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "none",
        transition: "background-color 0.3s ease",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <h4>Nico.Dev</h4>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
             <h4>Nico.Dev</h4>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <section
              style={{ display: "flex", gap: "30px", marginLeft: "50px" }}
            >
              <a href="#hero">
                <h4>Main</h4>
              </a>
              <a href="#about">
                <h4>About me</h4>
              </a>
              <a href="#technologies">
                <h4>Technologies</h4>
              </a>
              <a href="#projects">
                <h4>Projects</h4>
              </a>
              <a href="#contact">
                <h4>Contact</h4>
              </a>
            </section>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
