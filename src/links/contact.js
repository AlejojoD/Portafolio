import React, { useState, useEffect } from 'react';
import '../links/contact.css';

function Contact({ onClose }) {
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
        <div className={`displayContact ${isVisible ? 'contact-appear' : ''}`}>
            <button className="close-buttonContact" onClick={handleClose}>×</button>
            <h1>CONTACT ME</h1>
            <div className='formContact'>
                <form action="https://formspree.io/f/xleqoqba" method="post" encType="application/x-www-form-urlencoded">
                    <label htmlFor="nombre">Name:</label><br />
                    <input type="text" id="nombre" name="Nombre" required /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="Email" required /><br />
                    <label htmlFor="asunto">Subject:</label><br />
                    <input type="text" id="asunto" name="Asunto" required /><br />
                    <label htmlFor="mensaje">Message:</label><br />
                    <textarea id="mensaje" name="Mensaje" required></textarea><br />
                    <input className='submit' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
