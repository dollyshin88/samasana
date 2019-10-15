import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import TaskListSection from './task_list_section';
import WorkspaceHeaderNav from '../workspace_header_nav';
import NewTaskFormContainer from './new_form_container';


class MyTasks extends React.Component {
   constructor(props) {
       
    super(props);
    this.state = { newTask: 'false' };
    this.handleNewTaskClick = this.handleNewTaskClick.bind(this);
    this.onDragEndUpcoming = this.onDragEndUpcoming.bind(this);
    this.onDragEndToday = this.onDragEndToday.bind(this);
    this.onDragEndLater = this.onDragEndLater.bind(this);
   }

    onDragEndToday(result){
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

        const newTaskIds = Array.from(this.props.todayTasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        
        
        const entireArr = newTaskIds.concat(this.props.upcomingTasksIds, this.props.laterTasksIds);
        this.props.receiveOrderedTasks(entireArr, this.props.currentWorkspace.id);
        this.props.updateTaskGeneralOrder(this.props.currentWorkspace.id, entireArr);
        
        return;
    }

    onDragEndUpcoming(result) {
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

        const newTaskIds = Array.from(this.props.upcomingTasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        // newTaskIds.forEach((id, order) => (
        //     this.props.updateTask({ id: id, general_order: order + todayListLength })
        // ));
        // this.props.fetchAllWorkspaces();
        const entireArr = this.props.todayTasksIds.concat(newTaskIds, this.props.laterTasksIds);
        this.props.receiveOrderedTasks(entireArr, this.props.currentWorkspace.id);
        this.props.updateTaskGeneralOrder(this.props.currentWorkspace.id, entireArr);
        

        return;
    }
    onDragEndLater(result) {
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

        const newTaskIds = Array.from(this.props.laterTasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const entireArr = this.props.todayTasksIds.concat(this.props.upcomingTasksIds, newTaskIds);
        this.props.receiveOrderedTasks(entireArr, this.props.currentWorkspace.id);
        this.props.updateTaskGeneralOrder(this.props.currentWorkspace.id, entireArr);
        
        // newTaskIds.forEach((id, order) => (
        //     this.props.updateTask({ id: id, general_order: order + todayListLength + upcomingListLength })
        // ));
        // this.props.fetchAllWorkspaces();

        return;
    }
    //=================================================
    // const [newTask, setNewTask] = useState('false');

    handleNewTaskClick(e) {
        e.preventDefault();
        (this.state.newTask === 'false') ? this.setState({newTask: 'true'}) : this.setState({newTask: 'false'});
    }

    renderNewTaskForm() {
        return (this.state.newTask === 'true') ? (
                <NewTaskFormContainer />
            ) : ( null ) 
    }
    //==================================================
    render() {
        
    return (
        <>
        <div className='workspace-grid-item-header'>
            <WorkspaceHeaderNav
                currentUserInitial={this.props.currentUserInitial}
                currentUserId={this.props.currentUserId}
                title={`${this.props.currentUser.name}'s Tasks - ${this.props.currentWorkspace.name}`}
                openModal={this.props.openModal}
                logout={this.props.logout}
            />
        </div>

        <div className='workspace-grid-item-main mytasks-page'>
            
            {/* <div className='sub-header-nav'>will become a subheader nav</div> */}
            
            <div className='mytasks-all-dnd__buff'>
                <div className='mytasks-all-dnd__main'>
                    <div className='mytasks-all-dnd__header'>
                        <button onClick={this.handleNewTaskClick} className='mytasks-all-dnd__btn'>Add Task</button>
                    </div>
                    <div className='mytasks-dnd'>
                        <DragDropContext onDragEnd={this.onDragEndToday}>
                            <TaskListSection list='Today' tasks={this.props.todayTasks} projects={this.props.projects} openModal={this.props.openModal} updateTask={this.props.updateTask}/>
                        </DragDropContext>
                    </div>
                    <div className='mytasks-dnd'>
                        <DragDropContext onDragEnd={this.onDragEndUpcoming}>
                                <TaskListSection list='Upcoming' tasks={this.props.upcomingTasks} projects={this.props.projects} openModal={this.props.openModal} updateTask={this.props.updateTask}/>
                        </DragDropContext>
                    </div>
                    <div className='mytasks-dnd'>
                        <DragDropContext onDragEnd={this.onDragEndLater}>
                                <TaskListSection list='Later' tasks={this.props.laterTasks} projects={this.props.projects} openModal={this.props.openModal} updateTask={this.props.updateTask}/>
                        </DragDropContext>
                    </div>
                </div>
                <div id='task-form-container'>
                    {this.renderNewTaskForm()}
                </div>
            </div>

        </div>
        </>
    );
    }
}


export default MyTasks;