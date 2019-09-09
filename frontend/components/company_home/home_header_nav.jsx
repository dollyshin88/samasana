import React from 'react';

class HomeHeaderNav extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
    }
    
    handleLoginBtn(e){
        e.preventDefault();
        this.props.openModal('login');
    }

    render(){
        return (
            <div className='header'>
                <div className='home-header-nav'>
                    <div id='logo'>
                        <img src="/assets/samasana.svg" alt="samasana logo"/>
                        <p>samasana</p>
                    </div>
                    <div className='nav-btn-container'>
                        <button 
                            id='login-btn' 
                            className='btn nav-btn'
                            onClick={this.handleLoginBtn}
                        >Log In</button>

                        <button 
                            id='signup-btn' 
                            className='btn nav-btn accent-btn'
                        >Try for free</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeaderNav;