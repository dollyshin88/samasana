export const fetchAllProjects = workspace_id => (
    $.ajax({
        method: 'GET',
        url: `/api/workspaces/${workspace_id}/projects`
    })
);

export const fetchProject = id => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/${id}`
    })
);

export const createProject = project => {
    
    return(
    $.ajax({
        method: 'POST', 
        url: `/api/projects`,
        data: { project }
    })
)}; 

export const updateProject = project => (
    $.ajax({
        method: 'PATCH',
        url: `/api/projects/${project.id}`,
        data: { project }
    })
);

export const deleteProject = project => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${project.id}`
    })
);