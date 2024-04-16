import React, { useState } from 'react';
import './fondo.css';
import video from './videoo.mp4';
import About from './links/about';
import Skills from './links/skills';
import Experience from './links/experience';
import Contact from './links/contact';

function Wrapper() {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleClick = (component) => {
        setActiveComponent(activeComponent === component ? null : component);
    };

    return (
        <div className="wrapper">
            <div className="fondo">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {activeComponent !== 'ABOUT' && (
                <div className="header">
                    <div className="iconos">
                        <ul className="icons">
                            <li>
                                <a href="https://www.linkedin.com/in/alejandro-bautista12/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/AlejojoD" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="presentacion">
                        <h1>DIEGO BAUTISTA </h1>
                        <p>
                            FULL-STACK WEB DEVELOPMENT. <br />
                            VISIT MY <a href="https://github.com/AlejojoD" target="_blank">GITHUB.</a>
                        </p>
                    </div>
                    <div className="links">
                        <ul>
                            <li onClick={() => handleClick('ABOUT')}><a href="#intro" >ABOUT</a></li>
                            <li onClick={() => handleClick('SKILLS')}><a href="#work" >SKILLS</a></li>
                            <li onClick={() => handleClick('EXPERIENCE')}><a href="#exp" >EXPERIENCE</a></li>
                            <li onClick={() => handleClick('CONTACT')}><a href="#contact" >CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            )}
            {activeComponent === 'ABOUT' && <About onClose={() => setActiveComponent(null)} />}
            {activeComponent === 'SKILLS' && <Skills onClose={() => setActiveComponent(null)} />}
            {activeComponent === 'EXPERIENCE' && <Experience onClose={() => setActiveComponent(null)} />}
            {activeComponent === 'CONTACT' && <Contact onClose={() => setActiveComponent(null)} />}

            <div className="footer">
                <p>&copy; DIEGOBAUTISTA. </p>
            </div>
        </div>
    );
}

export default Wrapper;
