import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const ProductDetails = ({products}) => {

    useEffect(() => {
        console.log("Change");
    }, [products])

    return(
        <div className="productContainer2">
            {products.map((p,i) => <div key={ i } className="productDetail">
            <h1>{p.name}</h1>
            {console.log(p.name," ",p.img)}
            <img className="productImage" src={require(`../../../rescources/${p.img}`)}/>
            </div>)}
        </div>
    );
}

function mapStateToProps(state) {
    console.log("STATE DETAILS:",state.gasMarket)
    return {
        products: state.gasMarket
    }
}

export default connect(mapStateToProps)(ProductDetails);