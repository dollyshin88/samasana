import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    closeModal: ownProps.closeModal,
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
});



export default connect(null, mapDispatchToProps)(LoginForm);
