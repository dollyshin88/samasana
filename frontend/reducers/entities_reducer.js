import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import workspacesReducer from './workspaces_reducer';
import membersReducer from './members_reducer';
import currentWorkspaceReducer from './current_workspace_reducer';
import projectsReducer from './projects_reducer';
import tasksReducer from './tasks_reducer';
import SectionsReducer from './sections_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    currentWorkspace: currentWorkspaceReducer,
    workspaces: workspacesReducer,
    members: membersReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    sections: SectionsReducer,
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
