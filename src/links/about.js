import React from 'react';
import escritorio from '../sada.jpg';
import '../links/about.css';

function About() {
    return ( 
        <div className="display">
            <button className="close-buttonAbout">×</button>
            <h1>ABOUT</h1>
            <img className='imagen' src={escritorio} alt="Escritorio"></img>
            <p>"Hey! I'm Diego, passionate about technology and constant learning. Although I still don't have formal work experience, I have dedicated time to creating several projects that have allowed me to develop solid frontend and backend skills, using technologies such as HTML, CSS, JavaScript and ReactJs In addition, I consider myself a person with communicative skills in English, who enjoys studying and learns quickly. I love to go to the gym, travel, and explore new ways to stay active and healthy.
I'm excited to start my career in technology and continue learning along the way!  let's talk!"</p>
        </div>
    );
}

export default About;
