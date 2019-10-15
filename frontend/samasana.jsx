import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';
// FOR TESTING ONLY
import { signup } from './actions/session_actions';
import { createWorkspace } from './actions/workspace_actions';
import { fetchAllProjects, createProject, deleteProject } from './actions/project_actions';
import { fetchAllTasks, fetchTask, createTask, updateTask, deleteTask } from './actions/task_actions';
import { fetchAllSections, fetchAllProjectSections, createSection, updateSection, deleteSection } from './actions/section_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        if(window.currentWorkspace) {
            
            preloadedState.entities['currentWorkspace'] = window.currentWorkspace;
        }
        
        store = configureStore(preloadedState);
        delete window.currentUser;
        
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(
        <Root store={store} /> 
        , root
    );

    // FOR TESTING ONLY
    if (process.env.NODE_ENV !== 'production') {
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.createWorkspace = createWorkspace;
    window.fetchAllProjects = fetchAllProjects;
    window.createProject = createProject;
    window.deleteProject = deleteProject;
    window.fetchAllTasks = fetchAllTasks;
    window.fetchTask = fetchTask;
    window.createTask = createTask;
    window.deleteTask = deleteTask;
    window.updateTask = updateTask;
    window.fetchAllSections = fetchAllSections;
    window.fetchAllProjectSections = fetchAllProjectSections;
    window.createSection = createSection;
    window.updateSeciton = updateSection;
    window.deleteSection = deleteSection;
}
    
});

