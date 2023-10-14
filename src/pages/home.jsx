import React from "react";
import "../styles/home.css";
import Hero from "../components/hero";
import About from "../components/about";
import Technologies from "../components/technologies";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Projects from "../components/projects";

function Home() {
  return (
    <div translate="off" lang="en" className="home">
      <Hero id="hero" className="hero" />
      <About id="about" className="about" />
      <Technologies id="technologies" className="technologies" />
      <Projects id="projects" className="projects" />
      <Contact id="contact" className="contact" />
      <Footer className="footer" />
    </div>
  );
}

export default Home;
