import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <div className="About">
      <h2 className="titleProject">About me</h2>
      <div className="textWrapper">
        <p className="Text">
          Hello, I'm Oliver Cockell, If you've made it this far down the page
          then you probably want to know a bit more about who I actually am.
          Professionally, I'm a software engineer with seven years of experience
          under my belt. I've worked in a range of environments, from large Big
          Four firms to smaller startups, alongside taking on freelance projects
          of my own.
        </p>
        <p className="Text">
          I've had the opportunity to work on a wide range of projects, from
          building applications from the ground up to working on large,
          established systems. I particularly enjoy solving complicated
          problems, figuring out how things fit together and finding practical
          solutions that make a genuine difference.
        </p>
        <p className="Text">
          Outside of software, I've always had a keen interest in science and
          engineering, particularly how things work and how we can make them
          better. I'm especially interested in renewable energy, technology and
          the natural world, and I enjoy getting hands-on with projects and
          learning something new along the way.
        </p>
        <p className="Text">
          When I'm not sat behind a computer, you'll often find me working on
          cars, exploring somewhere new or out hiking.
        </p>
        <p className="Text">
          Feel free to reach out to me on{" "}
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/oliver-cockell-77b56a194/"
          >
            LinkedIn
          </a>{" "}
          or through my email at olliecockell@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default About;
