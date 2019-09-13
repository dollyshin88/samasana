import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_MEMBERS = 'RECEIVE_ALL_MEMBERS';

export const receiveAllMembers = payload => ({
    type: RECEIVE_ALL_MEMBERS,
    payload
});

//thunk action creator
export const fetchAllMembers = workspace_id => dispatch => APIUtil.fetchAllMembers(workspace_id)
    .then(payload => dispatch(receiveAllMembers(payload)));

