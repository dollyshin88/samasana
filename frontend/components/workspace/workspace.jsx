import React from 'react';
import SideNav from './workspace_side_nav';
import WorkspaceHome from './workspace_home';
import WorkspaceHeaderNav from './workspace_header_nav';
import { useEffect } from 'react';

function Workspace(props){
    function handleLogout() {
        props.logout();
    }
    

    //conditionally render grid item main

    useEffect(() => {
        props.fetchAllProjects(props.currentWorkspace.id);
    }, []);

    // make side nav and workspace home connected components
    return (
        
        <div className='page-container workspace-grid-container'>
            <div className='workspace-grid-item-sidebar'>
                <SideNav members={props.members} projects={props.projects}/>
            </div>
            <div className='workspace-grid-item-header'>
                <WorkspaceHeaderNav />
            </div>
            <div className='workspace-grid-item-main'>
                <div onClick={handleLogout} className='btn btn--purple'>LOGOUT</div>
                <WorkspaceHome projects={props.projects} />
            </div>
        </div>
    );
}


export default Workspace;