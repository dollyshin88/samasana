import React from 'react';

function HomeMain(props) {
    
    function handleSignupBtn(e) {
        props.history.push('signup/profile');
    }

    return (
        <div className='home-container'>
            <div className='home-container__section'>
                <h2 className='home-container__section__header'>Make more time for the work that matters most</h2>
                <p className='home-container__section__blob-text'>Samasana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.</p>
                <div className='btn-buff-32'>
                    <div 
                        className='btn btn--purple'
                        onClick={handleSignupBtn}
                    >Try for free</div>
                </div>
                <div>video goes here</div>
            </div>
        </div>
    );

}

export default HomeMain;