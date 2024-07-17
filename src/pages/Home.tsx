import React from "react";
import "./css/Home.css";
import MainIntro from "../subPages/MainIntro";
import Projects from "../subPages/Projects";
import About from "../subPages/About";
import Experience from "../subPages/Experience";

const Home = () => {
  return (
    <div>
      <div className="MainHome background">
        <MainIntro />
      </div>
      <div className="ExperiencePage background" id="ExperienceSubPage">
        <Experience />
      </div>
      <div className="ProjectsPage background" id="ProjectSubPage">
        <Projects />
      </div>
      <div className="AboutPage background" id="AboutSubPage">
        <About />
      </div>
    </div>
  );
};

export default Home;
