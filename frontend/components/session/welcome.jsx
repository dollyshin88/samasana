import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {

    return (
        <div className='signup-flow-page-container'>
            <img src="" alt="" />
            <h3>Welcome to Samasana</h3>
            <p>Let's get your account set up. It will take about a minute</p>
            <Link id='get-started-btn' to='/signup/profile'>Get started</Link>
            <div id="welcome-footer">
                <p>By continuing, you agree to the Terms of Service and Privacy Policy</p>
                {/* TO ADD: Terms of Service and Privacy Policy links */}
            </div>
        </div>
    );
}

export default Welcome;
