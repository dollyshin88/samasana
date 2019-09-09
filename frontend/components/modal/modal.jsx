//modal and modal container

import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
//create and import login form container

function Modal({ modal, closeModal }) {
    if (!modal) return null;
    let modalComponent;
    switch (props.modal) {
        case 'login':
            modalComponent = <LoginFormContainer />;
            break;
    
        default:
            return null;
    }
    return (
        <div className='modal-overlay'>
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