import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="page">
                <Spinner />
            </div>
        )
    }

    return user ? children : <Navigate to="/account" state={{ from: location.pathname }} />
};

export default PrivateRoute;