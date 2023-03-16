import React from 'react';
import "./css/MainIntro.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Button from '../components/Button'
import Tag from '../components/Tag'
import PPic from '../images/Ollie.png'



const MainIntro = () => {

  const [text] = useTypewriter({
    words: ["Mountian Climber","Car Enthusiast", "Gamer"],
    loop: false,
  })


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
            <Button text={"Skills"} background={"#ffb800"}/>
            <Button text={"About"} background={"#ff4800"}/>
            <Button text={"Projects"} background={"#ffb300"}/>
          </div>
          <hr className='Break'/>
          <div className='TagHolder'>
            <Tag text={"Javascript"} background={"#f7df1e"}/>
            <Tag text={"Typescript"} background={"#007ACC"}/>
            <Tag text={"Git"} background={"#e3e3e3"}/>
            <Tag text={"Docker"} background={"#0db7ed"}/>
          </div>
        </div>
      <div>
          <img src={PPic} alt="" className='pPic'/>
      </div>
    </div>
  );
}

export default MainIntro;
