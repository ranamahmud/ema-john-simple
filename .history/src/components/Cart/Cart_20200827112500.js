import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: </p>
        </div>
    );
};

export default Cart;