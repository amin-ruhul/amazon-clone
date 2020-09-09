import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to = '/'>
            <img className='header-logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon icon"/>
            </Link>
            


            <div className="header-search">
                <input type="text" className='header-search-input'/>
                <SearchIcon className='header-search-icon'/>
            </div>

            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-one">
                        Hello Guest
                    </span>
                    <span className="header-option-two">
                        Sign in
                    </span>
                </div>
                <div className="header-option">
                <span className="header-option-one">
                        Returns
                    </span>
                    <span className="header-option-two">
                        & Orders
                    </span> 
                </div>
                <div className="header-option">
                <span className="header-option-one">
                        Your
                    </span>
                    <span className="header-option-two">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                <div className="header-basket">
                    <ShoppingBasketIcon/>
                    <span className="header-option-two basket-count">0</span>
                </div>
                </Link>
                
            </div>
        </div>

       
    )
}

export default Header
