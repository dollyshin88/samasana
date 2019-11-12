import React from 'react';
import Footer from './footer';

function HomeMain(props) {
    
    function handleSignupBtn(e) {
        props.history.push('signup/welcome');
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
            </div>

            <div className='home-visuals'>

                <div className='carousel'>
                    <div className='carousel__block'>
                        <div className='video-buff'>
                            <video className='main-video' src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/v4/Boards.mp4"></video>
                            <img className='video-buff__left-image' alt='books illustration' src='https://luna1.co/bbbf3e.png'/>
                            <img className='video-buff__right-image' alt='books illustration' src='https://luna1.co/48e23c.png'/>

                        </div>
                        <div className='carousel-content-wrap'>
                            <div className='carousel-content'>
                                <div className='carousel__block__header'>Get Organized</div>
                                <div className='carousel__block__text'>Plan and structure work in a way that’s best for you. Set priorities and deadlines. Share details and assign tasks. All in one place.</div>
                            </div>
                            <div className='carousel-content'>
                                <div className='carousel__block__header'>Stay on track</div>
                                <div className='carousel__block__text'>Follow projects and tasks through every stage. You know where work stands and can keep everyone aligned on goals.</div>
                            </div>
                            <div className='carousel-content'>
                                <div className='carousel__block__header'>Hit Deadlines</div>
                                <div className='carousel__block__text'>Create visual project plans to see how every step maps out over time. Pinpoint risks. Eliminate roadblocks. Even when plans change.</div>
                            </div>
                        </div>
                        
                    </div>

                    {/* <div className='carousel__block'>
                        
                        <div className='video-buff'>
                            <video className='main-video' src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/v4/Boards.mp4"></video>
                        </div>
                        
                    </div> */}
                </div>
            </div>

            <Footer />
        </div>
    );

}

export default HomeMain;