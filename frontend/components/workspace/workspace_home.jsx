import React from 'react';
import HomeSection from './workspace_home_subcomp/home_section';
import WorkspaceHeaderNav from './workspace_header_nav';

function WorkspaceHome (props) {

    return (
        <>
        <div className='workspace-grid-item-header'>
            <WorkspaceHeaderNav
                currentUserInitial={props.currentUserInitial}
                currentUserId={props.currentUserId}
                title='Home'
                openModal={props.openModal}
                logout={props.logout}
            />
        </div>
        <div className='workspace-grid-item-main'>
            <div className='workspace-home-container'>
                <HomeSection 
                    section='tasks' 
                    tasks={props.tasks} 
                    projects={props.projects}
                    openModal={props.openModal}
                    updateTask={props.updateTask}
                />
                <HomeSection 
                    section='projects' 
                    projectsArr={props.projectsArr} 
                    openModal={props.openModal}
                /> 
            </div>
        </div>
        </>
    );
}

export default WorkspaceHome;