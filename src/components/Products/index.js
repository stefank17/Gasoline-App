import React, { useEffect } from 'react';
import ProductList from './ProductList/index';
import Buttons from './Buttons';
import { connect } from 'react-redux';
import { BuyGas, SellGas} from '../../actions/productActions';

function toggleClassName() {
    var element = document.getElementById("logo");
    element.classList.remove("logo")
    element.classList.add("logo2");
 }

const Products = ({ buyGas, sellGas, products }) => {
    useEffect(() => {
        console.log("Update")
    }, [products])

    toggleClassName()
    return(
        <div className="initalScreen" style={{overflow:"scroll"}}>
            <div id="container" class="container2">
                <Buttons buyGas={() => buyGas()} sellGas={() => sellGas()}/>
                <ProductList products={products}/>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    console.log("STATE:",state.gasMarket)
    return {
        products: state.gasMarket
    }
}

export default connect(mapStateToProps, { BuyGas, SellGas })(Products);