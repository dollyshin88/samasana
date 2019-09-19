export const fetchAllProjectSections = (project_id) => (
    $.ajax({
        method: 'GET',
        url: `api/projects/${project_id}/sections`
    })
);

export const fetchAllSections = () => (
    $.ajax({
        method: 'GET',
        url: 'api/sections'
    })
);

export const createSection = section => (
    $.ajax({
        method: 'POST',
        url: 'api/sections',
        data: { section }
    })
);

export const updateSection = section => (
    $.ajax({
        method: 'PATCH',
        url: `api/sections/${section.id}`,
        data: { section }
    })
);

export const deleteSection = section => (
    $.ajax({
        method: 'DELETE',
        url: `api/sections/${section.id}`
    })
);

export const updateSectionOrder = (projectId, sectionIds) => (
    $.ajax({
        method: 'PATCH',
        url: `api/batch/${projectId}/sections`,
        data: { batch: { sectionIds } }
    })
);