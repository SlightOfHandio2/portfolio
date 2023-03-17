import React from 'react';
import "./css/Home.css"
import MainIntro from '../subPages/MainIntro';
import Skills from '../subPages/Projects';
import About from '../subPages/About'

const Home = () => {
  return (
    <div>
      <div className='MainHome'>
        <MainIntro/>
      </div>
      <div className='SkillsPage'>
        <Skills/>
      </div>
      <div className='AboutPage'>
        <About/>
      </div>
    </div>
  );
}

export default Home;
