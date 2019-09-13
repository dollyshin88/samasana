import { RECEIVE_PROJECT_ERRORS, RECEIVE_PROJECT } from '../actions/task_actions';

const projectErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:  
            return action.errors;
        
        case RECEIVE_PROJECT:
            return [];

        default:
            return state;
    }
};

export default projectErrorsReducer;

