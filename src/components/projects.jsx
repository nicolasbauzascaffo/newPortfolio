import React from "react";
import rocketEmoji from "../images/rocketEmoji.png";
import chartLogo from "../images/chart.jpg";
import pokeball from "../images/pokeball.webp";
import expo from "../images/expo.png";
import bank from '../images/bank.jpg'
import travel from '../images/travel.jpg'
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
          <h2>StarBank (only IOS)</h2>
          <img src={bank} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.0.0.&updateRuntimeVersion=1.0.0&createdAt=2024-09-25T05%3A13%3A48.801Z&slug=exp&projectId=82b3e281-253f-47fc-985d-7dabca6624a1&group=08c83651-89a6-4b31-ae22-2debd487b181"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the App</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Expo - IOS App</p>
          <h2>EasyTravel (only IOS)</h2>
          <img src={travel} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.0.0.&updateRuntimeVersion=1.0.0&createdAt=2024-09-12T19%3A46%3A51.150Z&slug=exp&projectId=608d07ec-688c-4328-b5bc-c16ec3a29739&group=fa6a7e86-b4b5-4954-9e5b-e50fc00778f9/"
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
