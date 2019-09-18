import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_WORKSPACE, RECEIVE_ALL_WORKSPACES, RECEIVE_ORDERED_TASKS } from '../actions/workspace_actions';
import { RECEIVE_GENERAL_ORDER_UPDATES } from '../actions/task_actions';


const workspacesReducer = (state={}, action) => {
    Object.freeze(state);
   
    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return {};

        case RECEIVE_NEW_WORKSPACE:
            return action.payload.workspaces;

        case RECEIVE_ALL_WORKSPACES:
            return action.workspaces;

        case RECEIVE_GENERAL_ORDER_UPDATES:
            let currentWorkspace = state[action.payload.workspaceId];
            let updatedWorkspace = Object.assign({}, currentWorkspace, {taskIds: action.payload.taskIds});
            return Object.assign({}, state, {[action.payload.workspaceId]: updatedWorkspace});

        case RECEIVE_ORDERED_TASKS:
            currentWorkspace = Object.assign({}, state[action.workspaceId]);
            currentWorkspace.taskIds = action.taskIdArr;
            return Object.assign({}, state, {[currentWorkspace.id]: currentWorkspace});
        default:
            return state;
    }
};

export default workspacesReducer;