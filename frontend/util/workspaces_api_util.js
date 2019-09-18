export const createWorkspace = workspace => (
    $.ajax({
        method: 'POST',
        url: 'api/workspaces',
        data: { workspace }
    })
);

export const fetchAllWorkspaces = () => (
    $.ajax({
        method: 'GET',
        url: 'api/workspaces',
    })
);

export const fetchWorkspace = id => (
    $.ajax({
        method: 'GET',
        url: `api/workspaces/${id}`
    })
);