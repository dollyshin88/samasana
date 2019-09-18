import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
   
`;

function ProjectBoardDraggableTask(props) {

    //onclick of draggable-task div, openModal with 'edit task', props.task

    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    {...provided.dragHandleProps}
                >
                    <div className='draggable-task'>
                        {task.name}
                    </div>
                </Container>
            )}
        </Draggable>
    );
}

//may not need to be connected?
const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoardDraggableTask);