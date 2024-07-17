import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <div className="About">
      <h2 className="titleProject">About me</h2>
      <div className="textWrapper">
      <p className="Text">
        Hello, I'm Oliver Cockell, currently a software engineer currently
        working at KPMG. I have professional experience in a variety of areas in
        web development including Frontend, Backend, Database Management and
        Cloud.
      </p>
      <p className="Text">
        I'm always eager to learn and improve my skills in computer science and
        technology. I'm currently looking for a new role where I can grow as a
        software engineer as well as bring my ideas and knowledge to exciting
        projects.
      </p>
      <p className="Text">
        In my personal time away from computers, I enjoy hiking, board games and
        working on cars.
      </p>
      <p className="Text">
        Feel free to reach out to me on LinkedIn or through my email at
        olliecockell@gmail.com.
      </p>
      </div>
    </div>
  );
};

export default About;
