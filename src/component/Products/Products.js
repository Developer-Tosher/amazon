import React from 'react';
import './Products.css'

const Products = ({ product }) => {
    return (
        <div className='product'>
            <img src={product.img} alt='image'/>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Manufacturer: {product.seller}</p>
            <p>Ratting: {product.ratting}</p>

            <button>Add To Cart</button>
        </div>
    );
};

export default Products;
