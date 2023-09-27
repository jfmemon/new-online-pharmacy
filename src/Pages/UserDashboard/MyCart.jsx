import React from 'react';
import useCart from '../../Hooks/useCart';

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((accumulator, currentValue) => currentValue.totalPrice + accumulator, 0);

    return (
        <div>
            <h3>Total items {cart?.length}</h3>
            <h3>Total price {totalPrice} &#2547;</h3>
        </div>
    );
};

export default MyCart;