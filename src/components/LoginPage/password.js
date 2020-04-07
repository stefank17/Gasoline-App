import React from 'react';

const Password = (props) => {
    return(
        <div className="loginContainer">
            <input type="password" placeholder="Password"/>
            <div>
                <ul>
                    <li><a href="#"  onClick={() => {props.cancelButton()}}>Cancel</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Password;