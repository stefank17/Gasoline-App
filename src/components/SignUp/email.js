import React from 'react';
import Password from './password';

const Email = (props) => {
    return(
        <div className="loginContainer">
            <input id="email" placeholder="Email"/>
            <div>
                <ul>
                    <li><a href="#"  onClick={() => {props.cancelButton()}}>Cancel</a></li>
                    <li><a href="#"  onClick={() => { 
                        const email = document.getElementById("email").value;
                        props.updateEmail(email) }}>Ok</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Email;