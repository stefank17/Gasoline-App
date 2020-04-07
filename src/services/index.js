import products_json from '../rescources/products.json';

const getProducts = () => {
    const products = Object.entries(products_json);
    const data = products.map(a => a[1])

    console.log(data)
    return data;
}

export default getProducts();