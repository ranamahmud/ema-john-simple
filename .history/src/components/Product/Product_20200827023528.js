import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src = {props.product.img}/>
            </div>
            <div>{{props.product.name</div>
        </div>
    );
};

export default Product;