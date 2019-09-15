import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../../actions/project_actions';


//this component is wrapped in router and has router props
function NewProjectForm(props) {
    const [projectName, setProjectName] = useState('');

    function handleSubmitProject(e) {
        e.preventDefault();
        props.createProject({ name: projectName, workspace_id: props.currentWorkspaceId })
            .then(action => props.history.push(`/project/${Object.keys(action.payload.project)[0]}/board`));
    }

    function handleProjectNameChange(e) {
        setProjectName(e.target.value);
    }
    //todo: rename the .signup-container into more generic container
    return(
        <div className='page-container'>
            <div className='signup-container'>
                <div className='signup-container__header'>Add Project Details</div>
                <form onSubmit={handleSubmitProject} className='form'>
                    <label className='form__label' htmlFor='template'>Template</label>
                    <div id='template' className='bullet-item'>
                        <div className='color-bullet'></div>
                        <div className='bullet-item__text'>Software Engineering</div>
                    </div>

                    <label className='form__label' htmlFor="name">Project Name</label>
                    <input className='form__input' type="text" id='name' onChange={handleProjectNameChange} value={projectName}/>
                    <button className='form__btn form__btn--blue'>Create Project</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentWorkspaceId: state.entities.currentWorkspace.id,
});

const mapDispatchToProps = dispatch => ({
    createProject: project => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);