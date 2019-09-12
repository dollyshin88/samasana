import * as APIUtil from '../util/session_api_util';

// session action constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

// session regular action creators
export const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    payload
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
})


export const receiveNewUser = user => ({
    type: RECEIVE_NEW_USER,
    user
});

// session thunk action creators
export const login = user => dispatch => APIUtil.login(user)
    .then(payload => dispatch(receiveCurrentUser(payload)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const signup = user => dispatch => APIUtil.signup(user)
    .then(user => dispatch(receiveNewUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));
