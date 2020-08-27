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
    }
    return (
        <div className="shop-container">

            <div className="product-container">
                <ul>
                    {
                        products.map(pd =>
                            <Product 
                            handleAddProduct = {handleAddProduct}
                            product={pd}></Product>
                        )
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart></Cart>
                <h3>This is cart</h3>
                <h5>Order Summary: {cart.length}</h5>
            </div>
        </div>
    );
};

export default Shop;