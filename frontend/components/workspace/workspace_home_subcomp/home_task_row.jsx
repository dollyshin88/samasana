import React from 'react';
import { Link } from 'react-router-dom';

function HomeTaskRow(props) {
    // the whole div should dispatch modalOpen with taskshow
    const projectName = (props.task.project_id) ? ('') : ('');
    return (
        <div className='task-row'>
            <div className='task-row__main'>
                <div className='checkbox-circle'>
                <i className="fas fa-check fa-xs"></i>
                </div>
                <div className='task-row__main__text'>{props.task.name}</div>
            </div>
            <div className='task-row__aside'>
                <div className='pill-link-container'>
                <div className='pill-link truncate'>project show page btn</div>
                </div>
                {/* link to project show page */}

                <div className='task-due-text'>Tomorrow</div>
            </div>
        </div>
    );
}

export default HomeTaskRow;