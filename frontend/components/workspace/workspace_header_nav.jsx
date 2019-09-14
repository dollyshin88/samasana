import React from 'react';

function WorkspaceHeaderNav (props) {


    return (
        <div className='workspace-header'>
            
            <div className='workspace-header__title' >{props.title}</div>
            <div className='workspace-header__btn-section'>
                <div className='workspace-header__btn'>+ New</div>
                <div className='user-circle'>{props.currentUserInitial}</div>
            </div>
           
        </div>
    );
}

export default WorkspaceHeaderNav;