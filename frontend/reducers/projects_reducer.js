import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT, RECEIVE_SECTION_IDS_UPDATE } from '../actions/project_actions';
import { RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';
import { RECEIVE_SECTION_UPDATES } from '../actions/section_actions';

const projectsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects;

        case RECEIVE_PROJECT, RECEIVE_SECTION_UPDATES:
            return Object.assign({}, state, action.payload.project);

        case REMOVE_PROJECT:
            const nextState = Object.assign({}, state);
            delete nextState[action.projectId];
            return nextState;
        
        case RECEIVE_CURRENT_WORKSPACE:
            return action.payload.projects;

        case RECEIVE_SECTION_IDS_UPDATE:
            const project = Object.assign({}, state[action.projectId], {sectionIds: action.sectionIds});
            return Object.assign({}, state, {[action.projectId]: project });
        
        default:
            return state;
    }
};

export default projectsReducer;