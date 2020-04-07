import React, { Component } from 'react';
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
            </div>
        );
    }
}

export default App;