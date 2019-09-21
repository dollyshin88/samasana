import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Workspace from './workspace';

import { initialsSelector } from '../../reducers/selector_util';
import { fetchAllWorkspaces, fetchWorkspace } from '../../actions/workspace_actions';
import { updateTask } from '../../actions/task_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
    currentUserId: state.session.id,
    currentUserInitial: initialsSelector(state.entities.users[state.session.id].name),
    workspaces: Object.values(state.entities.workspaces),
    projectsArr: Object.values(state.entities.projects),
    projects: state.entities.projects,
    currentWorkspace: state.entities.currentWorkspace,
    members: Object.values(state.entities.members),
    tasks: Object.values(state.entities.tasks),
})};



const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    updateTask: task => dispatch(updateTask(task)),
    fetchAllWorkspaces: () => dispatch(fetchAllWorkspaces()),
    fetchWorkspace: id => dispatch(fetchWorkspace(id)),
    openModal: (contentName, data) => dispatch(openModal(contentName, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

