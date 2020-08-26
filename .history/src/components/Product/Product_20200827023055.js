import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    return (
        <div>
            This is a product. 
            <h4>{props.pd}</h4>
        </div>
    );
};

export default Product;