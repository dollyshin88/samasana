import { RECEIVE_ALL_TASKS, RECEIVE_TASK, REMOVE_TASK, RECEIVE_GENERAL_ORDER_UPDATES, RECEIVE_SECTION_ORDER_UPDATES } from '../actions/task_actions';
import { RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';

const tasksReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.tasks;
        
        case RECEIVE_TASK, 
             RECEIVE_GENERAL_ORDER_UPDATES,
             RECEIVE_SECTION_ORDER_UPDATES:
            return Object.assign({}, state, action.payload.tasks);
        
        case REMOVE_TASK:
            const nextState = Object.assign({}, state);
            delete nextState.entities.tasks[action.taskId];
            return nextState;
            
        case RECEIVE_CURRENT_WORKSPACE:
            return action.payload.tasks;

        default:
            return state;
    }
};

export default tasksReducer;