import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PubRoute = ({isLoggedIn: isLoggedIn, restricted: restricted,  children, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLoggedIn() && restricted ?
                <Redirect to="/dash" />
                : ( children )
        )} />
    );
};

export default PubRoute;