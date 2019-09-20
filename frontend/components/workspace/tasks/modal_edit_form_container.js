import { connect } from 'react-redux';
import { updateTask, clearTaskErrors, deleteTask } from '../../../actions/task_actions';
import ModalNewTaskForm from './modal_new_task_form';

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
    deleteTask: task => dispatch(deleteTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalNewTaskForm);