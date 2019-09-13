import React from 'react';
import HomeTaskRow from './home_task_row';

function HomeTaskList(props) {

    function renderListItems() {
        return (props.tasks.map((task, i) => (
        <HomeTaskRow key={i} task={task} />
        )));
    }
    // render task items with flexbox column nowrap, justify-content: center
    return (
        <div>
            {renderListItems()}
        </div>
    );
}

export const HomeTaskList