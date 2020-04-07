import React from 'react';

const ProductDetails = (props) => {
    return(
        <div>
            {props.products[0].map((p,i) => <div key={ i } className="productDetail">
            <h1>{p.name}</h1>
            <img className="productImage" src="gas.jpg"/>
            </div>)}
        </div>
    );
}
export default ProductDetails;