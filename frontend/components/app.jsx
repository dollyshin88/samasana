import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal/modal';
import CompanyHome from './company_home/home';
import WorkspaceContainer from './workspace/workspace_container';
import { AuthRoute, SetupRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './session/welcome';
import SignupProfileForm from './session/signup_container';
import Setup from './setup/setup';
import ErrorPage from './shared/error_page';
import NewProjectForm from './workspace/projects/new_project_form';

function App(props) {

    return (
        <div>
            <Modal />
            <Switch>
                <AuthRoute exact path='/samasana' component={CompanyHome} />
                <AuthRoute exact path='/signup/welcome' component={Welcome} />
                <SetupRoute exact path='/signup/profile' component={SignupProfileForm} />
                
                <ProtectedRoute path='/setup' component={Setup} />
                <ProtectedRoute path='/workspace' component={WorkspaceContainer} />
                <ProtectedRoute path='/' component={WorkspaceContainer} />

                <Route component={ErrorPage} />
            </Switch>


        </div>
    )
}

export default App;