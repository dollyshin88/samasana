import React from 'react';
import { withRouter } from 'react-router-dom';

function NavMainList(props) {
    function handleRoutingHome() {
        props.history.push('/workspace');
    }

    function handleRoutingMyTasks() {
        props.history.push('/workspace/mytasks');
    }

    return (
        <div className='nav-main-list'>
            <div onClick={handleRoutingHome} className='nav-main-list__item clickable'>
                <img src={window.homeIconURL} />
                <div className='nav-main-list__item__text'>Home</div>
            </div>
            <div onClick={handleRoutingMyTasks} className='nav-main-list__item clickable'>
                <div className='nav-main-list__item__icon'>
                    <img src={window.checkIconURL} />
                </div>
                <div className='nav-main-list__item__text'>My Tasks</div>
            </div>
        </div>
    );
}

export default withRouter(NavMainList);