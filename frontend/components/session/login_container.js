import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { setCurrentWorkspace } from '../../actions/workspace_actions'; 
 
const mapStateToProps = (state, ownProps) => ({
    closeModal: ownProps.closeModal,
    errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
