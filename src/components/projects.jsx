import React from "react";
import rocketEmoji from "../images/rocketEmoji.png";
import chartLogo from "../images/chart.jpg";
import pokeball from "../images/pokeball.webp";
import bank from '../images/bank.jpg'
import { Link } from "react-router-dom";
import music from '../images/musicImg.jpeg'
import weather from '../images/weather_icon.png'
import social_net from '../images/social_net.png'

function Projects() {
  return (
    <div id="projects" className="projects">
      <img className="rocketEmoji" src={rocketEmoji} alt="rocket" />
      <h2>My Projects</h2>
      <section className="projectsSection">
      <section className="projectBox">
          <p>Social Network</p>
          <h2>Connectify</h2>
          <img src={social_net} alt="siteImg" />
          <Link
            to="https://conn-red-social-app-sdrm.vercel.app/home"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the page</button>
          </Link>
        </section>
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
          <h2>Groove (IOS)</h2>
          <img src={music} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.1.1.&updateRuntimeVersion=1.0.0&createdAt=2024-11-20T20%3A46%3A29.527Z&slug=exp&projectId=37e14f0a-992f-40a0-b7e0-6efb334c75ae&group=b4efad2b-c86e-48d1-8d1a-05425e61527e"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the App</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Expo - IOS App</p>
          <h2>WeatherSphere (IOS)</h2>
          <img src={weather} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.2.0.&updateRuntimeVersion=1.0.0&createdAt=2025-01-25T06%3A32%3A46.442Z&slug=exp&projectId=d01bc47f-005f-409b-bb71-a16032f09898&group=87902d25-7b21-4f62-a7b9-18dfb87dba41"
            style={{ textDecoration: "none" }}
          >
            <button> Go to the App</button>
          </Link>
        </section>
        <section className="projectBox">
          <p>Expo - IOS App</p>
          <h2>StarBank (IOS)</h2>
          <img src={bank} alt="siteImg" />
          <Link
            to="https://expo.dev/preview/update?message=Initial%20commit%0A%0AGenerated%20by%20create-expo-app%203.1.1.&updateRuntimeVersion=1.0.0&createdAt=2024-11-20T21%3A26%3A30.199Z&slug=exp&projectId=5f2fc1cf-66ce-4703-84f1-44fb1390ec4f&group=bf96f36e-47c5-4524-b738-88f2475fe6bb"
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
