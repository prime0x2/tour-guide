import React from 'react';
import { Routes, Route } from 'react-router';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import AccountPage from './pages/AccountPage/AccountPage';
import BlogPage from './pages/BlogPage/BlogPage';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/blogs" element={<BlogPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;