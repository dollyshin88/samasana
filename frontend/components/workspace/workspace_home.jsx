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
            />
        </div>
        <div className='workspace-grid-item-main'>
            <div className='workspace-home-container'>
                <HomeSection section='tasks' tasks={props.tasks} projects={props.projects}/>
                <HomeSection section='projects' projectsArr={props.projectsArr} /> 
            </div>
        </div>
        </>
    );
}

export default WorkspaceHome;