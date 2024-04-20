import React, { useState, useEffect } from 'react';
import '../links/skills.css';

function Skills({ onClose }) {
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
        <div className={`displaySkills ${isVisible ? 'skills-appear' : ''}`}>
            <button className="close-buttonSkills" onClick={handleClose}>×</button>
            <h1>SKILLS</h1>
            <div className='logotiposSkills'>
                <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"></img>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Terminal"></img>
                </div>

                <div>
            <p>Knowledge in JavaScript, HTML, CSS, ReactJS and Nodejs. In addition to the use of technologies such as Git, GitHub, Bash, DOM domain ,among others. I also have extensive experience working in the United States with bilingual teams for more than 4 years..</p>

            </div>
                
            </div>
            
        </div>
    );
}

export default Skills;
