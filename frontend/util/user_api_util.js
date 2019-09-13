export const fetchAllMembers = workspace_id => (
    $.ajax({
        method: 'GET',
        url: `/api/workspaces/${workspace_id}/users`
    })
);