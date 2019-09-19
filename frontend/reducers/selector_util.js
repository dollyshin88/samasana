export const initialsSelector = name => {
    
    const splitName = name.split(' ');
    if (splitName.length === 1) {
        return name.slice(0, 2);
    } else {
        return splitName[0][0] + splitName[1][0];
    }
};

export const projectTasksSelector = (state, projectId) => {
    const tasksArr = Object.values(state.entities.tasks).filter(task => task.project_id === projectId);
    const tasks = {};
    tasksArr.forEach(task => tasks[task.id] = task);
    return tasks;
};

export const projectSectionsSelector = (state, projectId) => {
    const sectionsArr = Object.values(state.entities.sections).filter(section => section.project_id === projectId);
    const sections ={};
    sectionsArr.forEach(section => sections[section.id] = section);
    return sections;
};

export const taskIdsByDateSelector = (state, filter) => {
    
    let now = new Date(Date.now());
    let today = new Date(now.setHours(24,0,0,0));
    let weekAfter = new Date(Date.now());
    weekAfter.setDate(weekAfter.getDate() + 7);
    const idArr = state.entities.currentWorkspace.taskIds;
    
    if (filter === 'today') {
        
        return idArr.filter(id => {
            let due_on_str = state.entities.tasks[id].due_on;
            let due_on_date = new Date(Date.parse(due_on_str));
            return due_on_date <= today;
        });
    } else if (filter === 'upcoming') {
        
        return idArr.filter(id => {
            let due_on_str = state.entities.tasks[id].due_on;
            let due_on_date = new Date(Date.parse(due_on_str));
            return due_on_date > today && due_on_date <= weekAfter;
        });
    } else {
        
        return idArr.filter(id => {
            let due_on_str = state.entities.tasks[id].due_on;
            let due_on_date = new Date(Date.parse(due_on_str));
            return due_on_date > weekAfter;
        });
    }
};

export const tasksFromIdsSelector = (state, taskIds) => {
    
    return (
    taskIds.map(id => state.entities.tasks[id])
)};