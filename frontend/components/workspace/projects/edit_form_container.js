import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateProject } from '../../../actions/project_actions';
import NewProjectForm from './new_project_form';


const mapStateToProps = (state, ownProps) => ({
    project: ownProps.project,
    closeModal: ownProps.closeModal,
    errors: state.errors.project,
    formType: 'edit',
});

const mapDispatchToProps = dispatch => ({
    projectAction: project => dispatch(updateProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewProjectForm));