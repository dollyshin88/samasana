import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ path, component: Component, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={ props => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/workspace' />
        )
    )} />
);

const Setup = ({ path, component: Component, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={ props => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/setup/team' />
        )
    )} />
);

const Protected = ({ path, component: Component, loggedIn, exact }) => {
    return (
    <Route path={path} exact={exact} render={ props => (
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/samasana' />
        )
    )} />
)};

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id),
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const SetupRoute = withRouter(connect(mapStateToProps)(Setup));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
