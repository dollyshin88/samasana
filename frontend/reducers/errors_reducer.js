import sessionErrorsReducer from './session_errors_reducer';
import workspaceErrorsReducer from './workspace_errors_reducer';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    workspace: workspaceErrorsReducer,
});

export default errorsReducer;