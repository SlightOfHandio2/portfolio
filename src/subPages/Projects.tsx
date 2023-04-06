import React from "react";
import "./css/Projects.css";
import RoundAbout from "../components/RoundAbout";
import ProjectView from "../components/ProjectView";
import Tag from "../components/Tag"
import Button from "../components/Button"

const Projects = () => {
  return (
    <div className="Projects">
      <p className="Title">Projects:</p>
      <hr className='Break'/>
      <RoundAbout>
        <ProjectView title={"My Portfolio"} background={"portfolio"} >
          <Tag text={"Typescript"} background={"#007ACC"}/>
          <Tag text={"styled-components"} background={"#a83a32"}/>
        </ProjectView>
        <ProjectView title={"HOI4: UK Overhaul"} background={"HOI4"} >
          <Tag text={"Clausewitz"} background={"#c46f00"}/>
          <Tag text={"Photoshop"} background={"#004ec4"}/>
        </ProjectView>
        <ProjectView title={"My Blog"} background={"test"} >
          
        </ProjectView>
        <ProjectView title={""} background={"test"} >
          
        </ProjectView>
        <ProjectView title={""} background={"test"} >
          
        </ProjectView>
      </RoundAbout>
      <hr className='Break'/>
      
      {/*
      <div className="ButtonWrapper">
        <Button text="View More -->" background="#ffb800" onClick={() => console.log('placeholder')}/>
      </div>
  */}
    </div>
  );
};

export default Projects;
