import { RECEIVE_ALL_SECTIONS, RECEIVE_ALL_PROJECT_SECTIONS, RECEIVE_SECTION, REMOVE_SECTION, RECEIVE_SECTION_UPDATES, RECEIVE_ORDERED_TASKS_FOR_SECTION, RECEIVE_ORDERED_TASKS_TWO_SECTIONS } from '../actions/section_actions';
import { RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';
import { RECEIVE_SECTION_ORDER_UPDATES, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const SectionsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case LOGOUT_CURRENT_USER:
            return {};

        case RECEIVE_ALL_SECTIONS:
            return action.sections;
            
        case RECEIVE_PROJECT:
            return Object.assign({}, state, action.payload.sections); 

        case RECEIVE_ALL_PROJECT_SECTIONS:
            return Object.assign({}, state, action.sections);

        case RECEIVE_SECTION:
            return Object.assign({}, state, action.section);
            
        case REMOVE_SECTION:
            let nextState = Object.assign({}, state);
            delete nextState[action.sectionId];
            return nextState;

        case RECEIVE_CURRENT_WORKSPACE:
            if (action.payload.sections) {
                return action.payload.sections;
                } else { return state;}

        case RECEIVE_SECTION_ORDER_UPDATES:
            // let nextSection = Object.assign({}, state);
            // Object.values(action.payload.sections).forEach(section => (
            //     delete nextSection[section.id]
            // ));
            
            return Object.assign({}, state, action.payload.sections);

        case RECEIVE_ORDERED_TASKS_FOR_SECTION:
            let section = Object.assign({}, state[action.sectionId], {taskIds: action.taskIdsArr});
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
        
        case RECEIVE_TASK: 
            if (!Object.values(action.payload.tasks)[0].section_id) return state;
            const taskId = parseInt(Object.keys(action.payload.tasks)[0]);
            //instead of just looking at the section that corresponds to task.section_id, need to look at the entire list of sections and remove the task id if it was in another section
            nextState = {};
            const stateCopyArr = Object.values(Object.assign({}, state)); // array of all sections
            stateCopyArr.forEach((section) => {
                if (section.id === Object.values(action.payload.tasks)[0].section_id) {
                    if (!section.taskIds.includes(taskId)) {
                        section.taskIds.push(taskId);
                    }
                    nextState = { ...nextState, [section.id]: section};
                } else {
                    if (section.taskIds.includes(taskId)) {
                        const idx = section.taskIds.indexOf(taskId);
                        section.taskIds.splice(idx, 1);
                    }
                    nextState = { ...nextState, [section.id]: section};
                }
            });
            return nextState;
            
        case REMOVE_TASK:
            if (!action.task.section_id) return state;
            section = Object.assign({}, state[action.task.section_id]);
            
            let idx = section.taskIds.indexOf(action.task.id);
            if (idx !== -1) {
                section.taskIds.splice(idx, 1);
                return Object.assign({}, state, { [action.sectionId]: section });
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default SectionsReducer;