import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import NavBar from './components/navigation/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="about_me" element={<AboutMe />}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
