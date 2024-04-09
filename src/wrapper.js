import React from "react";
import "./fondo.css"
import video from "./videoo.mp4";
import { useState } from 'react';
import About from './links/about';
import Skills from './links/skills';
import Experience from './links/experience';
import ContactMe from './links/contact';


function Wrapper({children}) {
    const [showAbout, setShowAbout] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return ( 
        <div className="wrapper">
        <div className="fondo"
        >
             <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
        </div>
        <div className="header">
          {children}
          <div className="iconos"> 
        <ul className="icons">
            <li><a href="https://www.linkedin.com/in/alejandro-bautista12/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/AlejojoD" target="_blank"><i className="fab fa-github"></i></a></li>
        </ul>
            </div>


    <div className="presentacion">

                <h1>DIEGO BAUTISTA </h1><p>
                FULL-STACK WEB DEVELOPMENT. <br></br>
                VISIT MY <a href="https://github.com/AlejojoD" target="_blank">GITHUB.</a>

                </p>
                
    </div>
            <div className="links">
                <ul >
                <li><a href="#intro" onClick={() => setShowAbout(true)}>ABOUT</a></li>
                <li><a href="#work" onClick={() => setShowSkills(true)}>SKILLS</a></li>
                <li><a href="#exp" onClick={() => setShowExperience(true)}>EXPERIENCE</a></li>
                <li><a href="#contact" onClick={() => setShowContact(true)}>CONTACT</a></li>
                </ul>
            </div>
            {showAbout && <About onClose={() => setShowAbout(false)} />}
            {showSkills && <Skills onClose={() => setShowSkills(false)} />}
            {showExperience && <Experience onClose={() => setShowExperience(false)} />}
            {showContact && <ContactMe onClose={() => setShowContact(false)} />}
        <div className="footer">
            <p>&copy; DIEGOBAUTISTA. </p>
        </div>
         
        </div>
      </div>
     );
}

export default Wrapper;