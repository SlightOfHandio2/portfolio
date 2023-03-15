import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
