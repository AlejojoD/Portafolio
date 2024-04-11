import React from 'react';
import escritorio from '../sada.jpg';
import '../links/experience.css';
import usa from '../usa.jpg';
import galeria from '../galeria.png';
import agriculture from '../miraclee.png';
import tictac from '../triki d.png';
function Experience() {
    return ( 
        <div className="displayExp">
            <button className="close-buttonAbout">×</button>
            <h1>EXPERIENCE</h1>
            <div className='experiencias1'>
                <div className='USA'>
                    <img src={usa} alt="JavaScript"></img>
                    <p>Assistant Grower United States</p>    
                </div>   
                <div className='galeria'>
                    <img src={galeria} alt="JavaScript"></img>
                    <p>Photo Gallery Project</p>    
                </div>
            </div>
            <div className='experiencias2'>
                <div className='agriculture'>
                    <img src={agriculture}alt="JavaScript"></img>
                    <p>Agriculture Website</p>    
                </div>   
                <div className='tictac'>
                    <img src={tictac} alt="JavaScript"></img>
                    <p>Tic Tac Toe Game</p>    
                </div>   
            </div>  
        </div>
    );
}


export default Experience;
