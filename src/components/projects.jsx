import React from "react";
import rocketEmoji from "../images/rocketEmoji.png";
import chartLogo from "../images/chart.jpg";
import pokeball from "../images/pokeball.webp";
import bank from '../images/bank.jpg'
import { Link } from "react-router-dom";
import music from '../images/musicImg.jpeg'

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
          <h2>Groove (only IOS)</h2>
          <img src={music} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.0.0.&updateRuntimeVersion=1.0.0&createdAt=2024-10-11T23%3A33%3A40.613Z&slug=exp&projectId=65a5875d-6d1d-4a6a-9272-c247b202effa&group=ef3686a5-ada3-46ff-8049-a6b7926f3793"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the App</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Expo - IOS App</p>
          <h2>StarBank (only IOS)</h2>
          <img src={bank} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.0.0.&updateRuntimeVersion=1.0.0&createdAt=2024-09-25T22%3A33%3A51.639Z&slug=exp&projectId=82b3e281-253f-47fc-985d-7dabca6624a1&group=e23bd010-757e-4213-91d2-d057dfe4f555"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the App</button>
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
