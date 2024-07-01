import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css'

const Product = () => {
    const [product,SetProduct] = useState([]);
    const [cart, setCart] =useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => SetProduct(data))
    },[])

    const handleAddToCart =(product)=>{
        console.log(product);
        // cart.push(product);
                    // ...cart -> copy the array value
        const newCart = [...cart, product];
        setCart(newCart)

    }
    return (
        <div className='products'>
            <div className='product'>
                {
                    product.map(product=> <Shop 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                    
                    ></Shop>)
                }
            </div>
            <div className='cart-container'>
                <h3 className=''>Order Summary</h3>
                <p>Selected Item: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shopping Charge:</p>
                <p>Tax: $</p>

                <button className='delete-cart'>Clear Cart</button>
                <button className='review-cart'>Review Order</button>
            </div>

        </div>
    );
};

export default Product;