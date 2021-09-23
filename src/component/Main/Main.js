import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'


const Main = () => {
    const [products, setProducts] = useState([])
    const[cart, setCart] =useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddToCart= (product) =>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className="main">
            <div className="main-left">
               {
                    products.map(product => <Product 
                        product={product} 
                        handleAddToCart={handleAddToCart}
                        key={product.key}>
                            
                        </Product>)
               }
                
            </div>
            <div className="main-right">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;