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
                    logout={props.logout}
                    updateTask={props.updateTask}
                />
            );
        }

    }

    useEffect(() => {
        props.fetchAllWorkspaces();
        const sessionRegex = new RegExp('\/setup.*');
        if (!sessionRegex.test(props.location.pathname)) {
            
            props.fetchWorkspace(props.currentWorkspace.id);
        }

    }, []);

    function renderScriptTag(){
        return (<script>
            {window.setTimeout(() => {
                const menus = document.querySelectorAll('.menu');
                
                document.addEventListener('click', (e) => {
                    let children = e.target.parentElement.children;
                    children = Array.from(children);
                    if (children.some((child) => child.classList.contains('menu'))) return;
                    if(e.target.closest('.menu')) return;
                
                    menus.forEach(menu => {
                        if (!menu.classList.contains('hidden')) {
                            menu.classList.add('hidden');
                        }
                    });
                });
            }, 2000)}
        </script>)
    }

    // make side nav and workspace home connected components
    return (
        
        <div className='page-container workspace-grid-container'>
            {renderScriptTag()}
            <div className='workspace-grid-item-sidebar'>
                <SideNav members={props.members} projects={props.projectsArr}/>
                <div onClick={handleLogout} className='btn btn--purple'>LOGOUT</div>
            </div>
            
            {renderMainComp()}
            
        </div>
    );
}


export default Workspace;