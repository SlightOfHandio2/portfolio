import React from 'react';
import "./css/NavBar.css"
import Button from "../interaction/Button"

const NavBar = () => {
  return (
    <div className='background'>
      <div className='focusContent'>
        <p className='nameTitle'>Oliver Cockell</p>
        <div className='Links'>
          <Button text="home" />
          <Button text="portfolio" />
          <Button text="about me" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
