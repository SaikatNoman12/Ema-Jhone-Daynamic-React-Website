import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightArrowLeft, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    return (
        <div className=''>
            <h2 className='cart-title'>Order Summary</h2>
            <div className='cart-body'>
                <p>Selected items: {cart.length}</p>
                <p>Total Price: $1112</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h3 className='cart-total'>Grand Total: $1555</h3>
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