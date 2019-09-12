import * as APIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECTS';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

// regular actions
export const receiveAllProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS, 
    projects
});

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

export const removeProject = id => ({
    type: REMOVE_PROJECT,
    projectId: id
});

export const receiveProjectErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
});

// thunk actions
export const fetchAllProjects = workspace_id => dispatch => APIUtil.fetchAllProjects(workspace_id)
    .then(projects => dispatch(receiveAllProjects(projects)))

export const fetchProject = id => dispatch => APIUtil.fetchProject(id)
    .then(project => dispatch(receiveProject(project)));

export const createProject = project => dispatch => APIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)), 
          errors => dispatch(receiveProjectErrors(errors.responseJSON)));

export const updateProject = project => dispatch => APIUtil.updateProject(project)
    .then(project => dispatch(receiveProject(project)), 
          errors => dispatch(receiveProjectErrors(errors.responseJSON)));

export const deleteProject = project => dispatch => APIUtil.deleteProject(project)
    .then(project => dispatch(removeProject(project.id)));

