import { connect } from 'react-redux';
import SignupProfileForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
});
const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupProfileForm);
