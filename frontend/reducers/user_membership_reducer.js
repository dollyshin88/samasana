import { RECEIVE_USER_MEMBERSHIP, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const userMembershipsReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_MEMBERSHIP:
            return action.payload.user_memberships;
        
            case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default userMembershipsReducer;