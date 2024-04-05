import React from 'react'; 
import Timeline from '../components/Timeline';
function Home() {
    
    const IntroText = "Hi, I'm Anjali!";
    const AboutMeText = `
    I am a software engineer with a background in robotics. I have worked in many industries like 
    consumer electronics, EVs, and autonomous vehicles. Currently, I'm working as a Robotics 
    Software Engineer at Apple on the Watch Automation team!
    `;

    return (
      <div>
        <h3 className='header3'>{IntroText}</h3>
        <p className='homeparagraph'>{AboutMeText}</p>
        <Timeline/>
      </div>
  
    );
  };
  
  export default Home; 