import React, { useEffect, useState } from 'react';
import {addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager'

const Review = () => {
    const {cart, setCart} = useState([]);
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const counts = productKeys.map(key => savedCart[key]);
        console.log(productKeys,counts);
        console.log(savedCart);
    })
    return (
        <div>
            <h1>This is a review</h1>
        </div>
    );
};

export default Review;