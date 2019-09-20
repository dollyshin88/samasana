import * as APIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const CLEAR_PROJECT_ERRORS = 'CLEAR_PROJECT_ERRORS';
export const RECEIVE_SECTION_IDS_UPDATE = 'RECEIVE_SECTION_IDS_UPDATE';

// regular actions
export const receiveAllProjects = projects => ({
    type: RECEIVE_ALL_PROJECTS, 
    projects
});

export const receiveProject = payload => ({
    type: RECEIVE_PROJECT,
    payload
});

export const removeProject = id => ({
    type: REMOVE_PROJECT,
    projectId: id
});

export const receiveProjectErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
});

export const clearProjectErrors = () => ({
    type: CLEAR_PROJECT_ERRORS,
});

export const receiveSectionIdsUpdate = (projectId, sectionIds) => ({
    type: RECEIVE_SECTION_IDS_UPDATE,
    projectId,
    sectionIds,
})

// thunk actions
export const fetchAllProjects = workspace_id => dispatch => APIUtil.fetchAllProjects(workspace_id)
    .then(projects => dispatch(receiveAllProjects(projects)));

export const fetchProject = id => dispatch => APIUtil.fetchProject(id)
    .then(payload => dispatch(receiveProject(payload)));

export const createProject = project => dispatch => APIUtil.createProject(project)
    .then(payload => dispatch(receiveProject(payload)), 
          errors => dispatch(receiveProjectErrors(errors.responseJSON)));

export const updateProject = project => dispatch => APIUtil.updateProject(project)
    .then(payload => dispatch(receiveProject(payload)), 
          errors => dispatch(receiveProjectErrors(errors.responseJSON)));

export const deleteProject = project => dispatch => APIUtil.deleteProject(project)
    .then(project => dispatch(removeProject(project.id)));

