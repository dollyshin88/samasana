import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Workspace from './workspace';
import { fetchAllMembers } from '../../actions/member_actions';
import { fetchAllProjects } from '../../actions/project_actions';
import { fetchAllTasks } from '../../actions/task_actions';
import { initialsSelector } from '../../reducers/selector_util';

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    currentUserInitial: initialsSelector(state.entities.users[state.session.id].name),
    workspaces: Object.values(state.entities.workspaces),
    projects: Object.values(state.entities.projects),
    currentWorkspace: state.entities.currentWorkspace,
    members: Object.values(state.entities.members),
    tasks: Object.values(state.entities.tasks),
});



const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllProjects: workspace_id => dispatch(fetchAllProjects(workspace_id)),
    fetchAllMembers: workspace_id => dispatch(fetchAllMembers(workspace_id)),
    fetchAllTasks: workspace_id => dispatch(fetchAllTasks(workspace_id)),
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

