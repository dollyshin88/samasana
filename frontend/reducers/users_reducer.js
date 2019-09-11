import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_NEW_USER } from '../actions/session_actions';

const usersReducer = (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { [action.payload.user.id]: action.payload.user };
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_NEW_USER:
            return { [action.user.id]: action.user };
        default:
            return state;
    }
};

export default usersReducer;