import React from 'react';
import HomeSection from './workspace_home_subcomp/home_section';


function WorkspaceHome (props) {

    return (
        <div className='workspace-home-container'>
    
            <div className='workspace-home-section-container'>
                <p>Task due soon section</p>
                <HomeSection section='tasks' tasks={props.tasks} />
            </div>
            <div className='workspace-home-section-container'>
                <p>Recent projects section</p>
                <HomeSection section='projects' projects={props.projects} /> 
            </div>

        </div>
    );
}

export default WorkspaceHome;