import React from 'react';
import SideNav from './workspace_side_nav';
import WorkspaceHome from './workspace_home';
import WorkspaceHeaderNav from './workspace_header_nav';
import { useEffect } from 'react';

function Workspace(props){
    function handleLogout() {
        props.logout();
    }

    // REFACTOR: conditionally render grid item main - workspace container is rendered by ProtectedRoute - this comp has router props - utilize location

    useEffect(() => {
        props.fetchAllProjects(props.currentWorkspace.id);
        props.fetchAllMembers(props.currentWorkspace.id);
        props.fetchAllTasks(props.currentWorkspace.id);
        //fetch all tasks and workspace members
    }, []);

    // make side nav and workspace home connected components
    return (
        
        <div className='page-container workspace-grid-container'>
            <div className='workspace-grid-item-sidebar'>
                <SideNav members={props.members} projects={props.projects}/>
                <div onClick={handleLogout} className='btn btn--purple'>LOGOUT</div>
            </div>
            <div className='workspace-grid-item-header'>
                <WorkspaceHeaderNav />
            </div>
            <div className='workspace-grid-item-main'>
                
                <WorkspaceHome projects={props.projects} tasks={props.tasks} />
            </div>
        </div>
    );
}


export default Workspace;