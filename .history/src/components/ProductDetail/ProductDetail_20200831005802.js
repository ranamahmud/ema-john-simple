import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productkey} = useParams()
    const product = fakeData.find(pd => pd.key === productkey)
    console.log(product);
    return (
        <div>
            <h1>Product Coming Soon {productkey}</h1>
            <Product product = product></Product>
        </div>
    );
};

export default ProductDetail;