import React, { useEffect, useState } from 'react';
import {addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager'
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) =>{
        console.log('remove clicked',productKey);
    }
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h1>Cart Items {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem  removeProduct = {removeProduct}product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;