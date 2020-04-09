import React from 'react';

const Username = (props) => {
    return(
        // <div className="bodyArt">
            <div className="loginContainer">
                    <div>
                        <input id="username" type="text" placeholder="Username"/>
                    </div>
                    <div className="inputButtons">
                        <ul>
                            <li><a href="#" onClick={() => {props.signUpButton()}}>Sign up</a></li>
                            <li><a href="#" onClick={() => {
                                const username = document.getElementById("username").value;
                                props.updateUsername(username)
                                }}>Login</a></li>
                        </ul>
                    </div>
            </div>
        // </div>
    );
}

export default Username;