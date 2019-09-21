import React from 'react';
import HomeTaskRow from './home_task_row';

function HomeTaskList(props) {
    function renderListItems() {
        return (props.tasks.map((task, i) => (
        <HomeTaskRow 
            key={i} 
            task={task} 
            projects={props.projects}
            openModal={props.openModal}
            updateTask={props.updateTask}
        />
        )));
    }
    // render task items with flexbox column nowrap, justify-content: center
    return (
        <div className='workspace-home-task-list shadow-std'>
            {renderListItems()}
        </div>
    );
}

export default HomeTaskList