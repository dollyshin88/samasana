import React from 'react';

function WorkspaceHeaderNav (props) {

    function toggleDropdown(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('create-all-dropdown');
        dropdown.classList.toggle('hidden');
    }

    function handleNewTaskModal(e){
        toggleDropdown(e);
        props.openModal('new task');

    }
    function handNewProjectModal(e){
        toggleDropdown(e);
        props.openModal('new project');
    }

    return (
        <div className='workspace-header'>
            
            <div className='workspace-header__title' >{props.title}</div>
            <div className='workspace-header__btn-section'>
                <div id='create-all-dropdow-btn' className='dropdown-parent-btn'>
                    <div onClick={toggleDropdown} className='workspace-header__btn clickable menu-btn'>+ New</div>
                    
                    <div id='create-all-dropdown' className='create-all-dropdown menu hidden'>
                                <div className='create-all-dropdown__item clickable' onClick={(e)=>handleNewTaskModal(e)}>Task</div>
                                <div className='create-all-dropdown__item clickable'  onClick={(e)=>handNewProjectModal(e)}>Project</div>
                    </div>
                    
                </div>
                <div className='user-circle'>{props.currentUserInitial}</div>
            </div>
           
        </div>
    );
}

export default WorkspaceHeaderNav;