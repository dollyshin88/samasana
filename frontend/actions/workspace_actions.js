import * as APIUtil from '../util/workspaces_api_util';
export const RECEIVE_NEW_WORKSPACE = 'RECEIVE_NEW_WORKSPACE';
export const RECEIVE_ALL_WORKSPACES = 'RECEIVE_ALL_WORKSPACE';
export const RECEIVE_WORKSPACE_ERRORS = 'RECEIVE_WORKSPACE_ERRORS';

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


//thunk action
export const fetchAllWorkspaces = () => dispatch => APIUtil.fetchAllWorkspaces()
    .then(workspaces => dispatch(receiveAllWorkspaces(workspaces)));


export const createWorkspace = workspace => dispatch => (APIUtil.createWorkspace(workspace)
    .then(payload => dispatch(receiveNewWorkspace(payload)), errors => dispatch(receiveWorkspaceErrors(errors.responsJSON))));