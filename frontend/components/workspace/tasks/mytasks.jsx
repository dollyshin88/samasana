import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import { taskIdsByDateSelector, tasksFromIdsSelector, initialsSelector } from '../../../reducers/selector_util';
import { updateTask } from '../../../actions/task_actions';
import { fetchAllWorkspaces } from '../../../actions/workspace_actions';
import TaskListSection from './task_list_section';
import WorkspaceHeaderNav from '../workspace_header_nav';

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
            <div className='mytasks-all-dnd-buff'>
                <div className='mytasks-all-dnd'>
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
            </div>
        </div>
        </>
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
    currentUser: state.entities.users[state.session.id],
    currentWorkspace: state.entities.currentWorkspace,
    currentUserId: state.session.id,
    currentUserInitial: initialsSelector(state.entities.users[state.session.id].name),
    projects: state.entities.projects,
})};

const mapDispatchToProps = dispatch => ({
    updateTask: task => dispatch(updateTask(task)),
    fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);