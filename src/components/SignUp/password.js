import React from 'react';

const Password = (props) => {
    return(
        <div className="bodyArt">
            <div className="loginContainer">
                    <div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="inputButtons">
                        <ul>
                            <li><a href="#"  onClick={() => {props.cancelButton()}}>Cancel</a></li>
                            <li><a href="#"  onClick={() => {props.cancelButton()}}>Ok</a></li>
                        </ul>
                    </div>
            </div>
        </div>

    );
}

export default Password;


// <div className="loginContainer">
// <input type="password" placeholder="Password"/>
// <div>
//     <ul>
//         <li><a href="#"  onClick={() => {props.cancelButton()}}>Cancel</a></li>
//         <li><a href="#"  onClick={() => {props.cancelButton()}}>Ok</a></li>
//     </ul>
// </div>
// </div>