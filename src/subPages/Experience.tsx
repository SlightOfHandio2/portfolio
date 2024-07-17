import React from "react";
import "./css/Experience.css";
import kpmgLogo from "../images/icons/kpmg.jpeg";
import queenMaryLogo from "../images/icons/qmul.jpeg";

const Experience = () => {
  return (
    <div className="Experience">
      <h2 className="titleProject ExperienceTitle">Experience</h2>
      <hr className="Break" />
      <div className="employment">
        <img className="logo" src={kpmgLogo} alt="KPMG" />
        <div className="employmentDetails">
          <h3 className="SubTitle">KPMG - Software Engineer</h3>
          <p className="Date">September 2019 - Present</p>
          <p className="Text">
            Currently Employed at KPMG as a Software Engineer. Throughout my
            employment here, I've worked in a variety of areas in web
            development including:
          </p>
          <h3 className="SubTitle">Highlights</h3>
          <ul className="Highlights">
            <li>
              Developed and maintained multiple web applications using an array
              of technologies.
            </li>
            <li>
              Designed and implemented a backend that processed and
              reconstructed huge amounts of JSON data (Gbs/second).
            </li>
            <li>
              Managed and designed high-performance databases for use in
              production.
            </li>
            <li>
              Mentored junior developers and apprentices, contributing to team
              growth and improved productivity.
            </li>
            <li>
              Played a key role in migrating legacy systems to modern web
              technologies, reducing server load by roughly 20%.
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
              For my final year project I developed a accessibility evaluation tool for
              WebPages that tells developers how to align them with the WCAG
              guidelines. This used technologies such as Puppeteer and Axe Core
              and can be deployed in a CI/CD pipeline or be used standalone.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
