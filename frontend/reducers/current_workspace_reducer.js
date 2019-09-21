import { RECEIVE_NEW_WORKSPACE, RECEIVE_CURRENT_WORKSPACE, RECEIVE_ORDERED_TASKS } from '../actions/workspace_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_GENERAL_ORDER_UPDATES, RECEIVE_TASK } from '../actions/task_actions';

const currentWorkspaceReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NEW_WORKSPACE:
            return Object.values(action.payload.workspaces)[0];
        case RECEIVE_CURRENT_USER:
            return Object.values(action.payload.workspaces)[0]; 
        case LOGOUT_CURRENT_USER:
            return {};

        case RECEIVE_CURRENT_WORKSPACE:
            return action.payload.workspace;
        
        case RECEIVE_GENERAL_ORDER_UPDATES:
            let nextState = Object.assign({}, state, {taskIds: action.payload.taskIds });
            return nextState;

        case RECEIVE_ORDERED_TASKS:
            nextState = Object.assign({}, state, {taskIds: action.taskIdArr});
            return nextState;
        
        case RECEIVE_TASK: 
            const copiedState = Object.assign({}, state);
            const taskId = parseInt(Object.keys(action.payload.tasks)[0]);
            nextState = Object.assign({}, state);
            
            if (!nextState.taskIds.includes(taskId)) {
                nextState.taskIds.push(taskId);
                return nextState;
            } else {
                return copiedState;
            }
        default:
            return state;
    }
};

export default currentWorkspaceReducer;

//when receive_current_user or when receive_new_workspace, set current workspace