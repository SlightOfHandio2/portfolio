import React from 'react';
import "./css/Home.css"
import MainIntro from '../subPages/MainIntro';
import Projects from '../subPages/Projects';
import About from '../subPages/About'
import Skills from '../subPages/Skills'

const Home = () => {
  return (
    <div>
      <div className='MainHome'>
        <MainIntro/>
      </div>
      <div className='ProjectsPage' id='ProjectSubPage'>
        <Projects/>
      </div>
      <div className='AboutPage' id='AboutSubPage'>
        <About/>
      </div>
      <div className='SkillsPage' id='SkillsSubPage'>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
