import React from 'react';
import './Product.css'


const Product = (props) => {
    const { img, name, price, seller, star, starCount, stock, features } = props.product
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p className="seller">by: {seller}</p>
                <div className="details-flex">
                    <div className="details-left">
                        <p >$ {price} </p>
                        <p className="stock">only {stock} left in stock - order soon</p>
                        <button 
                            className="btn-warning" 
                            onClick={()=>props.handleAddToCart(props.product)}
                            >
                            <i className="fas fa-shopping-cart"></i> add to cart
                        </button>
                    </div>
                    <div className="details-right">
                        <p>{star} star out of {starCount}</p>
                        {

                            features.length > 0 ? 
                            <div className="features">
                                
                                <h4>Features</h4>
                                <ul>
                                    {
                                        features.map((feature, i) => <li key={i}>{feature?.description}: <span className='feature-value'>{feature.value}</span></li>)
                                    }

                                </ul>
                            </div>: ''
                        }
                        

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;