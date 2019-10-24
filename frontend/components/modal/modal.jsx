import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_container';
import NewProjectFormConatiner from '../workspace/projects/new_form_container';
import EditProjectFormContainer from '../workspace/projects/edit_form_container';
import ModalNewTaskFormConatiner from '../workspace/tasks/modal_new_form_container';
import ModalEditTaskFormContainer from '../workspace/tasks/modal_edit_form_container';

function Modal({ modal, closeModal }) {
    if (!modal) return null;
    let modalComponent;

    switch (modal.type) {
        case 'login':
            modalComponent = <LoginFormContainer closeModal={closeModal} />;
            break;
        
        case 'new project':
            modalComponent = <NewProjectFormConatiner closeModal={closeModal} />;
            break;

        case 'edit project':
            modalComponent = <EditProjectFormContainer closeModal={closeModal} project={modal.data} />
            break;

        case 'new task':
            modalComponent = <ModalNewTaskFormConatiner closeModal={closeModal} task={modal.data}/>;
            break;
    
        case 'edit task':
            modalComponent = <ModalEditTaskFormContainer closeModal={closeModal} task={modal.data} />
            break; 

        default:
            return null;
    }

    function handleClose(){
        closeModal();
    }
    

    return (
        <div className='modal-overlay' onClick={handleClose}>
            <div className="modal-comp" >
                { modalComponent }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const modal = (state.ui.modal) ? state.ui.modal : null;
    return ({
    modal: modal,
})};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);