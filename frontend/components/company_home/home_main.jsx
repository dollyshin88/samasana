import React from 'react';

class HomeMain extends React.Component{
    

    render(){
        return (
            <div className='home-container'>
                <div className='home-container__section'>
                    <h2 className='home-container__section__header'>Make more time for the work that matters most</h2>
                    <p className='home-container__section__blob-text'>Samasana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.</p>
                    <div className='btn btn--purple'>Try for free</div>
                    <div>video goes here</div>
                </div>
            </div>
        );
    }
}

export default HomeMain;