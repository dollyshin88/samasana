//modal and modal container

import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_container';
import NewProjectFormConatiner from '../workspace/projects/new_form_container';
import EditProjectFormContainer from '../workspace/projects/edit_form_container';
import NewTaskFormConatiner from '../workspace/tasks/new_form_container';
import EditTaskFormContainer from '../workspace/tasks/edit_form_container';

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
            modalComponent = <NewTaskFormConatiner closeModal={closeModal} />;
            break;
    
        case 'edit task':
            modalComponent = <EditTaskFormContainer closeModal={closeModal} task={modal.data} />
            break; 

        default:
            return null;
    }

    function handleClose(){
        closeModal();
    }
    
    return (
        <div className='modal-overlay' onClick={handleClose}>
            <div className="modal-comp" onClick={e => e.stopPropagation()}>
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