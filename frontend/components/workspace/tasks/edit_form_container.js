import { connect } from 'react-redux';
import { updateTask, clearTaskErrors } from '../../../actions/task_actions';
import NewTaskForm from './new_task_form';

const mapStateToProps = (state, ownProps) => ({
    formType: 'edit',
    task: ownProps.task,
    members: Object.values(state.entities.members),
    projects: Object.values(state.entities.projects),
    currentWorkspace: state.entities.currentWorkspace,
    errors: state.errors.tasks,
    modal: state.ui.modal,
    closeModal: ownProps.closeModal,
});

const mapDispatchToProps = dispatch => ({
    taskAction: task => dispatch(updateTask(task)),
    clearTaskErrors: () => dispatch(clearTaskErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskForm);