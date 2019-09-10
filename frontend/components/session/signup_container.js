import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';


const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user));
});

export default connect(null, mapDispatchToProps)(SignupForm);
