import React from "react";
import "./css/Experience.css";
import kpmgLogo from "../images/icons/kpmg.jpeg";
import harkerLogo from "../images/icons/harker.jpeg";
import queenMaryLogo from "../images/icons/qmul.jpeg";

const Experience = () => {
  return (
    <div className="Experience" id="54356345">
      <h2 className="titleProject ExperienceTitle">Experience</h2>
      <hr className="Break" />
      <div className="experienceSection">
        <div className="experienceCard">
          <img className="logo" src={harkerLogo} alt="Harker" />
          <div className="experienceDetails">
            <h3 className="SubTitle">Harker - Software Engineer</h3>
            <p className="Date">May 2025 - Present | Liverpool</p>
            <p className="Text">
              Develop full-stack features using Go, MongoDB, Next.js and
              TypeScript, including configurable data models, alerts, dashboards
              and reporting.
            </p>
            <h3 className="SubTitle">Highlights</h3>
            <ul className="Highlights">
              <li>
                Designed and implemented an AI-powered reporting tool that lets
                clients generate complex reports using natural language, reducing
                manual reporting work.
              </li>
              <li>
                Developed a bespoke permissions system providing granular read,
                write and management access across a complex, multi-tenant data
                environment.
              </li>
              <li>
                Manage AWS infrastructure and application deployments using SST,
                including services running on AWS Lambda.
              </li>
              <li>
                Mentored interns and Year in Industry students through technical
                guidance and hands-on project work.
              </li>
              <li>
                Led sprints and feature-planning and design meetings, translating
                requirements into technical decisions and prioritised development
                tasks.
              </li>
            </ul>
          </div>
        </div>
        <div className="experienceCard">
          <img className="logo" src={kpmgLogo} alt="KPMG" />
          <div className="experienceDetails">
            <h3 className="SubTitle">KPMG - Software Engineer</h3>
            <p className="Date">September 2019 - November 2024 | London</p>
            <p className="Text">
              Designed, developed and maintained React and Node.js applications,
              including internal data-analysis tools and customer-facing products.
            </p>
            <h3 className="SubTitle">Highlights</h3>
            <ul className="Highlights">
              <li>
                Optimised data fetching and processing for a key client product,
                cutting loading times by approximately 80% and improving the user
                experience.
              </li>
              <li>
                Designed and maintained large PostgreSQL databases for big data
                applications and standard web applications.
              </li>
              <li>
                Automated testing using Jest and Cypress, reducing time to
                deployment and improving test coverage.
              </li>
              <li>
                Contributed to migrating and modernising legacy systems,
                improving processing speeds by approximately 20% and strengthening
                security and stability.
              </li>
              <li>
                Worked with product managers and stakeholders to define user
                requirements and use cases, and participated in sprint planning,
                code reviews and retrospectives.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="Break" />
      <h2 className="titleProject ExperienceTitle">Qualifications</h2>
      <hr className="Break" />
      <div className="experienceSection">
        <div className="experienceCard">
          <img
            className="logo"
            src={queenMaryLogo}
            alt="Queen Mary University of London"
          />
          <div className="experienceDetails">
            <h3 className="SubTitle">Queen Mary University of London</h3>
            <p className="Date">
              Bachelor of Science in Digital and Technology Solutions (Software
              Engineering)
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
                standalone.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
