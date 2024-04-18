import React, { useState, useEffect } from 'react';
import escritorio from '../sada.jpg';
import '../links/about.css';

function About({ onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        // Quita la clase después de 0.5 segundos para que la animación se ejecute
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 500);

        // Limpia el timeout cuando el componente se desmonta para evitar errores
        return () => clearTimeout(timeoutId);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <div className={`display ${isVisible ? 'about-appear' : ''}`}>
            <button className="close-buttonAbout" onClick={handleClose}>×</button>
            <h1>ABOUT</h1>
            <img className='imagen' src={escritorio} alt="Escritorio"></img>
            <p>"Hey! I'm Diego, passionate about technology and constant learning. Although I still don't have formal work experience, I have dedicated time to creating several projects that have allowed me to develop solid frontend and backend skills, using technologies such as HTML, CSS, JavaScript and ReactJs In addition, I consider myself a person with communicative skills in English, who enjoys studying and learns quickly. I love to go to the gym, travel, and explore new ways to stay active and healthy.
I'm excited to start my career in technology and continue learning along the way!  let's talk!"</p>
        </div>
    );
}

export default About;
