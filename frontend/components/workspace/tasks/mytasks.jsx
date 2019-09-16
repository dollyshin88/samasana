import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import { taskIdsByDateSelector, tasksFromIdsSelector } from '../../../reducers/selector_util';
import { updateTask } from '../../../actions/task_actions';
import { fetchAllWorkspaces } from '../../../actions/workspace_actions';
import TaskListSection from './task_list_section';

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

    
    return (
        <div className='mytasks-page-container'>
        <div className='mytasks-all-dnd'>
            <div className='mytasks-dnd'>
                <DragDropContext onDragEnd={onDragEndToday}>
                    <TaskListSection list='Today' tasks={props.todayTasks} />
                </DragDropContext>
            </div>
            <div className='mytasks-dnd'>
                <DragDropContext onDragEnd={onDragEndUpcoming}>
                    <TaskListSection list='Upcoming' tasks={props.upcomingTasks} />
                </DragDropContext>
            </div>
            <div className='mytasks-dnd'>
                <DragDropContext onDragEnd={onDragEndLater}>
                    <TaskListSection list='Later' tasks={props.laterTasks} />
                </DragDropContext>
            </div>
        </div>
        </div>

    );
}

const mapStateToProps = state => {
    let todayTasksIds = [];
    let upcomingTasksIds = [];
    let laterTasksIds = [];
    let todayTasks = [];
    let upcomingTasks = [];
    let laterTasks = [];
    
    if (Object.values(state.entities.tasks).length && Object.values(state.entities.workspaces).length) {
        
        todayTasksIds = taskIdsByDateSelector(state, 'today');
        upcomingTasksIds = taskIdsByDateSelector(state, 'upcoming');
        laterTasksIds = taskIdsByDateSelector(state, 'later');
        todayTasks = tasksFromIdsSelector(state, todayTasksIds);
        upcomingTasks = tasksFromIdsSelector(state, upcomingTasksIds);
        laterTasks = tasksFromIdsSelector(state, laterTasksIds);
    } 
    
    return ({
    todayTasksIds: todayTasksIds,
    upcomingTasksIds: upcomingTasksIds,
    laterTasksIds: laterTasksIds,
    todayTasks: todayTasks,
    upcomingTasks: upcomingTasks,
    laterTasks: laterTasks,
})};

const mapDispatchToProps = dispatch => ({
    updateTask: task => dispatch(updateTask(task)),
    fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);