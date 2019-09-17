import { connect } from 'react-redux';
import { createTask, clearTaskErrors } from '../../../actions/task_actions';
import NewTaskForm from './new_task_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'new',
    task: {},
    members: Object.values(state.entities.members),
    projects: Object.values(state.entities.projects),
    currentWorkspace: state.entities.currentWorkspace,
    modal: state.ui.modal,
    errors: state.errors.tasks,
    closeModal: ownProps.closeModal,
});

const mapDispatchToProps = dispatch => ({
    taskAction: task => dispatch(createTask(task)),
    clearTaskErrors: () => dispatch(clearTaskErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);