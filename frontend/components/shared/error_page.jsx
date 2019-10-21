import React from 'react';
import { withRouter } from 'react-router-dom';

function ErrorPage(props) {
    function handleRedirect(e) {
        props.history.push('/workspace');
    }
    return (
        <div className='error-page-container'>
            <div className='error-msg'>Oops! Something went wrong</div>
            <img className='error-img' src={window.womanPinkPointing} />
            <div className='btn btn--purple' onClick={handleRedirect}>Back to Samasana</div>
        </div>
    );
}

export default withRouter(ErrorPage);