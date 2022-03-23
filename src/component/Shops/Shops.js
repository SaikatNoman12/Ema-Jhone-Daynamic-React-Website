import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shops.css'

const Shops = () => {
    // use for cart
    const [cart , setCart] = useState([]);

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='all-products'>
            <div className='product-container'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleToCart={handleToCart}
                        ></Product>)
                }
            </div>
            <div className='shope-order'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;