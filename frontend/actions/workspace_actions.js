import * as APIUtil from '../util/workspaces_api_util';
export const RECEIVE_NEW_WORKSPACE = 'RECEIVE_NEW_WORKSPACE';
export const RECEIVE_ALL_WORKSPACES = 'RECEIVE_ALL_WORKSPACES';
export const RECEIVE_WORKSPACE_ERRORS = 'RECEIVE_WORKSPACE_ERRORS';
export const RECEIVE_ORDERED_TASKS = 'RECEIVE_ORDERED_TASKS';
export const RECEIVE_CURRENT_WORKSPACE = 'RECEIVE_CURRENT_WORKSPACE';

export const receiveNewWorkspace = payload => ({
    type: RECEIVE_NEW_WORKSPACE, 
    payload
});

export const receiveAllWorkspaces = workspaces => ({
    type: RECEIVE_ALL_WORKSPACES,
    workspaces,
});

export const receiveWorkspaceErrors = errors => ({
    type: RECEIVE_WORKSPACE_ERRORS,
    errors
});

export const receiveOrderedTasks = (taskIdArr, workspaceId) => ({
    type: RECEIVE_ORDERED_TASKS, 
    taskIdArr, 
    workspaceId,
});

export const receiveCurrentWorkspace = payload => ({
    type: RECEIVE_CURRENT_WORKSPACE,
    payload
})



//thunk action
export const fetchAllWorkspaces = () => dispatch => APIUtil.fetchAllWorkspaces()
    .then(workspaces => dispatch(receiveAllWorkspaces(workspaces)));


export const createWorkspace = workspace => dispatch => (APIUtil.createWorkspace(workspace)
    .then(payload => dispatch(receiveNewWorkspace(payload)), errors => dispatch(receiveWorkspaceErrors(errors.responsJSON))));

export const fetchWorkspace = id => dispatch => APIUtil.fetchWorkspace(id)
    .then(payload => dispatch(receiveCurrentWorkspace(payload)));