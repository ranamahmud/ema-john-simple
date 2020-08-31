import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
 
    return (
        <div className="product">
            <div>
                <img src={img} />
            </div>
            <div>
                <h4 className="product-name"> <Link to="/product">{name}</Link> </h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock -Order Soon</small></p>
                <button className="main-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                
            </div>
        </div>
    );
};

export default Product;