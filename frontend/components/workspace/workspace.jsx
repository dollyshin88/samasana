import React from 'react';
import SideNav from './workspace_side_nav';
import WorkspaceHome from './workspace_home';
import WorkspaceHeaderNav from './workspace_header_nav';
import { useEffect } from 'react';

function Workspace(props){
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

    //conditionally render grid item main

    useEffect(() => {
        props.fetchAllProjects(props.currentWorkspace);
    }, []);

    // make side nav and workspace home connected components
    return (
        
        <div className='page-container workspace-grid-container'>
            <div onClick={handleLogout} className='btn btn--purple'>LOGOUT</div>
            <div className='workspace-grid-item-sidebar'>
                <SideNav />
            </div>
            <div className='workspace-grid-item-header'>
                <WorkspaceHeaderNav />
            </div>
            <div className='workspace-grid-item-main'>
                <WorkspaceHome />
            </div>
        </div>
    );
}


export default Workspace;