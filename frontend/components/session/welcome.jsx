import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../shared/logo';

function Welcome(props) {

    return (
        <div className='page-container'>
            <Logo />
            <div className='signup-container'>
                <div className='signup-container__content'>
                    <img className='signup-container__content__img' src="" alt="" />
                    <div className='signup-container__subcontent'>
                        <div className='signup-container__content__header'>Welcome to Samasana</div>
                        <p className='signup-container__content__helper-text'>Let's get your account set up. It will take about a minute</p>
                        <Link className='btn btn--blue' to='/signup/profile'>Get started</Link>
                    </div>
                    <div className='signup-container__content__footer'>
                        By continuing, you agree to the Terms of Service and Privacy Policy
                        {/* TO ADD: Terms of Service and Privacy Policy links */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Welcome;
