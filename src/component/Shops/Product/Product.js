import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, price, img, ratings, seller} = props.product;
    

    return (
        <div className='product'>
            <div className='product-all'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h6 className='product-name'>{name}</h6>
                <h6 className='product-price'>Price: ${price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            </div>
            <button onClick={ () => props.handleToCart(props.product)} className='cart-button'>
                <p className='cart-text'>
                Add to cart
                </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;