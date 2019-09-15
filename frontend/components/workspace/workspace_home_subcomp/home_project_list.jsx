import React from 'react';
import HomeProjectListItem from './home_project_list_item';
import { withRouter } from 'react-router-dom';

function HomeProjectList(props) {

    function handleNewProjectClick() {
        props.history.push('/project/new');
    }

    function renderListItems() {
        return (props.projects.map((project, i) => (
        <HomeProjectListItem key={i} project={project} />
        )));
    }
    // render project items with flexbox row wrap
    return (
        <div className='workspace-home-project-list'>
            {renderListItems()}

            <div onClick={handleNewProjectClick} className='hover-effect-container clickable'>
                <div className='project-item-square proj-add'>
                    <div className='project-item-square__center'>
                        <div className='project-item-square__center__icon proj-add__icon'><img src={window.plusIconURL} /></div>
                    </div>
                </div>
                <div className='project-item-label'>New Project</div>
            </div>
        </div>

    );

}

export default withRouter(HomeProjectList);