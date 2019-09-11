import { RECEIVE_WORKSPACE_ERRORS, RECEIVE_NEW_WORKSPACE } from '../actions/workspace_actions';

const workspaceErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WORKSPACE_ERRORS:  
            return action.errors;
        
        case RECEIVE_NEW_WORKSPACE:
            return [];

        default:
            return state;
    }
};

export default workspaceErrorsReducer;

