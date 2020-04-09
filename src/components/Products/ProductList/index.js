import React from 'react';
import ProductDetails from '../Details';

const ProductList = ({products}) => {
    console.log(products)
    return(
        <div className="productContainer">
            <a href="#"><ProductDetails products={products}/></a>
        </div>
    );
}

export default ProductList;