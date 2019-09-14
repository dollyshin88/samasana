import React from 'react';

function ProjectNavList(props) {
    //need array of projects
    return (
        <div className='project-list-container'>
            {/* {props.projects.map((project, i) => (
                <div key={i}>{project.name}</div>
            ))} */}
            <div className='project-list-container__item'>
                <div className='color-bullet'></div>
                <div className='project-list-container__item-name'>Samasana</div>
            </div>
            <div className='project-list-container__item'>
                <div className='color-bullet'></div>
                <div className='project-list-container__item-name'>Asana Basic Training</div>
            </div>
            
    
        </div>
    );
}

export default ProjectNavList;