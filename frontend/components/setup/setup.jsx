import { connect } from 'react-redux';
import React from 'react';
import TeamForm from './team_form';
import InviteForm from './invite_form';
import EmptySideNav from './empty_side_nav';
import { createWorkspace } from '../../actions/workspace_actions';



function Setup(props) {

    const setupComp = (props.location.pathname === '/setup/team') ? (
        <TeamForm createWorkspace={props.createWorkspace} />
    ) : (
        <InviteForm />
    );

    return (
        <div className='page-container setup-grid-container'>
            <div className='setup-grid-item-sidebar'>
                <EmptySideNav />
            </div>
            <div className='setup-grid-item-main'>
                {setupComp}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = dispatch => ({
    createWorkspace: workspace => dispatch(createWorkspace(workspace)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Setup);