import React from "react";
import "./css/Projects.css";
import AHC from "../images/icons/AHC.png";
import AHC_Logo from "../images/AHC_Logo.png";
import Tag from "../components/Tag";
import Button from "../components/Button";

const Projects = () => {
  return (
    <div className="Projects">
      <p className="titleProject">Projects</p>
      <hr className="Break" />
      <div className="projectSection">
        <div className="projectCard">
          <div className="projectMedia">
            <img
              src={AHC}
              alt="AutoHistoryCheck Icon"
              className="projectLogo"
            />
            <a
              href="https://autohistorycheck.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="quickLink"
            >
              <Button
                className="linkButton"
                text={"Visit AHC ->"}
                background={"#ffb300"}
                onClick={() => console.log("bye bye")}
              />
            </a>
          </div>
          <div className="projectDetails">
            <img
              className="projectTitle"
              src={AHC_Logo}
              alt="AutoHistoryCheck Logo"
            />
            <div className="TagProjectHolder">
              <Tag text={"Javascript"} background={"#f7df1e"} />
              <Tag
                text={"PostgreSQL"}
                background={"#2b48ab"}
                color={"#fffaed"}
              />
              <Tag text={"NodeJS"} background={"#9df76d"} />
              <Tag text={"React"} background={"#26cbff"} />
              <Tag text={"OpenID"} background={"#8a8a8a"} />
              <Tag text={"Nginx"} background={"#008700"} color={"#fffaed"} />
              <Tag text={"CloudFlare"} background={"#f58d42"} />
              <Tag text={"Stripe"} background={"#a168fc"} color={"#fffaed"} />
              <Tag text={"css"} background={"#a83a32"} color={"#fffaed"} />
            </div>
            <p className="projectText">
              AutoHistoryCheck is a web application that allows users to track
              their vehicle's history. Users can add their vehicles VRMs to
              their accounts and view the history of the vehicle. They can see
              details such as write off history, previous keeper info, MOT
              history, import status and more.
              <br />
              <br />I created the application as my first solo venture, designed
              both aesthetically and technically by me. Currently it uses a
              React frontend and a NodeJS backend with a postgresql database.
              Using stripe as a payment processor and nginx to serve content and
              be a reverse proxy. The application is hosted on an Ubuntu Server
              and uses CloudFlare for DNS and SSL.
            </p>
          </div>
        </div>
        <div className="projectCard">
          <div className="projectMedia">
            <img
              src="https://via.placeholder.com/150?text=OddissLabs"
              alt="OddissLabs Placeholder Icon"
              className="projectLogo"
            />
            <a
              href="https://oddiss.com/"
              target="_blank"
              rel="noreferrer"
              className="quickLink"
            >
              <Button
                className="linkButton"
                text={"Visit OddissLabs ->"}
                background={"#6c5ce7"}
                onClick={() => console.log("oddisslabs")}
              />
            </a>
          </div>
          <div className="projectDetails">
            <img
              className="projectTitle"
              src="https://via.placeholder.com/420x120?text=OddissLabs"
              alt="OddissLabs Placeholder Wordmark"
            />
            <div className="TagProjectHolder">
              <Tag text={"Freelance"} background={"#ff9f43"} color={"#0e0d10"} />
              <Tag text={"Web Design"} background={"#26cbff"} color={"#0e0d10"} />
              <Tag text={"React"} background={"#6df7c1"} color={"#0e0d10"} />
              <Tag text={"Brand Strategy"} background={"#a168fc"} color={"#fffaed"} />
              <Tag text={"SEO"} background={"#f7df1e"} color={"#0e0d10"} />
            </div>
            <p className="projectText">
              OddissLabs is my freelance studio where I collaborate with
              entrepreneurs and small teams to craft tailor-made digital
              experiences. From portfolio sites and marketing pages to full
              company websites, I guide clients through discovery, design, and
              build to deliver polished, performant, and easy-to-manage
              solutions.
              <br />
              <br />Every engagement is an end-to-end partnership: refining brand
              positioning, mapping user journeys, designing responsive layouts,
              and developing modern frontends that are optimized for search and
              conversion. Whether a project calls for a bespoke React build or a
              streamlined no-code launch, OddissLabs turns ideas into compelling
              web presences that help businesses grow.
            </p>
          </div>
        </div>
      </div>
      <hr className="Break" />
    </div>
  );
};

export default Projects;
