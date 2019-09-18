import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import ProjectBoardDraggableTask from './project_board_draggable_task';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
const TaskListContainer = styled.div`
    flex-grow: 1;
    min-height: 300px;
`;
const SectionTitle = styled.div`

`;
function ProjectBoardDraggableSection(props){

    return( 
        <Draggable draggableId={props.section.id} index={props.index}>
            {provided => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <SectionTitle {...provided.dragHandleProps}>            {props.section.name}
                    </SectionTitle>

                    <Droppable droppableId={props.section.id} type='task'>
                        {(provided, snapshot) => (
                            <TaskListContainer
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, i) => (
                                    <ProjectBoardDraggableTask 
                                        key={task.id} 
                                        task={task}
                                        index={i}
                                        openModal={props.openModal}
                                    />
                                ))}
                                {provided.placeholder}
                            </TaskListContainer>
                        )}
                    </Droppable>
                </Container>
            )}
        </Draggable>
    );
}

export default ProjectBoardDraggableSection;