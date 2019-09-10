import React from 'react';
import Logo from '../shared/logo';

function EmptySideNav (prop) {
    return (
        <div className='workspace-side-nav-container'>
            <Logo />
            <div id='side-nav-placeholder'>
                <div className='sid-nav-placeholder-long-str'> </div>
                <div className='sid-nav-placeholder-short-str'> </div>
            </div>
        </div>
    );
}