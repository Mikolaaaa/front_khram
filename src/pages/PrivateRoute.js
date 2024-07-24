import React from 'react';
import { Redirect } from 'react-router-dom';

function PrivateRoute({ children }) {
    const token = localStorage.getItem('access');
    return token ? children : <Redirect to="/login" />;
}

export default PrivateRoute;
