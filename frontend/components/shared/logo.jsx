import React from 'react';

function Logo(props) {
    return (
        <div id='logo'>
            <img src={window.logoURL} alt="samasana logo"/>
            <p>samasana</p>
        </div>
    );
}

export default Logo;