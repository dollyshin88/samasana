import { RECEIVE_ALL_TASKS, RECEIVE_TASK, REMOVE_TASK, RECEIVE_GENERAL_ORDER_UPDATES, RECEIVE_SECTION_ORDER_UPDATES } from '../actions/task_actions';
import { RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';
import {RECEIVE_ORDERED_TASKS_TWO_SECTIONS} from '../actions/section_actions';

const tasksReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        
        case RECEIVE_TASK:
            return Object.assign({}, state, action.payload.tasks);

        case RECEIVE_GENERAL_ORDER_UPDATES:
            return Object.assign({}, state, action.payload.tasks);

        case RECEIVE_SECTION_ORDER_UPDATES:
            return Object.assign({}, state, action.payload.tasks);

        case REMOVE_TASK:
            const nextState = Object.assign({}, state);
            delete nextState.entities.tasks[action.taskId];
            return nextState;
            
        case RECEIVE_CURRENT_WORKSPACE:
            if (action.payload.tasks) {
            return action.payload.tasks;
            } else { return state;}
        
        case RECEIVE_ORDERED_TASKS_TWO_SECTIONS:
            const task = state[action.movedTaskId];
            task.section_id = action.destinationId;
            return Object.assign({}, state, {[action.movedTaskId]: task});
        default:
            return state;
    }
};

export default tasksReducer;