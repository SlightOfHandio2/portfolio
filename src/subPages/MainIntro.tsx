import React from "react";
import "./css/MainIntro.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../components/Button";
import Tag from "../components/Tag";
import PPic from "../images/Ollie.png";
import LinkedIn from "../images/icons/LinkedIn.png";
import GitHub from "../images/icons/GitHub.png";

const MainIntro = () => {
  const [text] = useTypewriter({
    words: ["Mountian Climber", "Car Enthusiast", "Gamer"],
    loop: false,
  });

  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="MainIntro">
      <div className="WordsWrapper">
        <p className="Name">Oliver Cockell</p>
        <div className="DescriptionText">
          <p className="FirstLine">
            Hi! I'm A Software Engineer / <br className="breakline" /> {text}{" "}
            <Cursor />
          </p>
        </div>
        <hr className="Break" />
        <div className="ButtonHolder">
          <Button
            text={"Experience"}
            background={"#ffb300"}
            onClick={() => handleClickScroll("ExperienceSubPage")}
          />
          <Button
            text={"Projects"}
            background={"#ff4800"}
            onClick={() => handleClickScroll("ProjectSubPage")}
          />
          <Button
            text={"About"}
            background={"#ffb300"}
            onClick={() => handleClickScroll("AboutSubPage")}
          />
        </div>
        <hr className="Break" />
        <div className="TagHolder">
          <Tag text={"Typescript"} background={"#007ACC"} color={"#fffaed"} />
          <Tag text={"Javascript"} background={"#f7df1e"} />
          <Tag text={"Python"} background={"#0d6aa3"} color={"#fffaed"} />
          <Tag text={"css"} background={"#a83a32"} color={"#fffaed"} />
          <Tag text={"Node"} background={"#9df76d"} />
          <Tag text={"React"} background={"#26cbff"} />
          <Tag text={"Git"} background={"#e3e3e3"} />
          <Tag text={"Docker"} background={"#0db7ed"} />
          <Tag text={"GCP"} background={"#e3e3e3"} />
          <Tag text={"CloudFlare"} background={"#f58d42"} />
          <Tag text={"Azure"} background={"#06bcf9"} />
          <Tag text={"PostgreSQL"} background={"#2b48ab"} color={"#fffaed"} />
          <Tag text={"OpenID"} background={"#8a8a8a"} />
        </div>
        <div className="LinkWrapper">
          <hr className="Break" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/oliver-cockell-77b56a194/"
            rel="noreferrer"
          >
            <img className="Icon" src={LinkedIn} alt="" />
          </a>
          <a
            target="_blank"
            href="https://github.com/SlightOfHandio2"
            rel="noreferrer"
          >
            <img className="Icon" src={GitHub} alt="" />
          </a>
        </div>
      </div>
      <div className="pPickWrapper">
        <img src={PPic} alt="" className="pPic" />
        <div className="IconWrapper">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/oliver-cockell-77b56a194/"
            rel="noreferrer"
          >
            <img className="Icon" src={LinkedIn} alt="" />
          </a>
          <a
            target="_blank"
            href="https://github.com/SlightOfHandio2"
            rel="noreferrer"
          >
            <img className="Icon" src={GitHub} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
