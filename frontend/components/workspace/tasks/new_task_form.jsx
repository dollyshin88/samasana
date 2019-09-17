import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../../actions/task_actions';

function NewTaskForm (props) {
    const [taskName, setTaskName] = useState('');
    const [assignee, setAssignee] = useState('default');
    const [notes, setNotes] = useState('');
    const [project, setProject] = useState('default');
    const [dueDate, setDueDate] = useState('');

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
               <div className='pill-link truncate'>{project}</div>                 
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
        if (project !== 'default') {
            newTask.due_on = dueDate;
        }
        debugger
        // if (project !== 'default') {
        //     newTask[notes] = notes;
        // } need to update the backend table
        props.createTask(newTask)
    }
    return (
        <div className='mytasks-form-card'>
            <div className='mytasks-form-card__header'>
                <button onClick={handleSubmit} className='mytasks-form-card__btn'>Create Task</button>
            </div>

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
                        <select onChange={handleMemberAssign} value={assignee}  className='card-form__input'>
                            <option value="default" 
                                    // disabled={assignee === ''}
                                    // selected={assignee === ''}
                                    // hidden={assignee === ''}
                            >Unassigned</option>
                            {props.members.map((member, i) => (
                                <option key={i} value={member.name}>
                                    {member.name}
                                </option>
                            ))}
                            
                        </select>
                        <input 
                            onChange={handleDueDateChange} 
                            type="date" 
                            className='card-form__input' 
                            value={dueDate}
                        />
                    </div>

                    <textarea 
                        className='card-form__textarea' 
                        onChange={handleNotesInput} 
                        placeholder='Description' 
                        cols="30" rows="8" 
                        value={notes}>
                    </textarea>
                    
                    <div className='card-form__project-wrap'>
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
                        {renderProjectDiv()}
                    </div>
                </form>
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    members: Object.values(state.entities.members),
    projects: Object.values(state.entities.projects),
    currentWorkspace: state.entities.currentWorkspace,
});

const mapDispatchToProps = dispatch => ({
    createTask: task => dispatch(createTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);