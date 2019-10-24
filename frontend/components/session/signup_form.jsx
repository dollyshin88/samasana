import React, { useState, useEffect } from 'react';
import ProfilePhoto from './profile_photo';
import Logo from '../shared/logo';


function SignupProfileForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);
    const addProfilePhoto = file => setProfilePhoto(file);
    
    useEffect(() => {
        return () => {
            props.clearSessionErrors();
        };
    }, []);

    // set store functions
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let formData = { name, email, password };
        if (profilePhoto) {
            formData['profile_photo'] = profilePhoto;
        }
        props.signup(formData)
            .then(() => props.history.push('/setup/team'));
    }

    function handleHomeRedirect(e) {
        props.history.push('/samasana');
    }

    function handleLoginBtn(e){
        props.openModal('login');
    }

    function renderErrors() {
        if (props.errors.length) {
            return ( props.errors.map((error, i) => (
                <div key={i} className='form__msg--red'>{error}</div>
            )))
        }
    }

    return (
        <div id='signup-form' className='page-container home-style'>
            <div onClick={handleHomeRedirect} className='btn logo-wrap-company-home'>
                <Logo />
            </div>
            <div className='ctnr-buff--fullpage'>
                <div className='signup-container'>
                    <div className='signup-container__header'>Set up your profile</div>
                    <ProfilePhoto addProfilePhoto={addProfilePhoto}/>
                    <div className='form-buff--signup'>
                    <form className='form' onSubmit={handleSubmit}>
                        {renderErrors()}
                        <div className='input-group'>
                            <label className="form__label" htmlFor="name">Name</label>
                            <input className="form__input" type="text" id="name" onChange={handleNameChange} value={name}/>
                        </div>
                        <div className='input-group'>
                            <label className="form__label" htmlFor="email">Email</label>
                            <input className="form__input" type="text" id="email" onChange={handleEmailChange} value={email}/>
                            
                        </div>
                        <div className='input-group'>
                            <label className="form__label" htmlFor="password">Password</label>
                            <input className="form__input" type="password" id="password" onChange={handlePasswordChange} value={password}/>
                            
                        </div>
                        <button id='signup-btn-cont' className="form__btn form__btn--blue" >Continue</button>
                        <div 
                            id='login-btn' 
                            className='hyperlink hyperlink--blue'
                            onClick={handleLoginBtn}
                        >Log in instead</div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupProfileForm;