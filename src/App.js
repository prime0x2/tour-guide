import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Package from './components/Constant/Package/Package';
import Footer from './components/Shared/Footer/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import AccountPage from './pages/AccountPage/AccountPage';
import BlogPage from './pages/BlogPage/BlogPage';
import Home from './pages/Home/Home';
import useAuth from './hooks/useAuth';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Checkout from './pages/Checkout/Checkout';


const App = () => {

    const { user } = useAuth();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<ErrorPage />} />
                {
                    user ? (
                        <Route path="/account" element={<Navigate to="/" />} />
                    ) : (
                        <Route path="/account" element={<AccountPage />} />
                    )
                }
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/package/:id" element={<PrivateRoute><Package /></PrivateRoute>} />
                <Route path="/checkout/:id" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;