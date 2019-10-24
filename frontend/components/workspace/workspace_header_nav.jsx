import React from 'react';
import { withRouter } from 'react-router-dom';

function WorkspaceHeaderNav (props) {

    function toggleCreateAllDropdown(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('create-all-dropdown');
        dropdown.classList.toggle('hidden');
    }

    function toggleCurrentUserDropdown(e) {
        e.stopPropagation();
        const dropdown = document.getElementById('current-user-dropdown');
        dropdown.classList.toggle('hidden');
    }

    function handleNewTaskModal(e){
        toggleCreateAllDropdown(e);
        const task = { name: '', notes: '', dueDate: '', completed: false };
        props.openModal('new task', task);

    }
    function handleNewProjectModal(e){
        toggleCreateAllDropdown(e);
        props.openModal('new project');
    }
    function handleLogout(e){
        toggleCurrentUserDropdown(e);
        props.logout();
    }
    function renderHeaderIcons(){
        const projectRegex = new RegExp('\/workspace\/project\/.*');
        const myTaskRegex = new RegExp('\/workspace\/mytasks.*');
        const homeRegex = new RegExp('\/workspace');
        if (projectRegex.test(props.location.pathname)) {
            return (
                <div className='header-title-project-square header-title-project-square--proj pushright-10'> 
                    <div className='header-title-project-square__center'>
                    <div className='header-title-project-square__center__icon'><img src={window.kanbanIconURL} /></div>
                    </div>
                 </div>
            )
        } else if (myTaskRegex.test(props.location.pathname)) {
            return <div className='user-circle pushright-10'>{props.currentUserInitial}</div>
        } else if (homeRegex.test(props.location.pathname)) {
            return <div></div>
        }
    }
    
    
      
    return (
        <div className='workspace-header'>
            <div className='workspace-header__title-grouping'>
                {renderHeaderIcons()}
                <div className='workspace-header__title' >{props.title}</div>
            </div>
            <div className='workspace-header__btn-section'>
                <div id='create-all-dropdow-btn' className='dropdown-parent-btn'>
                    <div onClick={toggleCreateAllDropdown} className='workspace-header__btn clickable menu-btn'>+ New</div>
                    
                    <div id='create-all-dropdown' className='create-all-dropdown menu hidden'>
                        <div className='create-all-dropdown__item-wrap'>
                            <i class="far fa-check-circle"></i>
                            <div className='create-all-dropdown__item clickable' onClick={(e)=>handleNewTaskModal(e)}>Task</div>
                        </div>
                        <div className='create-all-dropdown__item-wrap'>
                            <i class="far fa-clipboard" style={{marginLeft: 2,
    marginRight: 2}}></i>
                            <div className='create-all-dropdown__item clickable'  onClick={(e)=>handleNewProjectModal(e)}>Project</div>
                        </div>
                    </div>
                    
                </div>

                <div id='current-user-dropdow-btn' className='dropdown-parent-btn'>
                    <div onClick={toggleCurrentUserDropdown} className='user-circle clickable menu-btn'>{props.currentUserInitial}</div>

                    <div id='current-user-dropdown' className='current-user-dropdown menu hidden'>
                        <div className='current-user-dropdown__item-wrap'>
                            <div className='current-user-dropdown__item clickable' onClick={(e)=>handleLogout(e)}>Log out</div>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default withRouter(WorkspaceHeaderNav);