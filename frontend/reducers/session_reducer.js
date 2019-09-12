import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_NEW_USER } from '../actions/session_actions';

const initialState = { id: null };

const sessionReducer = (state=initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.payload.user.id };
        case LOGOUT_CURRENT_USER:
            return initialState;
        case RECEIVE_NEW_USER:
            return { id: action.user.id };
        default:
            return state;
    }
};

export default sessionReducer;