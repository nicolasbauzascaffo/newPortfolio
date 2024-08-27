import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import cv from "../data/CV Nicolás Bauzá (EN).pdf";
import downEmoji from "../images/downEmoji.png";

function About() {
  return (
    <div id="about" className="about">
      <section className="infoSection">
        <h2>About me</h2>
        <p>
          My name is Nicolás Bauzá Scaffo. I am from Montevideo Uruguay. Since I
          was a child, I always felt a great attraction for technology; which
          encouraged me to take this path. During my life I not only dedicated
          myself to this, but I was also in the Army for more than 11 years;
          where I learned a fundamental pillar for working life: Discipline. I
          had the opportunity to work for the United Nations in Democratic
          Republic of Congo (Africa) where I gained a lot of experience in
          leading human groups and teamwork. If you slide you can see some of
          the projects i have worked on.
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
