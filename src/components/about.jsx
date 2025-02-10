import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import cv from "../data/CV - Nicolás Bauzá (EN).pdf";
import downEmoji from "../images/downEmoji.png";

function About() {
  return (
    <div id="about" className="about">
      <section className="infoSection">
        <h2>About me</h2>
        <p>
          My name is Nicolás Bauzá, and I am from Montevideo, Uruguay.
          Since childhood, I have always been deeply drawn to technology, which
          inspired me to pursue a career in this field. In addition to my
          passion for tech, I served in the Army for over 11 years, where I
          learned a key principle that has shaped my professional life:
          discipline. I also had the privilege of working with the United
          Nations in the Democratic Republic of Congo, where I gained valuable
          experience in leadership and teamwork. Currently, I am pursuing a
          Bachelor's Degree in Computer Science. If you scroll through, you will
          find some of the projects I have worked on.
        </p>
        <a style={{ textDecoration: "none" }} href={cv} download>
          <button>
            <DownloadIcon /> Download CV
          </button>
        </a>
      </section>
      <section>
        <img className="rocketEmoji" src={downEmoji} alt="rocket" />
      </section>
    </div>
  );
}

export default About;
