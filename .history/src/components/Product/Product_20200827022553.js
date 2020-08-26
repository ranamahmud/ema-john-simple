import React from 'react';
import './Product.css'
const Product = (props) => {
    return (
        <div>
            This is a product. {props.name}
            console.log(props);
        </div>
    );
};

export default Product;