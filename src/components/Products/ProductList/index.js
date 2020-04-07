import React from 'react';
import ProductDetails from '../Details';

const ProductList = (props) => {
    console.log("From list",props.getProducts)
    const products = props.getProducts;
    return(
        <div className="productContainer">
            <ProductDetails products={products}/>
        </div>
    );
}

export default ProductList;