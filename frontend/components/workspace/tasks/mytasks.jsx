import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import TaskListSection from './task_list_section';
import WorkspaceHeaderNav from '../workspace_header_nav';
import NewTaskForm from './new_task_form';


function MyTasks(props) {

    let todayListLength = props.todayTasks.length;
    let upcomingListLength = props.upcomingTasks.length;
    // let laterListLength = props.laterTasks.length;

    function onDragEndToday(result){
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
    
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newTaskIds = Array.from(props.todayTasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        
        newTaskIds.forEach((id, order) => (
            props.updateTask({id: id, general_order: order})
        ));
        props.fetchAllWorkspaces();

        return;
    }
    function onDragEndUpcoming(result) {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newTaskIds = Array.from(props.upcomingTasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        newTaskIds.forEach((id, order) => (
            props.updateTask({ id: id, general_order: order + todayListLength })
        ));
        props.fetchAllWorkspaces();

        return;
    }
    function onDragEndLater(result) {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const newTaskIds = Array.from(props.laterTasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        newTaskIds.forEach((id, order) => (
            props.updateTask({ id: id, general_order: order + todayListLength + upcomingListLength })
        ));
        props.fetchAllWorkspaces();

        return;
    }
    //=================================================
    const [newTask, setNewTask] = useState('false');

    function handleNewTaskClick(e) {
        e.preventDefault();
        (newTask === 'false') ? setNewTask('true') : setNewTask('false');
    }

    function renderNewTaskForm() {
        return (newTask === 'true') ? (
                <NewTaskForm />
            ) : ( null ) 
    }
    //==================================================
    
    return (
        <>
        <div className='workspace-grid-item-header'>
            <WorkspaceHeaderNav
                currentUserInitial={props.currentUserInitial}
                currentUserId={props.currentUserId}
                title={`${props.currentUser.name}'s Tasks - ${props.currentWorkspace.name}`}
            />
        </div>

        <div className='workspace-grid-item-main mytasks-page'>
            
            <div className='sub-header-nav'>will become a subheader nav</div>
            
            <div className='mytasks-all-dnd__buff'>
                <div className='mytasks-all-dnd__main'>
                    <div className='mytasks-all-dnd__header'>
                        <button onClick={handleNewTaskClick} className='mytasks-all-dnd__btn'>Add Task</button>
                    </div>
                    <div className='mytasks-dnd'>
                        <DragDropContext onDragEnd={onDragEndToday}>
                            <TaskListSection list='Today' tasks={props.todayTasks} projects={props.projects}/>
                        </DragDropContext>
                    </div>
                    <div className='mytasks-dnd'>
                        <DragDropContext onDragEnd={onDragEndUpcoming}>
                                <TaskListSection list='Upcoming' tasks={props.upcomingTasks} projects={props.projects}/>
                        </DragDropContext>
                    </div>
                    <div className='mytasks-dnd'>
                        <DragDropContext onDragEnd={onDragEndLater}>
                                <TaskListSection list='Later' tasks={props.laterTasks} projects={props.projects}/>
                        </DragDropContext>
                    </div>
                </div>
                {renderNewTaskForm()}
            </div>

        </div>
        </>
    );
}


export default MyTasks;