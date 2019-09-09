//modal and modal container

import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_container';

function Modal({ modal, closeModal }) {
    if (!modal) return null;
    let modalComponent;
    switch (modal) {
        case 'login':
            modalComponent = <LoginFormContainer closeModal={closeModal} />;
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

const mapStateToProps = state => ({
    modal: state.ui.modal,
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);