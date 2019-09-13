import React from 'react';
import { Link } from 'react-router-dom';

function HomeTaskRow(props) {
    // the whole div should dispatch modalOpen with taskshow
    return (
        <div className='task-row'>
            <div className='task-row__main'>
                <div>checkbox</div>
                <div>{props.task.name}</div>
            </div>
            <div className='task-row__aside'>
                <div>project show page btn</div>
                {/* link to project show page */}

                <div>Due Today or Tomorrow</div>
            </div>
        </div>
    );
}

export default HomeTaskRow;