import React from 'react';
import Username from './username';
import Password from './password';
import Password2 from '../SignUp/password';
import SignUp from '../SignUp/indexFunctional';
import Logo from '../Logo';
import Email from '../SignUp/email';
import Products from '../Products';
import { connect } from 'react-redux';
import { GetGas, BuyGas, SellGas } from '../../actions/productActions';
import getProducts from '../../services';

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        signUpPress: false,
        email: "",
        loggedIn: false,
        products: []
    };

    componentDidMount() {
        const data = getProducts;
        // this.props.GetGas(data)
    }

    goHome() {
        this.setState({ username: "", password: "", loggedIn: false, signUpPress: false, })
        this.toggleClassName()
    }

    login() {
        this.setState({ loggedIn: true })
    }
    
    loginOut() {
        this.setState({ loggedIn: false })
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
        this.setState({ signUpPress: false, email:"" })
    }

    signUpButton() {
        this.setState({ signUpPress: true })
    }
    
    toggleClassName() {
        var element = document.getElementById("logo");
        element.classList.remove("logo2")
        element.classList.add("logo");
    }

    buyGas() {
        this.props.BuyGas()
    }

    sellGas() {
        this.props.SellGas()
    }

    render() {
        const { username, signUpPress, email, loggedIn, products } = this.state;
        console.log(products)
        return(
            <div id="initalScreen" className="initalScreen">
            <Logo goHome={ () => { this.goHome() } }/>
                <div id="container" className="container">

                    {loggedIn ? 
                    (<Products  products={products} sellGas={() => this.sellGas()} buyGas={() => this.buyGas()} loginOut={ () => { this.loginOut() }} />)
                    :
                    (signUpPress ? (email.length !== 0 ? 
                        (<Password2 updateEmail={ (newEmail) => { this.updateEmail(newEmail) } } cancelButton={ () => { this.cancelButtonSignUp() } }/>)
                        :
                        (<Email cancelButton={ () => { this.cancelButtonSignUp() } } updateEmail={ (newEmail) => { this.updateEmail(newEmail) } }/>)
                    ): 
                    (username.length !== 0 ? 
                        (<Password login={ () => { this.login() }} cancelButton={ () => { this.cancelButtonLogin() } } login={ () => {this.login() }}/>)
                        : 
                        (<Username signUpButton={ () => { this.signUpButton() } }  updateUsername={username => { this.updateUsername(username) } }/> )
                        )
                    )}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("STATE:",state.gasMarket)
    return {
        products: state.gasMarket
    }
}

export default connect(mapStateToProps ,{ GetGas, BuyGas, SellGas })(LoginPage);