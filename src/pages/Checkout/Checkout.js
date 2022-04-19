import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="page">
            <div className="checkout__container">
                <h1>Thanks For Purchasing</h1>
                <Link to="/">Back To Home</Link>
            </div>
        </div>
    );
};

export default Checkout;