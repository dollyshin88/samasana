import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import ProjectBoardDraggableTask from './project_board_draggable_task';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    margin: 15px 0px;
    
    min-width: 280px;
    background-color: transparent;
  
    height: 85vh;
`;
const TaskListContainer = styled.div`
    flex-grow: 1;
    min-height: 300px;
    display: flex;
    flex-flow: column nowrap
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
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
    const [sectionTitle, setSecitonTitle] = useState(props.section.name);
    

    //future
    // function handleSectionTitleChange(e){
    //     setSecitonTitle(e.target.value);
    //     props.updateSection({ id: props.section.id, name: sectionTitle });
    // }
    // <input onKeyUp={handleSectionTitleChange} type="text" value={sectionTitle}/>
    function handleNewTaskForSection() {

        const task = { name: '', notes: '', dueDate: '', section_id: props.section.id, project_id: props.project.id, completed: false };
        props.openModal('new task', task);
    }
    return( 
        
        <Draggable draggableId={props.section.id} index={props.index}>
            {provided => (
                <div className='board-section-container'>
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className='section-title-wrap'>
                        <SectionTitle {...provided.dragHandleProps}>
                            {props.section.name}
                        </SectionTitle>
                    </div>
                    <div onClick={handleNewTaskForSection} className='section-task-add shadow-std clickable'>+</div>
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
                </div>
            )}
        </Draggable>
    );
}

export default ProjectBoardDraggableSection;