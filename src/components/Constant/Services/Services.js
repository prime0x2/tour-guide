import React from 'react';
import './Services.css'
import { packages } from '../../../data';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section className="services">
            <h1 data-aos="fade-up" data-aos-duration="1000">Packages</h1>

            <div className="services__container">
                {
                    packages.map(item => (
                        <div className="services__item" key={item.id} data-aos="zoom-in" data-aos-duration="1000">
                            <div className="services__item__img">
                                <img src={item.img} alt="package" />
                            </div>
                            <div className="services__item-content">
                                <h2>{item.name}</h2>
                                <p>{item.description.slice(0, 110)}...</p>
                                <h3>Price: <span>{item.price}$</span></h3>
                                <Link to={`/package/${item.id}`}>Purchase</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Services;