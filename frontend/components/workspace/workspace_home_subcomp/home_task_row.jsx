import React from 'react';
import { Link } from 'react-router-dom';

function HomeTaskRow(props) {
    function renderProjectPillLink() {
        return (Object.values(props.projects).length && props.projects[props.task.project_id]) ? (
            <div className='pill-link truncate'>{props.projects[props.task.project_id].name}</div>
        ) : (<></>)
    }

    // the whole div should dispatch modalOpen with taskshow
    const projectName = (props.task.project_id) ? ('') : ('');
    return (
        <div className='task-row divider'>
            <div className='task-row__main'>
                <div className='checkbox-circle'>
                <i className="fas fa-check fa-xs"></i>
                </div>
                <div className='task-row__main__text'>{props.task.name}</div>
            </div>
            <div className='task-row__aside'>
                <div className='pill-link-container'>
                    {renderProjectPillLink()}
                </div>
                {/* link to project show page */}

                <div className='task-due-text'>{props.task.due_on}</div>
            </div>
        </div>
    );
}

export default HomeTaskRow;