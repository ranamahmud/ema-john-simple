import React from 'react';
import fakeData from '../../fakeData'
import {useState} from 'react'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);

    const [products, setProducts] = useState(first10);
    return (
        <div className="shop-container">

            <ul>
                {
                    products.map(product =>
                        <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;