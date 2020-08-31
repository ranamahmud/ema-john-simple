import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react'
import './Shop.css'
import Product from '../../components/Product/Product'
import Cart from '../../components/Cart/Cart'
import {addToDatabaseCart } from '../../utilities/databaseManager'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd=> pd.key === product.key);
        if (sameProduct){
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
        }else{
            sameProduct.quantity = 1;
        }
        const count = sameProduct.length;
        const newCart = [...cart, product];
        setCart(newCart)
   
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">

            <div className="product-container">
                <ul>
                    {
                        products.map(pd =>
                            <Product  showAddToCart = {true}
                            handleAddProduct = {handleAddProduct}
                            product={pd} key={pd.key}></Product>
                        )
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;