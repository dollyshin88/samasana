import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import CompanyHome from './company_home/home';
import WorkspaceHome from './workspace/workspace_home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './session/welcome';
import SignupProfileForm from './session/signup_container';
import Setup from './setup/setup';

function App(props) {

    return (
        <div>
            <Modal />
    
            <AuthRoute exact path='/signup/welcome' component={Welcome} />
            <AuthRoute exact path='/samasana' component={CompanyHome} />
            <ProtectedRoute exact path='/' component={WorkspaceHome} />

            <Route exact path='/signup/profile' component={SignupProfileForm} />
            <Route path='/setup' component={Setup} />
            
        </div>
    )
}

export default App;