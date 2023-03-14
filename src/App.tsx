import './App.css';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <>
    cum cum cum
    <div className="App">
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
