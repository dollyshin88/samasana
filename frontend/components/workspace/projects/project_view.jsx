import React from 'react';
import { withRouter } from 'react-router-dom';
import ProjectViewBoard from './project_view_board';
import ProjectViewList from './project_view_list';


function ProjectView(props) {

    function renderProjectView(){
        const parsedLocation = props.location.pathname.split('/');
        const viewType = parsedLocation[parsedLocation.length-1];
        
        if (viewType === 'board') {
            return ( 
                <ProjectViewBoard />
            );
        } else if (viewType === 'list') {
            return (
                <ProjectViewList />
            );
        }
    }
    return (
        <div>
            {renderProjectView()}
        </div>
    );
}

export default withRouter(ProjectView);