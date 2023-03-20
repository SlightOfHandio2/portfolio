import React from 'react';
import "./css/MainIntro.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Button from '../components/Button'
import Tag from '../components/Tag'
import PPic from '../images/Ollie.png'
import LinkedIn from '../images/icons/LinkedIn.png'
import GitHub from '../images/icons/GitHub.png'


const MainIntro = () => {

  const [text] = useTypewriter({
    words: ["Mountian Climber","Car Enthusiast", "Gamer"],
    loop: false,
  })

  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className='MainIntro'>
        <div>
          <p className='Name'>Oliver Cockell</p>
          <div className='DescriptionText'>
            <p className='FirstLine'>Hi! I'm A Software Engineer /</p>
            <p>{text}</p>
            <Cursor />
          </div>
          <hr className='Break'/>
          <div className='ButtonHolder'>
            <Button text={"Skills"} background={"#ffb800"} onClick={() => handleClickScroll("SkillsSubPage")} />
            <Button text={"About"} background={"#ff4800"} onClick={() => handleClickScroll("AboutSubPage")} />
            <Button text={"Projects"} background={"#ffb300"} onClick={() => handleClickScroll("ProjectSubPage")} />
          </div>
          <hr className='Break'/>
          <div className='TagHolder'>
            <Tag text={"Typescript"} background={"#007ACC"}/>
            <Tag text={"Javascript"} background={"#f7df1e"}/>
            <Tag text={"Python"} background={"#0d6aa3"}/>
            <Tag text={"Git"} background={"#e3e3e3"}/>
            <Tag text={"Docker"} background={"#0db7ed"}/>
            <Tag text={"NodeJS"} background={"#9df76d"}/>
            <Tag text={"Insomnia REST"} background={"#5702e8"}/>
            <Tag text={"ReactJS"} background={"#26cbff"}/>
            <Tag text={"GCP"} background={"#e3e3e3"}/>
            <Tag text={"styled-components"} background={"#a83a32"}/>
          </div>
        </div>
      <div className='pPickWrapper'>
          <img src={PPic} alt="" className='pPic'/>
          <div className='IconWrapper'>
            <a target="_blank" href="https://www.linkedin.com/in/oliver-cockell-77b56a194/" rel="noreferrer">
              <img className="Icon" src={LinkedIn} alt="" />
            </a>
            <a target="_blank" href="https://github.com/ollieCockell" rel="noreferrer">
              <img className="Icon" src={GitHub} alt="" />
            </a>
          </div>
      </div>
    </div>
  );
}

export default MainIntro;
