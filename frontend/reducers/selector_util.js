export const initialsSelector = name => {
    
    const splitName = name.split(' ');
    if (splitName.length === 1) {
        return name.slice(0, 2);
    } else {
        return splitName[0][0] + splitName[1][0];
    }
};

export const projectTasksSelector = (state, projectId) => {
    return Object.values(state.entities.tasks).filter(task => task.project_id === projectId);
};

export const projectSectionsSelector = (state, projectId) => {
    return Object.values(state.entities.sections).filter(section => section.project_id === projectId);
};
