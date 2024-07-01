import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css'

const Product = () => {
    const [product,SetProduct] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => SetProduct(data))
    },[])
    return (
        <div className='products'>
            <div className='product'>
                {
                    product.map(product=> <Shop 
                        key={product.id} 
                        product={product}
                    
                    ></Shop>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order Summary</h3>
            </div>

        </div>
    );
};

export default Product;