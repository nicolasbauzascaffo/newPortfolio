import React from "react";
import techsEmoji from "../images/technologiesEmoji.png";
import js from "../images/JSlogo.png";
import seq from "../images/sequelize.png";
import react from "../images/ReactLogo.png";
import redux from "../images/reduxLogo.png";
import node from "../images/nodeLogo.png";
import ex from "../images/expresLogo.png";
import mysql from "../images/mySQLlogo.png";
import ui from "../images/uiLogo.png";
import mongo from "../images/mongo.png";
import git from "../images/icons8-git-100.png";
import ts from "../images/TS.png";
import jest from "../images/jest-img.png";
import gitHub from "../images/icons8-github-100.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function Technologies() {
  const technologies = [
    { name: "JavaScript", image: js },
    { name: "TypeScript", image: ts },
    { name: "React", image: react },
    { name: "React Native", image: react },
    { name: "Redux", image: redux },
    { name: "Node.js", image: node },
    { name: "Express.js", image: ex },
    { name: "MySQL", image: mysql },
    { name: "MongoDB", image: mongo },
    { name: "Git", image: git },
    { name: "GitHub", image: gitHub },
    { name: "Jest", image: jest },
    { name: "Sequelize", image: seq },
    { name: "Material UI", image: ui },
  ];

  return (
    <div id="technologies" className="technologies">
      <img className="rocketEmoji" src={techsEmoji} alt="techs" />
      <section className="techSection">
        <h2>Technologies and Tools</h2>
        <p>
          I have worked with various technologies on both the client and server
          side, combining them in several personal projects.
        </p>
      </section>
      <section className="swipper_container" >
        <Swiper
          className="swipper_box"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            350: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            400: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 1,
            },
          }}
        >
          {technologies.map((tech) => (
            <SwiperSlide key={tech.name}>
              <div className="techBox">
                <img
                  className="techIcon"
                  src={tech.image}
                  alt={`${tech.name} logo`}
                />
                <p style={{ fontWeight: "bold", fontSize: "10px" }}>
                  {tech.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Technologies;
