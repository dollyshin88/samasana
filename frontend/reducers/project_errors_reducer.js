import { RECEIVE_PROJECT_ERRORS, RECEIVE_PROJECT, CLEAR_PROJECT_ERRORS } from '../actions/project_actions';

const projectErrorsReducer = (state=[], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:  
            return action.errors;
        
        case RECEIVE_PROJECT:
            return [];
            
        case CLEAR_PROJECT_ERRORS:
            return [];
        default:
            return state;
    }
};

export default projectErrorsReducer;

