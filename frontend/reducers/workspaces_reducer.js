import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_WORKSPACE } from '../actions/workspace_actions';

const workspacesReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.payload.workspaces;
        
        case LOGOUT_CURRENT_USER:
            return {};

        case RECEIVE_NEW_WORKSPACE:
            return action.payload.workspaces;

        default:
            return state;
    }
};

export default workspacesReducer;