import React from 'react';

function ProjectNavList(props) {
    
    function handleProjectLink(e, projectId) {
        //redirect to project show page
    }
    
    return (
        <div className='project-list-container'>
            {props.projects.map((project, i) => (
                <div key={project.id} onClick={(e)=>handleProjectLink(e, project.id)} className='project-list-container__item'>
                    <div className='color-bullet'></div>
                    <div className='project-list-container__item-name'>{project.name}</div>
                </div>
            ))}            
        </div>
    );
}

export default ProjectNavList;