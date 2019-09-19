import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ProjectBoardDraggableSection from './project_board_draggable_section';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    padding: 30px;
    width: 100%;
    overflow: scroll;
    
`;
class InnerSectionList extends React.Component{
    componenetShouldUpdate(nextProps) {
        if (nextProps.section.taskId === this.props.section.taskId) {
            return false;
        }
        return true;
    }
    render() {
        // const { section, tasks, index, openModal } = this.props;
        const tasks = this.props.section.taskIds.map(taskId => this.props.tasks[taskId]) 
        return <ProjectBoardDraggableSection section={this.props.section} tasks={tasks} index={this.props.index} openModal={this.props.openModal} />;
        
    }
}



function ProjectBoardDndContext(props) {
    function onDragEnd(result) {
        
        const { destination, source, draggableId, type } = result;

        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) { 
            return; 
        }

        if (type === 'section') {
            
            const newSectionIds = Array.from(props.project.sectionIds);
            
            newSectionIds.splice(source.index, 1);
            newSectionIds.splice(destination.index, 0, draggableId);
            
            //frontend-only action
            props.receiveSectionIdsUpdate(props.project.id, newSectionIds);
            //dispatch actions and update backend
            props.updateSectionOrder(props.project.id, newSectionIds);
            
            return;
        }

        const startSection = props.sections[source.droppableId];
        const finishSection = props.sections[destination.droppableId];


        //movement inside same section === currently unable to handle in the backend
        // if (startSection === finishSection) {
        //     const newTaskIds = Array.from(startSection.taskIds);
        //     newTaskIds.splice(source.index, 1);
        //     newTaskIds.splice(destination.index, 0, draggableId);  
        //     return;
        // }
        //========================================================================
        //moving within a seciton
        if (startSection === finishSection) {
            const newTaskIds = Array.from(startSection.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);  
            const updates = {
                source: {id: source.droppableId, taskIds: newTaskIds},
                destination: {id: destination.droppableId, taskIds: newTaskIds}
            };
            props.receiveOrderedTasksForSection(newTaskIds, startSection.id);
            props.updateTaskSectionOrder(updates);
            return;
        }
        //moving from one section to another
        const startSectionTaskIds = Array.from(startSection.taskIds);
        startSectionTaskIds.splice(source.index, 1);
        
        const finishSectionTaskIds = Array.from(finishSection.taskIds);
        finishSectionTaskIds.splice(destination.index, 0, draggableId);
        
        const updates = {
            source: {id: source.droppableId, taskIds: startSectionTaskIds},
            destination: {id: destination.droppableId, taskIds: finishSectionTaskIds}
        };
        props.receiveOrderedTasksTwoSections(startSectionTaskIds, finishSectionTaskIds, startSection.id, finishSection.id, draggableId);
        props.updateTaskSectionOrder(updates);
        return;
    }  

    function renderBoard() {
        return (
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable 
                    droppableId='all-sections'
                    direction='horizontal'
                    type='section'>
                    {provided => (
    
                        <Container
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                        {(props.project) ? (
                            props.project.sectionIds.map((sectionId, i) => {
                                const section = props.sections[sectionId];
                                return (
                                    <InnerSectionList 
                                    key={sectionId}
                                    section={section}
                                    tasks={props.tasks} 
                                    index={i}
                                    openModal={props.openModal}
                                    />
                                )
                            })
                        ) : (<></>)}
                        
                        {provided.placeholder}
                        </Container>
                    )}
                    
                </Droppable>
            </DragDropContext>
            ) 
    }

    return (
        <>
        {renderBoard()}
        </>
    );
}

export default ProjectBoardDndContext;