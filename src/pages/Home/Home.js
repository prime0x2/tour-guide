import React from 'react';
import Blogs from '../../components/Constant/Blogs/Blogs';
import Header from '../../components/Constant/Header/Header';
import Services from '../../components/Constant/Services/Services';

const Home = () => {
    return (
        <div className="page">
            <Header />
            <Services />
            <Blogs />
        </div>
    );
};

export default Home;