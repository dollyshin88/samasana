import { connect } from 'react-redux';
import { taskIdsByDateSelector, tasksFromIdsSelector, initialsSelector } from '../../../reducers/selector_util';
import { updateTaskGeneralOrder, updateTask } from '../../../actions/task_actions';
import { receiveOrderedTasks } from '../../../actions/workspace_actions';
import MyTasks from './mytasks';
import { openModal } from '../../../actions/modal_actions';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = state => {
    let todayTasksIds = [];
    let upcomingTasksIds = [];
    let laterTasksIds = [];
    let todayTasks = [];
    let upcomingTasks = [];
    let laterTasks = [];
    
    if (Object.values(state.entities.tasks).length && Object.values(state.entities.workspaces).length) {
        
        todayTasksIds = taskIdsByDateSelector(state, 'today');
        upcomingTasksIds = taskIdsByDateSelector(state, 'upcoming');
        laterTasksIds = taskIdsByDateSelector(state, 'later');
        todayTasks = tasksFromIdsSelector(state, todayTasksIds);
        upcomingTasks = tasksFromIdsSelector(state, upcomingTasksIds);
        laterTasks = tasksFromIdsSelector(state, laterTasksIds);
    } 
    
    return ({
        todayTasksIds: todayTasksIds,
        upcomingTasksIds: upcomingTasksIds,
        laterTasksIds: laterTasksIds,
        todayTasks: todayTasks,
        upcomingTasks: upcomingTasks,
        laterTasks: laterTasks,
        currentUser: state.entities.users[state.session.id],
        currentWorkspace: state.entities.currentWorkspace,
        currentUserId: state.session.id,
        currentUserInitial: initialsSelector(state.entities.users[state.session.id].name),
        projects: state.entities.projects,
})};

const mapDispatchToProps = dispatch => ({
    updateTaskGeneralOrder: (workspaceId, taskIds) => dispatch(updateTaskGeneralOrder(workspaceId, taskIds)),
    receiveOrderedTasks: (taskIdArr, workspaceId) => dispatch(receiveOrderedTasks(taskIdArr, workspaceId)),
    openModal: (contentName, data) => dispatch(openModal(contentName, data)),
    updateTask: task => dispatch(updateTask(task)),
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);