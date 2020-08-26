import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, seller, price} = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src = {img}/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price</p>
            </div>
        </div>
    );
};

export default Product;