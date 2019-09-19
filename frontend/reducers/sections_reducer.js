import { RECEIVE_ALL_SECTIONS, RECEIVE_ALL_PROJECT_SECTIONS, RECEIVE_SECTION, REMOVE_SECTION, RECEIVE_SECTION_UPDATES, RECEIVE_ORDERED_TASKS_FOR_SECTION, RECEIVE_ORDERED_TASKS_TWO_SECTIONS } from '../actions/section_actions';
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
            let nextState = Object.assign({}, state);
            delete nextState[action.sectionId];
            return nextState;

        case RECEIVE_CURRENT_WORKSPACE:
            return action.payload.sections;

        case RECEIVE_SECTION_ORDER_UPDATES:
            // let nextSection = Object.assign({}, state);
            // Object.values(action.payload.sections).forEach(section => (
            //     delete nextSection[section.id]
            // ));
            
            return Object.assign({}, state, action.payload.sections);

        case RECEIVE_ORDERED_TASKS_FOR_SECTION:
            const section = Object.assign({}, state[action.sectionId], {taskIds: action.taskIdsArr});
            return Object.assign({}, state, { [action.sectionId]: section });
        
        case RECEIVE_ORDERED_TASKS_TWO_SECTIONS:
            const source = Object.assign({}, state[action.sourceId], {taskIds: action.sourceTaskIds});
            const destination = Object.assign({}, state[action.destinationId], {taskIds: action.destinationTaskIds});
            return Object.assign({}, state, { [action.sourceId]: source, [action.destinationId]: destination });

        case RECEIVE_SECTION_UPDATES: 
            // nextSection = Object.assign({}, state);
            // Object.values(action.payload.sections).forEach(section => (
            //     delete nextSection[section.id]
            // ));
            return Object.assign({}, state, action.payload.sections);
        
            default:
            return state;
    }
};

export default SectionsReducer;