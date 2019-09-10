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
        <div>
            <EmptySideNav />
            {setupComp}
        </div>
    );
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = dispatch => ({
    
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Setup);