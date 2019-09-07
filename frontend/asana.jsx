import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store = configureStore();
    ReactDOM.render(
        <Root store={store} /> 
        , root
    );

});