import React from "react";
import "./css/Home.css";
import MainIntro from "../subPages/MainIntro";
import Projects from "../subPages/Projects";
import About from "../subPages/About";
import Experience from "../subPages/Experience";
import WaveBackground from "../components/WaveBackground";

const Home = () => {
  return (
    <div className="container">
      <div className="MainHome background">
        <MainIntro />
        <WaveBackground />
      </div>
      <div className="ExperiencePage background" id="ExperienceSubPage">
        <Experience />
        <WaveBackground />
      </div>
      <div className="ProjectsPage background" id="ProjectSubPage">
        <Projects />
        <WaveBackground />
      </div>
      <div className="AboutPage background" id="AboutSubPage">
        <About />
        <WaveBackground />
      </div>
    </div>
  );
};

export default Home;
