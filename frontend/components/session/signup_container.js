import { connect } from 'react-redux';
import SignupProfileForm from './signup_form';
import { signup, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
});
const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupProfileForm);
