import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import workspaceErrorsReducer from './workspace_errors_reducer';
import taskErrorsReducer from './task_errors_reducer';
import projectErrorsReducer from './project_errors_reducer';
import sectionErrorsReducer from './section_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    workspace: workspaceErrorsReducer,
    project: projectErrorsReducer,
    tasks: taskErrorsReducer,
    section: sectionErrorsReducer
});

export default errorsReducer;