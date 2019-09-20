import { connect } from 'react-redux';
import { createTask, clearTaskErrors } from '../../../actions/task_actions';
import ModalNewTaskForm from './modal_new_task_form';
import { projectSectionsSelector } from '../../../reducers/selector_util';

const mapStateToProps = (state, ownProps) => ({
    formType: 'new',
    task: ownProps.task,
    members: Object.values(state.entities.members),
    sections: projectSectionsSelector(state, ownProps.task.project_id),
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalNewTaskForm);