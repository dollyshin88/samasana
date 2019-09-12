import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

function WorkspaceHome(props){
    function handleLogout() {
        props.logout();
    }
    function renderMembers() {
        if (props.members.length) {

            return (
                <>
                {props.members.map((member, i) => (
                <div key={i}>{member.name}</div>
                ))}
                </>
            );
        }
    }
    // add useEffect and launch receiveCurrentWorkspace after setting a defaultworkspace
    const defaultWorkspace = props.workspaces[0];
    return (
        <div>
            
            <div onClick={handleLogout}>logout</div>
            <p> workspace home test component </p>
            <p>{(defaultWorkspace) ? defaultWorkspace.name : ""}</p>
            <p>Members!</p>
            {renderMembers()}
            
        </div>
    );
}

const mapStateToProps = state => ({
    currentUserId: state.session.currenUserId,
    workspaces: Object.values(state.entities.workspaces),
    members: Object.values(state.entities.members),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    //eventually send down actions to fetch projects and tasks data
});
export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceHome);