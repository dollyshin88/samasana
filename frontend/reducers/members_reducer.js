import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_NEW_WORKSPACE, RECEIVE_CURRENT_WORKSPACE } from '../actions/workspace_actions';
import { RECEIVE_ALL_MEMBERS } from '../actions/member_actions';

const membersReducer = (state={}, action) => {
    Object.freeze(state);
    // to reconsider: may not need to handle any actions other then receive all members
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.payload.members;
        
        case LOGOUT_CURRENT_USER:
            return {};

        // case RECEIVE_NEW_WORKSPACE:
        //     return action.payload.members;
        
        case RECEIVE_ALL_MEMBERS:
            return action.payload.members;
        
        case RECEIVE_CURRENT_WORKSPACE:
            return action.payload.members;
        
        default:
            return state;
    }
};

export default membersReducer;