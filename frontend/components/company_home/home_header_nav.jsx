import React from 'react';
import Logo from '../shared/logo';

class HomeHeaderNav extends React.Component{
    constructor(props) {
        super(props);
        this.handleLoginBtn = this.handleLoginBtn.bind(this);
        this.handleSignupBtn = this.handleSignupBtn.bind(this);
        this.handleHomeRedirect = this.handleHomeRedirect.bind(this);
    }
    
    handleLoginBtn(e){
        this.props.openModal('login');
    }

    handleSignupBtn(e){
        this.props.history.push('signup/welcome');
    }

    handleHomeRedirect(e) {
        this.props.history.push('/samasana');
    }

    render(){
        return (
            <div className='header'>
                <div className='home-header-nav'>
                <div onClick={this.handleHomeRedirect} className='btn logo-wrap-company-home'>
                    <Logo />
                </div>
                    <div className='nav-btn-container'>
                        <div 
                            id='login-btn' 
                            className='nav__btn btn--link'
                            onClick={this.handleLoginBtn}
                        >Log In</div>

                        <div 
                            id='signup-btn' 
                            className='nav__btn btn--purple'
                            onClick={this.handleSignupBtn}
                        >Try for free</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeaderNav;