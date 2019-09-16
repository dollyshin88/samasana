import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import TaskItem from './task_item';

const TaskList = styled.div`
    padding: 8px;
`;


function TaskListSection(props) {
    
    return (
        <div className='task-list-section'>
            <div className='task-list-section__title'>{props.list}</div>
            <Droppable droppableId={props.list}>
                {provided => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.tasks.map((task, i) => (
                            <TaskItem key={task.id} task={task} index={i}/>
                        ))}
                        {provided.placeholder}
                    </TaskList>

                )}
            </Droppable>
        </div>
    );
}

export default TaskListSection;