import React from 'react';
import HomeProjectList from './home_project_list';
import HomeTaskList from './home_task_list';

function HomeSection (props) {

    let component;
    let sectionTitle;
    // let clickables; bonus scope

    if (props.section === 'tasks') {
        component = <HomeTaskList 
                        tasks={props.tasks} 
                        projects={props.projects}
                        openModal={props.openModal}
                        updateTask={props.updateTask}
                    />;
        sectionTitle = 'Tasks Due Soon'; 

    } else {
        component = <HomeProjectList 
                        projectsArr={props.projectsArr} 
                        openModal={props.openModal} 
                    />;
        sectionTitle = 'Recent Projects';
    }

    return (
        <div className='home-section'>
            <div className='home-section__title'>{sectionTitle}</div>
            {component}
        </div>
    );
}

export default HomeSection;