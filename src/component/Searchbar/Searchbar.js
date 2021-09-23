import React from 'react';
import './Searchbar.css'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Type here to search" />
            <i class="fas fa-shopping-cart"></i><span className="count">1</span>
        </div>
    );
};

export default Searchbar;