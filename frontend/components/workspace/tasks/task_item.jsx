import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import EditTaskFormContainer from '../tasks/edit_form_container';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Container = styled.div`
   
`;
const Handle = styled.div`
    display: flex;
    justify-content: center;
    :hover img.dragHandleIcon {
        opacity: 1;
        transition: opacity 0.2s ease-in;
    }
`;


function TaskItem(props) {

    function renderProjectPillLink() {
        return (Object.values(props.projects).length && props.projects[props.task.project_id]) ? (
            <Link to={`/project/${props.task.project_id}/board`} className='pill-link truncate'>{props.projects[props.task.project_id].name}</Link>
            
        ) : (<></>)
    }

    function handleTaskModal() {
        props.openModal('edit task', props.task)
    }
    // const [editTask, setEditTask] = useState('false');

    // function handleEditTaskClick(e) {
    //     e.preventDefault();
    //     (editTask === 'false') ? setEditTask('true') : setEditTask('false');
        
    //         renderEditTaskForm();
        
    //     //append the container to the div with id = mytasks-all-dnd__buff
    // }

    // function renderEditTaskForm() {
    //     const location = document.getElementById('task-form-container');

    //     if (editTask === 'true') {
    //         ReactDOM.render(
    //             <EditTaskFormContainer task={props.task}/>,
    //             location 
    //         )
    //     } else {
    //         ReactDOM.render(
    //             <div></div>,
    //             location 
    //         )
    //     }
    // }

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                > 
                    <div className='task-row zero-pad'>
                        <Handle
                            {...provided.dragHandleProps}>
                                <img className='dragHandleIcon' src={window.dragHandleIconURL} alt=""/>
                        </Handle>
                        <div onClick={handleTaskModal} className='task-row__main clickable'>
                            <div className='checkbox-circle'>
                                <i className="fas fa-check fa-xs"></i>
                            </div>
                            <div className='task-row__main__text'>{props.task.name}</div>
                        </div>
                        <div className='task-row__aside'>
                            <div className='pill-link-container'>
                                {renderProjectPillLink()}
                            </div>
                            <div className='task-due-text'>{props.task.due_on}</div>
                        </div>
                    </div>
                    <div className='task-divider'></div>
                </Container>
            )}
        </Draggable>
    );
}

export default TaskItem;
