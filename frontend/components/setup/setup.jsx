import { connect } from 'react-redux';
import React from 'react';
import TeamForm from './team_form';
import InviteForm from './invite_form';
import EmptySideNav from './empty_side_nav';



function Setup(props) {

    const setupComp = (props.location.pathname === '/setup/team') ? (
        <TeamForm />
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
    //createWorkspace and create workspaceMembership
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Setup);