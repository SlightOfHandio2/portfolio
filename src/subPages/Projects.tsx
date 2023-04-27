import React from "react";
import "./css/Projects.css";
import RoundAbout from "../components/RoundAbout";
import ProjectView from "../components/ProjectView";
import Tag from "../components/Tag";
import Description from "../content/ProjectDesc.json";
import uk2 from "../images/projects/uk2.png";

const Projects = () => {
  return (
    <div className="Projects">
      <p className="titleProject">Projects:</p>
      <hr className="Break" />
      <RoundAbout>
        <ProjectView
          title={"My Portfolio"}
          background={"portfolio"}
          description={Description.portfolio}
        >
          <Tag text={"Typescript"} background={"#007ACC"} />
          <Tag text={"styled-components"} background={"#a83a32"} />
        </ProjectView>
        <ProjectView
          title={"HOI4: UK Overhaul"}
          background={"HOI4"}
          description={Description.UKBETA}
          image={uk2}
        >
          <Tag text={"Clausewitz"} background={"#c46f00"} />
          <Tag text={"Photoshop"} background={"#004ec4"} />
        </ProjectView>

      </RoundAbout>
      <hr className="Break" />

      {/*
      <div className="ButtonWrapper">
        <Button text="View More -->" background="#ffb800" onClick={() => console.log('placeholder')}/>
      </div>
  */}
    </div>
  );
};

export default Projects;
