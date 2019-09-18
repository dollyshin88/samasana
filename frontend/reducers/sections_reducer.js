import { RECEIVE_ALL_SECTIONS, RECEIVE_ALL_PROJECT_SECTIONS, RECEIVE_SECTION, REMOVE_SECTION, RECEIVE_SECTION_UPDATES } from '../actions/section_actions';
import { RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';
import { RECEIVE_SECTION_ORDER_UPDATES } from '../actions/task_actions';

const SectionsReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SECTIONS:
            return action.sections;

        case RECEIVE_ALL_PROJECT_SECTIONS:
            return Object.assign({}, state, action.sections);

        case RECEIVE_SECTION:
            return Object.assign({}, state, action.section);
            
        case REMOVE_SECTION:
            const nextState = Object.assign({}, state);
            delete nextState[action.sectionId];
            return nextState;

        case RECEIVE_CURRENT_WORKSPACE:
            return action.payload.sections;

        case RECEIVE_SECTION_ORDER_UPDATES, RECEIVE_SECTION_UPDATES: 
            return Object.assign({}, state, action.payload.sections);
        
        default:
            return state;
    }
};

export default SectionsReducer;