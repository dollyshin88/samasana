import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/logo';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';


function Welcome(props) {
    function handleHomeRedirect(e) {
        props.history.push('/samasana');
    }

    function handleLoginBtn(e){
        props.openModal('login');
    }

    return (
        <div className='page-container'>
            <div onClick={handleHomeRedirect} className='btn logo-wrap-company-home'>
                <Logo />
            </div>

            <div className='ctnr-buff--fullpage'>
                <div className='signup-container'>
                    <img className='signup-container__img' src={window.welcomePageImage} alt="" />
                    <div className='signup-container__subcontent'>
                        <div className='signup-container__header'>Welcome to Samasana</div>
                        <p className='signup-container__helper-text'>Let's get your account set up. It will take about a minute</p>
                        <Link className='btn btn--blue' to='/signup/profile'>Get started</Link>
                        <div 
                            id='login-btn' 
                            className='hyperlink hyperlink--blue'
                            onClick={handleLoginBtn}
                        >Log in instead</div>
                    </div>
                    <div className='signup-container__footer'>
                        By continuing, you agree to the Terms of Service and Privacy Policy
                        {/* TO ADD: Terms of Service and Privacy Policy links */}
                    </div>

                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    openModal: (contentName, data) => dispatch(openModal(contentName, data)),
});

export default withRouter(connect(null, mapDispatchToProps)(Welcome));
