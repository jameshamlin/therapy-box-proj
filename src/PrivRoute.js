import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivRoute = ({isLoggedIn: isLoggedIn , children, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route
            {...rest}
            render={props => (
            isLoggedIn() ?
                ( children )
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivRoute;