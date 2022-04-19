import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useAuth();
    const [navbar, setNavbar] = React.useState(false);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar__container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <NavLink to="/">Travelcations</NavLink>
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
                        {
                            user ? (
                                <>
                                    <li className="nav-link">
                                        <button className="btn-logout" onClick={handleLogOut}>
                                            Log Out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-link">
                                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/account">Account</NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className="navbar__toggle">
                    <button onClick={() => setNavbar(!navbar)}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>

            <div className={navbar ? "toggle__links active" : "toggle__links"}>
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
                    {
                        user ? (
                            <>
                                <li className="nav-link">
                                    <button className="btn-logout" onClick={handleLogOut}>
                                        Log Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-link">
                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/account">Account</NavLink>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;