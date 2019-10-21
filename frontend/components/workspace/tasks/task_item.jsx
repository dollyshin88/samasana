import React, { useState, useEffect } from 'react';
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
            <Link to={`/workspace/project/${props.task.project_id}/board`} className='pill-link truncate'>{props.projects[props.task.project_id].name}</Link>
            
        ) : (<></>)
    }

    function handleTaskModal() {
        props.openModal('edit task', props.task)
    }

    useEffect(() => {
        setTaskStatus(props.task.completed)
    }, [props.task])
    const [taskStatus, setTaskStatus] = useState(props.task.completed);

    function renderCheckbox(){
        const cssStyle = (taskStatus) ? 'checkbox-circle checkbox-green' : 'checkbox-circle';
        return (
            <div onClick={handleCheckboxClick} id={`checkbox-circle-${props.task.id}`} className={cssStyle}>
                <i className="fas fa-check fa-xs"></i>
            </div>
            )
    }

    function handleCheckboxClick(e) {
        
        e.stopPropagation();
        const checkbox = document.getElementById(`checkbox-circle-${props.task.id}`);
        checkbox.classList.toggle('checkbox-green');
        console.log(taskStatus);
        const newStat = (taskStatus === true) ? false : true;
        // console.log(newStat);
        // setTaskStatus(newStat);
        // console.log(taskStatus);
        props.updateTask({ id: props.task.id, completed: newStat })
       
    }

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
                            {renderCheckbox()}
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
