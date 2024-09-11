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
          <p>Expo - IOS App</p>
          <h2>EasyTravel</h2>
          <img src={popcorn} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.0.0.&updateRuntimeVersion=1.0.0&createdAt=2024-09-11T22%3A36%3A52.928Z&slug=exp&projectId=608d07ec-688c-4328-b5bc-c16ec3a29739&group=e7b2edf2-02f3-40c2-af88-75587e79f30d /"
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
      </section>
    </div>
  );
}

export default Projects;
