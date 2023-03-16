import React from 'react';
import "./css/Home.css"
import MainIntro from '../subPages/MainIntro';
import Skills from '../subPages/Projects';

const Home = () => {
  return (
    <div>
      <div className='MainHome'>
        <MainIntro/>
      </div>
      <div className='SkillsPage'>
        <Skills/>
      </div>
    </div>
  );
}

export default Home;
