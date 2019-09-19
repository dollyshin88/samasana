import * as APIUtil from '../util/section_api_util';
export const RECEIVE_ALL_SECTIONS = 'RECEIVE_ALL_SECTIONS';
export const RECEIVE_ALL_PROJECT_SECTIONS = 'RECEIVE_ALL_PROJECT_SECTIONS';
export const RECEIVE_SECTION = 'RECEIVE_SECTION';
export const REMOVE_SECTION = 'REMOVE_SECTION';
export const RECEIVE_SECTION_ERRORS = 'RECEIVE_SECTION_ERRORS';
export const CLEAR_SECTION_ERRORS = 'CLEAR_SECTION_ERRORS';
export const RECEIVE_SECTION_UPDATES = 'RECEIVE_SECTION_UPDATES';
export const RECEIVE_ORDERED_TASKS_FOR_SECTION = 'RECEIVE_ORDERED_TASKS_FOR_SECTION';
export const RECEIVE_ORDERED_TASKS_TWO_SECTIONS = 'RECEIVE_ORDEREDTASKS_TWO_SECTIONS';

export const receiveAllSections = sections => ({
    type: RECEIVE_ALL_SECTIONS,
    sections
});

export const receiveAllProjectSections = sections => ({
    type: RECEIVE_ALL_PROJECT_SECTIONS,
    sections
});

export const receiveSection = section => ({
    type: RECEIVE_SECTION, 
    section
});

export const removeSection = id => ({
    type: REMOVE_SECTION,
    sectionId: id
})

export const receiveSectionErrors = errors => ({
    type: RECEIVE_SECTION_ERRORS,
    errors
});

export const clearSectionErrors = () => ({
    type: CLEAR_SECTION_ERRORS,
});

export const receiveSectionUpdates = payload => ({
    type: RECEIVE_SECTION_UPDATES, 
    payload
});
//may need front-end only receive ordered sections
export const receiveOrderedTasksForSection = (taskIdsArr, sectionId) => ({
    type: RECEIVE_ORDERED_TASKS_FOR_SECTION,
    taskIdsArr,
    sectionId,
});
export const receiveOrderedTasksTwoSections = (sourceTaskIds, destinationTaskIds, sourceId, destinationId, movedTaskId) => ({
    type: RECEIVE_ORDERED_TASKS_TWO_SECTIONS,
    sourceTaskIds,
    destinationTaskIds,
    sourceId,
    destinationId,
    movedTaskId,
})

//thunk action creators
export const fetchAllSections = () => dispatch => APIUtil.fetchAllSections()
    .then(sections => dispatch(receiveAllSections(sections)));

export const fetchAllProjectSections = project_id => dispatch => APIUtil.fetchAllProjectSections(project_id)
    .then(sections => dispatch(receiveAllProjectSections(sections)));

export const createSection = section => dispatch => APIUtil.createSection(section)
            .then(section => dispatch(receiveSection(section)), errors => dispatch(receiveSectionErrors(errors.responseJSON)));

export const updateSection = section => dispatch => APIUtil.updateSection(section)
    .then(section => dispatch(receiveSection(section)), errors => dispatch(receiveSectionErrors(errors.responseJSON)));

export const deleteSection = section => dispatch => APIUtil.deleteSection(section)
    .then(section => dispatch(removeSection(section.id)), errors => dispatch(receiveSectionErrors(errors.responseJSON)));

export const updateSectionOrder = (projectId, sectionIds) => dispatch => APIUtil.updateSectionOrder(projectId, sectionIds)
    .then(payload => dispatch(receiveSectionUpdates(payload)), errors => dispatch(receiveSectionErrors(errors.responseJSON)));
