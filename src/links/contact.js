import React from 'react';
import '../links/contact.css';

function Contact() {
    return (
        <div className="displayContact">
            <button className="close-buttonContact">×</button>
            <h1>CONTACT ME</h1>
            <div className='formContact'>
                <form action="mailto:tu_correo@ejemplo.com" method="post" enctype="text/plain">
                    <label htmlFor="nombre">Name:</label><br />
                    <input type="text" id="nombre" name="nombre" required /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />
                    <label htmlFor="asunto">Subject:</label><br />
                    <input type="text" id="asunto" name="asunto" required /><br />
                    <label htmlFor="mensaje">Message:</label><br />
                    <textarea id="mensaje" name="mensaje" required></textarea><br />
                    <input className='submit' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
