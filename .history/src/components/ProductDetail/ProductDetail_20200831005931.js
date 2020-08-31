import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productkey} = useParams()
    const product = fakeData.find(pd => pd.key === productkey)
    console.log(product);
    return (
        <div>
            <h1>Product Coming Soon {productkey}</h1>
          <Product product={product} showButton = {false}></Product>
        </div>
    );
};

export default ProductDetail;