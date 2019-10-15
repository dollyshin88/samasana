import React, { useState, useEffect } from 'react';


function NewTaskForm (props) {
    let init_taskName = '';
    let init_assignee = 'default';
    let init_notes = '';
    let init_project = 'default';
    let init_dueDate = '';
    const formBtnText = (props.formType === 'new') ? 'Create Task' : 'Update Task';
    if (props.formType === 'edit') {
        init_taskName = props.task.name;
        init_notes = (props.task.notes) ? props.task.notes : '';
        init_dueDate = (props.task.due_on) ? props.task.due_on : '';
        
        if (props.task.assignee_id) {
            init_assignee = props.members.filter(member=> member.id === props.task.assignee_id)[0].name;
        }
        if (props.task.project_id) {
            init_project = props.projects.filter(project=> project.id === props.task.project_id)[0].name;
        }
    }
    
    const [taskName, setTaskName] = useState(init_taskName);
    const [assignee, setAssignee] = useState(init_assignee);
    const [notes, setNotes] = useState(init_notes);
    const [project, setProject] = useState(init_project);
    const [dueDate, setDueDate] = useState(init_dueDate);

    function handleTaskNameChange(e) {
        setTaskName(e.target.value);
    }
    function handleMemberAssign(e){
        setAssignee(e.target.value);
    }
    function handleNotesInput(e) {
        setNotes(e.target.value);
    }
    function handleProjectAssign(e) {
        setProject(e.target.value);
    }
    function handleDueDateChange(e) {
        setDueDate(e.target.value);
    }

    function renderProjectDiv() {
        return (project === 'default') ? (
            null
        ) : (
            <div className='pill-link-container'>
               <div className='pill-link truncate nonclick'>{project}</div>                 
            </div>
        );
    }
    function handleSubmit(e){
        e.preventDefault();
        const newTask = {name: taskName, workspace_id: props.currentWorkspace.id}
        
        if (assignee !== 'default') {
            newTask.assignee_id = props.members.filter(member=> member.name === assignee)[0].id;
        }
        if (project !== 'default') {
            newTask.project_id = props.projects.filter(proj=> proj.name === project)[0].id;
        }
        if (dueDate !== '') {
            newTask.due_on = dueDate;
        }
        props.taskAction(newTask)
        setTaskName('');
        setAssignee('default');
        setNotes('');
        setProject('default');
        setDueDate('');
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
                props.clearTaskErrors();
            };
        }
    }, []);
    
    function renderModalCloseBtn() {
        if (props.modal) {
            return <i className="fas fa-times modal-comp-container__close-btn" onClick={handleModalClose}></i>
        }
    }
    function handleModalClose(e) {
        props.closeModal();
    }

    return (
        <div className='page-container'>
            <div className='mytasks-form-card'>
                {renderModalCloseBtn()}
                <div className='mytasks-form-card__header'>
                    <button onClick={handleSubmit} className='mytasks-form-card__btn'>{formBtnText}</button>
                </div>
                {renderErrors()}
                <div className='mytasks-form-card__form'>
                    <form className='card-form'>
                        <input 
                            value={taskName}
                            onChange={handleTaskNameChange}
                            type="text" 
                            placeholder='Write a task name' 
                            className='invisible-input'
                        />

                        <div className='form-fields-wrap'>
                            <div className='form-field-icon-grouping'>
                                <div className='form-field-icon-absolute-wrap'>
                                    <div className='empty-user-circle form-field-icon'><img src={window.personIcon}></img></div>
                                </div>
                                <select onChange={handleMemberAssign} value={assignee}  className='card-form__input'>
                                    <option value="default" 
                                    >Unassigned</option>
                                    {props.members.map((member, i) => (
                                        <option key={i} value={member.name}>
                                            {member.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='form-field-icon-grouping'>
                                <div className='form-field-icon-absolute-wrap'>
                                    <div className='empty-user-circle form-field-icon'><img className='cal-icon' src={window.calendarIcon}></img></div>
                                </div>
                                <input 
                                    onChange={handleDueDateChange} 
                                    type="date" 
                                    className='card-form__input' 
                                    value={dueDate}
                                />
                            </div>
                        </div>
                        <div className='form-field-icon-flex-grouping'>   
                            
                            <div className='form-field-icon'><img className='paragraph-icon' src={window.paragraphIcon}></img></div>
                                        
                            <textarea 
                                className='card-form__textarea' 
                                onChange={handleNotesInput} 
                                placeholder='Description' 
                                cols="30" rows="8" 
                                value={notes}>
                            </textarea>
                        </div>
                        <div className='card-form__project-wrap'>
                            <div className='form-field-icon-grouping'>
                                    <div className='form-field-icon-absolute-wrap'>
                                        <div className='empty-user-circle form-field-icon'><img className='clipboard-icon' src={window.clipboardIcon}></img></div>
                                    </div>
                                <select 
                                    onChange={handleProjectAssign} 
                                    value={project} 
                                    className='card-form__input card-form__project-wrap__item'>
                                    <option value="default">Add to Project</option>

                                    {props.projects.map((project, i) => (
                                        <option key={i} value={project.name}>
                                            {project.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {renderProjectDiv()}
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}



export default NewTaskForm;
