import React from "react";
import "./fondo.css"
import video from "./videoo.mp4";


function Wrapper({children}) {
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
                <ul clas>
                    <li><a href="#intro">ABOUT</a></li>
                    <li><a href="#work">SKILLS</a></li>
                    <li><a href="#exp">EXPERIENCE</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        <div className="footer">
            <p>&copy; DIEGOBAUTISTA. </p>
        </div>
         
        </div>
      </div>
     );
}

export default Wrapper;