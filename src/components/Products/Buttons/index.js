import React from 'react';
import Buy from './sell.js';
import Sell from './buy.js';

const Buttons = () => {
    return(
        <div className="buttonContainer">
            <Sell/>
            <Buy/>
        </div>
    );
}

export default Buttons;