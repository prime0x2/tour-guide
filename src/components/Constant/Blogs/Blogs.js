import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../../data';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className="blogs">
            <h1>Featured Blogs</h1>

            <div className="blogs__container">
                {
                    blogs.map((blog, index) => {
                        return (
                            <div className="blogs__item" key={index} data-aos="zoom-in" data-aos-duration="1000">
                                <div className="blogs__item-cover">
                                    <img src={blog.cover} alt="blog cover" />
                                </div>
                                <div className="blogs__item-content">
                                    <h2>{blog.title}</h2>
                                    <p>{blog.description.slice(0, 140)}...</p>
                                    <Link to="/blogs">Read More</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Blogs;