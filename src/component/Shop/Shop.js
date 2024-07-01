import React from 'react';
import './Shop.css'
                // replace 'props' perameter with {product, handleAddToCart} 
const Shop = ({product, handleAddToCart}) => {
    // const {product, handleAddToCart} = props;
    const {name,seller, price, img, ratings} = product;
// console.log(props);
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
            <button onClick={()=>handleAddToCart(product)}  className='button-cart'>Add To Cart</button>
        </div>
    );
};

export default Shop;