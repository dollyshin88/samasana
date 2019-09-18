import React from 'react';
import SideNav from './workspace_side_nav';
import WorkspaceHome from './workspace_home';
import { useEffect } from 'react';
import ProjectView from './projects/project_view';
import MyTasksContainer from './tasks/mytask_container';


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
                <ProjectView openModal={props.openModal} />
            );
        
        } else if (myTaskRegex.test(props.location.pathname)) {
            return (
                <MyTasksContainer />
            );
        } else {
            return (
                <WorkspaceHome
                    projects={props.projects}
                    projectsArr={props.projectsArr}
                    tasks={props.tasks}
                    currentUserInitial={props.currentUserInitial}
                    currentUserId={props.currentUserId}
                    openModal={props.openModal}
                />
            );
        }

    }

    useEffect(() => {
        props.fetchAllWorkspaces();
        props.fetchWorkspace(props.currentWorkspace.id);
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