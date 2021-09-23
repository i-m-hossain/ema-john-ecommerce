import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
    return (
        <div>
            <div className="header-logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <Navbar></Navbar>
            <Searchbar></Searchbar>
            
        </div>
        

    );
};

export default Header;