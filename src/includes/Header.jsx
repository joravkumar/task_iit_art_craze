import React from 'react';
import { Link } from 'react-router-dom';

const Header = _ => {
    return (
        <header className="container">
            <div className="top-bar">
                <div className="brand-logo">LOGO</div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" name="" id="" />
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M21.8115 19.929L16.5837 14.8257C17.986 13.2519 18.8351 11.1984 18.8351 8.9541C18.8351 4.01375 14.7187 0 9.6626 0C4.60175 0 0.490112 4.0184 0.490112 8.9541C0.490112 13.8898 4.60652 17.9082 9.6626 17.9082C11.9617 17.9082 14.0652 17.0794 15.6774 15.7104L20.9052 20.8137C21.0292 20.9348 21.1962 21 21.3584 21C21.5205 21 21.6875 20.9395 21.8115 20.8137C22.0595 20.5716 22.0595 20.1712 21.8115 19.929ZM1.77321 8.9541C1.77321 4.70754 5.31247 1.25721 9.65783 1.25721C14.008 1.25721 17.5424 4.7122 17.5424 8.9541C17.5424 13.196 14.008 16.6557 9.65783 16.6557C5.31247 16.6557 1.77321 13.2007 1.77321 8.9541Z"
                                fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="21.5122" height="21" fill="white" transform="matrix(1 0 0 -1 0.487793 21)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="menu-icon">
                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.85524 4.30878H30.1448C31.1699 4.30878 32 3.46338 32 2.41768C32 1.3746 31.1699 0.526138 30.1448 0.526138H1.85524C0.83009 0.526138 0 1.3746 0 2.41768C0 3.46382 0.83009 4.30878 1.85524 4.30878ZM30.1448 12.1085H1.85524C0.83009 12.1085 0 12.9574 0 14C0 15.0466 0.83009 15.8915 1.85524 15.8915H30.1448C31.1699 15.8915 32 15.0461 32 14C32 12.9574 31.1699 12.1085 30.1448 12.1085ZM30.1448 23.6908H1.85524C0.83009 23.6908 0 24.5397 0 25.5823C0 26.6289 0.83009 27.4739 1.85524 27.4739H30.1448C31.1699 27.4739 32 26.6276 32 25.5823C32 24.5397 31.1699 23.6908 30.1448 23.6908Z"
                            fill="black" />
                    </svg>
                </div>
            </div>
            <nav id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/trendings">Trending's</Link></li>
                    <li><a href="#">Pricing</a></li>
                    <li><Link to="/artist">Sell Content</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;