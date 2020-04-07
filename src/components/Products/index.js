import React from 'react';
// import ProductDetails from './Details';
import ProductList from './ProductList/index';
import Buttons from './Buttons';
import getProducts from '../../services';

const Products = (props) => {
    return(
        <div>
            <Buttons/>
            <ProductList getProducts={getProducts}/>
        </div>
    );
}
export default Products;