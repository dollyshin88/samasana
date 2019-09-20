import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { initialsSelector } from '../../../../reducers/selector_util';

const Container = styled.div`
   background-color: lightblue;
   display: flex;
   flex-flow: row nowrap;
   justify-content: center;
   align-items: center;
   margin: 10px 0;
`;

function ProjectBoardDraggableTask(props) {

    //onclick of draggable-task div, openModal with 'edit task', props.task
    function handleTaskModal() {
        props.openModal('edit task', props.task);
    }
    function renderAssignee(){
        if (props.task.assignee_id) {
            const assigneeName = props.members[props.task.assignee_id].name;
            return <div className='user-circle'>{initialsSelector(assigneeName)}</div>;
        } else {
            return <div className='empty-user-circle pushright-10'><img src={window.personIcon}></img></div>;
        }
    }

    return (
    
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    {...provided.dragHandleProps}
                >
                    <div onClick={handleTaskModal} className='draggable-task shadow-std'>
                        <div className='draggable-task__title'>{props.task.name}</div>
                        <div className='draggable-task__details'>
                            {renderAssignee()}
                            
                            <div className='pushright-10 green-date'>{props.task.due_on}</div>
                        </div>

                        {/* <p>id: {props.task.id}</p>
                        <p>draggId: {props.draggableId}</p>
                        <p>order: {props.task.section_order}</p>
                        <p>index: {props.index}</p> */}
                    </div>
                </Container>
            )}
        </Draggable>
    );
}

//may not need to be connected?
const mapStateToProps = (state, ownProps) => ({
    members: state.entities.members,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoardDraggableTask);