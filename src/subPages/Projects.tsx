import React, { useEffect, useState } from "react";
import "./css/Projects.css";
import AHC from "../images/icons/AHC.png";
import AHC_Logo from "../images/AHC_Logo.png";
import Tag from "../components/Tag";
import Button from "../components/Button";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Projects">
      <p className="titleProject">Projects</p>
      <hr className="Break" />
      <div style={{ display: "flex" }}>
        {windowWidth > 1350 && (
          <div className="logoHolder">
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
        )}
        <div className="projectDescriptionHolder">
          <img
            className="projectTitle"
            src={AHC_Logo}
            alt="AutoHistoryCheck Logo"
          />
          <div className="reverser">
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
          {windowWidth < 1350 && (
            <div className="logoHolder">
              <a
                href="https://autohistorycheck.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="quickLink"
              >
                <Button
                  className="linkButton linkButtonMobile"
                  text={"Visit AHC ->"}
                  background={"#ffb300"}
                  onClick={() => console.log("bye bye")}
                />
              </a>
            </div>
          )}
        </div>
      </div>
      <hr className="Break" />
    </div>
  );
};

export default Projects;
