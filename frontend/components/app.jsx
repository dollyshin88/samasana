import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import CompanyHome from './company_home/home';
import WorkspaceHome from './workspace/workspace_home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './session/welcome';
import SignupProfileForm from './session/signup_container';
import Setup from './setup/setup';
import ErrorPage from './shared/error_page';

function App(props) {

    return (
        <div>
            <Modal />
            <Switch>
                <AuthRoute exact path='/samasana' component={CompanyHome} />
                <AuthRoute exact path='/signup/welcome' component={Welcome} />
                <AuthRoute exact path='/signup/profile' component={SignupProfileForm} />
                <ProtectedRoute path='/setup' component={Setup} />
                <ProtectedRoute exact path='/' component={WorkspaceHome} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default App;