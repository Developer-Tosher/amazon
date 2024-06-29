import React from 'react';
import './Products.css';

const Products = ({ product }) => {
    return (
        <div className='product'>
            <div>
                <div className='product-image'>
                    <img src={product.img} alt='product image' />
                </div>
                <div className='product-details'>
                    <div className='show-info'>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Manufacturer: {product.seller}</p>
                        <p>Rating: {product.rating}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
