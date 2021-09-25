import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }
    return (
        <div>
            <h3>Order Summary </h3>
            <h5>Items Ordered : {totalQuantity}</h5>
            <p>Total : {total}</p>
        </div>
    );
};

export default Cart;