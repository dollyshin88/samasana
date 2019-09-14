import React from 'react';
import Logo from '../shared/logo';

function EmptySideNav (prop) {
    return (
        <div className='workspace-side-nav-container'>
            <div className='logo-wrap-workspace'>
                <Logo />
            </div>
            <div className='empty-nav-container'>
                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--long'></div>
                
                <div className='empty-nav empty-nav--short'></div>
                <div className='empty-nav empty-nav--medium'></div>
                <div className='empty-circles-container'>
                    <div className='empty-nav empty-nav--circle'></div>
                    <div className='empty-nav empty-nav--circle'></div>
                    <div className='empty-nav empty-nav--circle'></div>
                    <div className='empty-nav empty-nav--circle'></div>
                    <div className='empty-nav empty-nav--circle'></div>
                    <div className='empty-nav empty-nav--circle'></div>
                </div>

                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--short'></div>

                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--long'></div>
                <div className='empty-nav empty-nav--short'></div>

            </div>
        </div>
    );
}

export default EmptySideNav;