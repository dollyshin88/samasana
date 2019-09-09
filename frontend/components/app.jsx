import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import CompanyHome from './company_home/home';
import WorkspaceHome from './workspace/workspace_home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './session/welcome';

function App(props) {

    return (
        <div>
            <Modal />
    
            <AuthRoute exact path='/signup/welcome' component={Welcome} />
            {/* <AuthRoute exact path='/login' component={} /> */}
            <ProtectedRoute exact path='/' component={WorkspaceHome} />
            <Route exact path='/samasana' component={CompanyHome} />
            {/* <Route exact path='/signup/profile' component={SignupProfileForm} */}

        </div>
    )
}

export default App;