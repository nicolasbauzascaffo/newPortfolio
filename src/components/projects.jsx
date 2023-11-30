import React from "react";
import rocketEmoji from "../images/rocketEmoji.png";
import chartLogo from "../images/chart.jpg";
import pokeball from '../images/pokeball.webp'
import popcorn from '../images/desktop-wallpaper-popcorn-bursting-pics-cute-popcorn.jpg'
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
            to="https://eatrush-com.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the page</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Pokémon App</p>
          <h2>Pokédex</h2>
          <img src={pokeball} alt="siteImg" />
          <Link
            to="https://pokedex-mu-silk.vercel.app/"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the page</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Movie App</p>
          <h2>MovieFlix</h2>
          <img src={popcorn} alt="siteImg" />
          <Link
            to="https://movie-flix-com.vercel.app/"
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
