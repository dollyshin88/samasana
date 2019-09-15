import React from 'react';
import { Link } from 'react-router-dom';

function ProjectNavList(props) {
   
    return (
        <div className='project-list-container'>
            {props.projects.map((project, i) => (
                <Link to={`/project/${project.id}/board`} key={project.id}>
                    <div className='project-list-container__item clickable'>
                        
                            <div className='color-bullet'></div>
                            <div className='project-list-container__item-name'>{project.name}</div>
                        
                        {/* <MiniProjMenu /> //need to stop propagation in this comp click*/}
                    </div>
                </Link>
            ))}            
        </div>
    );
}

export default ProjectNavList;