import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name} = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src = {img}/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
            </div>
        </div>
    );
};

export default Product;