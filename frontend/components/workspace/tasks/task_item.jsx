import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

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
            <div className='pill-link truncate'>{props.projects[props.task.project_id].name}</div>
        ) : (<></>)
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
                        <div className='task-row__main'>
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
