import React from 'react';
import HomeSection from './workspace_home_subcomp/home_section';


function WorkspaceHome (props) {

    return (
        <div className='workspace-home-container'>
            <HomeSection section='tasks' tasks={props.tasks} />
            <HomeSection section='projects' projects={props.projects} /> 
        </div>
    );
}

export default WorkspaceHome;