import React from 'react';
import Logo from '../shared/logo';

function Footer(props) {

    return (
        <div className='footer-wrap'>
            <div className = 'footer-about-row'>
                <div className='logo-wrap-footer'>
                    <Logo />
                </div>
                <p className='pipe-divider'>|</p>
                <a className='text text-link' href='https://github.com/dollyshin88/samasana' target="_blank">About</a>
                <p className='pipe-divider'>|</p>
                <p className='text'>Connect</p>

                <a href='https://www.linkedin.com/in/dollyshin88/' target="_blank"><i class="fab fa-linkedin clickable"></i></a>
                <a href='https://github.com/dollyshin88' target="_blank"><i class="fab fa-github clickable"></i></a>
                <a href='https://angel.co/dollyshin88' target="_blank"><i class="fab fa-angellist clickable"></i></a>
                
            </div>
            <div className='footer-connect-links'>
                
            </div>
        </div>
    );
}

export default Footer;