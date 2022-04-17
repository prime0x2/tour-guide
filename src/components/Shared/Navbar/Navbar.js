import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar__container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <NavLink to="/">NiGGA</NavLink>
                </div>

                <div className="navbar__links">
                    <ul>
                        <li className="nav-link">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/about">About</NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/account">Account</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;