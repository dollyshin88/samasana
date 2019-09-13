import sessionErrorsReducer from './session_errors_reducer';
import workspaceErrorsReducer from './workspace_errors_reducer';
import taskErrorsReducer from './task_errors_reducer';
import projectErrorsReducer from './project_errors_reducer';

import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    workspace: workspaceErrorsReducer,
    project: projectErrorsReducer,
    tasks: taskErrorsReducer,
});

export default errorsReducer;