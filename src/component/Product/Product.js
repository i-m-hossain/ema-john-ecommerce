import React from 'react';
import './Product.css'


const Product = () => {
    return (
        <div className="product">
            <div className="product-image">
                <img src="https://images-na.ssl-images-amazon.com/images/I/41c3yiJtjCL._AC_US218_.jpg" alt="" />
            </div>
            <div className="product-details">
                <h2>
                    Acer Aspire E 15 E5-575G-57D4 15.6-Inches Full HD Notebook (i5-7200U, 8GB DDR4 SDRAM, 256GB SSD, Windows 10 Home), Obsidian Black
                </h2>
                <p>by: Acer</p>
                <div className="details-flex">
                    <div className="details-left">
                        <p>$ 579.99 </p>
                        <p>only 49 left in stock - order soon</p>
                        <button class="btn-warning"><i class="fas fa-shopping-cart"></i> add to cart</button>
                    </div>
                    <div className="details-right">
                        <p>5 star</p>
                        <h4>Features</h4>
                        <ul>
                            <li>Display Size: 15.6 inches</li>
                            <li>Computer Memory Size: 8 GB</li>
                            <li>Operating System: Windows 10</li>
                            <li>Cpu Model Family: core i5</li>
                            <li>Display Technology: LED-L</li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;