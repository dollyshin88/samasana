import { RECEIVE_ALL_SECTIONS, RECEIVE_ALL_PROJECT_SECTIONS, RECEIVE_SECTION, REMOVE_SECTION } from '../actions/section_actions';

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
            delete nextState.entities.sections[action.sectionId];
            return nextState;
        
            default:
            return state;
    }
};

export default SectionsReducer;