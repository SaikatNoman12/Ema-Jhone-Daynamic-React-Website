import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightArrowLeft, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = product.price + total;
        shipping = product.shipping + shipping;

    } 
    const tax = (total * 0.10).toFixed(2);

    const grnadTotal = total + shipping + parseFloat(tax);


    return (
        <div className='cart'>
            <h2 className='cart-title'>Order Summary</h2>
            <div className='cart-body'>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: {tax}</p>
                <h3 className='cart-total'>Grand Total: ${grnadTotal}</h3>
            </div>
            
            <div className='cart-btn'>
                <button className='btn-one'>
                    Clear Cart
                    <FontAwesomeIcon className='font' icon={faDeleteLeft}></FontAwesomeIcon>
                </button>
                <br/>
                <button className='btn-two'>
                    Review Order
                    <FontAwesomeIcon className='font' icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;