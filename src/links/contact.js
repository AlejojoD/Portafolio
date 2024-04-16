import React from 'react';
import '../links/contact.css';

function Contact({onClose }) {
    return (
        <div className="displayContact">
            <button className="close-buttonContact"onClick={onClose}>×</button>
            <h1>CONTACT ME</h1>
            <div className='formContact'>
                <form action="https://formspree.io/f/xleqoqba" method="post" enctype="application/x-www-form-urlencoded">
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
