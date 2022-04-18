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
import Spinner from './components/Shared/Spinner/Spinner';


const App = () => {

    const { user } = useAuth();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {
                    user ? (
                        <Route path="/account" element={<Navigate to="/" />} />
                    ) : (
                        <Route path="/account" element={<AccountPage />} />
                    )
                }
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/package/:id" element={<PrivateRoute><Package /></PrivateRoute>} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;