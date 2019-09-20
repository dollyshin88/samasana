import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import TaskItem from './task_item';

const TaskList = styled.div`
    padding: 8px;
`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) {
            return false;
        }
        return true;
    }
    render() {
        
        return this.props.tasks.map((task, i) => (
                <TaskItem key={task.id} task={task} index={i} projects={this.props.projects} openModal={this.props.openModal} updateTask={this.props.updateTask}/>
            ));
    }
}

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
                        <InnerList tasks={props.tasks} projects={props.projects} openModal={props.openModal} updateTask={props.updateTask}/>
                        {provided.placeholder}
                    </TaskList>

                )}
            </Droppable>
        </div>
    );
}

export default TaskListSection;