import React from 'react';
import HomeProjectList from './home_project_list';
import HomeTaskList from './home_task_list';

function HomeSection (props) {

    let component;
    let sectionTitle;
    // let clickables; bonus scope

    if (props.section === 'tasks') {
        component = <HomeTaskList tasks={props.tasks}/>;
        sectionTitle = 'Tasks Due Soon'; 

    } else {
        component = <HomeProjectList projects={props.projects}/>;
        sectionTitle = 'Recent Projects';
    }

    return (
        <div className='workspace-home-section-container'>
            <div>{sectionTitle}</div>
            {component}
        </div>
    );
}

export default HomeSection;