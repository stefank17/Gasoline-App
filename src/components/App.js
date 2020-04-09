import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import Products from './Products';
import Buttons from './Products/Buttons';
import SideBar from './Products/SideBar';


class App extends Component {
    state = {
        
    }

    componentDidMount() {
    }

    render() 
    {
        return(
            <div>
                <LoginPage/>
                {/* <Products/> */}
            </div>
        );
    }
}

export default connect()(App);