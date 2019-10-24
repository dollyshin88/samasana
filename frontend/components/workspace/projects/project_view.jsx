import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectViewBoard from './project_view_board';
import ProjectViewList from './project_view_list';
import { projectTasksSelector, projectSectionsSelector, initialsSelector} from '../../../reducers/selector_util';
import { updateTaskSectionOrder } from '../../../actions/task_actions';
import { receiveOrderedTasksForSection, receiveOrderedTasksTwoSections, updateSectionOrder, updateSection } from '../../../actions/section_actions';
import { receiveSectionIdsUpdate } from '../../../actions/project_actions';
import { logout } from '../../../actions/session_actions';


function ProjectView(props) {
    function renderProjectView(){
        //todo: also send sections and actions down
        if (props.viewType === 'board') {
            return ( 
                <ProjectViewBoard 
                    project={props.project}
                    tasks={props.tasks} 
                    sections={props.sections}
                    openModal={props.openModal}
                    updateSectionOrder={props.updateSectionOrder}
                    updateTaskSectionOrder={props.updateTaskSectionOrder} 
                    receiveOrderedTasksForSection={props.receiveOrderedTasksForSection}
                    receiveOrderedTasksTwoSections={props.receiveOrderedTasksTwoSections}
                    receiveSectionIdsUpdate={props.receiveSectionIdsUpdate}
                    currentUserInitial={props.currentUserInitial}
                    currentUserId={props.currentUserId}
                    updateSection={props.updateSection}
                    logout={props.logout}
                    />
            );
        } else if (props.viewType === 'list') {
            return (
                <ProjectViewList tasks={props.tasks} logout={props.logout}/>
            );
        }
    }
    return (
        <div>
            {renderProjectView()}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const parsedLocation = ownProps.location.pathname.split('/');
    const projectId = parseInt(parsedLocation[3]);
    const viewType = parsedLocation[parsedLocation.length - 1];
    return ({
        project: state.entities.projects[projectId],
        viewType: viewType,
        sections: projectSectionsSelector(state, projectId),
        tasks: projectTasksSelector(state, projectId),
        openModal: ownProps.openModal,
        currentUserInitial: initialsSelector(state.entities.users[state.session.id].name),
        currentUserId: state.session.id,
    })
};

const mapDispatchToProps = dispatch => ({
    //send down update action for tasks and sections for dnd events
    updateSectionOrder: (projectId, sectionIds) => dispatch(updateSectionOrder(projectId, sectionIds)),
    receiveOrderedTasksForSection: (taskIdsArr, sectionId) => dispatch(receiveOrderedTasksForSection(taskIdsArr, sectionId)),
    receiveOrderedTasksTwoSections: (sourceTaskIds, destinationTaskIds, sourceId, destinationId, movedTaskId) => dispatch(receiveOrderedTasksTwoSections(sourceTaskIds, destinationTaskIds, sourceId, destinationId, movedTaskId)),
    updateTaskSectionOrder: updates => dispatch(updateTaskSectionOrder(updates)),
    receiveSectionIdsUpdate: (projectId, sectionIds) => dispatch(receiveSectionIdsUpdate(projectId, sectionIds)),
    updateSection: section => dispatch(updateSection(section)),
    logout: () => dispatch(logout()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectView));