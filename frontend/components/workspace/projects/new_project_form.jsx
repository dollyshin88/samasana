import React, { useState, useEffect } from 'react';



//this component is wrapped in router and has router props
function NewProjectForm(props) {
    const [projectName, setProjectName] = useState(props.project.name);
    const [projectNotes, setProjectNotes] = useState(props.project.notes);
    
    const formHeaderText = (props.formType === 'new') ? 'Add Project Details' : 'Edit Project Details';
    const formButtonText = (props.formType === 'new') ? 'Create Project' : 'Update Project';

    function handleSubmitProject(e) {
        e.preventDefault();
 
        const thisProject = Object.assign(props.project);
        thisProject.name = projectName;
        thisProject.notes = projectNotes;
        
        if (props.formType === 'new') {
            props.projectAction(thisProject)
                .then(action => {
                    
                    props.closeModal();
                    props.history.push(`/workspace/project/${Object.keys(action.payload.project)[0]}/board`);
                }); 
        } else {
            props.projectAction(thisProject)
                .then(action => {
                    props.closeModal();
                }); 
        }
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
            <div onClick={e => e.stopPropagation()} id='project-form-container' className='modal-comp-container'>
            <i className="fas fa-times modal-comp-container__close-btn" onClick={handleModalClose}></i>
                <div className='modal-comp-container__header'>{formHeaderText}</div>
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
                        <input 
                            className='project-form__input' 
                            type="text" 
                            id='name' 
                            onChange={handleProjectNameChange} 
                            value={projectName}
                        />
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
                    <button className='project-form__btn project-form__btn--blue'>{formButtonText}</button>
                </form>
            </div>
        </div>
    );
}



export default NewProjectForm;