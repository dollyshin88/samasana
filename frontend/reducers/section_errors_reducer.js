import { RECEIVE_SECTION_ERRORS, RECEIVE_SECTION, CLEAR_SECTION_ERRORS } from '../actions/section_actions';

const sectionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SECTION_ERRORS:  
            return action.errors;
        
        case RECEIVE_SECTION:
            return [];
            
        case CLEAR_SECTION_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sectionErrorsReducer;

