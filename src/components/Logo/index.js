import React from 'react';
import bus from '../../rescources/bus.png';
import logo from '../../rescources/logo.png';


const Logo = ({ goHome }) => {
    return(
        <div id="logo" className="logo" onClick={() => { goHome() } } href="#">
            
            <a href="#"><div><img src={bus}></img></div>
                <div><img src={logo}></img></div></a>
            
        </div>
        );
    }

export default Logo;