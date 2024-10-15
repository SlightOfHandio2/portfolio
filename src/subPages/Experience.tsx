import React from "react";
import "./css/Experience.css";
import kpmgLogo from "../images/icons/kpmg.jpeg";
import queenMaryLogo from "../images/icons/qmul.jpeg";

const Experience = () => {
  return (
    <div className="Experience" id="54356345">
      <h2 className="titleProject ExperienceTitle">Experience</h2>
      <hr className="Break" />
      <div className="employment">
        <img className="logo" src={kpmgLogo} alt="KPMG" />
        <div className="employmentDetails">
          <h3 className="SubTitle">KPMG - Software Engineer</h3>
          <p className="Date">September 2019 - October 2024</p>
          <p className="Text">
            Completed my Apprenticeship at KPMG as a Software Engineer.
            Throughout my employment here, I've worked in a variety of areas in
            web development including:
          </p>
          <h3 className="SubTitle">Highlights</h3>
          <ul className="Highlights">
            <li>
              Designed, Developed and maintained multiple ReactJS, NodeJS and
              Flask applications, this included things like UI Design,
              architectural planning, Frontend + Backend Development, Unit test
              creation, Application Deployment, CI/CD integrations using Github
              Actions.
            </li>
            <li>
              Migrated legacy backend systems to modern web technologies,
              reducing server load by roughly 20% and increasing security.
            </li>
            <li>
              Mentored junior developers and apprentices, contributing to team
              growth and improved productivity.
            </li>
            <li>
              Designed and implemented a backend that processed and
              reconstructed huge amounts of JSON data (Gbs/second).
            </li>
            <li>
              Adapted a key piece of in-house software to be used within our
              CI/CD pipeline, previously it could only be run manually.
            </li>
          </ul>
        </div>
      </div>
      <hr className="Break" />
      <h2 className="titleProject ExperienceTitle">Qualifications</h2>
      <hr className="Break" />
      <div className="qualification">
        <img
          className="logo"
          src={queenMaryLogo}
          alt="Queen Mary University of London"
        />
        <div className="qualificationDetails">
          <h3 className="SubTitle">Queen Mary University of London</h3>
          <p className="Date">
            Bachelor of Science in Digital and Technology Solutions (Software
            Engineer), 2019 - 2024
          </p>
          <p className="Text">
            Completed an undergraduate degree in Computer Science, gaining a
            strong foundation in software development, algorithms,
            data-sctructures, deep learning and web technologies.
          </p>
          <h3 className="SubTitle">Key Achievements</h3>
          <ul className="Highlights">
            <li>Graduated with First-Class Honours.</li>
            <li>
              For my final year project I developed a accessibility evaluation
              tool for WebPages that tells developers how to align them with the
              WCAG guidelines. This used technologies such as Puppeteer and Axe
              Core and can be deployed in a CI/CD pipeline or be used
              standalone.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
