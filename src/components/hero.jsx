import React from "react";
import helloemoji from "../images/helloEmoji.png";
import avatar from "../images/avatar.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="leftHeroDiv">
        <h1>Hi! I'm Nicolás</h1>
        <h2>Software Developer</h2>
        <img className="helloEmoji" src={helloemoji} alt="hello-emoji" />
        <section style={{ display: "flex", gap: "20px", paddingTop: "20px" }}>
          <Link
            to="https://www.linkedin.com/in/nicol%C3%A1s-bauz%C3%A1-48a8a0244/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
          <Link
            to="https://github.com/nicolasbauzascaffo"
            style={{ textDecoration: "none", color: "white" }}
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </Link>
        </section>
      </div>
      <div className="rigthHeroDiv">
        <img className="myavatar" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Hero;
