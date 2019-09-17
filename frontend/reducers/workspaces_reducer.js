import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_WORKSPACE, RECEIVE_ALL_WORKSPACES, RECEIVE_ORDERED_TASKS } from '../actions/workspace_actions';
import { RECEIVE_TASK } from '../actions/task_actions';


const workspacesReducer = (state={}, action) => {
    Object.freeze(state);
   
    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return {};

        case RECEIVE_NEW_WORKSPACE:
            return action.payload.workspaces;

        case RECEIVE_ALL_WORKSPACES:
            return action.workspaces;
        // case RECEIVE_TASK:
        //     const task = Object.values(action.payload.tasks)[0];
        //     const currentWorkspace= Object.assign({}, state[task.workspace_id]);
            
        //     const oldIndex = currentWorkspace.taskIds.indexOf(task.id);
        //     if (task.general_order !== oldIndex) {
        //         currentWorkspace.taskIds.splice(oldIndex, 1);
        //         currentWorkspace.taskIds.splice(task.general_order, 0, task.id);   
        //         return Object.assign({}, state, {[currentWorkspace.id]: currentWorkspace}); 
        //     } else {
        //         return state;
        //     };
        case RECEIVE_ORDERED_TASKS:
            const currentWorkspace= Object.assign({}, state[action.workspaceId]);
            currentWorkspace.taskIds = action.taskIdArr;
            return Object.assign({}, state, {[currentWorkspace.id]: currentWorkspace});
        default:
            return state;
    }
};

export default workspacesReducer;