import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i<cart.length; i++) {
        const product = cart[i];
        console.log(product);
        if(!product.quantity){
            product.quantity = 1;
        }else{
            product.quantity += 1;
        }
        total = total + product.price * product.quantity;
    }

    const tax = Math.round(total / 10, 2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4 className="text-primary">Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {total + tax}</p>
            <br />
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;