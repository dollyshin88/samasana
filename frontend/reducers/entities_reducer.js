import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import workspacesReducer from './workspaces_reducer';
import membersReducer from './members_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    workspaces: workspacesReducer,
    members: membersReducer,
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
