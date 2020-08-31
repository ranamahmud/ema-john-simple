import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productkey} = useParams()
    const product = fakeData.find(pd => pd.key === productkey)
    return (
        <div>
            <h1>Product Coming Soon {productkey}</h1>
        </div>
    );
};

export default ProductDetail;