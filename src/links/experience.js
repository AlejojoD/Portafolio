import React, { useState, useEffect } from 'react';
import escritorio from '../sada.jpg';
import '../links/experience.css';

function Experience({ onClose }) {
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
        <div className={`displayExp ${isVisible ? 'experience-appear' : ''}`}>
            <button className="close-buttonExp" onClick={handleClose}>×</button>
            <div className='experiencia'>
            </div>
            <div className='experiencias1'>
                <div className='USA'>
                    <h1>Assistant Grower United States</h1>
                    <h2>GERTENS GREENHOUSES</h2>
                    <h3>Jun 2021 - Sep 2023, Minnesota, United states.</h3>
                    <h4>I improved my communication skills in English while supervising and collaborating with native speakers. My responsibilities included, managing inventory, and ensuring efficient operations. This experience not only developed my language proficiency but also taught me the importance of clear communication and collaboration in a team environment. </h4>
                </div>   
                <div className='galeria'>
                    <h1>Photo Gallery Project</h1>
                    <h4>Developed an interactive photo gallery using ReactJS for the frontend and Node.js for the backend. Integrated the Cloudinary API to allow for image uploads and keyword-based image searches. CSS for the gallery's design. Learned to work in a full development environment, from planning and design to implementation. </h4>
                    <p><a href="https://melodic-nougat-076bb0.netlify.app/" target="_blank">Link to Project.</a></p>
                </div>
            </div>
            <div className='experiencias2'>
                <div className='agriculture'>
                    <h1>Tic Tac Toe Game</h1>
                    <h4>Completed the Tic Tac Toe game challenge from React adding personal style. It offers classic gameplay with modern functionality, including two-player mode, game history recording, automatic win detection, and responsive design. Built with React, JavaScript, and CSS.</h4>
                    <p><a href="https://glowing-youtiao-49afcf.netlify.app/" target="_blank">Link to Project.</a></p>
                </div>   
                <div className='tictac'>
                    <h1>Agriculture Website</h1>
                    <h4>Built this website dedicated to agriculture, specifically emulating what would be family-owned agricultural company. It has been developed using JavaScript for dynamic functionality and CSS for design and styling</h4>
                    <p><a href="https://flourishing-parfait-0772d7.netlify.app/" target="_blank">Link to Project.</a></p>
                </div>   
            </div>  
        </div>
    );
}

export default Experience;
