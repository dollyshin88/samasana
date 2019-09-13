import * as APIUtil from '../util/task_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TAKS';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';

// regular actions creators
export const receiveAllTasks = payload => ({
    type: RECEIVE_ALL_TASKS,
    payload
});

export const receiveTask = payload => ({
    type: RECEIVE_TASK,
    payload
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    taskId: id
});

export const receiveTaskErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
});

// thunk action creators
export const fetchAllTasks = workspace_id => dispatch => APIUtil.fetchAllTasks(workspace_id)
    .then(tpayload => dispatch(receiveAllTasks(tpayload)));

export const fetchTask = id => dispatch => APIUtil.fetchTask(id)
    .then(payload => dispatch(receiveTask(payload)));

export const createTask = task => dispatch => APIUtil.createTask(task)
    .then(payload => dispatch(receiveTask(payload)), errors => receiveTaskErrors(errors.responseJSON));

export const updateTask = task => dispatch => APIUtil.updateTask(task)
    .then(payload => dispatch(receiveTask(payload)), errors => dispatch(receiveTaskErrors(errors.responseJSON)));

export const deleteTask = task => dispatch => APIUtil.deleteTask(task)
    .then(task => dispatch(removeTask(task.id)));
