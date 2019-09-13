import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_MEMBERS = 'RECEIVE_ALL_MEMBERS';

export const receiveAllMembers = members => ({
    type: RECEIVE_ALL_MEMBERS,
    members
});

//thunk action creator
export const fetchAllMembers = workspace_id => dispatch => APIUtil.fetchAllMembers(workspace_id)
    .then(members => dispatch(receiveAllMembers(members)));

