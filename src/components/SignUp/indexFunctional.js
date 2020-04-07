import React from 'react';
import Logo from '../Logo';
import LoginPage from '../LoginPage';
import Email from './email';
import Password from './password';

const SignUp = (props) => {

    return(
        <div>
        <Logo/>
            <div>
                {props.signUpPress ? (<LoginPage signUpPress={props.signUpPress}/>) :(props.email.length !== 0 ? (<Password cancelButton={() => props.cancelButton()}/>) : (<Email cancelButton={() => {props.cancelButton()}} updateEmail={email => props.updateEmail(email)}/> ))}
            </div>
        </div>
    );

}

export default SignUp;