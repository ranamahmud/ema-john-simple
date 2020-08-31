import React, { useEffect, useState } from 'react';

const Review = () => {
    const {cart, setCart} = useState([]);
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        console.log(savedCart);
    })
    return (
        <div>
            <h1>This is a review</h1>
        </div>
    );
};

export default Review;