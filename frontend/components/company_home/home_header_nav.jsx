import React from 'react';
import Logo from '../shared/logo';

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
                    <Logo />
                    <div className='nav-btn-container'>
                        <div 
                            id='login-btn' 
                            className='nav__btn btn--link'
                            onClick={this.handleLoginBtn}
                        >Log In</div>

                        <div 
                            id='signup-btn' 
                            className='nav__btn btn--purple'
                        >Try for free</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeaderNav;