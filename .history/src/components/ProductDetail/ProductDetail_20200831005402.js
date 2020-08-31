import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productkey} = useParams()
    return (
        <div>
            <h1>Product Coming Soon {productkey}</h1>
        </div>
    );
};

export default ProductDetail;