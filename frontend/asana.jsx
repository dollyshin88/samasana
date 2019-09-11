import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';

//for testing only
import { signup } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if (window.current_user) {
        const preloadedState = {
            entities: {
                users: { [window.current_user.id]: window.current_user }
            },
            session: { id: window.current_user.id }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }

    const root = document.getElementById('root');
    ReactDOM.render(
        <Root store={store} /> 
        , root
    );


    // FOR TESTING ONLY
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
});