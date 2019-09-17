import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../../actions/project_actions';
import NewProjectForm from './new_project_form';


const mapStateToProps = (state, ownProps) => {
    return ({
    project: { name: '', notes: '', workspace_id: state.entities.currentWorkspace.id },
    closeModal: ownProps.closeModal,
    errors: state.errors.project,
    formType: 'new',
})};

const mapDispatchToProps = dispatch => ({
    projectAction: project => dispatch(createProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProjectForm));