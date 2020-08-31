import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    return (
        <div style={{borderBottom:'1px solid lightgrey'}} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;