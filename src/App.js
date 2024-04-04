import React from 'react'; 
import Navbar from "./components/Navbar";

function App() {

  const IntroText = "Hi, I'm Anjali!";
  const AboutMeText = `
  I am a software engineer with a background in robotics. I have worked in many industries like 
  consumer electronics, EVs, and autonomous vehicles. Currently, I'm working as a Robotics 
  Software Engineer at Apple on the Watch Automation team!
  `;

  return (
    <React.Fragment>
      <Navbar/>
      <div class="background-container">
        <h3 className='header3'>{IntroText}</h3>
        <p>{AboutMeText}</p>
      </div>
    </React.Fragment>

  );
};

export default App; 