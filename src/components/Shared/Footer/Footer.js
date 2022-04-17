import React from 'react';
import './Footer.css'

const Footer = () => {

    const date = new Date();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__content__left">
                        <h1>NiGGA</h1>
                        <p>
                            A vacation is full of opportunities to see new sights, meet new people, and experience different cultures
                        </p>
                        <a
                            href="https://www.linkedin.com/company/enginix-tech/"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/enginix.tech"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/enginix.tech"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram-square"></i>
                        </a>
                    </div>
                    <div className="footer__content__right">
                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span>+8801309696969</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <span>support@tourguide.com</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; {date.getFullYear()} . All rights reserved to{" "}
                    <a href="/" target="_blank">
                        Tour Guide
                    </a>
                    .
                </div>
            </div>
        </footer>
    );
};

export default Footer;