import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import ProjectBoardDraggableTask from './project_board_draggable_task';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    margin: 20px;
    border: 1px solid lightgray;
    padding: 10px;
    width: 200px;
`;
const TaskListContainer = styled.div`
    flex-grow: 1;
    min-height: 300px;
    display: flex;
    flex-flow: column nowrap
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    width: 100%;

`;
const SectionTitle = styled.div`

`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.tasks === this.props.tasks) {
            return false;
        }
        return true;
    }
    render() {
        return (
            this.props.tasks.map((task, i) => (
                <ProjectBoardDraggableTask 
                    key={task.id} 
                    task={task}
                    index={i}
                    openModal={this.props.openModal}
                />
            ))
            
        );
    }
}
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
                                <InnerList tasks={props.tasks} openModal={props.openModal}/>
                    
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