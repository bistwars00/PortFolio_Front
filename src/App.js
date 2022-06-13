import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./page/About";
import Skill from "./page/Skill";
import Project from "./page/Project";
import Contact from "./page/Contact";
import Home from "./page/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navs from "./component/Navs";
import React, { useEffect } from "react";
import Footer from "./component/Footer";
import UpDown from "./component/UpDown";

function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skill" element={<Skill />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <UpDown />
      <Footer />
    </div>
  );
}

export default App;
