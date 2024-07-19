import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="MainContain">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
    </div>
  );
};

export default App;
