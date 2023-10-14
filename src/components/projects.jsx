import React from "react";
import rocketEmoji from "../images/rocketEmoji.png";
import chartLogo from "../images/chart.jpg";
import musicLogo from "../images/musicImg.jpeg";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects" className="projects">
      <img className="rocketEmoji" src={rocketEmoji} alt="rocket" />
      <h2>My Projects</h2>
      <section className="projectsSection">
        <section className="projectBox">
          <p>E-commerce</p>
          <h2>EatRush</h2>
          <img src={chartLogo} alt="siteImg" />
          <Link
            to="https://eatrush.netlify.app/"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the page</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Music App</p>
          <h2>PulseMusic</h2>
          <img src={musicLogo} alt="siteImg" />
          <Link
            to="https://pulsemusicapp.netlify.app/start"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the page</button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Projects;
