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
      <div className='ProjectsPage'>
        <Projects/>
      </div>
      <div className='AboutPage'>
        <About/>
      </div>
      <div className='SkillsPage'>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
