import React from 'react';
// import { connect } from 'react-redux';
import WorkspaceHeaderNav from '../../workspace/workspace_header_nav';
import ProjectBoardDndContext from './draganddrop/project_board_dnd_context';

function ProjectViewBoard(props) {

    return (
        <>
        <div className='workspace-grid-item-header'>
            <WorkspaceHeaderNav
                currentUserInitial={props.currentUserInitial}
                currentUserId={props.currentUserId}
                title='Home'
                openModal={props.openModal}
            />
        </div>
        <div className='workspace-grid-item-main'>
            <div className='workspace-home-container'>
                <ProjectBoardDndContext openModal={props.openModal}/>
                {/* pass down tasks and sections and openModal */}
            </div>
        </div>
        </>
    );
}


export default ProjectViewBoard;