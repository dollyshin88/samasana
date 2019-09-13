import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Workspace from './workspace';

const mapStateToProps = state => ({
    currentUserId: state.session.currenUserId,
    workspaces: Object.values(state.entities.workspaces),
    
    currentWorkspace: state.entities.currentWorkspace,
    
});
// note: perhaps better to only send currentworkspace and current userID and make subcomponents connected comp so they get their own props


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllProjects: workspace_id => dispatch(fetchAllProjects(workspace_id)),

    //eventually send down actions to fetch projects and tasks data
});
export default connect(mapStateToProps, mapDispatchToProps)(Workspace);

