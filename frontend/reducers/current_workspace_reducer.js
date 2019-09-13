import { RECEIVE_NEW_WORKSPACE } from '../actions/workspace_actions';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'; 

const currentWorkspaceReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NEW_WORKSPACE:
            return Object.values(action.payload.workspaces)[0];
        case RECEIVE_CURRENT_USER:
            return Object.values(action.payload.workspaces)[0]; 
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default currentWorkspaceReducer;

//when receive_current_user or when receive_new_workspace, set current workspace