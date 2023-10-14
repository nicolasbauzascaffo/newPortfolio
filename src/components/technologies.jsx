import React from "react";
import techsEmoji from "../images/technologiesEmoji.png";
import html from "../images/htmlLogo.png";
import css from "../images/cssLogo.png";
import js from "../images/JSlogo.png";
import ts from "../images/TS.png";
import react from "../images/ReactLogo.png";
import redux from "../images/reduxLogo.png";
import node from "../images/nodeLogo.png";
import ex from "../images/expresLogo.png";
import pg from "../images/PGlogo.png";
import mySQl from "../images/mySQLlogo.png";
import ui from "../images/uiLogo.png";
import mongo from "../images/mongo.png";

function Technologies() {
  return (
    <div id="technologies" className="technologies">
      <img className="rocketEmoji" src={techsEmoji} alt="techs" />
      <section className="techSection">
        <h2>Technologies</h2>
        <p>
          I have worked with various technologies on both the client and server
          side, combining them in several personal projects.
        </p>
      </section>
      <section className="technologiesSection">
        <section className="techBox">
          <img className="techIcon" src={html} alt="icon" />
          <h5>HTML</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={css} alt="icon" />
          <h5>CSS</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={js} alt="icon" />
          <h5>JavaScript</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={ts} alt="icon" />
          <h5>TypeScript</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={react} alt="icon" />
          <h5>React</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={redux} alt="icon" />
          <h5>Redux</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={node} alt="icon" />
          <h5>Node.js</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={ex} alt="icon" />
          <h5>Express.js</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={pg} alt="icon" />
          <h5>PostgreSQL</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={mySQl} alt="icon" />
          <h5>MySQL</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={mongo} alt="icon" />
          <h5>Mongo DB</h5>
        </section>
        <section className="techBox">
          <img className="techIcon" src={ui} alt="icon" />
          <h5>Material UI</h5>
        </section>
      </section>
    </div>
  );
}

export default Technologies;
