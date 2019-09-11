export const createWorkspace = workspace => (
    $.ajax({
        method: 'POST',
        url: 'api/workspaces',
        data: { workspace }
    })
);

