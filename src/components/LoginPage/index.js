import React from 'react';
import Username from './username';
import Password from './password';
import SignUp from '../SignUp/indexFunctional';
import Logo from '../Logo';
import Email from '../SignUp/email';

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        signUpPress: false,
        email: ""
    };

    componentDidMount() {
    }

    login() {

    }

    updateUsername(username) {
        this.setState({ username: username })
    }

    updateEmail(email) {
        this.setState({ email: email })
    }

    cancelButtonLogin() {
        this.setState({ username: "" })
    }

    cancelButtonSignUp() {
        this.setState({ signUpPress: false })
    }

    signUpButton() {
        this.setState({ signUpPress: true })
    }

    render() {
        const { username, signUpPress, email } = this.state;
        console.log(signUpPress)
        return(
            <div>
            <Logo/>
                <div>
                    {signUpPress ? (email.length !== 0 ? 
                        (<Password updateEmail={ (newEmail) => { this.updateEmail(newEmail) } }/>)
                        :
                        (<Email cancelButton={ () => { this.cancelButtonSignUp() } }/>)
                    ): 
                    (username.length !== 0 ? 
                        (<Password cancelButton={ () => { this.cancelButtonLogin() } }/>)
                        : 
                        (<Username signUpButton={ () => { this.signUpButton() } }  updateUsername={username => { this.updateUsername(username) } }/> )
                        )}
                </div>
            </div>
        );
    }
}

export default LoginPage;