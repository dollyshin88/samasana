import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../../actions/project_actions';


//this component is wrapped in router and has router props
function NewProjectForm(props) {
    const [projectName, setProjectName] = useState('');
    const [projectNotes, setProjectNotes] = useState('');
    
    function handleSubmitProject(e) {
        e.preventDefault();
        const newProject = { name: projectName, workspace_id: props.currentWorkspaceId };
        if (projectNotes !== '') {
            newProject.notes = projectNotes;
        }
        props.createProject(newProject)
            .then(action => {
                props.closeModal();
                props.history.push(`/project/${Object.keys(action.payload.project)[0]}/board`);
            });
            
    }

    function handleProjectNameChange(e) {
        setProjectName(e.target.value);
    }
    function handleProjectNotesChange(e) {
        setProjectNotes(e.target.value);
    }
    function handleModalClose(e) {
        props.closeModal();
    }

    function renderErrors() {
        if (props.errors.length) {
            return ( props.errors.map((error, i) => (
                <div key={i} className='project-form__msg--red'>{error}</div>
            )))
        }
    }
    useEffect(() => {
        if (props.errors.length) {
            return () => {
                props.clearProjectErrors();
            };
        }
    }, []);
 
    return(
        <div className='page-container'>
            <div id='project-form-container' className='modal-comp-container'>
            <i className="fas fa-times modal-comp-container__close-btn" onClick={handleModalClose}></i>
                <div className='modal-comp-container__header'>Add Project Details</div>
                {renderErrors()}
                <form onSubmit={handleSubmitProject} className='project-form'>
                    <div className='form-item-wrap'>
                        <label className='project-form__label' htmlFor='template'>Template</label>
                        <div id='template' className='bullet-item pushup-15'>
                            <div className='color-bullet'></div>
                            <div className='bullet-item__text'>Software Engineering</div>
                        </div>
                    </div>
                    <div className='form-item-wrap'>
                        <label className='project-form__label' htmlFor="name">Project Name</label>
                        <input className='project-form__input' type="text" id='name' onChange={handleProjectNameChange} value={projectName}/>
                    </div>
                    <div className='form-item-wrap'>
                        <label className='project-form__label' htmlFor="description">Project Description</label>
                        <textarea 
                            onChange={handleProjectNotesChange}
                            className='project-form__textarea' 
                            id="description" 
                            cols="30" rows="7"
                            value={projectNotes}>
                        </textarea>
                    </div>
                    <button className='project-form__btn project-form__btn--blue'>Create Project</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    currentWorkspaceId: state.entities.currentWorkspace.id,
    closeModal: ownProps.closeModal,
    errors: state.errors.project,
});

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProjectForm));