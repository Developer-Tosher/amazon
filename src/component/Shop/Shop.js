import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='shop'>
            <div className='product'>
                {/* <h2>seller name: {product.length}</h2> */}
                {
                    product.map((productItem, id) => (
                        <Products key={id} product={productItem} />
                    ))
                }
            </div>
            <div className='order-summary'>
                <h3 className='os'>Order Summary</h3>
                <p>Selected Item: </p>
                <p>Total Price: $</p>
                <p>Total Shopping Charge:</p>
                <p>Tax: $</p>

                <button className='delete-cart'>Clear Cart</button>
                <button className='review-cart'>Review Order</button>
            </div>
        </div>
    );
};

export default Shop;
