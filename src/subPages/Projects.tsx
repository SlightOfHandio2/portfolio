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
        <ProjectView title={"My Portfolio"} background={"test"} >
          <Tag text={"Javascript"} background={"#f7df1e"}/>
          <Tag text={"Typescript"} background={"#007ACC"}/>
        </ProjectView>
        <ProjectView title={"Factoids"} background={"test"} >
          
        </ProjectView>
        <ProjectView title={""} background={"test"} >
          
        </ProjectView>
        <ProjectView title={""} background={"test"} >
          
        </ProjectView>
        <ProjectView title={""} background={"test"} >
          
        </ProjectView>
      </RoundAbout>
      <hr className='Break'/>
      <div className="ButtonWrapper">
        <Button text="View More -->" background="#ffb800" onClick={() => console.log('placeholder')}/>
      </div>
    </div>
  );
};

export default Projects;
