import React from 'react';
import Buy from './sell.js';
import Sell from './buy.js';
import { connect } from 'react-redux';
import { SellGas } from '../../../actions/productActions';

const Buttons = ({buyGas, SellGas}) => {
    return(
        <div className="buttonContainer">
            <a href="#" onClick={() => SellGas()}><Sell/></a>
            <a href="#" onClick={() => buyGas()}><Buy/></a>
        </div>
    );
}

export default connect(null,{SellGas})(Buttons);