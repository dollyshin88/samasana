import * as APIUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const CLEAR_TASK_ERRORS = 'CLEAR_TASK_ERRORS';
export const RECEIVE_GENERAL_ORDER_UPDATES = 'RECEIVE_GENERAL_ORDER_UPDATES';
export const RECEIVE_SECTION_ORDER_UPDATES = 'RECEIVE_SECITON_ORDER_UPDATES';

// regular actions creators
export const receiveAllTasks = tasks => ({
    type: RECEIVE_ALL_TASKS,
    tasks
});

export const receiveTask = payload => ({
    type: RECEIVE_TASK,
    payload
});

export const removeTask = task => ({
    type: REMOVE_TASK,
    task
});

export const receiveTaskErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
});

export const clearTaskErrors = () => ({
    type: CLEAR_TASK_ERRORS,
});

export const receiveGeneralOrderUpdates = payload => ({
    type: RECEIVE_GENERAL_ORDER_UPDATES, 
    payload
});

export const receiveSectionOrderUpdates = payload => {
    
    return ({
    type: RECEIVE_SECTION_ORDER_UPDATES, 
    payload
})};

// thunk action creators
export const fetchAllTasks = workspace_id => dispatch => APIUtil.fetchAllTasks(workspace_id)
    .then(tasks => dispatch(receiveAllTasks(tasks)));

export const fetchTask = id => dispatch => APIUtil.fetchTask(id)
    .then(payload => dispatch(receiveTask(payload)));

export const createTask = task => dispatch => APIUtil.createTask(task)
    .then(payload => dispatch(receiveTask(payload)), errors => dispatch(receiveTaskErrors(errors.responseJSON)));

export const updateTask = task => dispatch => APIUtil.updateTask(task)
    .then(payload => dispatch(receiveTask(payload)), errors => dispatch(receiveTaskErrors(errors.responseJSON)));

export const deleteTask = taskId => dispatch => APIUtil.deleteTask(taskId)
    .then(task => dispatch(removeTask(task)));

export const updateTaskGeneralOrder = (workspaceId, taskIds) => dispatch => APIUtil.updateTaskGeneralOrder(workspaceId, taskIds)
    .then(payload => dispatch(receiveGeneralOrderUpdates(payload)), errors => dispatch(receiveTaskErrors(errors.responseJSON)));

export const updateTaskSectionOrder = updates => dispatch => APIUtil.updateTaskSectionOrder(updates)
    .then(payload => dispatch(receiveSectionOrderUpdates(payload)), errors => dispatch(receiveTaskErrors(erorrs.responseJSON)));