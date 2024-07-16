import React from "react";
import "./css/Skills.css";
import kpmgLogo from "../images/icons/kpmg.jpeg";

const About = () => {
  return (
    <div className="About">
      <p className="titleProject">Experience:</p>
      <hr className="Break" />
      <div className="employment">
        
        <img className="logo" src={kpmgLogo} alt="KPMG" />
        <div>
        <p className="SubTitle">KPMG  September 2019 - Present</p>
        <p className="Text">
          Currently working at KPMG as a software engineer apprentice. I have
          been working on a variety of projects including a react web app and
          some automation scripts.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
