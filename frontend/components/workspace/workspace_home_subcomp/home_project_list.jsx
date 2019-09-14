import React from 'react';
import HomeProjectListItem from './home_project_list_item';

function HomeProjectList(props) {

    function renderListItems() {
        return (props.projects.map((project, i) => (
        <HomeProjectListItem key={i} project={project} />
        )));
    }
    // render project items with flexbox row wrap
    return (
        <div className='workspace-home-project-list'>
            {renderListItems()}
        </div>
    );

}

export default HomeProjectList;