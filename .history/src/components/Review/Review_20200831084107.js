import React, { useEffect, useState } from 'react';
import {addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager'
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) =>{
        console.log('remove clicked',productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
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
        <div className="twin-container">
          <div className="product-container">
          {
                cart.map(pd => <ReviewItem  removeProduct = {removeProduct}product={pd}></ReviewItem>)
            }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Review;