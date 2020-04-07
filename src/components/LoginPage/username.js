import React from 'react';

const Username = (props) => {
    return(
        <div className="loginContainer">
            <input id="username" placeholder="Username"/>
            <div>
                <ul>
                    <li><a href="#" onClick={() => {props.signUpButton()}}>Sign up</a></li>
                    <li><a href="#" onClick={() => {
                        const username = document.getElementById("username").value;
                        props.updateUsername(username)
                        }}>Login</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Username;