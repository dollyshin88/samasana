import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,

});

export default entitiesReducer;

// to be added later
// - workspaces
// - workspace_memberships
// - projects
// - tasks
// - (maybe) subtasks
// - tags
// - task_followings
// - task_likings
