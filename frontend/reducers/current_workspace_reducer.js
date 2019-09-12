import { SET_CURRENT_WORKSPACE } from '../actions/workspace_actions';

const currentWorkspaceReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SET_CURRENT_WORKSPACE:
            return action.workspace;
    
        default:
            state;
    }
};

export default currentWorkspaceReducer;