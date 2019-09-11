import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userMembershipsReducer from './user_membership_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    userMemberships: userMembershipsReducer,
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
