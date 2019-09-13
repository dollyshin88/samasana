import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/project_actions';

function WorkspaceHome (props) {

    return (
        <div>this is workspace home component</div>
    );
}

const mapStateToProps = (state) => ({
    projects: state.entities.projects,
    //tasks: selector to filter on tasks due soon
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceHome);