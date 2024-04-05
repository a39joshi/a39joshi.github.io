import React from 'react'; 
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {

  const IntroText = "Hi, I'm Anjali!";
  const AboutMeText = `
  I am a software engineer with a background in robotics. I have worked in many industries like 
  consumer electronics, EVs, and autonomous vehicles. Currently, I'm working as a Robotics 
  Software Engineer at Apple on the Watch Automation team!
  `;

  return (
    <React.Fragment>
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Router> 
    </React.Fragment>

  );
};

export default App; 