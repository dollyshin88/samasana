import React from 'react';
import SideNav from './workspace_side_nav';
import WorkspaceHome from './workspace_home';
import WorkspaceHeaderNav from './workspace_header_nav';
import { useEffect } from 'react';
import ProjectView from './projects/project_view';
import MyTasks from './tasks/mytasks';


function Workspace(props){
    function handleLogout() {
        props.logout();
    }
    
    // REFACTOR: conditionally render grid item main - workspace container is rendered by ProtectedRoute - this comp has router props - utilize location
    function renderMainComp() {
        
        const projectRegex = new RegExp('\/project\/.*');
        const myTaskRegex = new RegExp('\/mytasks.*');
    
        if (projectRegex.test(props.location.pathname)) {
            
            return (
                <ProjectView />
            );
        
        } else if (myTaskRegex.test(props.location.pathname)) {
            return (
                <MyTasks />
            );
        } else {
            return (
                <WorkspaceHome
                    projects={props.projects}
                    projectsArr={props.projectsArr}
                    tasks={props.tasks}
                    currentUserInitial={props.currentUserInitial}
                    currentUserId={props.currentUserId}
                />
            );
        }

    }

    useEffect(() => {
        props.fetchAllProjects(props.currentWorkspace.id);
        props.fetchAllMembers(props.currentWorkspace.id);
        props.fetchAllTasks(props.currentWorkspace.id);
        props.fetchAllWorkspaces();
        console.log('fetched projects, members, tasks, workspaces');
    }, []);

    // make side nav and workspace home connected components
    return (
        
        <div className='page-container workspace-grid-container'>
            <div className='workspace-grid-item-sidebar'>
                <SideNav members={props.members} projects={props.projectsArr}/>
                <div onClick={handleLogout} className='btn btn--purple'>LOGOUT</div>
            </div>
            
            {renderMainComp()}
            
        </div>
    );
}


export default Workspace;