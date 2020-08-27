import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total+prd.price, 0)
    let shipping = 12.99;
    if(total > 35){
        shipping = 0;
    }else if(total > 15){
        shipping = 4.99;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;