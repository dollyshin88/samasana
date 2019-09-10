import { connect } from 'react-redux';
import SignupProfileForm from './signup_form';
import { signup } from '../../actions/session_actions';

// const mapStateToProps = (state) => ({
    
// });
const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
});

export default connect(null, mapDispatchToProps)(SignupProfileForm);
