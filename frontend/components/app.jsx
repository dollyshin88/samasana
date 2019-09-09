import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import CompanyHome from './company_home/home';
import WorkspaceHome from './workspace/workspace_home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


function App(props) {

    return (
        <div>
            <Modal />
    
            {/* <AuthRoute exact path='/welcome' component={} /> */}
            {/* <AuthRoute exact path='/login' component={} /> */}
            <ProtectedRoute exact path='/' component={WorkspaceHome} />
            <Route exact path='/samasana' component={CompanyHome} />
        </div>
    )
}

export default App;