import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    return (
        <div>
            This is a product. {props.pd}
            {console.log(props)}
        </div>
    );
};

export default Product;