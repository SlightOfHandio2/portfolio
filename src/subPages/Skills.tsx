import React from "react";
import "./css/Skills.css";
import kpmgLogo from "../images/icons/kpmg.jpeg";

const About = () => {
  return (
    <div className="About">
      <h2 className="titleProject noBottom">Experience:</h2>
      <hr className="Break" />
      <div className="employment">
        <img className="logo" src={kpmgLogo} alt="KPMG" />
        <div className="employmentDetails">
          <h3 className="SubTitle">KPMG</h3>
          <p className="Date">September 2019 - Present</p>
          <p className="Text">
            Currently working at KPMG as a software engineer apprentice. I have
            been working on a variety of projects including a react web app and
            some automation scripts.
          </p>
        </div>
      </div>
      <hr className="Break" />
      <h2 className="titleProject noBottom">Qualifications:</h2>

    </div>
  );
};

export default About;
