import React from 'react';

const Password = (props) => {
    return(
        <div className="loginContainer">
            <input type="password" placeholder="Password"/>
            <div>
                <ul>
                    <li><a href="#"  onClick={() => {props.cancelButton()}}>Cancel</a></li>
                    <li><a href="#"  onClick={() => {props.cancelButton()}}>Ok</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Password;