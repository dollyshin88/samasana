import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/logo';

function Welcome(props) {

    return (
        <div className='page-container'>
            <div className='logo-wrap-company-home'>
                <Logo />
            </div>

            <div className='ctnr-buff--fullpage'>
                <div className='signup-container'>
                    <img className='signup-container__img' src="" alt="" />
                    <div className='signup-container__subcontent'>
                        <div className='signup-container__header'>Welcome to Samasana</div>
                        <p className='signup-container__helper-text'>Let's get your account set up. It will take about a minute</p>
                        <Link className='btn btn--blue' to='/signup/profile'>Get started</Link>
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

export default Welcome;
