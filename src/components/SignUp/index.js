import React from 'react';
import Email from './email';
import Password from './password';
import LoginPage from '../LoginPage'
import Logo from '../Logo';

class SignUp extends React.Component {
    state = {
        email: "",
        password: ""
    };

    componentDidMount() {
        // SignUp.forceUpdate()
    }

    updateEmail(email) {
        this.setState({ email: email })
    }

    cancelButton() {
        this.setState({ email: "" })
    }

    pressLogin() {
    }



    render() {
        const { email } = this.state;
        const { signUpPress } = this.props;
        return(
            <div>
            <Logo/>
                <div>
                    {signUpPress ? (<LoginPage signUpPress={signUpPress}/>) :(email.length !== 0 ? (<Password cancelButton={() => this.cancelButton()}/>) : (<Email cancelButton={() => {this.cancelButton()}} updateEmail={email => this.updateEmail(email)}/> ))}
                </div>
            </div>
        );
    }
}

export default SignUp;