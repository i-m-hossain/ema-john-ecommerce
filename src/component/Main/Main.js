import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Main.css'


const Main = () => {
    return (
        <div className="main">
            <div className="main-left">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
            <div className="main-right">
                <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Main;