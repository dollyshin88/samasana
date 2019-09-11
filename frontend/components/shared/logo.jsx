import React from 'react';

function Logo(props) {
    return (
        <div className='logo'>
            <img className='logo__img' src={window.logoURL} alt="samasana logo"/>
            <p className='logo__text'>samasana</p>
        </div>
    );
}

export default Logo;