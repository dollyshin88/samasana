import React from 'react';
import SideNav from './workspace_side_nav';
import WorkspaceHome from './workspace_home';
import WorkspaceHeaderNav from './workspace_header_nav';
import { useEffect } from 'react';
//create and import workspace project view and mytask view

function Workspace(props){
    function handleLogout() {
        props.logout();
    }

    // REFACTOR: conditionally render grid item main - workspace container is rendered by ProtectedRoute - this comp has router props - utilize location
    let mainComp =<div></div>;
    switch (props.location.pathname) {
        case '/projects':
            mainComp = <WorkapceProject />;
            break;
        default:
            mainComp = <WorkspaceHome 
                            projects={props.projects} 
                            tasks={props.tasks} 
                        />;
            
            break;
    }

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
            
            <WorkspaceHome 
                projects={props.projects} 
                tasks={props.tasks} 
                currentUserInitial={props.currentUserInitial}
                currentUserId={props.currentUserId}
            />
            
        </div>
    );
}


export default Workspace;