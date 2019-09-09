import * as APIUtil from '../util/session_api_util';

// session action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


// session regular action creators
export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

// session thunk action creators
export const login = user => dispatch => APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const signup = user => dispatch => APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));
