import React from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ProjectBoardDraggableSection from './project_board_draggable_section';

const Container = styled.div`
    display: flex;
`;

function ProjectBoardDndContext(props) {
    function onDragEnd(result) {
        const { destination, source, draggableId, type } = result;

        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return; 

        if (type === 'section') {
            const newSectionIds = Array.from(props.sectionIds);
            newSectionIds.splice(source.index, 1);
            newSectionIds.splice(destination.index, 0, draggableId);

            //dispatch actions and update backend
        }

        const startSection = props.sections[source.droppableId];
        const finishSection = props.sections[destination.droppableId];


        //movement inside same section
        if (startSection === finishSection) {
            const newTaskIds = Array.from(startSection.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            
            newTaskIds.forEach((id, order) => (
                props.updateTask({id: id, section_order: order})
            ));

            const entireArr = newTaskIds.concat(props.upcomingTasksIds, props.laterTasksIds);
            props.receiveOrderedTasks(entireArr, props.currentWorkspace.id);

            return;
        }

        //moving from one list to another
        const startSectionTaskIds = Array.from(startSection.taskIds);
        startSectionTaskIds.splice(source.index, 1);
        
        const finishSectionTaskIds = Array.from(finishSection.taskIds);
        finishSectionTaskIds.splice(destination.index, 0, draggableId);
        
        //dispatch actions and update the backend
            // - all of tasks in startSectionTaskIds and finishSectionTaskIds ==> update section_id for the one that moved and section_order for the rest
            // - get two sections' taskIds array updated

    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable 
                droppableId='all-sections'
                direction='horizontal'
                type='section'>
                {provided => (
                    <Container
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {/* sections array need to be ordered */}
                        {props.sections.map(section =>{
                            const tasks = section.taskIds.map((taskId, i) => props.tasks[taskId]);
                            <ProjectBoardDraggableSection 
                                key={section.id}
                                section={section}
                                tasks={tasks} 
                                index={i}
                                openModal={props.openModal}
                            />
                        })}
                    </Container>
                )}
                {provided.placeholder}
            </Droppable>
        </DragDropContext>
    );
}

export default ProjectBoardDndContext;