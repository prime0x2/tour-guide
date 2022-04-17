import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__text" data-aos="fade-right" data-aos-duration="1000">
                <h1>
                    <p>No <span>borders</span>, No <span>lines</span></p>
                    <p>Just you and the world</p>
                </h1>

                <Link to="/about">Contact</Link>
            </div>
            <div className="header__banner" data-aos="fade-left" data-aos-duration="1000">
                <img src="/media/banner.png" alt="" />
            </div>
        </header>
    );
};

export default Header;