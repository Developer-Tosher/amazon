import React from 'react';
import './Shop.css'

const Shop = (props) => {
    const {name,seller, price, img, ratings} = props.product;
    return (
        <div className='shop'>
            <img src={img} alt='' />
            <div className='shop-info'>
                <h4 className='product-name'>{name}</h4>
                <h4 className='shoe-price'>$ Price: {price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings} star</p>
                {/* <h3>Name: {props.product.name}</h3> */}
            </div>
            <button className='button-cart'>Add To Cart</button>
        </div>
    );
};

export default Shop;