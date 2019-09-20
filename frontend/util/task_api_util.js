export const fetchAllTasks = workspace_id => (
    $.ajax({
        method: 'GET',
        url: `api/workspaces/${workspace_id}/tasks`
    })
);

export const fetchTask = id => (
    $.ajax({
        method: 'GET',
        url: `api/tasks/${id}`
    })
);

export const createTask = task => (
    $.ajax({
        method: 'POST',
        url: 'api/tasks',
        data: { task }
    })
);

export const updateTask = task => (
    $.ajax({
        method: 'PATCH',
        url: `api/tasks/${task.id}`,
        data: { task }
    })
);

export const deleteTask = taskId => (
    $.ajax({
        method: 'DELETE',
        url: `api/tasks/${taskId}`
    })
);

export const updateTaskGeneralOrder = (workspace_id, taskIds) => (
    $.ajax({
        method: 'PATCH',
        url: `api/batch/general/${workspace_id}/tasks`,
        data: { batch: {taskIds} }
    })
);

export const updateTaskSectionOrder = updates => {
    
    return (
    $.ajax({
        method: 'PATCH',
        url: 'api/batch/section/tasks',
        data: { batch: updates }
    })
)};