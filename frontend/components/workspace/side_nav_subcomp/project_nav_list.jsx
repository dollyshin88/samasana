import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/project_actions';
import { openModal } from '../../../actions/modal_actions';

function ProjectNavList(props) {

    function toggleDropdown(e, i){
        e.stopPropagation();
        const dropdown = document.getElementById(`sidenav-mininav-dropdown-${i}`);
        dropdown.classList.toggle('hidden');
    }

    function handleProjectShowRouting(project) {
        props.history.push(`/workspace/project/${project.id}/board`);
    }
    function handleRemoveProject(project) {
        props.deleteProject(project);
    }
    function handleEditProject(project) {
        props.openModal('edit project',  project);
    }

    return (
        <div className='project-list-container'>
            {props.projects.map((project, i) => (
                <div key={i} onClick={() => handleProjectShowRouting(project)}>
                    <div className='project-list-container__item clickable'>

                        <div className='project-list-container__item-wrap'>
                            <div className='color-bullet'></div>
                            <div className='project-list-container__item-name'>{project.name}</div>
                        </div>

                        <div onClick={(e) => toggleDropdown(e, i)} className='project-list__mininav-btn menu-btn'>
                            <div className='project-list__mininav'>...</div>
                            <div id={`sidenav-mininav-dropdown-${i}`} className='mininav-dropdown side menu hidden'>
                                <div className='mininav-dropdown__item-wrap'>
                                    <div className='mininav-dropdown__item' onClick={() => handleEditProject(project)}>Edit Project Detail</div>
                                </div>
                                <div className='mininav-dropdown__item-wrap'>
                                    <div className='mininav-dropdown__item' onClick={() => handleRemoveProject(project)}>Remove Project</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            ))}            
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteProject: project => dispatch(deleteProject(project)), 
    openModal: (contentName, data) => dispatch(openModal(contentName, data)),
});

export default withRouter(connect(null, mapDispatchToProps)(ProjectNavList));