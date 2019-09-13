import { RECEIVE_ALL_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';

const tasksReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_TASKS:
            return action.payload.tasks;
        
        case RECEIVE_TASK:
            return Object.assign({}, state, Object.values(action.payload.task)[0]);
        
        case REMOVE_TASK:
            const nextState = Object.assign({}, state);
            delete nextState.entities.tasks[action.taskId];
            return nextState;
        
            default:
            return state;
    }
};

export default tasksReducer;