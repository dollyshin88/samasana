import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    background-color: lightgrey;
    display: flex;
`;
const Handle = styled.div`
    background-color: yellow;
    height: 20px;
    width: 20px;
`;

function TaskItem(props) {
    
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDraggin}
                >
                    <Handle
                        // having  drag handle props in the handle only makes it draggable only from this div
                        {...provided.dragHandleProps}>
                    </Handle>
                        {props.task.name}
                </Container>
            )}
        </Draggable>
    );
}

export default TaskItem;
