import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock -Order Soon</small></p>
                <button className="main-button">add to cart</button>
            </div>
        </div>
    );
};

export default Product;