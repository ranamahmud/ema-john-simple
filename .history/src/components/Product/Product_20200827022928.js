import React from 'react';
import './Product.css'
const Product = (props) => {
    return (
        <div>
            This is a product. {props}
            {console.log(props)}
        </div>
    );
};

export default Product;