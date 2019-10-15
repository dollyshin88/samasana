import React from 'react';
// import { connect } from 'react-redux';
import WorkspaceHeaderNav from '../../workspace/workspace_header_nav';
import ProjectBoardDndContext from './draganddrop/project_board_dnd_context';

function ProjectViewBoard(props) {
    const projectName = (props.project) ? props.project.name : ''
    return (
        <>
        <div className='workspace-grid-item-header board-view-header'>
            <WorkspaceHeaderNav
                currentUserInitial={props.currentUserInitial}
                currentUserId={props.currentUserId}
                title={projectName}
                openModal={props.openModal}
                logout={props.logout}
            />
        </div>
        <div className='workspace-grid-item-main'>
            <div className='workspace-home-container'>
                <ProjectBoardDndContext 
                openModal={props.openModal}
                project={props.project}
                tasks={props.tasks}
                sections={props.sections}
                updateSectionOrder={props.updateSectionOrder}
                updateTaskSectionOrder={props.updateTaskSectionOrder}
                receiveOrderedTasksForSection={props.receiveOrderedTasksForSection}receiveOrderedTasksTwoSections={props.receiveOrderedTasksTwoSections}
                receiveSectionIdsUpdate={props.receiveSectionIdsUpdate}
                updateSection={props.updateSection}
                />
                {/* pass down tasks and sections and openModal */}
            </div>
        </div>
        </>
    );
}


export default ProjectViewBoard;