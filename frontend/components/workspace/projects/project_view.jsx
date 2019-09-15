import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProjectViewBoard from './project_view_board';
import ProjectViewList from './project_view_list';
import { projectTasksSelector, projectSectionsSelector} from '../../../reducers/selector_util';


function ProjectView(props) {
    
    function renderProjectView(){
        //todo: also send sections and actions down
        if (props.viewType === 'board') {
            return ( 
                <ProjectViewBoard tasks={props.tasks} />
            );
        } else if (props.viewType === 'list') {
            return (
                <ProjectViewList tasks={props.tasks}/>
            );
        }
    }
    return (
        <div>
            {renderProjectView()}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const parsedLocation = ownProps.location.pathname.split('/');
    const projectId = parsedLocation[1];
    const viewType = parsedLocation[parsedLocation.length - 1];
    return ({
        project: state.entities.projects[projectId],
        viewType: viewType,
        // sections: projectSectionsSelector(state, projectId),
        tasks: projectTasksSelector(state, projectId),
    })
};

const mapDispatchToProps = dispatch => ({
    //send down update action for tasks and sections for dnd events
    
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectView));