import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react'
import './Shop.css'
import Product from '../../components/Product/Product'
import Cart from '../../components/Cart/Cart'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        console.log('product added',product);
        const newCart = [...cart, product]
        setCart(newCart)
        addToDatabaseCart(product.key, 1);
    }
    return (
        <div className="shop-container">

            <div className="product-container">
                <ul>
                    {
                        products.map(pd =>
                            <Product  showAddToCart = {true}
                            handleAddProduct = {handleAddProduct}
                            product={pd}></Product>
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