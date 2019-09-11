import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

function WorkspaceHome(props){
    function handleLogout() {
        props.logout();
    }
    return (
        <div>
        <div onClick={handleLogout}>logout</div>
        <p> workspace home test component </p>
        </div>
    );
}

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceHome);